export interface Client {
  name: string;
  logoSrc: string;
}

// Ensure the logoSrc uses the correct relative path for Astro's Image component, 
// or an absolute path starting from public/ if moved there. 
// For src/assets, we can import them directly in the Astro component or use string paths.
export const clients: Client[] = [
  { name: "Meydan Hotels & Hospitality", logoSrc: "/src/assets/images/img_page4_35.png" },
  { name: "Abu Dhabi Airports", logoSrc: "/src/assets/images/img_page4_36.png" },
  { name: "Hilton Hotels & Resorts", logoSrc: "/src/assets/images/img_page4_37.png" },
  { name: "University of Sharjah", logoSrc: "/src/assets/images/img_page4_38.png" },
  { name: "Radisson Blu", logoSrc: "/src/assets/images/img_page4_39.png" },
  { name: "Sheraton", logoSrc: "/src/assets/images/img_page4_40.png" },
  { name: "Al Rawabi", logoSrc: "/src/assets/images/img_page4_42.png" },
  { name: "Shurooq", logoSrc: "/src/assets/images/img_page4_43.png" },
  { name: "Sharjah Municipality", logoSrc: "/src/assets/images/img_page4_44.png" },
  { name: "Trans Emirates Livestock Trading L.L.C.", logoSrc: "/src/assets/images/img_page4_45.png" },
  { name: "Al Qabdah", logoSrc: "/src/assets/images/img_page4_47.png" },
  { name: "Zayed University", logoSrc: "/src/assets/images/img_page4_49.png" },
  { name: "S'N'S Haute Couture Furniture", logoSrc: "/src/assets/images/img_page4_51.png" },
  { name: "Al Ain Zoo", logoSrc: "/src/assets/images/img_page4_52.png" },
  { name: "Philco Contracting L.L.", logoSrc: "/src/assets/images/img_page4_53.png" },
  { name: "National Engineering Bureau", logoSrc: "/src/assets/images/img_page4_54.png" }
];
