export interface Client {
  name: string;
  logoSrc: string;
  category?: string;
}

export const clients: Client[] = [
  { name: "Meydan Hotels & Hospitality", logoSrc: "/images/clients/meydan.png", category: "Hospitality & Leisure" },
  { name: "Sheraton Hotels & Resorts", logoSrc: "/images/clients/sheraton.png", category: "Hospitality" },
  { name: "Abu Dhabi Airports", logoSrc: "/images/clients/ad_airports.png", category: "Aviation & Infrastructure" },
  { name: "Shurooq (Sharjah Investment and Development)", logoSrc: "/images/clients/shurooq.png", category: "Government & Development" },
  { name: "Dubai World Central (DWC) Airport", logoSrc: "/images/clients/dwc_airport.png", category: "Aviation" },
  { name: "University of Sharjah", logoSrc: "/images/clients/uni_sharjah.png", category: "Education" },
  { name: "Hilton Hotels & Resorts", logoSrc: "/images/clients/hilton.png", category: "Hospitality" },
  { name: "Zayed University", logoSrc: "/images/clients/zayed_uni.png", category: "Education" },
  { name: "Gargash Enterprises", logoSrc: "/images/clients/gargash.png", category: "Automotive & Commercial" },
  { name: "Al Ain Zoo", logoSrc: "/images/clients/al_ain_zoo.png", category: "Public & Recreation" },
  { name: "Radisson Blu", logoSrc: "/images/clients/radisson_blu.png", category: "Hospitality" },
];
