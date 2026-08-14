import type { RegistrationForm } from "./types";

/**
 * Fire-and-forget relay of a completed registration to a Google Apps
 * Script Web App, which appends it as a row in the Mother's Union sheet.
 * Uses mode:"no-cors" because Apps Script doesn't send CORS headers — the
 * response is opaque, so this never resolves/rejects based on the actual
 * write outcome. That's fine: the app's own confirmation screen already
 * shows unconditionally, independent of this call.
 *
 * No-ops (does not throw) if NEXT_PUBLIC_SHEETS_WEBHOOK_URL isn't set,
 * so local dev and any deploy before the Sheet is wired up behave exactly
 * as they did before this existed.
 */
export function submitToSheet(
  form: RegistrationForm,
  amountUgx: number,
  status: "paid" | "pledged"
): void {
  const url = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;
  if (!url) return;

  const payload = {
    timestamp: new Date().toISOString(),
    name: form.name,
    phone: form.phone,
    cell: form.cell,
    people: form.people,
    amountUgx: amountUgx * form.people,
    status,
    reference: form.ref,
    payPhone: form.payPhone,
    paidDate: form.paidDate,
    pledgeDate: form.pledgeDate,
  };

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    // text/plain keeps this a CORS "simple request" — application/json
    // would trigger a preflight, which no-cors mode can't satisfy.
    // Apps Script reads the raw body as JSON regardless of this header.
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Best-effort relay — a network failure here should never affect the
    // visitor's experience, which is why this is fire-and-forget.
  });
}
