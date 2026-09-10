export interface Industry {
  id: string;
  title: string;
  description: string;
  applications: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    id: "education",
    title: "Education",
    description: "Creating sun-safe, thermally comfortable campuses for students and educators.",
    applications: ["School play areas", "Covered walkways", "Campus shade canopies", "Sports court covers"],
    icon: "academic"
  },
  {
    id: "public-spaces",
    title: "Public Spaces",
    description: "Durable civic infrastructure built for heavy public use in extreme climates.",
    applications: ["Municipal parks", "Recreation areas", "Civic structures", "Public transport hubs"],
    icon: "building"
  },
  {
    id: "hospitality",
    title: "Hospitality & Resorts",
    description: "Architectural elegance that enhances luxury guest comfort and outdoor dining.",
    applications: ["Hotel canopies", "Poolside cabanas", "Outdoor restaurant dining", "Entrance drop-off shades"],
    icon: "sparkles"
  },
  {
    id: "residential",
    title: "Residential & Villas",
    description: "Bespoke shade structures and pergolas designed to elevate luxury private homes.",
    applications: ["Private villa gardens", "Car ports", "Patio pergolas", "Swimming pool shades"],
    icon: "home"
  },
  {
    id: "aviation",
    title: "Aviation & Infrastructure",
    description: "Heavy-duty engineered canopies serving premier regional airport facilities.",
    applications: ["Airport car parking shades", "Terminal canopies", "Passenger boarding covers", "Cargo sheds"],
    icon: "plane"
  },
  {
    id: "industrial-events",
    title: "Industrial & Events",
    description: "Rapid deployment and permanent structural solutions for industry and large gatherings.",
    applications: ["Industrial sites & warehouses", "Exhibition marquees", "Event infrastructure", "Storage facilities"],
    icon: "factory"
  }
];
