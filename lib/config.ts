export const EVENT = {
  title: "End of Year Party 2026",
  theme: "Faithful Today, Fruitful Tomorrow",
  themeRef: "GALATIANS 6:9",
  organizer: "Rebecca Cell Girls",
  dateLabel: "Sunday, 22 November 2026",
  dateISO: "2026-11-22T08:00:00+03:00",
  location: "Lake Victoria Beach Cottages",
  mapsUrl: "https://maps.app.goo.gl/QQetXRJVy8PuCvJZ9",
  dressCode: "Dress Code: Shades of Green",
  contributionUgx: 40000,
  registrationOpen: true,
  feedbackOpenOverride: false,
  feedbackOpensAtISO: "2026-11-22T11:00:00+03:00",
  momoNumber: "0782 240 710",
  momoName: "Leah Tuhame",
  driveUrl: "https://drive.google.com/",
};

export const CONTACT = {
  whatsapp: "https://wa.me/256785025008",
  tel: "tel:+256785025008",
  phoneLabel: "+256 785 025008",
};

export type AgendaItem = {
  time: string;
  title: string;
  bullets: string[];
  host: string;
};

export const AGENDA: AgendaItem[] = [
  { time: "8:00 – 9:00 AM", title: "Arrival & Registration", bullets: [], host: "Rebecca Cell Girls" },
  { time: "9:00 – 10:00 AM", title: "Getting Started & Grounding", bullets: ["Opening prayer", "Catch-ups", "Breakfast"], host: "MC" },
  { time: "10:00 – 11:00 AM", title: "Prayer Session", bullets: ["Praise session", "Worship session", "Prayers"], host: "" },
  { time: "11:00 AM – 12:00 PM", title: "Keynote / Bible Exposition", bullets: ["Preaching"], host: "Chaplain" },
  { time: "12:00 – 12:20 PM", title: "Question & Answer Session", bullets: [], host: "" },
  { time: "12:20 – 2:00 PM", title: "Team Building Activities", bullets: [], host: "" },
  { time: "2:00 – 3:00 PM", title: "🍽️ Lunch", bullets: [], host: "" },
  { time: "3:00 – 4:30 PM", title: "Speeches, Gifts & Recognition", bullets: ["Mama Rebecca Cell", "Mama MU", "Chaplain", "Gifts & awarding of gifts"], host: "" },
  { time: "4:30 – 5:30 PM", title: "💃 Wrap-Up Dance & Vibe", bullets: [], host: "" },
];

export const ROLES: Record<string, string> = {
  "Gladys Rukundo": "Cell Mama",
  "Sandra T Jamugisa": "Vice Mama",
  "Julia Kushemererwa Singa": "Party Chairperson",
  "Leah Tuhame Buryo": "Treasurer",
  "Lillian Nuwagaba": "Chief Mobilizer",
};

export const PORTRAITS: Record<string, string> = {
  "Julia Kushemererwa Singa": "/images/portrait-julia.png",
  "Sarah K Kyobika": "/images/portrait-sarah-kyobika.png",
  "Joan K Wamukota": "/images/portrait-joan.png",
  "Betty Walakira": "/images/portrait-betty-walakira.png",
  "Mahoro Brenda Kafeero": "/images/portrait-brenda-kafeero.png",
  "Lydia Mirembe Kamukama": "/images/portrait-lydia.png",
  "Lovis A. Abaho": "/images/portrait-lovis.png",
  "Lonnet Arindwamuka": "/images/portrait-lonnet.png",
  "Sheba Musiimenta Tugume": "/images/portrait-sheba2.png",
  "Lillian Nuwagaba": "/images/portrait-lillian.png",
  "Prossy Gensi": "/images/portrait-prossy.png",
  "Sandra T Jamugisa": "/images/portrait-sandra.png",
  "Gladys Rukundo": "/images/portrait-gladys.png",
  "Joyce Ahimbisibwe Turinawe": "/images/portrait-joyce.png",
  "Leah Tuhame Buryo": "/images/portrait-leah-v2.png",
  "Miriam Apell": "/images/portrait-miriam.png",
  "Monica Arinaitwe": "/images/portrait-monica.png",
  "Nduhukire Irene Byamukama": "/images/portrait-nduhukire.png",
  "Brenda Atwijuka Mwebaza": "/images/portrait-mwebaza.png",
  "Susan A. Aijuka": "/images/portrait-susan.png",
  "Justine Turyahabwe": "/images/portrait-justine.png",
  "Irene Nagasha Akandinda": "/images/portrait-irene-nagasha.png",
  "Flavia Zalwango Mugoya": "/images/portrait-flavia-mugoya.png",
  "Winfred Naigaga Kibirige": "/images/portrait-winfred.png",
  "Sarah Byamukama": "/images/portrait-sarah-b.png",
  "Faith Atukunda Amanya": "/images/portrait-faith.png",
  "Lynnet Akabanjuna": "/images/portrait-lynnet.png",
  "Betty Kirenga": "/images/portrait-betty-kirenga.png",
  "Racheal K. Kanyesigye": "/images/portrait-racheal.png",
  "Grace Kigozi Kyomuhendo": "/images/portrait-grace.png",
  "Hildah Ninsiima Rukundo": "/images/portrait-hildah.png",
  "Leticia Iguma": "/images/portrait-leticia.png",
  "Mikhaila Mukasa Mwesigwa": "/images/portrait-mikhaila.png",
  "Olivia Nahwera Arinaitwe": "/images/portrait-olivia.png",
  "Viola A. Bampampamya": "/images/portrait-viola.png",
  "Gloria Donah Ainebyoona": "/images/portrait-donah.png",
  "Silvia Kavuma Aliu": "/images/portrait-silvia.png",
  "Tinah Mukunda": "/images/portrait-tinah.png",
};

export const ALL_MEMBERS: string[] = [
  "Sandra T Jamugisa", "Joan K Wamukota", "Lynnet Akabanjuna", "Lovis A. Abaho",
  "Susan A. Aijuka", "Racheal K. Kanyesigye", "Edinah Birungi Asiimwe", "Leah Tuhame Buryo",
  "Mikhaila Mukasa Mwesigwa", "Mahoro Brenda Kafeero", "Hildah Ninsiima Rukundo",
  "Sheba Musiimenta Tugume", "Nduhukire Irene Byamukama", "Gloria Donah Ainebyoona",
  "Faith Atukunda Amanya", "Lillian Nuwagaba", "Grace Kigozi Kyomuhendo", "Betty Walakira",
  "Gladys Rukundo", "Monica Arinaitwe", "Miriam Apell", "Olivia Nahwera Arinaitwe",
  "Tinah Mukunda", "Viola A. Bampampamya", "Prossy Gensi", "Julia Kushemererwa Singa",
  "Lydia Mirembe Kamukama", "Flavia Zalwango Mugoya", "Winfred Naigaga Kibirige",
  "Silvia Kavuma Aliu", "Leticia Iguma", "Sarah Byamukama", "Betty Kirenga",
  "Flavia Akanyijuka", "Brenda Atwijuka Mwebaza", "Joyce Ahimbisibwe Turinawe",
  "Justine Turyahabwe", "Lonnet Arindwamuka", "Irene Nagasha Akandinda", "Sarah K Kyobika",
];

export const GUEST_CELLS: string[] = [
  "Deborah Cell A",
  "Deborah Cell B",
  "Ziporah Cell A",
  "Ziporah Cell B",
  "Ziporah Cell C",
  "Miriam Cell",
  "Hannah Cell",
  "Sarah Cell",
  "Abigail Cell",
  "Esther Cell A",
  "Esther Cell B",
];

export const CELL_OPTIONS = ["Rebecca Cell", ...GUEST_CELLS, "Guest"] as const;

export type TeamMember = {
  name: string;
  role: string;
  roleColor: string;
  initials: string;
  photo: string;
};

export function getTeam(): TeamMember[] {
  const ordered = [
    ...Object.keys(ROLES),
    ...ALL_MEMBERS.filter((n) => !ROLES[n]).sort((a, b) => a.localeCompare(b)),
  ];
  return ordered.map((n) => ({
    name: n,
    role: ROLES[n] || "Member",
    roleColor: ROLES[n] ? "#B5169E" : "#8A90A6",
    initials: n
      .split(" ")
      .filter((w) => w.replace(/\W/g, "").length > 1)
      .slice(0, 2)
      .map((w) => w[0])
      .join(""),
    photo: PORTRAITS[n] || "",
  }));
}

export function ugx(n: number): string {
  return "UGX " + Number(n).toLocaleString("en-US");
}

export function prettyDate(d: string): string {
  if (!d) return "the date you chose";
  const p = d.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${Number(p[2])} ${months[Number(p[1]) - 1]} ${p[0]}`;
}
