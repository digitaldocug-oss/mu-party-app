export type Tab = "home" | "agenda" | "pay" | "pics" | "team" | "feedback";

export type PayStage = "idle" | "proof" | "pledgeForm" | "donePaid" | "donePledge";

export type Cell = "Rebecca Cell" | "Other Cell" | "Guest";

export type RegistrationForm = {
  name: string;
  phone: string;
  cell: Cell;
  people: number;
  ref: string;
  payPhone: string;
  paid: string;
  paidDate: string;
  pledgeDate: string;
};

export type TeamView = "hosts" | "guests";
