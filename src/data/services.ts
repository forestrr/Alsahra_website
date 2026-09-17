// =============================================================================
// Al Sahra Tents & Sheds Fix — Services Data (9-Category Taxonomy)
// =============================================================================

export interface ServiceSubItem {
  name: string;
  slug: string;
  keyword: string;
  description: string;
  details?: string;
  image?: string;
  images?: string[];
  hasDedicatedPage?: boolean;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroImage: string;
  subItems: ServiceSubItem[];
}

export const services: ServiceCategory[] = [
  // =========================================================================
  // 1. Car Parking Shades
  // =========================================================================
  {
    name: "Car Parking Shades",
    slug: "car-parking-shades",
    metaTitle: "Car Parking Shades in UAE — HDPE, Solar & Aluminium | Al Sahra Tents",
    metaDescription: "Durable car parking shade structures across the UAE — heavy-duty HDPE, PVC, solar, aluminium, and GRP options. Engineered for UAE heat and wind loads.",
    intro: "We design and install car parking shade structures across the UAE, built to handle real desert heat and wind loads — from heavy-duty HDPE fabric to solar-integrated systems that shade your parking and generate power at the same time.",
    heroImage: "/images/service_car_parking_shades.jpg",
    subItems: [
      {
        name: "HDPE, PVC & PTFE Fabric",
        slug: "hdpe-pvc-ptfe-fabric",
        keyword: "HDPE PVC PTFE car parking shade UAE",
        description: "A full range of architectural shade fabrics, from breathable HDPE to waterproof PVC and ultra-durable PTFE.",
        details: "We offer comprehensive fabric shade solutions tailored to your requirements. Our commercial-grade HDPE knitted mesh provides excellent UV protection and breathability, reducing cabin temperatures. For complete waterproof coverage, our PVC-coated polyester membranes deliver superior weather resistance and easy maintenance. For premium and landmark projects, we supply high-performance PTFE fiberglass membranes offering unmatched longevity, dirt resistance, and a Class A fire rating. All structures are engineered to UAE municipal codes to withstand extreme wind and heat.",
        images: [
          '/images/carparking/carparking-1.jfif',
          '/images/carparking/carparking-2.jfif',
          '/images/carparking/carparking-3.jfif',
          '/images/carparking/carparking-4.jfif',
          '/images/carparking/carparking-5.jfif',
          '/images/carparking/carparking-6.jpg',
          '/images/carparking/carparking-7.jpg',
          '/images/carparking/carparking-8.jpg',
          '/images/carparking/carparking-9.jpg'
        ],
      },
      {
        name: "Solar Carparking",
        slug: "solar-carparking",
        keyword: "solar car parking shade UAE",
        description: "Integrated solar panel canopy structures that shade vehicles and generate power.",
        details: "Solar car parking shades combine structural steel canopy framing with roof-mounted photovoltaic panels, turning your parking lot into a clean energy asset. Each structure is engineered for the panel load, wind uplift, and UAE electrical grid connection requirements. A typical multi-bay installation can offset significant electricity costs while providing full vehicle shade. We handle the structural design; solar panel procurement and electrical tie-in are coordinated with your approved solar contractor.",
        hasDedicatedPage: true,
      },
      {
        name: "Aluminium Carparking",
        slug: "aluminium-carparking",
        keyword: "aluminium car parking shade UAE",
        description: "Structural aluminium-framed shade systems for a cleaner architectural finish.",
        details: "Extruded aluminium-framed car parking shades offer a sleek, modern aesthetic with zero rust risk — ideal for high-visibility commercial frontages, hotel entrances, and corporate headquarters. Constructed from 6063-T6 aluminium alloy with Qualicoat Class 2 powder coating, these structures maintain their architectural finish indefinitely without repainting. Available in cantilever, double-bay, and continuous row configurations.",
      },
      {
        name: "GRP Carparking",
        slug: "grp-carparking",
        keyword: "GRP car parking shade UAE",
        description: "Glass-reinforced polyester panel shades, a low-maintenance alternative to fabric.",
        details: "Glass-reinforced polyester (GRP) panel shades use rigid composite roof panels instead of fabric membranes, delivering a solid, permanent roofing solution that requires virtually zero maintenance. GRP panels resist UV degradation, chemical exposure, and impact damage. They're a practical choice for industrial facilities, government parking areas, and locations where fabric replacement would be impractical or costly.",
      },
    ],
  },

  // =========================================================================
  // 2. Tensile Shade Structures
  // =========================================================================
  {
    name: "Tensile Shade Structures",
    slug: "tensile-shade-structures",
    metaTitle: "Tensile Fabric Shade Structures UAE — PTFE, PVDF & PVC | Al Sahra Tents",
    metaDescription: "Architectural tensile fabric structures for schools, sports courts, and public spaces — PTFE, PVDF, and PVC/HDPE membrane options, engineered and installed across the UAE.",
    intro: "Our tensile fabric structures use the same architectural-grade membrane materials trusted internationally — PTFE, PVDF, and PVC/HDPE — chosen to match your project's durability, translucency, and budget requirements.",
    heroImage: "/images/service_tensile_shade.jpg",
    subItems: [
      {
        name: "PVDF Membrane",
        slug: "pvdf-membrane",
        keyword: "PVDF tensile membrane UAE",
        description: "A durable, self-cleaning polymer coating, popular for long-life architectural canopies.",
        details: "PVDF (polyvinylidene fluoride) coated polyester membranes from leading manufacturers like Serge Ferrari and Mehler offer 15 to 20-year lifespans with exceptional dimensional stability. The fluoropolymer surface lacquer repels dirt, resists mildew growth, and reflects up to 78% of solar heat. This is our most specified membrane for commercial shade structures including walkway canopies, plaza shades, and sports court covers.",
      },
      {
        name: "PTFE Membrane",
        slug: "ptfe-membrane",
        keyword: "PTFE tensile membrane UAE",
        description: "Premium fiberglass membrane with the longest lifespan and highest fire rating, used for landmark structures.",
        details: "PTFE (Teflon-coated fiberglass) is the highest-performance architectural membrane available — completely immune to UV degradation, biological growth, and atmospheric pollutants. With a 30+ year lifespan and non-combustible Class A fire rating, PTFE is specified for landmark civic projects, international airport terminals, and prestigious public spaces where durability and fire safety are non-negotiable.",
      },
      {
        name: "PVC/HDPE Membrane",
        slug: "pvc-hdpe-membrane",
        keyword: "PVC HDPE shade membrane",
        description: "A cost-effective fabric option for mid-span shade structures.",
        details: "PVC and HDPE membranes provide practical, budget-friendly tensile shade solutions for projects where cost-efficiency is a priority without compromising on structural integrity. PVC options deliver full waterproofing, while HDPE mesh allows airflow and is ideal for parking shades and outdoor recreation. Both are available in a wide range of colours and are UV-stabilised for the UAE climate.",
      },
    ],
  },

  // =========================================================================
  // 3. Sail Shade
  // =========================================================================
  {
    name: "Sail Shade",
    slug: "sail-shade",
    metaTitle: "Shade Sails UAE — Kids Play Areas & Swimming Pool Shades | Al Sahra Tents",
    metaDescription: "Custom shade sails for kids play areas and swimming pools across the UAE — HDPE, PVC, and PTFE fabric options, designed for shape, coverage, and UV protection.",
    intro: "Shade sails are one of the most flexible ways to cover an irregular outdoor space — we design and install them for kids play areas and swimming pools alike, matched to the fabric and UV protection level your site needs.",
    heroImage: "/images/service_sail_shade.jpg",
    subItems: [
      {
        name: "Kids Play Area Shade (HDPE & PVC)",
        slug: "kids-play-area-shade",
        keyword: "kids play area shade UAE",
        description: "UV-rated shade sails designed for schools, nurseries, and community play areas.",
        details: "Our playground shade sails block up to 98% of UV radiation (UPF 50+ rated), keeping playground equipment cool and safe for children year-round. All structural columns feature child-safe rounded profiles with optional impact padding, concealed flush bolt connections, and tamper-resistant hardware. We design custom multi-sail configurations in vibrant colour combinations for international schools, nurseries, and public parks across Sharjah, Dubai, and Abu Dhabi.",
      },
      {
        name: "Swimming Pool Shade (PTFE)",
        slug: "swimming-pool-shade",
        keyword: "swimming pool shade UAE",
        description: "Premium PTFE sail shade for pool decks, built for constant sun and moisture exposure.",
        details: "Pool shade sails face a demanding combination of intense UV, high humidity, and chlorine-laden air. Our PTFE-grade sail shades are engineered specifically for this environment — completely immune to moisture absorption, mildew, and UV degradation. Stainless steel 316 marine-grade rigging hardware ensures zero corrosion even in direct splash zones. Specified for resort pools, community clubhouse decks, and sports academy swimming facilities.",
      },
    ],
  },

  // =========================================================================
  // 4. Retractable Pergolas & Awnings
  // =========================================================================
  {
    name: "Retractable Pergolas & Awnings",
    slug: "retractable-pergolas-awnings",
    metaTitle: "Retractable Pergolas & Awnings UAE — Motorised & Bioclimatic | Al Sahra Tents",
    metaDescription: "Motorised and manual pergola and awning systems for villas and hospitality outdoor spaces — bioclimatic pergolas, retractable awnings, and wave shade systems across the UAE.",
    intro: "From fully motorised bioclimatic pergolas to manual wave shade systems, we install adjustable shade solutions for villas, restaurants, and hospitality outdoor spaces — built to open and close on demand as the sun moves.",
    heroImage: "/images/service_retractable_pergolas.jpg",
    subItems: [
      {
        name: "Motorised Pergolas",
        slug: "motorised-pergolas",
        keyword: "motorised pergola UAE",
        description: "Electrically operated retractable roof pergolas for effortless shade control.",
        details: "Our motorised pergolas feature quiet European tubular motor drives that retract and extend the roof fabric at the touch of a button. Available with handheld remotes, wall switches, and smart home automation integration. The roof fabric rolls smoothly on precision-engineered aluminium tracks, providing full shade when extended and an open sky when retracted. Ideal for villa patios, rooftop terraces, and restaurant outdoor seating.",
      },
      {
        name: "Awning Canopy System",
        slug: "awning-canopy-system",
        keyword: "awning canopy system UAE",
        description: "Retractable fabric awnings for windows, balconies, and storefronts.",
        details: "Our retractable awning systems mount directly to building facades to shade windows, balconies, and shopfront entrances. Available in manual crank or motorised configurations with optional wind sensors for automatic retraction in high gusts. The acrylic or PVC awning fabric is UV-stabilised and available in a wide range of solid and striped colours. Projection lengths available from 1.5m up to 5m.",
      },
      {
        name: "Wave Manual Shade System",
        slug: "wave-manual-shade-system",
        keyword: "wave shade system manual",
        description: "A manually operated wave-profile fabric shade, a lighter-weight retractable option.",
        details: "The wave shade system uses a sliding fabric panel that runs along stainless steel cables, creating a distinctive wave profile when extended. Operated manually by hand, it's a cost-effective and mechanically simple alternative to motorised systems. Popular for residential garden walkways, café terraces, and courtyard corridors where an elegant, low-maintenance retractable shade is needed.",
      },
      {
        name: "Bioclimatic Pergolas",
        slug: "bioclimatic-pergolas",
        keyword: "bioclimatic pergola UAE",
        description: "Louvered-roof pergolas with adjustable slats for precise light and airflow control.",
        details: "Bioclimatic pergolas feature motorised rotating aluminium louvers that adjust from 0° (fully sealed and watertight) to 135° (maximum ventilation and sunlight). Built from marine-grade 6063-T6 extruded aluminium with EPDM waterproof gaskets, integrated concealed rain gutters, and optional dimmable LED perimeter lighting. Rain sensors automatically close the louvers at the first drop. The premium outdoor living solution for luxury villas, five-star hotel pool bars, and fine-dining terraces.",
        hasDedicatedPage: true,
      },
      {
        name: "Retractable Pergolas",
        slug: "retractable-pergolas",
        keyword: "retractable pergola UAE",
        description: "Fully retractable fabric-roof pergola systems for outdoor living and dining areas.",
        details: "Our retractable pergola systems combine a fixed aluminium or steel frame with a motorised sliding fabric roof that can be fully opened or closed. The fabric panels stack neatly when retracted, giving you the flexibility of an open terrace or a fully covered space depending on the weather. Available in custom dimensions and a range of architectural powder-coat finishes.",
      },
    ],
  },

  // =========================================================================
  // 5. Aluminium & CNC Mashrabiya
  // =========================================================================
  {
    name: "Aluminium & CNC Mashrabiya",
    slug: "aluminium-cnc-mashrabiya",
    metaTitle: "CNC Mashrabiya & Aluminium Pergolas UAE | Al Sahra Tents",
    metaDescription: "CNC-cut aluminium mashrabiya screens and pergolas across the UAE — decorative privacy and shade panels combining traditional pattern with modern fabrication.",
    intro: "CNC-cut mashrabiya panels bring a traditional Arabic architectural element into modern shade and privacy design — precision-fabricated in aluminium and paired with our pergola systems for a distinctive architectural finish.",
    heroImage: "/images/service_masharabiya.jpg",
    subItems: [
      {
        name: "Pergola",
        slug: "aluminium-pergola",
        keyword: "aluminium pergola UAE",
        description: "Aluminium-framed pergola structures, often paired with mashrabiya screen panels.",
        details: "Our aluminium pergolas provide clean, minimalist shade framing with zero rust and minimal maintenance. Constructed from high-tensile extruded aluminium alloy with Qualicoat architectural powder coating, they can be configured as freestanding garden structures or wall-mounted patio covers. Often paired with CNC mashrabiya infill panels for a distinctive Arabic-modern hybrid aesthetic.",
      },
      {
        name: "CNC Mashrabiya",
        slug: "cnc-mashrabiya",
        keyword: "CNC mashrabiya UAE",
        description: "Precision CNC-cut decorative aluminium screens for privacy, shade, and facade detailing.",
        details: "CNC mashrabiya panels are precision-cut from solid aluminium sheet using computer-controlled routing, reproducing intricate traditional geometric patterns with modern accuracy. Used as privacy screens, facade cladding, balcony railings, and pergola infill panels, they deliver filtered light and ventilation while maintaining visual privacy. Available in any RAL colour with custom pattern design from traditional Islamic geometry to contemporary abstract motifs.",
        hasDedicatedPage: true,
      },
    ],
  },

  // =========================================================================
  // 6. Customised Tents & Majlis
  // =========================================================================
  {
    name: "Customised Tents & Majlis",
    slug: "customised-tents-majlis",
    metaTitle: "Custom Tents & Majlis UAE — Event, Military & Dome Tents | Al Sahra Tents",
    metaDescription: "Custom tent manufacturing across the UAE — majlis tents, military tents, geodesic domes, pyramid tents, and event marquees, built to order for any occasion or application.",
    intro: "We manufacture and install a full range of tents, from traditional Arabic majlis to large-format event and military tents — every structure built to order for your event, site, or operational requirement.",
    heroImage: "/images/service_customised_tents.jpg",
    subItems: [
      {
        name: "Majlis",
        slug: "majlis",
        keyword: "majlis tent UAE",
        description: "Traditional Arabic majlis tents for gatherings and events.",
        details: "Our permanent and semi-permanent majlis structures feature ornate hand-stitched traditional Sadu interior fabric linings, hidden high-capacity HVAC ducting, and customised lighting fixtures. Built with multi-layer thermal insulation (German Rockwool) to keep interiors cool under UAE summer conditions. Furnished to client specification with Arabic seating, chandeliers, and double-glazed aluminium entrance doors.",
      },
      {
        name: "Military Tent",
        slug: "military-tent",
        keyword: "military tent manufacturer UAE",
        description: "Rugged, deployable tent structures built for operational use.",
        details: "Military-specification tent structures designed for rapid deployment in field operations, training exercises, and emergency relief. Fabricated with heavy-duty flame-retardant PVC or canvas outer shells, reinforced steel or aluminium framing, and sand/gravel ballast anchoring systems. Engineered for high-wind desert environments with sand-proof sealing and optional blackout interior linings.",
      },
      {
        name: "Arch Tent",
        slug: "arch-tent",
        keyword: "arch tent UAE",
        description: "Clear-span arch-roof tents for events and storage.",
        details: "Arch tents feature a continuous curved aluminium frame creating a barrel-vault roof profile with zero internal columns. The clear-span interior makes them ideal for exhibitions, vehicle displays, and temporary storage where unobstructed floor space is essential. Available in spans from 10m to 30m with optional hard-panel walling, glass facades, and full climate control.",
      },
      {
        name: "Revolution Tent",
        slug: "revolution-tent",
        keyword: "revolution tent UAE",
        description: "Curved, modern-profile tent structure.",
        details: "Revolution tents feature a distinctive curved roofline created by asymmetric arch frames, giving them a sleek, contemporary silhouette that stands out at events and exhibitions. The unique profile allows for dramatic interior ceiling heights and creative lighting installations. Available with transparent PVC roof panels for natural daylight effects.",
      },
      {
        name: "Polygon Tent",
        slug: "polygon-tent",
        keyword: "polygon tent UAE",
        description: "Multi-sided tent structures for distinctive event layouts.",
        details: "Polygon tents use a multi-faceted frame geometry (typically hexagonal or octagonal) to create striking, non-rectangular event spaces. The angular roofline and high central peak provide generous interior volume and a dramatic visual presence. Popular for VIP reception areas, product launch centrepieces, and premium hospitality zones at outdoor events and festivals.",
      },
      {
        name: "Wave Tent",
        slug: "wave-tent",
        keyword: "wave tent UAE",
        description: "Flowing wave-roof tent design for a striking event silhouette.",
        details: "Wave tents feature an undulating roofline created by alternating high and low ridge points along the tent's length. This flowing wave profile creates a visually dynamic exterior and interesting interior ceiling variations. They connect well in series to create long, visually rhythmic covered corridors for event walkways, exhibition rows, or outdoor dining sequences.",
      },
      {
        name: "Arabic Majlis Tent",
        slug: "arabic-majlis-tent",
        keyword: "arabic majlis tent UAE",
        description: "Traditional majlis styling with decorative interior finishing.",
        details: "A fully finished Arabic majlis tent package including structural tent frame, multi-layer insulated envelope, and complete interior fit-out with traditional Sadu-pattern wall linings, Arabic-style floor seating, ornamental ceiling draping, chandelier lighting, and climate control ducting. Delivered as a turnkey installation for Ramadan gatherings, National Day celebrations, wedding receptions, and private family events.",
      },
      {
        name: "Panoramic Tent",
        slug: "panoramic-tent",
        keyword: "panoramic tent UAE",
        description: "Clear-wall tents offering full outward visibility.",
        details: "Panoramic tents feature floor-to-ceiling clear PVC or tempered glass wall panels on one or more sides, providing unobstructed views of the surrounding landscape. Ideal for waterfront events, desert safari dining experiences, and hilltop receptions where the venue's setting is part of the experience. Available with UV-filtering tinted panels and integrated motorised roll-up openings.",
      },
      {
        name: "Geodesic Tent",
        slug: "geodesic-tent",
        keyword: "geodesic dome tent UAE",
        description: "Dome-frame tent structures, strong and visually distinctive.",
        details: "Geodesic dome tents use a triangulated steel or aluminium tube framework to create a self-supporting spherical structure — extremely strong relative to its weight and highly resistant to wind loads. The distinctive dome shape makes them a visual centrepiece for glamping resorts, exhibition pods, and immersive brand experiences. Available in diameters from 6m to 30m with transparent, opaque, or mixed membrane panels.",
      },
      {
        name: "Dome Tent",
        slug: "dome-tent",
        keyword: "dome tent UAE",
        description: "Rounded dome-profile tents for events and glamping-style setups.",
        details: "Our dome tents provide a rounded, igloo-style profile that's both structurally efficient and aesthetically appealing. Commonly used for luxury glamping resort suites, pop-up hospitality lounges, and intimate event spaces. Available with insulated wall systems, en-suite bathroom divisions, and panoramic window panels for desert safari and eco-resort applications.",
      },
      {
        name: "Capsule Tent",
        slug: "capsule-tent",
        keyword: "capsule tent UAE",
        description: "Compact, rounded tent units, often used for pods or single-occupancy setups.",
        details: "Capsule tents are compact, enclosed pod-style units designed for individual or small-group occupancy. Their streamlined cylindrical or capsule profile makes them easy to transport, install, and arrange in clusters. Used for glamping pod installations, festival sleeping units, and modular resort accommodation. Available with integrated flooring, electrical systems, and climate control.",
      },
      {
        name: "Double Decker Tent",
        slug: "double-decker-tent",
        keyword: "double decker tent UAE",
        description: "Two-storey tent structures for expanded capacity.",
        details: "Double decker tents feature a full structural mezzanine floor within the tent frame, effectively doubling the usable area on the same footprint. The ground floor typically serves as the main event or exhibition space, while the upper floor provides VIP viewing, hospitality lounges, or administrative offices. Engineered with heavy-duty steel framing and fire-rated structural decking to support significant live loads.",
      },
      {
        name: "Pyramid Tent",
        slug: "pyramid-tent",
        keyword: "pyramid tent UAE",
        description: "Classic pointed-roof pyramid tents for events and Ramadan/majlis seating.",
        details: "Pyramid tents feature a single central peak with four sloping fabric panels converging to a pointed apex — a timeless, elegant tent profile. Commonly installed for Ramadan iftars, outdoor wedding receptions, and VIP majlis seating. Available in sizes from 5m×5m up to 12m×12m, with optional connecting corridors to link multiple pyramids into a larger complex.",
      },
      {
        name: "Pyramid Dome Tent",
        slug: "pyramid-dome-tent",
        keyword: "pyramid dome tent UAE",
        description: "A hybrid pyramid-and-dome roofline for a distinctive event tent.",
        details: "The pyramid dome tent combines a pyramidal base structure with a rounded dome crown, creating a hybrid silhouette that's visually distinctive and structurally efficient. The dome section provides additional headroom at the centre while the pyramid walls maximise usable floor area at the edges. A modern alternative to traditional pyramid tents for events, exhibitions, and hospitality installations.",
      },
    ],
  },

  // =========================================================================
  // 7. Steel Structures & Sheds
  // =========================================================================
  {
    name: "Steel Structures & Sheds",
    slug: "steel-structures-sheds",
    metaTitle: "Steel Structures & Warehouse Sheds UAE | Al Sahra Tents",
    metaDescription: "Steel structure fabrication across the UAE — warehouses and mezzanine floor installations, engineered and built for industrial and commercial use.",
    intro: "We design, fabricate, and install steel structures for industrial and commercial needs — from full warehouse sheds to mezzanine floor additions that expand your existing site's usable space.",
    heroImage: "/images/service_steel_structures.jpg",
    subItems: [
      {
        name: "Warehouse",
        slug: "warehouse",
        keyword: "warehouse construction UAE",
        description: "Steel-framed warehouse structures for storage and industrial use.",
        details: "We design, fabricate, and erect full hot-rolled steel portal frame warehouses tailored to your storage or industrial requirements. Our in-house engineering team handles structural calculations for UAE wind and seismic loads. Projects include foundation work, primary and secondary steel framing (primed or hot-dip galvanised), and complete roof and wall cladding using insulated sandwich panels or single-skin profiled sheets.",
      },
      {
        name: "Mezzanine Floor",
        slug: "mezzanine-floor",
        keyword: "mezzanine floor installation UAE",
        description: "Steel mezzanine floor installations to add usable space within an existing building.",
        details: "Maximize your existing vertical space with our custom-engineered structural steel mezzanine floors. We use heavy-duty I-beam primary supports with C-channel joists, topped with high-density particle board, steel chequer plate, or open grating depending on load requirements. Ideal for adding office space above warehouse storage, expanding retail showroom floors, or creating multi-tier racking systems.",
      },
    ],
  },

  // =========================================================================
  // 8. Steel Fabrication & Staircases
  // =========================================================================
  {
    name: "Steel Fabrication & Staircases",
    slug: "steel-fabrication-staircases",
    metaTitle: "Steel Staircase & Handrail Fabrication UAE | Al Sahra Tents",
    metaDescription: "Custom steel and stainless steel staircase fabrication across the UAE — SS handrails, staircases, and grating built to project specification.",
    intro: "Our fabrication team builds steel and stainless steel staircases, handrails, and grating to project specification — precision welded and finished for both industrial and architectural applications.",
    heroImage: "/images/service_steel_fabrication.jpg",
    subItems: [
      {
        name: "Steel Staircase",
        slug: "steel-staircase",
        keyword: "steel staircase fabrication UAE",
        description: "Custom-fabricated steel staircases for industrial and commercial buildings.",
        details: "Heavy-duty structural steel staircases fabricated for industrial fire escapes, warehouse mezzanine access, and commercial building cores. We build straight-flight, switchback, and spiral configurations using mild steel stringers with chequer plate or pan-filled concrete treads. All staircases are fabricated to exact site measurements and finished with industrial-grade epoxy or hot-dip galvanising for exterior use.",
      },
      {
        name: "SS Staircase",
        slug: "ss-staircase",
        keyword: "stainless steel staircase UAE",
        description: "Stainless steel staircases for a higher-finish architectural application.",
        details: "Premium stainless steel staircases designed for architectural statement areas in villas, hotels, and corporate offices. Fabricated from 304 or 316-grade stainless steel with brushed (satin) or mirror-polished finishes. Our SS staircases often incorporate frameless glass balustrades, floating timber treads, and concealed structural connections for a clean, modern aesthetic.",
      },
      {
        name: "SS Handrail",
        slug: "ss-handrail",
        keyword: "stainless steel handrail UAE",
        description: "Stainless steel handrail fabrication and installation.",
        details: "Custom-fabricated stainless steel handrails and balustrade systems for balconies, ramps, and stairwells. We use precision TIG welding to ensure seamless, polished joints that are smooth to the touch. Available with wire rope infill, glass panel clamps, or horizontal SS rod configurations. We strongly recommend 316-grade stainless steel for any exterior applications in the UAE to prevent pitting and corrosion.",
      },
      {
        name: "SS Grating",
        slug: "ss-grating",
        keyword: "stainless steel grating UAE",
        description: "Stainless steel grating panels for flooring, walkways, and drainage covers.",
        details: "Industrial and architectural stainless steel grating for trench drains, pedestrian walkways, and facility flooring. We fabricate custom load-bearing grating panels that provide excellent slip resistance and liquid drainage while maintaining strict hygiene standards. Commonly specified for food processing facilities, commercial kitchens, chemical plants, and luxury pool perimeter drainage.",
      },
    ],
  },

  // =========================================================================
  // 9. Fencing & Bollards
  // =========================================================================
  {
    name: "Fencing & Bollards",
    slug: "fencing-bollards",
    metaTitle: "Fencing & Parking Bollards UAE | Al Sahra Tents",
    metaDescription: "Fencing and bollard installation across the UAE — perimeter fencing for sites and facilities, plus bollards for traffic control and site safety.",
    intro: "We install fencing and bollard systems for construction sites, sports facilities, and commercial properties — practical, durable solutions for perimeter security and traffic control.",
    heroImage: "/images/service_fencing_bollards.jpg",
    subItems: [
      {
        name: "Fencing",
        slug: "fencing",
        keyword: "fencing contractor UAE",
        description: "Chain-link, mesh, and perimeter fencing for sites and facilities.",
        details: "Complete perimeter security fencing supply and installation. Our range includes PVC-coated chain-link fencing for sports courts and boundaries, heavy-duty welded mesh panels (3D V-mesh) for commercial facilities, and temporary hoarding panels for construction sites. Installations include core-drilled or surface-mounted steel posts, tension wires, and optional barbed/razor wire toppings.",
      },
      {
        name: "Bollards",
        slug: "bollards",
        keyword: "parking bollards UAE",
        description: "Parking and traffic bollards for site safety and access control.",
        details: "Steel and stainless steel bollards for vehicle access control, storefront protection, and pedestrian safety. We manufacture and install fixed concrete-filled security bollards, removable locking bollards, and fold-down parking space protectors. Available in safety yellow powder coat with reflective banding for industrial use, or brushed stainless steel for architectural frontages.",
      },
    ],
  },
];

// =============================================================================
// Trade Products (unchanged — used by /trades page)
// =============================================================================

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
