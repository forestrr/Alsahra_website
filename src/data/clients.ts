export interface Client {
  name: string;
  logoSrc: string;
  category?: string;
}

export const clients: Client[] = [
  { name: "Meydan", logoSrc: "/images/clients/meydan.png", category: "Hospitality & Leisure" },
  { name: "Sheraton", logoSrc: "/images/clients/sheraton.svg", category: "Hotels & Resorts" },
  { name: "Abu Dhabi Airports", logoSrc: "/images/clients/ad_airports.svg", category: "Aviation & Infrastructure" },
  { name: "Shurooq", logoSrc: "/images/clients/shurooq.png", category: "Government & Development" },
  { name: "DWC Airport", logoSrc: "/images/clients/dwc_airport.svg", category: "Dubai Airports" },
  { name: "University of Sharjah", logoSrc: "/images/clients/uni_sharjah.png", category: "Higher Education" },
  { name: "Hilton", logoSrc: "/images/clients/hilton.svg", category: "Hotels & Resorts" },
  { name: "Zayed University", logoSrc: "/images/clients/zayed_uni.svg", category: "Higher Education" },
  { name: "Gargash Enterprise", logoSrc: "/images/clients/gargash.svg", category: "Corporate & Automotive" },
  { name: "Al Ain Zoo", logoSrc: "/images/clients/al_ain_zoo.png", category: "Public & Recreation" },
  { name: "Radisson Blu", logoSrc: "/images/clients/radisson_blu.svg", category: "Hotels & Resorts" },
];
