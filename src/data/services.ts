export interface ServiceItem {
  title: string;
  category: 'Shade & Tensile' | 'Tents & Structures' | 'Steel & Metal Works' | 'Trades & Materials';
  description: string;
  image: string;
  secondaryImages?: string[];
  specs?: string[];
  features?: string[];
}

export interface ServicePillar {
  title: string;
  tagline: string;
  items: string[];
}

export const servicePillars: ServicePillar[] = [
  {
    title: "Shade & Tensile",
    tagline: "High-performance architectural membrane solutions engineered for extreme desert climate and UV loads.",
    items: [
      "Car parking shades",
      "Tensile shade structures",
      "Swimming pool shades",
      "Sunshades & awnings",
      "Retractable pergolas",
      "Architectural conical & sail structures"
    ]
  },
  {
    title: "Tents & Structures",
    tagline: "Custom-built, durable temporary and permanent tent enclosures forged to project specifications.",
    items: [
      "Customized majlis & event tents",
      "Camping & military specification tents",
      "Large-span exhibition marquees",
      "Pergolas, gazebos & outdoor umbrellas",
      "Greenhouse & agricultural sheds",
      "Water tank protection sheds"
    ]
  },
  {
    title: "Steel & Metal Works",
    tagline: "Heavy-duty structural steelwork, precision fabrication, and architectural metal systems fabricated in-house.",
    items: [
      "Structural steel buildings & trusses",
      "Mezzanine floors & custom staircases",
      "Architectural cladding & entrance canopies",
      "Security fencing, gates & heavy ladders",
      "Commercial aluminium & architectural glass",
      "Storage warehouses & industrial sheds"
    ]
  }
];

export const featuredServices: ServiceItem[] = [
  {
    title: "Car Parking Shades",
    category: "Shade & Tensile",
    description: "High-quality shade structures engineered to protect vehicles from harsh UAE weather while enhancing the functionality and architectural appearance of commercial, municipal, and residential parking areas.",
    image: "/images/service_parking_1.png",
    secondaryImages: ["/images/service_parking_2.png", "/images/service_parking_3.png"],
    specs: ["Heavy Duty HDPE / PVC Fabric", "Engineered Steel Cantilever", "95%+ UV Blockage", "UAE Wind Load Certified"],
    features: ["Cantilever, arch, and pyramid designs", "Single, double, and multi-bay configurations", "Integrated drainage and solar lighting options"]
  },
  {
    title: "Tensile Shades",
    category: "Shade & Tensile",
    description: "Elegant tensile fabric structures combining sculptural architectural appeal with reliable sun and heat protection for large spans, public walkways, resort pools, and public plazas.",
    image: "/images/service_tensile_1.png",
    secondaryImages: ["/images/service_tensile_2.png", "/images/service_tensile_3.png"],
    specs: ["PVDF / PTFE / Premium HDPE", "High Tensile Cable Rigging", "Marine Grade Hardware", "Flame Retardant"],
    features: ["Bespoke aerodynamic membrane geometries", "German & French imported technical membranes", "Zero corrosion stainless steel rigging"]
  },
  {
    title: "Recreation & Kids Play Areas",
    category: "Shade & Tensile",
    description: "Safe and vibrant play area and recreation solutions designed to create thermally protected, comfortable environments for schools, municipal parks, and residential communities.",
    image: "/images/service_recreation_1.png",
    secondaryImages: ["/images/service_recreation_2.png", "/images/service_recreation_3.png"],
    specs: ["Maximum UV Protection", "Child-Safe Rounded Structural Detailing", "Vibrant Color Stability"],
    features: ["Complete shade canopies for playgrounds", "Safety surfacing and boundary protection", "Certified compliant with international safety codes"]
  },
  {
    title: "Pergolas & Louvered Structures",
    category: "Tents & Structures",
    description: "Stylish and functional outdoor structures designed to deliver adjustable shade, climate control, and architectural luxury for villas, boutique hotels, and restaurant outdoor dining areas.",
    image: "/images/service_pergola_1.png",
    secondaryImages: ["/images/service_pergola_2.png", "/images/service_pergola_3.png"],
    specs: ["Motorized or Manual Louvers", "Powder-Coated Extruded Aluminium", "Integrated Rain Channels"],
    features: ["Rotatable and retractable roof options", "Concealed downspouts and LED ambient lighting", "Weatherproof marine-grade finishes"]
  },
  {
    title: "Customized Tents & Majlis",
    category: "Tents & Structures",
    description: "Made-to-order tent solutions tailored to meet specific functional, operational, and aesthetic requirements — from traditional Arabic majlis to modern industrial and military shelters.",
    image: "/images/service_tents_1.png",
    secondaryImages: ["/images/service_tents_2.png", "/images/service_tents_3.png"],
    specs: ["Multi-layer Insulated Fabrics", "Fire-Retardant PVC / Canvas", "Custom Internal Lining"],
    features: ["Fully air-conditioned interior setups", "Traditional Arabic luxury Sadu interiors", "Rapid deployment modular frame systems"]
  },
  {
    title: "Steel Structures & Sheds",
    category: "Steel & Metal Works",
    description: "Robust structural steel buildings, industrial sheds, and warehouse solutions engineered and fabricated in-house for maximum strength, efficiency, and long-term durability.",
    image: "/images/service_steel_shed_1.png",
    secondaryImages: ["/images/service_steel_shed_2.png", "/images/service_steel_shed_3.png"],
    specs: ["High-Grade Structural Steel", "Custom Clear Span Trusses", "Anti-Corrosion Primer & Coating"],
    features: ["Turnkey design and local authority submission", "Fast fabrication in Sharjah Al Dhaid workshop", "Integrated overhead crane supports"]
  },
  {
    title: "Steel Fabrication & Staircases",
    category: "Steel & Metal Works",
    description: "Custom precision steel fabrication, mezzanine floor structures, and architectural staircases crafted with expert accuracy, durability, and a clean modern finish.",
    image: "/images/service_staircase_1.png",
    secondaryImages: ["/images/service_staircase_2.png", "/images/service_staircase_3.png"],
    specs: ["Heavy Load Capacities", "CNC Cut & Welded Connections", "Non-Slip Industrial Treads"],
    features: ["Space-maximizing mezzanine floor systems", "Spiral, straight, and cantilevered stair designs", "Safety compliant industrial railings & ladders"]
  },
  {
    title: "Fencing & Parking Solutions",
    category: "Steel & Metal Works",
    description: "Premium perimeter fencing, vehicle access-control barriers, and bollards designed to enhance security, define clear boundaries, and deliver a clean, professional finish.",
    image: "/images/service_fencing_1.png",
    secondaryImages: ["/images/service_fencing_2.png", "/images/service_fencing_3.png"],
    specs: ["Galvanized & Powder Coated", "Heavy Gauge Mesh & Pickets", "Impact-Resistant Bollards"],
    features: ["Chain link, corrugated, and ornamental boundary fences", "Automated and manual access gates", "High-impact security bollards"]
  }
];

export interface TradeProduct {
  name: string;
  material: string;
  image: string;
  description: string;
  thickness: string;
  dimensions: string;
  applications: string[];
}

export const tradeProducts: TradeProduct[] = [
  {
    name: "Flat Partition Panel",
    material: "PPGI & Aluminum",
    image: "/images/trade_flat_panel.png",
    description: "A durable insulated panel for office, warehouse, and villa partitions providing thermal efficiency, sound isolation, and a smooth clean finish.",
    thickness: "50mm, 75mm, and 100mm insulation thickness",
    dimensions: "Width: 1000mm | Lengths: up to 12,000mm",
    applications: ["Office partition walls", "Villa interior divisions", "Cleanrooms & cold rooms", "Factory utility enclosures"]
  },
  {
    name: "Roof Insulated Panel",
    material: "PPGI & Aluminum with Core Insulation",
    image: "/images/trade_roof_panel.png",
    description: "High-performance insulated roofing panel engineered to reduce extreme desert heat transfer and provide weather-tight protection for villas, warehouses, farmhouses, and open sheds.",
    thickness: "50mm, 75mm, and 100mm insulation thickness",
    dimensions: "Width: 1000mm | Lengths: up to 12,000mm",
    applications: ["Commercial warehouses", "Farmhouses & equestrian sheds", "Villa annexes", "Industrial open sheds"]
  },
  {
    name: "Single Skin Profile Sheet",
    material: "PPGI & Aluminum",
    image: "/images/trade_single_skin.png",
    description: "A practical, high-strength profiled metal sheet solution for roofing and wall cladding across warehouses, sheds, and temporary construction shelters.",
    thickness: "Available in Profile 35/200 and 45/250",
    dimensions: "Custom lengths fabricated to project requirements",
    applications: ["Industrial warehouse walls", "Roof cladding for steel sheds", "Perimeter boundary hoarding", "Agricultural storage facilities"]
  }
];
