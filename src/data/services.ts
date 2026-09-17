export interface ServiceType {
  name: string;
  description: string;
  idealFor: string;
  features: string[];
}

export interface SpecCategory {
  category: string;
  details: { label: string; value: string }[];
}

export interface MaterialOption {
  name: string;
  type: string;
  benefits: string;
  lifespan: string;
  uvProtection?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: 'Shade & Tensile' | 'Tents & Structures' | 'Steel & Metal Works' | 'Trades & Materials';
  heroTagline: string;
  description: string;
  fullOverview: string[];
  image: string;
  secondaryImages: string[];
  quickMetrics: { label: string; value: string }[];
  types: ServiceType[];
  specifications: SpecCategory[];
  materials: MaterialOption[];
  features: string[];
  specs: string[];
}

export const featuredServices: ServiceItem[] = [
  {
    slug: "car-parking-shades",
    title: "Car Parking Shades",
    category: "Shade & Tensile",
    heroTagline: "Engineered cantilever and structural car parking shade systems built for extreme UAE heat and certified wind loads.",
    description: "High-quality shade structures engineered to protect vehicles from harsh UAE weather while enhancing the functionality and architectural appearance of commercial, municipal, and residential parking areas.",
    fullOverview: [
      "In the United Arab Emirates, extreme ambient temperatures and intense ultraviolet radiation can cause severe damage to vehicle paintwork, dashboards, and internal electronics. Al Sahra designs, engineers, and fabricates heavy-duty car parking shade structures that lower interior cabin temperatures by up to 25°C while blocking 95% to 98% of destructive UV rays.",
      "Every shade is forged and manufactured in our Sharjah Al Dhaid facility, utilizing high-grade structural steel and world-renowned architectural technical membranes (HDPE, PVC, and PVDF). All structural engineering calculations conform strictly to UAE Municipal standards and BS 6399 / ASCE 7 wind load regulations up to 160 km/h.",
      "From compact residential single-bay cantilever shades in Dubai and Sharjah to multi-hundred bay municipal, corporate, and airport parking complexes, our turnkey scope covers 3D structural analysis, civil footings, precision fabrication, and professional on-site erection."
    ],
    image: "/images/service_parking_1.png",
    secondaryImages: ["/images/service_parking_2.png", "/images/service_parking_3.png", "/images/gallery_parking_wide.png"],
    quickMetrics: [
      { label: "UV Radiation Block", value: "95% - 98%" },
      { label: "UAE Wind Certified", value: "Up to 160 km/h" },
      { label: "Structural Warranty", value: "10 - 15 Years" }
    ],
    types: [
      {
        name: "Cantilever Arch Shade",
        description: "Our most popular parking shade design. Features rear structural support columns with curved cantilever arms extending over vehicles, ensuring completely unobstructed vehicle maneuvering and zero door-dent risk.",
        idealFor: "Commercial business parks, municipal lots, VIP residential villas, and hospital parking.",
        features: ["Zero front-column obstruction", "Single or back-to-back double bay layouts", "Integrated rainwater drainage channels"]
      },
      {
        name: "Pyramid Top Parking Shade",
        description: "A classic, high-aesthetic architectural roof featuring four sloping fabric panels converging to a central apex. Provides excellent high-volume shade coverage with superior natural rainwater and dust shedding.",
        idealFor: "Corporate headquarters, school campus parking, shopping malls, and government departments.",
        features: ["Symmetrical structural tension", "Exceptional wind stability", "High aesthetic architectural presence"]
      },
      {
        name: "Conical & High-Peak Shade",
        description: "An iconic tensile membrane design utilizing a central floating or mast-supported cone. Blends sculptural elegance with high-tensile membrane engineering.",
        idealFor: "Luxury hotel entrances, VIP executive parking, resort forecourts, and signature private properties.",
        features: ["Distinctive sculptural profile", "High-frequency welded PVDF fabric", "High clearance for large SUVs and trucks"]
      },
      {
        name: "Curved / Wave Barrel Vault",
        description: "A continuous curved structural arch creating a streamlined, modern wave canopy over extensive parking rows. Highly cost-effective for multi-vehicle continuous bays.",
        idealFor: "Retail shopping centers, airport long-term parking, bus terminals, and automotive fleet yards.",
        features: ["Continuous modular expansion", "Heavy-gauge tubular steel arches", "Low maintenance aerodynamic profile"]
      },
      {
        name: "Bottom-Support Double Bay Shade",
        description: "Central dual-cantilever column system supporting two facing rows of vehicles from a single central foundation line, maximizing parking lot space efficiency.",
        idealFor: "Large public parking complexes, logistics depots, and municipal staff parking lots.",
        features: ["Maximizes vehicle capacity per square meter", "Single central footing line", "Heavy-duty structural I-beam posts"]
      },
      {
        name: "Wall-Mounted Cantilever Shade",
        description: "Anchored directly into reinforced concrete boundary walls or building structural beams without ground columns, preserving 100% of usable floor and driveway area.",
        idealFor: "Narrow villa driveways, tight commercial perimeter alleys, and townhouse compounds.",
        features: ["Zero ground column footprint", "Heavy chemical anchor stud mounting", "Custom projection lengths up to 6 meters"]
      }
    ],
    specifications: [
      {
        category: "Structural Steelwork",
        details: [
          { label: "Steel Material Grade", value: "EN 10025 S275JR / S355JR & ASTM A36" },
          { label: "Corrosion Protection", value: "Hot-Dip Galvanized to BS EN ISO 1461 (minimum 85 microns)" },
          { label: "Topcoat Finish", value: "Electrostatic Powder Coating / Two-Pack Polyurethane Paint in RAL Colors" },
          { label: "Welding Standard", value: "Certified 6G Welders in accordance with AWS D1.1 / BS EN 287" }
        ]
      },
      {
        category: "Architectural Membranes",
        details: [
          { label: "Fabric Types", value: "Heavy-Duty HDPE Knitted Mesh / PVC-PVDF Coated Polyester" },
          { label: "Fabric Weights", value: "HDPE: 340–380 GSM | PVC/PVDF: 850–1050 GSM" },
          { label: "Flame Retardancy", value: "DIN 4102 B1 / NFPA 701 / Class 1 UAE Civil Defense Compliant" },
          { label: "Temperature Resistance", value: "-30°C to +70°C without dimensional deformation" }
        ]
      },
      {
        category: "Civil & Rigging Hardware",
        details: [
          { label: "Foundation Footings", value: "Reinforced Concrete Isolated Pad Footings (Grade 40 Concrete)" },
          { label: "Anchor Studs", value: "Hilti / Fischer High-Tensile Chemical Anchor Studs (Grade 8.8)" },
          { label: "Tension Hardware", value: "Marine Grade 316 Stainless Steel Turnbuckles & D-Shackles" },
          { label: "Wind Load Design", value: "Engineered to withstand up to 160 km/h in line with UAE codes" }
        ]
      }
    ],
    materials: [
      {
        name: "Commercial 95 HDPE Knitted Mesh",
        type: "Breathable Knitted Polyethylene",
        benefits: "Allows hot rising air to escape freely through micro-pores while blocking up to 98% of harmful UV rays. Resists tearing, rot, and moisture.",
        lifespan: "10 to 12 Years Warranty",
        uvProtection: "95% - 98% UV Block"
      },
      {
        name: "Ferrari / Heytex PVDF Architectural PVC",
        type: "High-Tensile Polyester Membrane",
        benefits: "100% waterproof and dirt-repellent due to specialized PVDF fluoropolymer surface lacquer. Superior tensile strength and easy washdown.",
        lifespan: "15 to 20 Years Lifespan",
        uvProtection: "100% UV & Rain Block"
      },
      {
        name: "Hot-Dip Galvanized Structural Steel",
        type: "Heavy Carbon Steel Tube & I-Beam",
        benefits: "Immersion in molten zinc creates an impenetrable metallurgical barrier against desert humidity, salt spray, and atmospheric oxidation.",
        lifespan: "25+ Years Anti-Corrosion",
        uvProtection: "100% Weatherproof"
      }
    ],
    specs: ["Heavy Duty HDPE / PVC Fabric", "Engineered Steel Cantilever", "95%+ UV Blockage", "UAE Wind Load Certified"],
    features: ["Cantilever, arch, and pyramid designs", "Single, double, and multi-bay configurations", "Integrated drainage and solar lighting options"]
  },
  {
    slug: "tensile-shades",
    title: "Tensile Shades",
    category: "Shade & Tensile",
    heroTagline: "Bespoke architectural membrane structures combining sculptural geometries with certified structural durability.",
    description: "Elegant tensile fabric structures combining sculptural architectural appeal with reliable sun and heat protection for large spans, public walkways, resort pools, and public plazas.",
    fullOverview: [
      "Tensile membrane architecture represents the pinnacle of modern structural engineering — creating expansive, column-free shaded environments with minimal material weight and striking sculptural beauty. Al Sahra specializes in the custom form-finding, 3D pattern generation, fabrication, and installation of complex tensile structures across the UAE.",
      "Utilizing world-leading membrane materials including Serge Ferrari PVDF, Mehler Texnologies, and Saint-Gobain PTFE fiberglass, our shade structures deliver luminous natural daylighting without solar heat transmission. All edge cables, turnbuckles, and mast fittings are manufactured from Marine Grade 316 stainless steel to ensure lifetime corrosion immunity.",
      "Our tensile shade projects span municipal amphitheaters, pedestrian boulevard walkways, luxury resort swimming lagoons, and public park pavilions throughout Dubai, Sharjah, and Abu Dhabi."
    ],
    image: "/images/service_tensile_1.png",
    secondaryImages: ["/images/service_tensile_2.png", "/images/service_tensile_3.png", "/images/gallery_tensile_overview_1.png"],
    quickMetrics: [
      { label: "European Membranes", value: "PVDF & PTFE" },
      { label: "Marine Hardware", value: "Grade 316 SS" },
      { label: "Lifespan Rating", value: "20 - 30 Years" }
    ],
    types: [
      {
        name: "Hyperbolic Paraboloid (Hypar)",
        description: "A doubly-curved saddle geometry suspended between alternating high and low corner anchors. Provides extreme structural rigidity against wind turbulence while delivering iconic architectural silhouettes.",
        idealFor: "Resort swimming pools, public park plazas, outdoor dining terraces, and civic gathering spaces.",
        features: ["Dynamic aerodynamic saddle curvature", "Even tension distribution across membranes", "Extreme resistance to wind flutter"]
      },
      {
        name: "Architectural Conical Membrane",
        description: "Tensioned membrane rising up to single or multiple central structural rings. Emphasizes vertical grandeur while guiding rainwater efficiently down central internal or perimeter gutters.",
        idealFor: "Shopping mall courtyards, commercial plazas, hotel drop-offs, and waterfront promenades.",
        features: ["High ceiling clearance", "Dramatic night illumination canvas", "Central mast or suspended cable ring supports"]
      },
      {
        name: "Continuous Tensile Walkway Canopy",
        description: "Interconnected modular tensile spans engineered to shelter pedestrian paths, footbridges, and outdoor corridors between campus buildings.",
        idealFor: "University campuses, hospital grounds, transit stations, and retail promenades.",
        features: ["Uninterrupted linear shade protection", "Integrated LED perimeter strip lighting", "Custom curved or wave geometries"]
      },
      {
        name: "Multi-Wing Overlapping Sail Shades",
        description: "Multiple triangular or quadrilateral fabric sails tensioned at staggered angles and heights, creating playful light-and-shadow patterns with vibrant visual layering.",
        idealFor: "Private luxury villa gardens, rooftop lounges, boutique hotel terraces, and beach clubs.",
        features: ["Bespoke artistic design", "Layered color combination choices", "Minimalist stainless steel rigging posts"]
      }
    ],
    specifications: [
      {
        category: "Architectural Technical Membranes",
        details: [
          { label: "Membrane Types", value: "PVDF Coated High-Tenacity Polyester / PTFE Teflon Coated Glass Fiber" },
          { label: "Tensile Strength (Warp/Weft)", value: "5500 / 5000 N/5cm (Type II / Type III Architectural Grade)" },
          { label: "Solar Reflectance", value: "Up to 78% solar heat reflection away from shaded area" },
          { label: "Self-Cleaning Properties", value: "Titanium dioxide / PVDF lacquered slick surface washes clean with rain" }
        ]
      },
      {
        category: "Tension Rigging & Stainless Hardware",
        details: [
          { label: "Edge Cables", value: "1x19 & 7x19 Marine Grade 316 Stainless Steel Wire Ropes" },
          { label: "Tension Fittings", value: "Grade 316 SS Closed-Body Fork & Fork Rigging Screws" },
          { label: "Corner Membrane Plates", value: "Laser-cut 316 SS or Hot-Dip Galvanized Structural Steel Plates" },
          { label: "Safety Factor", value: "Minimum safety factor of 5:1 on all tension rigging components" }
        ]
      }
    ],
    materials: [
      {
        name: "Serge Ferrari Flexlight Composite",
        type: "PVDF Coated Polyester (900-1050 GSM)",
        benefits: "Patented Précontraint technology guarantees exceptional dimensional stability, preventing sagging or retensioning over time.",
        lifespan: "15 to 20 Years",
        uvProtection: "100% UV Filtering"
      },
      {
        name: "PTFE Architectural Glass Fiber",
        type: "Teflon-Coated Woven Fiberglass",
        benefits: "Completely immune to UV degradation, biological growth, and extreme atmospheric pollutants. Non-combustible Class A rating.",
        lifespan: "30+ Years Lifespan",
        uvProtection: "Permanent UV Immunity"
      },
      {
        name: "Grade 316 Stainless Steel Hardware",
        type: "Austenitic Marine Stainless Alloy",
        benefits: "Zero oxidation in high-humidity Arabian Gulf coastal areas. Retains polished architectural finish indefinitely.",
        lifespan: "30+ Years",
        uvProtection: "100% Weatherproof"
      }
    ],
    specs: ["PVDF / PTFE / Premium HDPE", "High Tensile Cable Rigging", "Marine Grade Hardware", "Flame Retardant"],
    features: ["Bespoke aerodynamic membrane geometries", "German & French imported technical membranes", "Zero corrosion stainless steel rigging"]
  },
  {
    slug: "recreation-kids-play-areas",
    title: "Recreation & Kids Play Areas",
    category: "Shade & Tensile",
    heroTagline: "Child-safe, high-UV shade canopies and safety surfacing for school playgrounds, parks, and sports facilities.",
    description: "Safe and vibrant play area and recreation solutions designed to create thermally protected, comfortable environments for schools, municipal parks, and residential communities.",
    fullOverview: [
      "In the UAE's high-temperature climate, playground equipment made of metal and plastic can quickly reach scorching surface temperatures exceeding 75°C, making outdoor play impossible and dangerous. Al Sahra's recreation shading systems provide comprehensive thermal cooling and up to 98% UV blockage, keeping playground equipment cool and safe for children year-round.",
      "Engineered with strict child-safety compliance, all our structural columns feature soft-radius tubular steel, impact-absorbent lower padding, concealed flush bolt connections, and tamper-resistant rigging out of reach of children.",
      "We design custom playground canopies for leading international schools, early learning nurseries, municipal community parks, and residential master-planned developments throughout Sharjah, Dubai, and Abu Dhabi."
    ],
    image: "/images/service_recreation_1.png",
    secondaryImages: ["/images/service_recreation_2.png", "/images/service_recreation_3.png", "/images/gallery_pool_shade.png"],
    quickMetrics: [
      { label: "Child UV Protection", value: "98%+ UV Shield" },
      { label: "Surface Temperature Drop", value: "Up to -25°C" },
      { label: "Safety Detailing", value: "Flush Soft Edges" }
    ],
    types: [
      {
        name: "School Playground Dome & Umbrella",
        description: "Full-coverage octagonal or hexagonal high-rise canopies designed to shelter jungle gyms, swings, and climbing sets with zero interior obstruction.",
        idealFor: "International private schools, government schools, community nurseries, and daycare centers.",
        features: ["High clearance for tall swing sets", "Anti-tear HDPE knitted mesh", "Vibrant multi-color sail combinations"]
      },
      {
        name: "Swimming Pool & Splash Pad Canopy",
        description: "Engineered shade structures over kids splash pads, resort lap pools, and swim training facilities that prevent severe sunburn while maintaining ambient air ventilation.",
        idealFor: "Hotel resort pools, residential community clubhouses, and sports academy swimming complexes.",
        features: ["Chlorine and moisture resistant coatings", "Anti-glare fabric weave", "High-angle sun trajectory tracking"]
      },
      {
        name: "Sports Court Enclosure Shade",
        description: "High-clearance tensile shade canopies engineered over outdoor Padel tennis, basketball, volleyball, and multi-purpose sports courts.",
        idealFor: "Sports academies, residential gated communities, and public municipal recreation grounds.",
        features: ["High vertical clearance (minimum 7m)", "Integrated floodlight mounting brackets", "Reduced glare for optimal player visibility"]
      },
      {
        name: "Park Seating & Sandpit Pavilions",
        description: "Compact, shade-dense gazebo and conical structures positioned over children's sandpits, picnic tables, and parent spectator benches.",
        idealFor: "Public municipal parks, residential green belts, and zoo/theme park recreation corridors.",
        features: ["Compact structural footprints", "Vandal-resistant fasteners", "Low thermal retention"]
      }
    ],
    specifications: [
      {
        category: "Safety & Child Protection",
        details: [
          { label: "Post Protection", value: "Optional 50mm High-Density Foam Impact Padding with Heavy Vinyl Wrap" },
          { label: "Structural Profile", value: "Tubular Circular Hollow Sections (CHS) with zero sharp exterior corners" },
          { label: "Hardware Enclosure", value: "Recessed flush bolt heads with tamper-proof protective caps" },
          { label: "Minimum Clearance", value: "Engineered with minimum 3.0m ground clearance over play equipment" }
        ]
      },
      {
        category: "Fabric Thermal Performance",
        details: [
          { label: "UV Transmission", value: "Less than 2% UV radiation transmission (UPF 50+ rating)" },
          { label: "Air Permeability", value: "Micro-perforated weave prevents hot air entrapment underneath" },
          { label: "Non-Toxic Guarantee", value: "Lead-free, phthalate-free, non-toxic commercial polymers" }
        ]
      }
    ],
    materials: [
      {
        name: "Monofilament HDPE Commercial Shade Cloth",
        type: "High-Density Polyethylene Mesh",
        benefits: "Engineered specifically for extreme sun, locking in vibrant primary colors (blues, greens, yellows, reds) without bleaching.",
        lifespan: "10-Year UV Guarantee",
        uvProtection: "Up to 98% UV Block"
      },
      {
        name: "Thermally Applied Powder Coat",
        type: "Non-Toxic Architectural Polyester",
        benefits: "Smooth, scratch-resistant surface with zero peeling or chipping. Available in friendly, colorful shades.",
        lifespan: "15+ Years",
        uvProtection: "UV Stable Coating"
      }
    ],
    specs: ["Maximum UV Protection", "Child-Safe Rounded Structural Detailing", "Vibrant Color Stability"],
    features: ["Complete shade canopies for playgrounds", "Safety surfacing and boundary protection", "Certified compliant with international safety codes"]
  },
  {
    slug: "pergolas-louvered-structures",
    title: "Pergolas & Louvered Structures",
    category: "Tents & Structures",
    heroTagline: "Automated motorized bioclimatic louvered pergolas and luxury architectural shade systems for UAE residences and hospitality.",
    description: "Stylish and functional outdoor structures designed to deliver adjustable shade, climate control, and architectural luxury for villas, boutique hotels, and restaurant outdoor dining areas.",
    fullOverview: [
      "Al Sahra's custom pergolas and bioclimatic louvered systems bridge the gap between indoor luxury and outdoor comfort. Designed to withstand the UAE's demanding coastal climate, our structures provide intelligent solar management, variable ventilation, and complete waterproof rain protection at the press of a button.",
      "Engineered from marine-grade extruded aluminium alloy (6063-T6) and premium Wood-Plastic Composites (WPC), our pergolas feature automated motorized rotating louvers that adjust from 0° (fully sealed and watertight) to 135° (optimizing sunlight and natural airflow).",
      "Each pergola is crafted to precise site dimensions in our Sharjah facility, complete with integrated perimeter LED strip illumination, concealed internal rain downspouts, and optional motorized side drop screens."
    ],
    image: "/images/service_pergola_1.png",
    secondaryImages: ["/images/service_pergola_2.png", "/images/service_pergola_3.png", "/images/gallery_curved_shade.png"],
    quickMetrics: [
      { label: "Louver Adjustment", value: "0° to 135° Motorized" },
      { label: "Aluminium Grade", value: "6063-T6 Extruded" },
      { label: "Weather Sealing", value: "100% Watertight Closed" }
    ],
    types: [
      {
        name: "Bioclimatic Motorized Louvered Pergola",
        description: "Automated rotating aluminium louvers controlled via handheld remote, smartphone app, or weather sensors. Louvers rotate smoothly to follow the sun or close tightly to form a 100% waterproof ceiling.",
        idealFor: "Luxury private villa patios, penthouse terraces, five-star hotel pool bars, and restaurant outdoor dining.",
        features: ["Quiet European tubular motor drive", "Integrated concealed gutter drainage", "Wind and rain sensor automated closure"]
      },
      {
        name: "Architectural WPC Composite Pergola",
        description: "Combines the warm, natural appearance of exotic hardwood timber with the extreme durability and zero-maintenance benefits of polymer composite. Immune to rotting, warping, fading, or desert termites.",
        idealFor: "Modern villa gardens, poolside cabanas, courtyard walkways, and rooftop gardens.",
        features: ["Rich wood grain finishes (Teak, Walnut, Charcoal)", "Zero staining or painting required", "Internal steel reinforcement cores"]
      },
      {
        name: "Heavy-Duty Fixed Modern Aluminium Pergola",
        description: "Minimalist, sleek fixed-beam aluminium pergola providing architectural shade lines and contemporary structural framing for outdoor seating areas.",
        idealFor: "Commercial office courtyards, residential developments, and boutique retail storefronts.",
        features: ["Clean sharp architectural lines", "Qualicoat Class 2 powder coating", "Concealed structural bracket connections"]
      },
      {
        name: "Cantilever Louver Pavilion",
        description: "Single-sided dual post support system that projects open overhead louvered roofing directly over pool edges, hot tubs, or lounge decks without edge post interference.",
        idealFor: "Infinity pool edges, sunbed lounges, and tight garden terraces.",
        features: ["Clear cantilever reach up to 4.5m", "Heavy reinforced base plates", "Integrated low-voltage ambient LED lighting"]
      }
    ],
    specifications: [
      {
        category: "Structural Extrusions",
        details: [
          { label: "Aluminium Alloy", value: "High-Tensile Extruded Aluminium 6063-T6" },
          { label: "Profile Wall Thickness", value: "Columns: 3.0mm–4.0mm | Louver Blades: 2.2mm–2.8mm" },
          { label: "Powder Coating", value: "Qualicoat Class 2 Architectural Powder Coating (60-80 microns)" },
          { label: "Sealing System", value: "Continuous EPDM co-extruded waterproof rubber gaskets on louver edges" }
        ]
      },
      {
        category: "Motorization & Electronics",
        details: [
          { label: "Drive Motor", value: "IP67 Rated 24V DC Linear Actuator / Somfy Motor" },
          { label: "Control Interface", value: "Multi-channel RF Remote, Wall Switch, and Smart Home Automation" },
          { label: "Lighting Integration", value: "Dimmable 3000K warm white LED strips recessed into perimeter beams" },
          { label: "Sensor Pack", value: "Automated rain sensor closes louvers on first drop detection" }
        ]
      }
    ],
    materials: [
      {
        name: "Architectural Aluminium 6063-T6",
        type: "Structural Aircraft-Grade Aluminium",
        benefits: "Lightweight, ultra-strong, and 100% rustproof. Retains perfect geometric straightness in intense UAE sun.",
        lifespan: "25+ Years",
        uvProtection: "Impervious to Sun"
      },
      {
        name: "Wood-Plastic Composite (WPC)",
        type: "Recycled Wood & Polymer Blend",
        benefits: "Delivers natural luxury timber warmth without wood's vulnerability to extreme UAE drying, splintering, and termites.",
        lifespan: "15 to 20 Years",
        uvProtection: "UV Stabilized"
      }
    ],
    specs: ["Motorized or Manual Louvers", "Powder-Coated Extruded Aluminium", "Integrated Rain Channels"],
    features: ["Rotatable and retractable roof options", "Concealed downspouts and LED ambient lighting", "Weatherproof marine-grade finishes"]
  },
  {
    slug: "customized-tents-majlis",
    title: "Customized Tents & Majlis",
    category: "Tents & Structures",
    heroTagline: "Handcrafted Arabic majlis tents, luxury desert resort suites, and rapid-deployment modular event marquees.",
    description: "Made-to-order tent solutions tailored to meet specific functional, operational, and aesthetic requirements — from traditional Arabic majlis to modern industrial and military shelters.",
    fullOverview: [
      "In Emirati heritage and hospitality, the traditional Majlis tent represents a timeless space for gathering, celebration, and VIP reception. Al Sahra combines authentic craftsmanship with advanced modern building science, creating custom majlis tents that feature opulent traditional interiors enclosed within heavy-duty, climate-controlled, weatherproof outer shells.",
      "Beyond traditional majlis structures, our manufacturing facility engineers large-scale clear-span event marquees, luxury desert glamping resort suites, military specification shelters, and emergency response structures.",
      "Every tent is built to order in our Sharjah Al Dhaid workshop with multi-layered insulation (German Rockwool and thermal vapor barriers), full integration for high-capacity air conditioning, electrical conduits, luxury chandeliers, and double-glazed aluminum doors and windows."
    ],
    image: "/images/service_tents_1.png",
    secondaryImages: ["/images/service_tents_2.png", "/images/service_tents_3.png", "/images/gallery_tent_overview_2.png"],
    quickMetrics: [
      { label: "Insulation Core", value: "Thermal Multi-Layer" },
      { label: "Interior Styling", value: "Authentic Luxury Sadu" },
      { label: "Air Conditioning", value: "100% Climate Sealed" }
    ],
    types: [
      {
        name: "Royal Arabic Majlis Tent",
        description: "Bespoke permanent and semi-permanent majlis structures featuring ornate hand-stitched traditional Sadu interior fabric linings, hidden high-capacity HVAC ducting, and customized lighting fixtures.",
        idealFor: "Private Emirati family villas, royal palaces, desert retreat estates, and VIP guest reception pavilions.",
        features: ["Custom embroidered interior fabrics", "Multi-layer thermal and acoustic insulation", "Double-glazed tempered glass entrance doors"]
      },
      {
        name: "Clear-Span Aluminium Event Marquee",
        description: "Engineered modular marquee system with unobstructed interior spans from 10m up to 40m wide. Fast to erect, dismantle, or reconfigure without internal center poles.",
        idealFor: "Exhibitions, corporate product launches, royal wedding celebrations, and national day festivities.",
        features: ["Zero internal support columns", "Heavy-gauge extruded aluminium box beams", "Hard walling and glass facade options"]
      },
      {
        name: "Desert Glamping & Eco-Resort Suite",
        description: "High-luxury tented villas designed for remote desert hospitality. Features architectural canvas roofs, insulated walls, ensuite bathroom divisions, and panoramic viewing decks.",
        idealFor: "Luxury desert safari resorts, eco-tourism projects, and private wildlife reserve sanctuaries.",
        features: ["Authentic desert aesthetic", "High wind and dust storm sealing", "Integrated plumbing and electrical chases"]
      },
      {
        name: "Industrial & Emergency Storage Shelters",
        description: "Rapid-deployment heavy-duty modular shelters designed for urgent storage, temporary logistics depots, and disaster relief facilities.",
        idealFor: "Construction contractors, logistics operators, port authorities, and humanitarian agencies.",
        features: ["Rapid crane or manual modular assembly", "Heavy flame-retardant PVC fabric", "Robust steel anchors for any soil condition"]
      }
    ],
    specifications: [
      {
        category: "Wall & Roof Envelope",
        details: [
          { label: "Outer Membrane", value: "Heavy PVC Coated Fabric (850 GSM) or High-Density Treated Canvas" },
          { label: "Thermal Insulation", value: "50mm–100mm Glasswool / Rockwool Thermal Insulation Core (Density 48 kg/m³)" },
          { label: "Interior Lining", value: "Traditional Arabic Sadu Pattern Fabric / Velvet / Fire-Retardant Polyester" },
          { label: "Flame Retardancy", value: "Certified to DIN 4102 B1 and UAE Civil Defense Safety Standards" }
        ]
      },
      {
        category: "Structural Framework",
        details: [
          { label: "Frame Material", value: "High-Strength Extruded Aluminium Alloy 6061/T6 or Galvanized Structural Steel" },
          { label: "Wind Rating", value: "Calculated to withstand wind speeds up to 140 km/h" },
          { label: "Doors & Windows", value: "Thermal-break aluminium frames with 6mm+6mm double-glazed tempered glass" }
        ]
      }
    ],
    materials: [
      {
        name: "German Heavy-Duty PVC 850 GSM",
        type: "Coated Polyester Membrane",
        benefits: "100% waterproof, flame retardant, UV stabilized, and mildew resistant. Repels desert sand and intense solar heat.",
        lifespan: "12 to 15 Years",
        uvProtection: "100% UV Block"
      },
      {
        name: "High-Density Rockwool Insulation",
        type: "Mineral Fiber Thermal Blanket",
        benefits: "Prevents exterior desert heat from penetrating inside, keeping interiors ice-cold with standard residential AC units.",
        lifespan: "25+ Years",
        uvProtection: "Thermal Barrier"
      }
    ],
    specs: ["Multi-layer Insulated Fabrics", "Fire-Retardant PVC / Canvas", "Custom Internal Lining"],
    features: ["Fully air-conditioned interior setups", "Traditional Arabic luxury Sadu interiors", "Rapid deployment modular frame systems"]
  },
  {
    slug: "steel-structures-sheds",
    title: "Steel Structures & Sheds",
    category: "Steel & Metal Works",
    heroTagline: "Heavy-duty structural steel industrial buildings, logistics warehouses, and agricultural sheds fabricated in Sharjah.",
    description: "Robust structural steel buildings, industrial sheds, and warehouse solutions engineered and fabricated in-house for maximum strength, efficiency, and long-term durability.",
    fullOverview: [
      "Industrial manufacturing, logistics, and heavy storage in the UAE require structural steel solutions that combine wide clear spans with uncompromising structural integrity. Al Sahra provides full turnkey engineering, fabrication, and erection of portal frame warehouses, industrial workshops, and specialized open storage sheds.",
      "Fabricated at our specialized Sharjah Al Dhaid steel yard, every steel truss, column, and rafter is cut with CNC plasma precision, welded by certified structural welders, and treated with marine-grade anti-corrosive protective paint systems or hot-dip galvanization.",
      "We handle complete project execution — from structural engineering calculations and local municipality authority submissions to anchor bolt setting, frame erection, and insulated sandwich panel roofing."
    ],
    image: "/images/service_steel_shed_1.png",
    secondaryImages: ["/images/service_steel_shed_2.png", "/images/service_steel_shed_3.png", "/images/inhouse_factory.png"],
    quickMetrics: [
      { label: "Clear Span Reach", value: "Up to 45m" },
      { label: "Steel Material Grade", value: "S275 & S355" },
      { label: "Authority Approval", value: "UAE Civil Defense" }
    ],
    types: [
      {
        name: "Clear-Span Portal Frame Warehouse",
        description: "Engineered solid-web I-beam portal frames delivering massive unobstructed floor areas without internal center columns, ideal for pallet racking and forklift operations.",
        idealFor: "Logistics distribution centers, cold storage warehouses, and large-scale manufacturing plants.",
        features: ["Clear interior spans up to 45 meters", "Integrated runway beams for 5–20 ton overhead cranes", "PIR insulated sandwich panel wall and roof cladding"]
      },
      {
        name: "Curved Lattice Truss Shed",
        description: "High-strength triangulated tubular and angle iron lattice trusses engineered for long open-span storage and workshops with reduced total steel weight.",
        idealFor: "Automotive service workshops, boat and marine storage yards, and equipment repair depots.",
        features: ["Economical long span efficiency", "Excellent natural roof ventilation geometry", "High ceiling clearances"]
      },
      {
        name: "Agricultural & Farm Livestock Shed",
        description: "Designed specifically for UAE agricultural farms, equestrian stables, and camel breeding estates with elevated roof ventilation ridges for passive cooling.",
        idealFor: "Farms in Al Dhaid, Al Ain, Abu Dhabi, and Liwa; equestrian stables and camel shelters.",
        features: ["Open ventilated side bays", "Heavy corrosion-resistant galvanizing", "Integrated water tank and feeder shading"]
      },
      {
        name: "Heavy Equipment Storage Canopy",
        description: "Open-sided high-roof structural steel sheds designed to shield bulldozers, cranes, commercial trucks, and raw material stockpiles from direct sun and dust.",
        idealFor: "Construction contractor equipment yards, batching plants, and heavy machinery depots.",
        features: ["High vertical clearance up to 10 meters", "Reinforced crash bollards at column bases", "High wind load perimeter anchorage"]
      }
    ],
    specifications: [
      {
        category: "Structural Steel Engineering",
        details: [
          { label: "Primary Frame Steel", value: "Universal Beams (UB), Columns (UC), and Welded Plate Girders (S275JR / S355JR)" },
          { label: "Secondary Framing", value: "Cold-Formed Galvanized Z & C Purlins and Side Rails (Grade 450)" },
          { label: "Connection Fasteners", value: "High-Strength Structural Bolts Grade 8.8 and 10.9 (Hot-Dip Galvanized)" },
          { label: "Design Codes", value: "AISC 360 / BS 5950 / Dubai & Sharjah Municipality Building Regulations" }
        ]
      },
      {
        category: "Surface Preparation & Coatings",
        details: [
          { label: "Blast Cleaning", value: "Abrasive blast cleaning to ISO 8501-1 Sa 2.5 near-white metal standard" },
          { label: "Primer System", value: "Two-pack Zinc Phosphate Epoxy Primer (minimum 75 microns dry film thickness)" },
          { label: "Finish Coat", value: "High-build Polyurethane Topcoat or Hot-Dip Galvanized to ISO 1461" }
        ]
      }
    ],
    materials: [
      {
        name: "Structural Steel S355JR",
        type: "High-Yield Structural Carbon Steel",
        benefits: "Exceptional yield strength (355 MPa) allows wider clear spans with reduced structural steel tonnage and cost.",
        lifespan: "30+ Years",
        uvProtection: "Heavy Corrosion Coating"
      },
      {
        name: "Insulated Polyurethane Sandwich Panels",
        type: "Pre-Painted Steel with PIR Core",
        benefits: "Thermal conductivity as low as 0.022 W/mK, slashing indoor AC cooling loads in intense UAE summers.",
        lifespan: "25+ Years",
        uvProtection: "Class A Fire Rated"
      }
    ],
    specs: ["High-Grade Structural Steel", "Custom Clear Span Trusses", "Anti-Corrosion Primer & Coating"],
    features: ["Turnkey design and local authority submission", "Fast fabrication in Sharjah Al Dhaid workshop", "Integrated overhead crane supports"]
  },
  {
    slug: "steel-fabrication-staircases",
    title: "Steel Fabrication & Staircases",
    category: "Steel & Metal Works",
    heroTagline: "Precision custom metalwork, industrial mezzanine floors, and architectural spiral and floating staircases.",
    description: "Custom precision steel fabrication, mezzanine floor structures, and architectural staircases crafted with expert accuracy, durability, and a clean modern finish.",
    fullOverview: [
      "Beyond broad building frames, modern facilities require specialized structural steel fabrication to maximize usable square footage, streamline interior operations, and provide architectural vertical circulation. Al Sahra's skilled fabricators in Sharjah produce heavy-duty mezzanine floor systems, industrial platforms, and custom architectural staircases.",
      "Our mezzanine floor platforms effectively double usable interior floor area inside commercial warehouses, showrooms, and factories without costly civil building expansions. All mezzanines are engineered for heavy live loads from 500 kg/m² up to 1500 kg/m² for palletized stock storage and office partitions.",
      "Our architectural metal division creates striking spiral staircases, mono-stringer floating stairs, and compliant external fire escape egress stairs complete with stainless steel and glass balustrades."
    ],
    image: "/images/service_staircase_1.png",
    secondaryImages: ["/images/service_staircase_2.png", "/images/service_staircase_3.png", "/images/trade_flat_panel.png"],
    quickMetrics: [
      { label: "Mezzanine Capacity", value: "500–1500 kg/m²" },
      { label: "Fabrication Accuracy", value: "CNC Plasma Cut" },
      { label: "Welding Quality", value: "AWS D1.1 Certified" }
    ],
    types: [
      {
        name: "Industrial Warehouse Mezzanine Floor",
        description: "Heavy-duty structural steel intermediate floors erected inside existing warehouses to create second-floor office suites, assembly areas, or spare parts storage racks.",
        idealFor: "Logistics facilities, commercial showrooms, retail back-of-house, and industrial plants.",
        features: ["Heavy load capacities up to 1,500 kg/m²", "Pallet safety gate access points", "Integrated steel staircase and boundary handrails"]
      },
      {
        name: "Architectural Spiral & Curved Staircase",
        description: "Sculptural central steel spiral staircases crafted with precision curved stringers, floating oak or steel checkered steps, and curved glass balustrades.",
        idealFor: "Corporate showroom lobbies, luxury private residences, boutique commercial offices, and duplex penthouses.",
        features: ["Bespoke custom radius fabrication", "Concealed structural welds", "Luxury timber, stone, or steel tread options"]
      },
      {
        name: "External Structural Steel Fire Escape",
        description: "Safety-engineered multi-story exterior emergency exit staircases built strictly to UAE Civil Defense fire code requirements.",
        idealFor: "Commercial office buildings, school campuses, industrial factories, and labor accommodation complexes.",
        features: ["Non-slip self-draining serrated grating treads", "Continuous safety handrails on both sides", "Hot-dip galvanized for lifetime outdoor durability"]
      },
      {
        name: "Industrial Catwalks & Maintenance Platforms",
        description: "Elevated structural steel access walkways, roof equipment platforms, and machinery service catwalks complete with safety kick-plates and toe boards.",
        idealFor: "Manufacturing plants, batching facilities, refinery substations, and water treatment works.",
        features: ["High-traction industrial galvanized grating", "Safety cage access ladders", "Compliant OSHA & UAE safety handrails"]
      }
    ],
    specifications: [
      {
        category: "Mezzanine & Structural Detailing",
        details: [
          { label: "Main Beams & Joists", value: "Rolled Steel Universal Beams (UB) and Parallel Flange Channels (PFC)" },
          { label: "Support Columns", value: "Square Hollow Sections (SHS) with heavy base plate anchorages" },
          { label: "Decking Substrates", value: "Steel Checkered Plate / 38mm Heavy Duty High-Density Particle Board / Concrete Deck" },
          { label: "Live Load Ratings", value: "Engineered from 3.5 kN/m² (office) up to 15.0 kN/m² (heavy goods storage)" }
        ]
      },
      {
        category: "Staircase Standards",
        details: [
          { label: "Tread Specification", value: "32mm Non-slip Serrated Forge-Welded Steel Grating or Press-Formed Checkered Plate" },
          { label: "Railing Height", value: "1100mm height with intermediate safety balusters spaced less than 100mm" },
          { label: "Handrail Material", value: "50mm OD Stainless Steel 304/316 or Powder-Coated Steel Pipe" }
        ]
      }
    ],
    materials: [
      {
        name: "Structural Heavy Steel Sections",
        type: "Grade S275JR / S355JR",
        benefits: "High rigidity and deflection resistance, ensuring solid, bounce-free mezzanine floors and stable staircases.",
        lifespan: "30+ Years",
        uvProtection: "Indoor/Outdoor System"
      },
      {
        name: "Heavy-Duty Serrated Steel Grating",
        type: "Hot-Dip Galvanized Industrial Grate",
        benefits: "Maximum slip prevention even under wet or oily conditions. Allows dust and liquid to fall through without pooling.",
        lifespan: "25+ Years",
        uvProtection: "Galvanized Finish"
      }
    ],
    specs: ["Heavy Load Capacities", "CNC Cut & Welded Connections", "Non-Slip Industrial Treads"],
    features: ["Space-maximizing mezzanine floor systems", "Spiral, straight, and cantilevered stair designs", "Safety compliant industrial railings & ladders"]
  },
  {
    slug: "fencing-parking-solutions",
    title: "Fencing & Parking Solutions",
    category: "Steel & Metal Works",
    heroTagline: "High-security perimeter fencing, automated access control gates, anti-ramming bollards, and parking safety fixtures.",
    description: "Premium perimeter fencing, vehicle access-control barriers, and bollards designed to enhance security, define clear boundaries, and deliver a clean, professional finish.",
    fullOverview: [
      "Securing property perimeters and managing vehicular circulation are critical requirements for commercial complexes, industrial facilities, and private developments across the UAE. Al Sahra fabricates high-durability boundary fencing, automated vehicle entrance gates, security bollards, and parking safety accessories.",
      "All fencing products — including heavy-gauge chain-link, 358 anti-climb security mesh, and corrugated metal hoardings — are hot-dip galvanized and powder coated to resist corrosion from alkaline UAE soil and desert sandstorms.",
      "Our metal division also produces heavy steel impact-rated bollards, automated cantilever sliding gates, wheel stops, and boundary barriers for distribution hubs, airports, electrical substations, and residential communities."
    ],
    image: "/images/service_fencing_1.png",
    secondaryImages: ["/images/service_fencing_2.png", "/images/service_fencing_3.png", "/images/trade_single_skin.png"],
    quickMetrics: [
      { label: "Mesh Security Grade", value: "358 Anti-Climb" },
      { label: "Zinc Galvanizing", value: "Heavy 275 g/m²" },
      { label: "Gate Automation", value: "Electric Slide / Swing" }
    ],
    types: [
      {
        name: "358 High-Security Anti-Climb Fencing",
        description: "Close-mesh welded wire fence with tiny 76.2mm x 12.7mm apertures that prevent finger and toe holds, making scaling impossible. Highly resistant to conventional wire cutters.",
        idealFor: "Electrical substations, government sites, military depots, airports, and data centers.",
        features: ["Impossible to climb by hand", "Resistant to normal hand wire cutters", "High optical transparency for CCTV security cameras"]
      },
      {
        name: "Heavy-Gauge Galvanized Chain-Link Fence",
        description: "Versatile, economical boundary security fencing fabricated with heavy zinc-coated or PVC-coated steel wire woven into rigid diamond mesh.",
        idealFor: "Industrial plot boundaries, school perimeters, agricultural farms, and sports complexes.",
        features: ["Heavy 3.0mm to 4.5mm core wire gauges", "Y-crank or straight barbed wire top extensions", "Hot-dip galvanized tubular line posts"]
      },
      {
        name: "Automated Sliding & Cantilever Gates",
        description: "Heavy-duty structural steel vehicle access gates spanning openings from 4 meters up to 18 meters wide. Equipped with high-torque Italian motor operators and safety photocells.",
        idealFor: "Factory entry gates, logistics compound entrances, and private residential communities.",
        features: ["Cantilever trackless design (no ground track debris)", "Remote control and RFID proximity reader compatible", "Manual emergency release mechanism"]
      },
      {
        name: "Crash-Rated Steel Bollards & Wheel Stops",
        description: "Heavy-wall circular steel pipes filled with concrete and anchored deep into foundation footings to safeguard pedestrian walkways, gas pumps, and storefronts.",
        idealFor: "Shopping mall entrances, gas stations, loading docks, and parking lot borders.",
        features: ["High-visibility reflective yellow/black stripes", "Fixed, removable, or drop-down variants", "High-density rubber vehicle wheel stops"]
      }
    ],
    specifications: [
      {
        category: "Fencing Specifications",
        details: [
          { label: "Wire Core Tensile Strength", value: "High-Tensile Carbon Steel (500–700 MPa)" },
          { label: "Zinc Coating Mass", value: "Heavy Galvanized to BS EN 10244-2 Class A (minimum 275 g/m²)" },
          { label: "Post Specification", value: "Schedule 40 Tubular Steel Posts (60mm–114mm OD) with cast aluminum caps" },
          { label: "Security Top Topping", value: "3 strands of high-tensile barbed wire or concertina razor wire coils" }
        ]
      },
      {
        category: "Gate & Automation Standards",
        details: [
          { label: "Motor Operator", value: "Heavy-Duty 230V / 400V Oil-Bath Industrial Gear Motor (up to 2000 kg gate weight)" },
          { label: "Safety Systems", value: "Dual infrared photocells, safety edge sensor bumpers, and flashing warning beacons" },
          { label: "Operating Speed", value: "Smooth 12 meters per minute with soft-start and soft-stop decelerations" }
        ]
      }
    ],
    materials: [
      {
        name: "Galvanized & PVC Coated Steel Wire",
        type: "High-Tensile Zinc Coated Steel",
        benefits: "Double protective barrier: internal metallurgical zinc alloy plus external heavy PVC coating against chemical soil corrosion.",
        lifespan: "20+ Years",
        uvProtection: "UV Resistant PVC"
      },
      {
        name: "Heavy-Wall Structural Steel Tube",
        type: "Seamless Heavy Steel Pipe",
        benefits: "Delivers immense impact resistance against accidental vehicle collisions and ramming attempts.",
        lifespan: "30+ Years",
        uvProtection: "Galvanized / Coated"
      }
    ],
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
