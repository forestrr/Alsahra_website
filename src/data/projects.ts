export interface Project {
  id: string;
  image: string;
  category: string;
  title: string;
  location?: string;
  details?: string;
}

export const projects: Project[] = [
  // Car Parking Shades
  {
    id: "cp-1",
    image: "/images/service_parking_1.png",
    category: "Car Parking Shades",
    title: "Double-Bay Cantilever Parking Shade",
    location: "Sharjah, UAE",
    details: "Commercial parking structure engineered with heavy-duty HDPE fabric for 98% UV blockage."
  },
  {
    id: "cp-2",
    image: "/images/service_parking_2.png",
    category: "Car Parking Shades",
    title: "Arch-Span Multi-Vehicle Canopy",
    location: "Abu Dhabi, UAE",
    details: "High-clearance arch design with powder-coated steel frame and integrated drainage."
  },
  {
    id: "cp-3",
    image: "/images/service_parking_3.png",
    category: "Car Parking Shades",
    title: "Corporate Headquarters Parking Shed",
    location: "Dubai, UAE",
    details: "Custom fabricated canopy system designed to protect executive fleet against desert heat."
  },
  {
    id: "cp-4",
    image: "/images/gallery_parking_wide.png",
    category: "Car Parking Shades",
    title: "Large-Scale Public Facility Parking",
    location: "Sharjah Al Dhaid, UAE",
    details: "Continuous multi-row tensile parking shade installation for municipal visitors."
  },
  {
    id: "cp-5",
    image: "/images/gallery_curved_shade.png",
    category: "Car Parking Shades",
    title: "Curved Aerodynamic Shade System",
    location: "Dubai South, UAE",
    details: "Wind-load optimized profile designed for high-exposure perimeter parking areas."
  },

  // Tensile Shades
  {
    id: "ts-1",
    image: "/images/service_tensile_1.png",
    category: "Tensile Shades",
    title: "Conical Architectural Tensile Canopy",
    location: "University Campus, UAE",
    details: "Sculptural tensile membrane engineered with international membrane technology."
  },
  {
    id: "ts-2",
    image: "/images/service_tensile_2.png",
    category: "Tensile Shades",
    title: "Walkway & Plaza Tensile Shade",
    location: "Public Park, Sharjah",
    details: "Continuous shaded pedestrian concourse providing year-round thermal comfort."
  },
  {
    id: "ts-3",
    image: "/images/service_tensile_3.png",
    category: "Tensile Shades",
    title: "High-Span Architectural Sail",
    location: "Hospitality Resort, UAE",
    details: "Premium PTFE coated membrane with marine-grade 316 stainless steel cable rigging."
  },
  {
    id: "ts-4",
    image: "/images/gallery_pool_shade.png",
    category: "Tensile Shades",
    title: "Resort Swimming Pool Shade Structure",
    location: "Luxury Hotel, Dubai",
    details: "Weather-resistant fabric canopy designed for poolside relaxation and UV filtration."
  },
  {
    id: "ts-5",
    image: "/images/gallery_tensile_overview_1.png",
    category: "Tensile Shades",
    title: "Sports Court & Arena Canopy",
    location: "Civic Complex, UAE",
    details: "Wide-span covered recreation venue with high ambient light diffusion."
  },

  // Recreation & Play Areas
  {
    id: "rec-1",
    image: "/images/service_recreation_1.png",
    category: "Recreation & Play",
    title: "School Play Area Sun Shade",
    location: "International School, UAE",
    details: "Safety-certified shade structures designed specifically for children play areas."
  },
  {
    id: "rec-2",
    image: "/images/service_recreation_2.png",
    category: "Recreation & Play",
    title: "Park Activity Center Shading",
    location: "Public Gardens, Sharjah",
    details: "High-density thermal barrier canopy covering interactive playground equipment."
  },
  {
    id: "rec-3",
    image: "/images/service_recreation_3.png",
    category: "Recreation & Play",
    title: "Community Park Shaded Pavilion",
    location: "Residential Complex, UAE",
    details: "Durable civic shade integrated into landscaped family recreation zone."
  },

  // Pergolas & Louvers
  {
    id: "per-1",
    image: "/images/service_pergola_1.png",
    category: "Pergolas & Louvers",
    title: "Modern Architectural Villa Pergola",
    location: "Private Villa, Dubai",
    details: "Powder-coated aluminium structure with adjustable shade louvers and ambient lighting."
  },
  {
    id: "per-2",
    image: "/images/service_pergola_2.png",
    category: "Pergolas & Louvers",
    title: "Hospitality Patio Louvered Canopy",
    location: "Boutique Hotel, UAE",
    details: "Weatherproof motorized louver system for flexible outdoor dining climate control."
  },
  {
    id: "per-3",
    image: "/images/service_pergola_3.png",
    category: "Pergolas & Louvers",
    title: "Custom Garden Pergola & Trellis",
    location: "Residential Villa, Sharjah",
    details: "Minimalist geometric pergola structure tailored to private landscape design."
  },

  // Customized Tents & Majlis
  {
    id: "tnt-1",
    image: "/images/service_tents_1.png",
    category: "Customized Tents",
    title: "Luxury Traditional Arabic Majlis Tent",
    location: "Sharjah, UAE",
    details: "Custom made-to-order majlis with insulated walls, Sadu fabrics, and HVAC integration."
  },
  {
    id: "tnt-2",
    image: "/images/service_tents_2.png",
    category: "Customized Tents",
    title: "High-Span Exhibition & Event Marquee",
    location: "Events Arena, UAE",
    details: "Heavy-duty aluminum clear-span frame tent for corporate gatherings and exhibitions."
  },
  {
    id: "tnt-3",
    image: "/images/service_tents_3.png",
    category: "Customized Tents",
    title: "Heavy-Duty Operational Shelter",
    location: "Industrial Site, UAE",
    details: "Engineered weather-resistant tent designed for rapid deployment and field operations."
  },

  // Steel Structures & Sheds
  {
    id: "stl-1",
    image: "/images/service_steel_shed_1.png",
    category: "Steel & Sheds",
    title: "Industrial Logistics Warehouse Structure",
    location: "Sharjah Al Dhaid, UAE",
    details: "Turnkey structural steel building with clear-span roof trusses and insulated envelope."
  },
  {
    id: "stl-2",
    image: "/images/service_steel_shed_2.png",
    category: "Steel & Sheds",
    title: "Commercial Storage & Distribution Shed",
    location: "Industrial Area, UAE",
    details: "Heavy-gauge steel columns, purlins, and sandwich panel siding fabricated in-house."
  },
  {
    id: "stl-3",
    image: "/images/service_steel_shed_3.png",
    category: "Steel & Sheds",
    title: "High-Clearance Agricultural Warehouse",
    location: "Agricultural Zone, UAE",
    details: "Engineered steel portal frame building designed for optimal airflow and equipment access."
  },

  // Steel Fabrication & Staircases
  {
    id: "stair-1",
    image: "/images/service_staircase_1.png",
    category: "Fabrication & Stairs",
    title: "Industrial Mezzanine & Safety Staircase",
    location: "Manufacturing Plant, UAE",
    details: "High load-bearing mezzanine steel platform with anti-slip grating and handrails."
  },
  {
    id: "stair-2",
    image: "/images/service_staircase_2.png",
    category: "Fabrication & Stairs",
    title: "Architectural Steel Spiral Access Stairs",
    location: "Commercial Complex, UAE",
    details: "Precision CNC cut steel stairs with durable industrial coating and clean connections."
  },
  {
    id: "stair-3",
    image: "/images/service_staircase_3.png",
    category: "Fabrication & Stairs",
    title: "Heavy Industrial Access Platform",
    location: "Warehouse Facility, UAE",
    details: "Custom-welded steel structural work crafted in our Sharjah Al Dhaid workshop."
  },

  // Trades & Panels
  {
    id: "trd-1",
    image: "/images/trade_flat_panel.png",
    category: "Trades & Panels",
    title: "Flat Partition Panel (PPGI & Aluminum)",
    location: "Stocked in Sharjah, UAE",
    details: "Durable insulated panel available in 50mm, 75mm, 100mm thickness up to 12,000mm length."
  },
  {
    id: "trd-2",
    image: "/images/trade_roof_panel.png",
    category: "Trades & Panels",
    title: "Insulated Sandwich Roof Panel",
    location: "Stocked in Sharjah, UAE",
    details: "Thermal-barrier roof panel for warehouses, villas, farmhouses, and open sheds."
  },
  {
    id: "trd-3",
    image: "/images/trade_single_skin.png",
    category: "Trades & Panels",
    title: "Single Skin Profile Sheet (35/200 & 45/250)",
    location: "Stocked in Sharjah, UAE",
    details: "Practical corrugated sheet solution for warehouse walls, roofs, and site hoarding."
  }
];
