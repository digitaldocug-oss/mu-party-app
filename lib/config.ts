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
  driveUrl: "https://drive.google.com/drive/folders/1zreZBr2b64zje_F1mdK_PiQshlaKlaaw",
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

export type CellInfo = {
  name: string;
  leader: string;
  phone: string;
  areas: string;
};

export const CELLS: CellInfo[] = [
  { name: "Deborah A", leader: "Jackline Kanyesigye Kyasiimire", phone: "0753710927", areas: "Namungoona, Nansana Areas, and Wakiso, Masanafu, Ssenge, Naluvule and Beyond" },
  { name: "Deborah B", leader: "Patience Kabahinda Namanya", phone: "0779105135", areas: "Nansana, Yesu Amala, Kabulenga, Wakiso, Senge, Naluvule, Baaka, Kavumba, Bukadda, & Beyond Hoima Rd" },
  { name: "Abigail Cell", leader: "Praise Muhumuza", phone: "0774194853", areas: "Makerere, Kasubi, Kubiri, Wandegeya, Nakulabye, Lugala" },
  { name: "Esther A", leader: "Edith Tumwiine", phone: "0781417086", areas: "Buwatte, Najjera, Buwate, Kira, Bulindo, Nsasa, and the neighboring areas" },
  { name: "Esther B", leader: "Grace Bamwagale", phone: "0702503209", areas: "Nalya, Kyaliwajala, Namugongo, Mbalwa, Nsode, Bukelele, Jogo Misindye and surrounding areas" },
  { name: "Sarah Cell", leader: "Agatha Buchana", phone: "0782691323", areas: "Entebbe Rd, Zanna, Sseguku, Namasuba, Makindye, and all areas on Entebbe road including airport" },
  { name: "Rebecca Cell", leader: "Gladys Rukundo", phone: "0772850594", areas: "Ntinda Bukoto, Naalya, Kulambiro, Kisasi and Kyanja" },
  { name: "Miriam Cell", leader: "Faithful Mugisha", phone: "0782880188", areas: "Kireeka, Banda, Bweyogerere, Mukono, Seeta" },
  { name: "Zipporah A", leader: "Sarah Kwesiga", phone: "0700200611", areas: "Kyebando, Kanyanya, Mpererwe, Kumbuzi, Kitetika, Komamboga, Luteete, Masoli, Magere, Wampewo, Kasangati and the neighboring areas" },
  { name: "Zipporah B", leader: "Hope Murungi", phone: "0772674690", areas: "Lusanja, Kiteezi, Kabaga, Kitagobwa, Jokolera, Kiti, Katadde and Buwambo" },
  { name: "Zipporah C", leader: "Eunice Nuwarimpa", phone: "0783041990", areas: "Gayaza, Kabanyolo, Busukuma, Namulonge, Manyagwa, Nakwero, Namayina, Ndazabazadde, Kabubu, and Beyond" },
  { name: "Hannah Cell", leader: "Ritah Mutesasira", phone: "0772829228", areas: "Kawempe, Ttura, Maganjo, Kagoma, and surrounding areas" },
  { name: "Leah Cell", leader: "Florence Muhwezi", phone: "0772925266", areas: "Luzira, Bugolobi, Mutungo, Kitintale, Nakawa, Kiswa" },
];

export const CELL_OPTIONS = [
  "Rebecca Cell",
  ...CELLS.filter((c) => c.name !== "Rebecca Cell").map((c) => c.name),
  "Guest",
] as const;

export function telHref(phone: string): string {
  const digits = phone.replace(/\s/g, "");
  return "tel:" + (digits.startsWith("0") ? "+256" + digits.slice(1) : digits);
}

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
