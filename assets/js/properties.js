/**
 * HILLTOP REAL ESTATE - Indian Property Marketplace
 * properties.js - Central Data Store & Filtering Engine
 */

const DEFAULT_PROPERTIES = [
    {
        id: "HT-101",
        title: "Prestige Ocean Crest 3 BHK Luxury Apartment",
        tagline: "Sea-Facing Ultra-Luxury Living on Marine Drive",
        purpose: "buy",
        type: "Apartment",
        city: "Kochi",
        locality: "Marine Drive",
        address: "Marine Drive Promenade, Shanmugham Road, Kochi, Kerala 682031",
        state: "Kerala",
        bhk: 3,
        bathrooms: 3,
        balconies: 2,
        carpetArea: 1850,
        builtUpArea: 2320,
        price: 24500000,
        formattedPrice: "₹2.45 Crore",
        pricePerSqft: "₹10,560/sq.ft",
        maintenance: "₹5,200/month",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "West (Arabian Sea Facing)",
        floor: "14th of 24 Floors",
        parking: "2 Covered Reserved Parking",
        reraId: "K-RERA/PRJ/ERN/045/2023 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "Sea Facing Luxury",
        images: [
            "assets/images/property-1.jpg",
            "assets/images/carousel-1.jpg",
            "assets/images/carousel-2.jpg",
            "assets/images/header.jpg"
        ],
        description: "Experience the pinnacle of coastal luxury living in this sprawling 3 BHK corner apartment situated right on Kochi's iconic Marine Drive promenade. Boasting uninterrupted panoramic vistas of the Arabian Sea and Cochin Harbour, this residence features Italian marble flooring, imported modular kitchen with built-in appliances, smart-home automation, and spacious soundproof balcony decks designed for tranquil sunset views.",
        amenities: [
            "Infinity Swimming Pool",
            "Clubhouse & Banquet Hall",
            "State-of-the-art Gymnasium",
            "100% DG Power Backup",
            "24/7 Security & CCTV",
            "EV Vehicle Charging Points",
            "Children's Play Zone",
            "Landscaped Sky Lounge",
            "High-Speed Otis Elevators",
            "Intercom Facility"
        ],
        nearbyFacilities: [
            { name: "High Court Metro Station", distance: "900 m", type: "metro" },
            { name: "Lourdes Hospital", distance: "2.4 km", type: "hospital" },
            { name: "Centre Square Mall", distance: "1.8 km", type: "shopping" },
            { name: "Cochin International Airport", distance: "29 km", type: "airport" },
            { name: "St. Teresa's College", distance: "1.2 km", type: "education" }
        ],
        owner: {
            name: "Alexander Varghese",
            designation: "Owner / Hilltop Prime Seller",
            phone: "+91 98471 23450",
            email: "alexander.v@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-15"
    },
    {
        id: "HT-102",
        title: "Sobha Silicon Oasis 2 BHK Premium Flat",
        tagline: "Tech Corridor Living with World-Class Amenities",
        purpose: "buy",
        type: "Apartment",
        city: "Bengaluru",
        locality: "Hosa Road, Electronic City",
        address: "Near Hosa Road Junction, Electronic City Phase 1, Bengaluru, Karnataka 560100",
        state: "Karnataka",
        bhk: 2,
        bathrooms: 2,
        balconies: 1,
        carpetArea: 1040,
        builtUpArea: 1365,
        price: 9800000,
        formattedPrice: "₹98 Lakhs",
        pricePerSqft: "₹7,179/sq.ft",
        maintenance: "₹3,400/month",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "East (Vastu Compliant)",
        floor: "6th of 16 Floors",
        parking: "1 Covered Car + 1 Bike",
        reraId: "PRM/KA/RERA/1251/310/PR/170915/000214 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "RERA Approved",
        images: [
            "assets/images/property-2.jpg",
            "assets/images/property-3.jpg",
            "assets/images/4.jpg",
            "assets/images/about.jpg"
        ],
        description: "Crafted by renowned builders, this premium 2 BHK home is located right in Bengaluru's Silicon Corridor. Offering seamless connectivity to Infosys, Wipro, and TCS campus, this sun-drenched home features engineered wood wardrobes, modular kitchen with chimney, premium Kohler sanitaryware, and a private utility balcony.",
        amenities: [
            "Olympic-Size Swimming Pool",
            "Tennis & Badminton Courts",
            "Jogging & Cycling Track",
            "24/7 Treated Water Supply",
            "Full Generator Backup",
            "Gated Security with RFID",
            "Co-Working Lounge",
            "Multipurpose Party Lawn"
        ],
        nearbyFacilities: [
            { name: "Electronic City Metro", distance: "1.1 km", type: "metro" },
            { name: "Narayana Hrudayalaya Hospital", distance: "4.5 km", type: "hospital" },
            { name: "Delhi Public School (Bangalore South)", distance: "3.2 km", type: "education" },
            { name: "Royal Meenakshi Mall", distance: "7.0 km", type: "shopping" }
        ],
        owner: {
            name: "Pooja Krishnamurthy",
            designation: "Hilltop Certified Agent",
            phone: "+91 98450 88219",
            email: "pooja.k@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-18"
    },
    {
        id: "HT-103",
        title: "Malabar Green Valley 4 BHK Traditional Villa",
        tagline: "Eco-Friendly Private Estate with Organic Grove",
        purpose: "buy",
        type: "Independent Villa",
        city: "Kozhikode",
        locality: "Mavoor Road",
        address: "Green Valley Enclave, Near Medical College, Mavoor Road, Kozhikode, Kerala 673008",
        state: "Kerala",
        bhk: 4,
        bathrooms: 4,
        balconies: 3,
        carpetArea: 3200,
        builtUpArea: 3850,
        price: 18500000,
        formattedPrice: "₹1.85 Crore",
        pricePerSqft: "₹4,805/sq.ft",
        maintenance: "₹2,500/month",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "North-East",
        floor: "Independent G+1 Duplex",
        parking: "Spacious Portico for 3 Cars",
        reraId: "K-RERA/PRJ/KKD/092/2024 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "Private Gated Villa",
        images: [
            "assets/images/property-3.jpg",
            "assets/images/carousel-2.jpg",
            "assets/images/1.jpg",
            "assets/images/property-5.jpg"
        ],
        description: "A timeless architectural masterpiece combining traditional Kerala nalukettu elements with state-of-the-art contemporary comforts. Features Teak wood interior trims, central courtyard (nadumuttam) with natural skylight, private landscaped garden, solar power generation system, and open rooftop terrace with scenic hilltop views.",
        amenities: [
            "Private Well & Corporation Water",
            "5kW On-Grid Solar Roof System",
            "Automated Security Gate",
            "CCTV Surveillance",
            "Home Theatre Room",
            "Landscaped Lawn & Fruit Trees",
            "Maid / Driver Quarters"
        ],
        nearbyFacilities: [
            { name: "Kozhikode Medical College", distance: "2.0 km", type: "hospital" },
            { name: "Focus Mall / Mavoor Rd Junction", distance: "3.5 km", type: "shopping" },
            { name: "Calicut Railway Station", distance: "6.2 km", type: "transit" },
            { name: "Silver Hills Higher Secondary School", distance: "1.5 km", type: "education" }
        ],
        owner: {
            name: "Dr. K. M. Usman",
            designation: "Direct Owner",
            phone: "+91 94470 56789",
            email: "km.usman@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-10"
    },
    {
        id: "HT-104",
        title: "Lodha Bellissimo 3 BHK Luxury High-Rise",
        tagline: "Panoramic Skyline View Apartment in Central Mumbai",
        purpose: "buy",
        type: "Apartment",
        city: "Mumbai",
        locality: "Bandra West",
        address: "Pali Hill Road, Bandra West, Mumbai, Maharashtra 400050",
        state: "Maharashtra",
        bhk: 3,
        bathrooms: 3,
        balconies: 2,
        carpetArea: 1650,
        builtUpArea: 2150,
        price: 68500000,
        formattedPrice: "₹6.85 Crore",
        pricePerSqft: "₹31,860/sq.ft",
        maintenance: "₹14,500/month",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "West",
        floor: "22nd of 38 Floors",
        parking: "2 Covered Podium Parking",
        reraId: "P51900001289 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "Ultra Luxury",
        images: [
            "assets/images/property-4.jpg",
            "assets/images/6.jpg",
            "assets/images/header.jpg",
            "assets/images/13.jpg"
        ],
        description: "Prestige and elegance come together in Mumbai's most coveted celebrity neighborhood. Designed by international landscape architects, this residence offers floor-to-ceiling glass fenestrations, central VRV air conditioning, Poggenpohl kitchen, private elevator access foyer, and uninterrupted sea-breeze frontage.",
        amenities: [
            "Heated Temperature-Controlled Pool",
            "Private Screening Cinema",
            "Concierge & Valet Service",
            "World-Class Spa & Sauna",
            "Multi-Tier Biometric Security",
            "Sky Lounge & Cigar Room",
            "Automated Mechanical Car Park"
        ],
        nearbyFacilities: [
            { name: "Bandra Bandstand", distance: "1.2 km", type: "recreation" },
            { name: "Lilavati Hospital & Research Centre", distance: "1.5 km", type: "hospital" },
            { name: "Bandra-Worli Sea Link", distance: "2.8 km", type: "transit" },
            { name: "Chhatrapati Shivaji Maharaj Airport", distance: "9.5 km", type: "airport" }
        ],
        owner: {
            name: "Vikram Singhania",
            designation: "Hilltop Premier Associate",
            phone: "+91 98201 44552",
            email: "vikram.s@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-22"
    },
    {
        id: "HT-105",
        title: "Skyline Imperial 2 BHK Modern Flat",
        tagline: "Prime Capital City Residence near Kowdiar Palace",
        purpose: "buy",
        type: "Apartment",
        city: "Thiruvananthapuram",
        locality: "Kowdiar",
        address: "Kowdiar Palace Avenue, Thiruvananthapuram, Kerala 695003",
        state: "Kerala",
        bhk: 2,
        bathrooms: 2,
        balconies: 1,
        carpetArea: 1120,
        builtUpArea: 1420,
        price: 8200000,
        formattedPrice: "₹82 Lakhs",
        pricePerSqft: "₹5,774/sq.ft",
        maintenance: "₹2,800/month",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "East",
        floor: "5th of 12 Floors",
        parking: "1 Allotted Stilt Parking",
        reraId: "K-RERA/PRJ/TVM/011/2023 (Demo Showcase)",
        isReraVerified: true,
        featured: false,
        badge: "Kowdiar Prime",
        images: [
            "assets/images/property-5.jpg",
            "assets/images/property-1.jpg",
            "assets/images/7.jpg",
            "assets/images/carousel-1.jpg"
        ],
        description: "A prestigious address in Trivandrum's royalty corridor. This tranquil 2 BHK flat offers serene tree-lined views, cross-ventilation, teak finished doors, vitrified tile flooring, and walking proximity to Kowdiar Golf Club and Raj Bhavan.",
        amenities: [
            "Rooftop Swimming Pool",
            "Health Club & Fitness Centre",
            "Solar Powered Common Lighting",
            "Rainwater Harvesting System",
            "24 Hr Security & Intercom",
            "Rooftop Party Area"
        ],
        nearbyFacilities: [
            { name: "Trivandrum Golf Club", distance: "400 m", type: "recreation" },
            { name: "Kerala Secretariat", distance: "3.5 km", type: "government" },
            { name: "Technopark Campus", distance: "12 km", type: "itpark" },
            { name: "KIMSHEALTH Hospital", distance: "6.0 km", type: "hospital" }
        ],
        owner: {
            name: "Radhika Nair",
            designation: "Owner / Ex-Govt Officer",
            phone: "+91 94472 90123",
            email: "radhika.nair@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-05"
    },
    {
        id: "HT-106",
        title: "Aparna Serene Heights 3 BHK Gated Flat",
        tagline: "Minutes from Financial District & Mindspace",
        purpose: "buy",
        type: "Apartment",
        city: "Hyderabad",
        locality: "Gachibowli",
        address: "Near Old Mumbai Highway, Gachibowli Financial District, Hyderabad, Telangana 500032",
        state: "Telangana",
        bhk: 3,
        bathrooms: 3,
        balconies: 2,
        carpetArea: 1720,
        builtUpArea: 2190,
        price: 16500000,
        formattedPrice: "₹1.65 Crore",
        pricePerSqft: "₹7,534/sq.ft",
        maintenance: "₹4,800/month",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "North (Vastu Compliant)",
        floor: "9th of 28 Floors",
        parking: "2 Covered Cellar Parking",
        reraId: "P02400003881 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "Near Financial District",
        images: [
            "assets/images/property-6.jpg",
            "assets/images/property-2.jpg",
            "assets/images/10.jpg",
            "assets/images/carousel-2.jpg"
        ],
        description: "Situated in the technological heart of Hyderabad, this 3 BHK flat in Gachibowli offers swift access to Microsoft, Google, and Amazon campuses. Equipped with French windows, dry & wet kitchens, false ceilings with LED cove lighting, and access to a 40,000 sq.ft state-of-the-art clubhouse.",
        amenities: [
            "Air-Conditioned Squash Courts",
            "Half Olympic Lap Pool",
            "Crèche & Daycare Facility",
            "Supermarket inside Campus",
            "Piped Gas Connection",
            "100% Power Backup",
            "CCTV Surveillance 24/7"
        ],
        nearbyFacilities: [
            { name: "Raidurg Metro Station", distance: "2.8 km", type: "metro" },
            { name: "Continental Hospitals", distance: "1.5 km", type: "hospital" },
            { name: "Oakridge International School", distance: "3.0 km", type: "education" },
            { name: "Inorbit Mall Cyberabad", distance: "4.8 km", type: "shopping" }
        ],
        owner: {
            name: "Srinivas Reddy",
            designation: "Hilltop Exclusive Partner",
            phone: "+91 98490 33411",
            email: "srinivas.r@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-12"
    },
    {
        id: "HT-107",
        title: "Windsor Manor 4 BHK Hilltop Villa",
        tagline: "Serene Plantation Living with Modern Conveniences",
        purpose: "buy",
        type: "Independent Villa",
        city: "Kottayam",
        locality: "Kanjikuzhy",
        address: "Mount Pleasant Enclave, Kanjikuzhy, Kottayam, Kerala 686004",
        state: "Kerala",
        bhk: 4,
        bathrooms: 4,
        balconies: 3,
        carpetArea: 2850,
        builtUpArea: 3400,
        price: 13500000,
        formattedPrice: "₹1.35 Crore",
        pricePerSqft: "₹3,970/sq.ft",
        maintenance: "₹1,800/month",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "East",
        floor: "G+1 Standalone Villa with Garden",
        parking: "Porch for 2 SUVs",
        reraId: "K-RERA/PRJ/KTM/038/2023 (Demo Showcase)",
        isReraVerified: true,
        featured: false,
        badge: "Plantation View",
        images: [
            "assets/images/1.jpg",
            "assets/images/property-3.jpg",
            "assets/images/carousel-1.jpg",
            "assets/images/about.jpg"
        ],
        description: "Nestled in Kottayam's most peaceful residential suburb of Kanjikuzhy, this elegant villa features high ceilings, rosewood furniture pieces, modular kitchen, landscaped yard with native fruit trees, private borewell + municipal water connection, and wide compound walls with automatic sliding gate.",
        amenities: [
            "Private Landscaped Garden",
            "Solar Water Heater 300L",
            "Automated Boundary Gate",
            "Dedicated Borewell + Sump",
            "Covered Terrace with Gym Area",
            "CCTV & Alarm System"
        ],
        nearbyFacilities: [
            { name: "Caritas Hospital / Bharat Hospital", distance: "3.5 km", type: "hospital" },
            { name: "Kottayam Railway Station", distance: "4.0 km", type: "transit" },
            { name: "Girideepam Bethany Central School", distance: "2.1 km", type: "education" },
            { name: "Rubber Board Headquarters", distance: "1.2 km", type: "landmark" }
        ],
        owner: {
            name: "Mathew Tharakan",
            designation: "Owner",
            phone: "+91 94460 77812",
            email: "mathew.t@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-08"
    },
    {
        id: "HT-108",
        title: "DLF The Camellias 4 BHK Ultra-Penthouse",
        tagline: "Unrivalled Grandeur Overlooking the DLF Golf Course",
        purpose: "buy",
        type: "Penthouse",
        city: "Delhi NCR",
        locality: "Golf Course Road, Gurugram",
        address: "Sector 42, Golf Course Road, Gurugram, Haryana 122002",
        state: "Haryana",
        bhk: 4,
        bathrooms: 5,
        balconies: 3,
        carpetArea: 5400,
        builtUpArea: 7100,
        price: 185000000,
        formattedPrice: "₹18.5 Crore",
        pricePerSqft: "₹26,056/sq.ft",
        maintenance: "₹38,000/month",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "North-East",
        floor: "32nd Penthouse Floor",
        parking: "4 Basement Parking Slots",
        reraId: "HRERA-PKL-GGM-103-2018 (Demo Showcase)",
        isReraVerified: true,
        featured: true,
        badge: "Presidential Penthouse",
        images: [
            "assets/images/header.jpg",
            "assets/images/property-4.jpg",
            "assets/images/11.jpg",
            "assets/images/carousel-2.jpg"
        ],
        description: "India's landmark residential masterpiece. Designed for visionary leaders and international dignitaries, this sprawling penthouse provides seamless sweeping panoramas over the pristine Aravalli ranges and the 18-hole championship golf course. Complete with private splash pool, sauna, chef's wet kitchen, and dedicated staff quarters.",
        amenities: [
            "Private Temperature-Controlled Plunge Pool",
            "Championship Golf Course Access",
            "Helipad & Executive Heliservice Access",
            "Private Chef Catering Kitchen",
            "Triple-Tier Security with Sniffer Teams",
            "7-Star Resort Spa & Wellness Pavilions",
            "EV Superchargers"
        ],
        nearbyFacilities: [
            { name: "Rapid Metro Sector 42-43", distance: "600 m", type: "metro" },
            { name: "Fortis Memorial Research Institute", distance: "4.2 km", type: "hospital" },
            { name: "One Horizon Center / Cyber Hub", distance: "2.5 km", type: "commercial" },
            { name: "IGI International Airport Terminal 3", distance: "16 km", type: "airport" }
        ],
        owner: {
            name: "Rohit Oberoi",
            designation: "Hilltop Private Client Advisor",
            phone: "+91 99100 23890",
            email: "rohit.o@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-25"
    },

    // RENTAL PROPERTIES
    {
        id: "HT-201",
        title: "Brigade Gateway 2 BHK Furnished Flat",
        tagline: "Walk-to-Work Lifestyle next to Orion Mall & World Trade Center",
        purpose: "rent",
        type: "Apartment",
        city: "Bengaluru",
        locality: "Rajajinagar / Malleshwaram",
        address: "Brigade Gateway Campus, 26/1 Dr. Rajkumar Road, Bengaluru, Karnataka 560055",
        state: "Karnataka",
        bhk: 2,
        bathrooms: 2,
        balconies: 1,
        carpetArea: 1080,
        builtUpArea: 1390,
        price: 48000,
        formattedPrice: "₹48,000/month",
        securityDeposit: "₹2,50,000",
        depositAmount: 250000,
        maintenance: "₹4,200/month (Included in Rent)",
        availableFrom: "Immediate",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "East",
        floor: "11th of 22 Floors",
        parking: "1 Reserved Basement Car Park",
        reraId: "Not Applicable (Existing Rental Listing)",
        isReraVerified: true,
        featured: true,
        badge: "Zero Brokerage",
        images: [
            "assets/images/property-2.jpg",
            "assets/images/12.jpg",
            "assets/images/Room-Type-Double-Room.webp",
            "assets/images/property-1.jpg"
        ],
        description: "Move straight in! This fully furnished 2 BHK apartment inside the renowned Brigade Gateway integrated township includes Sony Bravia 55-inch smart TV, Samsung double-door refrigerator, front-load washing machine, Queen beds with orthopaedic mattresses, custom wooden study setups, and high-speed fibre broadband readiness.",
        amenities: [
            "Orion Mall Direct Access Walkway",
            "World Trade Center Distance 200m",
            "Olympic-Size Pool & Jacuzzi",
            "Columbia Asia Hospital next door",
            "24/7 Security & Power Backup",
            "Squash, Badminton & Table Tennis"
        ],
        nearbyFacilities: [
            { name: "Sandal Soap Factory Metro Station", distance: "300 m", type: "metro" },
            { name: "Manipal Hospital Malleshwaram", distance: "500 m", type: "hospital" },
            { name: "Orion Mall", distance: "100 m", type: "shopping" },
            { name: "Bangalore City Railway Station (SBC)", distance: "5.5 km", type: "transit" }
        ],
        owner: {
            name: "Harish Belavadi",
            designation: "Landlord / NRI Representative",
            phone: "+91 98451 99201",
            email: "harish.b@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-20"
    },
    {
        id: "HT-202",
        title: "Kakkanad SmartCity 3 BHK Executive Rental",
        tagline: "Perfect Corporate Home near Infopark Phase 1 & 2",
        purpose: "rent",
        type: "Apartment",
        city: "Kochi",
        locality: "Kakkanad",
        address: "Seaport-Airport Road, Near Infopark Expressway, Kakkanad, Kochi, Kerala 682030",
        state: "Kerala",
        bhk: 3,
        bathrooms: 3,
        balconies: 2,
        carpetArea: 1540,
        builtUpArea: 1880,
        price: 32000,
        formattedPrice: "₹32,000/month",
        securityDeposit: "₹96,000 (3 Months Rent)",
        depositAmount: 96000,
        maintenance: "₹3,500/month",
        availableFrom: "1st of Coming Month",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "North-East",
        floor: "8th of 18 Floors",
        parking: "1 Covered Car Parking + Bike",
        reraId: "Demo Rental Listing",
        isReraVerified: true,
        featured: true,
        badge: "Infopark IT Hub",
        images: [
            "assets/images/property-1.jpg",
            "assets/images/Room-Type-Cabana-Room.webp",
            "assets/images/14.jpg",
            "assets/images/carousel-1.jpg"
        ],
        description: "An ideal residence for IT executives and families working at Infopark and SmartCity Kochi. This high-floor 3 BHK apartment features modular kitchen with Franke sink, built-in wardrobes, branded air-conditioners in all bedrooms, geysers in all bathrooms, and fresh airflow over the greens of Chittethukara.",
        amenities: [
            "Swimming Pool & Kids Pool",
            "Air-Conditioned Gym",
            "Round-the-clock Security with Biometric Entrance",
            "Uninterrupted Generator Backup",
            "Covered Badminton Court",
            "Kids Play Park"
        ],
        nearbyFacilities: [
            { name: "Infopark Main Gate", distance: "1.2 km", type: "itpark" },
            { name: "SmartCity Kochi", distance: "2.0 km", type: "itpark" },
            { name: "Rajagiri College of Social Sciences & School", distance: "1.5 km", type: "education" },
            { name: "Sunrise Hospital", distance: "3.2 km", type: "hospital" },
            { name: "Water Metro Terminal Kakkanad", distance: "2.4 km", type: "transit" }
        ],
        owner: {
            name: "Suresh Kurup",
            designation: "Landlord",
            phone: "+91 94474 11223",
            email: "suresh.kurup@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-19"
    },
    {
        id: "HT-203",
        title: "Hiranandani Gardens 2 BHK Scenic Rental Flat",
        tagline: "Neo-Classical Living with Lake Views in Powai",
        purpose: "rent",
        type: "Apartment",
        city: "Mumbai",
        locality: "Powai",
        address: "High Street, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
        state: "Maharashtra",
        bhk: 2,
        bathrooms: 2,
        balconies: 1,
        carpetArea: 890,
        builtUpArea: 1180,
        price: 75000,
        formattedPrice: "₹75,000/month",
        securityDeposit: "₹2,50,000",
        depositAmount: 250000,
        maintenance: "₹5,000/month",
        availableFrom: "Immediate",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "North (Powai Lake Facing)",
        floor: "15th of 26 Floors",
        parking: "1 Reserved Podium Slot",
        reraId: "Demo Rental Listing",
        isReraVerified: true,
        featured: true,
        badge: "Powai Lake View",
        images: [
            "assets/images/property-4.jpg",
            "assets/images/Room-Type-Double-Room.webp",
            "assets/images/15.jpg",
            "assets/images/header.jpg"
        ],
        description: "Situated in the self-sufficient township of Hiranandani Gardens Powai, this European architecture style flat features Italian marble flooring, complete designer wooden furnishings, 3 Daikin inverter ACs, modular kitchen with dishwasher, and peaceful lake breeze throughout the day.",
        amenities: [
            "Powai Lake Jogging Promenade",
            "Hiranandani Forest Club Access",
            "Full 24-Hour Security & CCTV",
            "High-Speed Elevators with Power Backup",
            "Fine Dining & Cafes on High Street",
            "Dr. L. H. Hiranandani Hospital inside Township"
        ],
        nearbyFacilities: [
            { name: "IIT Bombay Campus", distance: "1.2 km", type: "education" },
            { name: "Dr L H Hiranandani Hospital", distance: "400 m", type: "hospital" },
            { name: "Kanjurmarg Railway Station", distance: "3.5 km", type: "transit" },
            { name: "Galleria Shopping Mall", distance: "300 m", type: "shopping" }
        ],
        owner: {
            name: "Anand Deshmukh",
            designation: "Property Manager / Hilltop Elite",
            phone: "+91 98203 77122",
            email: "anand.d@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-23"
    },
    {
        id: "HT-204",
        title: "Technopark Green Heights 3 BHK Flat for Rent",
        tagline: "Minutes from Infosys & UST Global Trivandrum",
        purpose: "rent",
        type: "Apartment",
        city: "Thiruvananthapuram",
        locality: "Kazhakkoottam / Technopark",
        address: "Near Technopark Phase 3 Campus, Kazhakkoottam, Thiruvananthapuram, Kerala 695582",
        state: "Kerala",
        bhk: 3,
        bathrooms: 3,
        balconies: 2,
        carpetArea: 1450,
        builtUpArea: 1750,
        price: 28000,
        formattedPrice: "₹28,000/month",
        securityDeposit: "₹84,000",
        depositAmount: 84000,
        maintenance: "₹2,700/month",
        availableFrom: "Immediate",
        furnishing: "Semi-Furnished",
        possession: "Ready to Move",
        facing: "East",
        floor: "7th of 14 Floors",
        parking: "1 Dedicated Covered Stilt Parking",
        reraId: "Demo Rental Listing",
        isReraVerified: true,
        featured: false,
        badge: "Technopark Walkable",
        images: [
            "assets/images/property-5.jpg",
            "assets/images/Room-Type-Cabana-Room.webp",
            "assets/images/16.jpg",
            "assets/images/carousel-2.jpg"
        ],
        description: "Perfect rental home for IT professionals working in Technopark Phase 1, Phase 3, and Taurus Downtown. Features spacious well-lit rooms, modular kitchen with hob & chimney, wardrobes in all 3 bedrooms, geysers, and serene panoramic views of green palms.",
        amenities: [
            "Swimming Pool & Kids Splash Zone",
            "Modern Gym & Fitness Studio",
            "Rooftop Party Hall",
            "24 Hr Security & Intercom",
            "Covered Car Parking",
            "KWA Water + Borewell Water"
        ],
        nearbyFacilities: [
            { name: "Technopark Phase 3 Campus", distance: "600 m", type: "itpark" },
            { name: "Kazhakkoottam Railway Station", distance: "1.2 km", type: "transit" },
            { name: "Lulu Mall Trivandrum", distance: "6.5 km", type: "shopping" },
            { name: "CSI Mission Hospital", distance: "1.8 km", type: "hospital" }
        ],
        owner: {
            name: "Deepa Sasi",
            designation: "Landlord",
            phone: "+91 94475 88901",
            email: "deepa.s@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-14"
    },
    {
        id: "HT-205",
        title: "Prestige Silver Springs 4 BHK Luxury Rental Villa",
        tagline: "Palatial Gated Community Living on OMR IT Corridor",
        purpose: "rent",
        type: "Independent Villa",
        city: "Chennai",
        locality: "OMR / Sholinganallur",
        address: "Prestige Silver Springs, Rajiv Gandhi Salai (OMR), Sholinganallur, Chennai, Tamil Nadu 600119",
        state: "Tamil Nadu",
        bhk: 4,
        bathrooms: 4,
        balconies: 3,
        carpetArea: 3600,
        builtUpArea: 4200,
        price: 110000,
        formattedPrice: "₹1,10,000/month",
        securityDeposit: "₹6,00,000",
        depositAmount: 600000,
        maintenance: "₹8,500/month",
        availableFrom: "Immediate",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "North",
        floor: "Independent G+2 Luxury Villa with Private Lawn",
        parking: "Porch for 2 Cars + Guest Parking",
        reraId: "Demo Rental Listing",
        isReraVerified: true,
        featured: true,
        badge: "Luxury Gated Villa",
        images: [
            "assets/images/property-3.jpg",
            "assets/images/header.jpg",
            "assets/images/17.jpg",
            "assets/images/Room-Type-Double-Room.webp"
        ],
        description: "Set inside a 18-acre boutique gated enclave on Chennai's prime OMR expressway. This grand villa features private landscaped lawn, personal elevator, home office study, imported marble finishes, Daikin VRV air-conditioning throughout, and Italian modular kitchen with German fittings.",
        amenities: [
            "Private Landscaped Lawn & Wooden Deck",
            "Personal Villa Elevator",
            "Colossal 20,000 sq.ft Clubhouse",
            "Squash Court & Indoor Heated Pool",
            "Solar Power Supported Backup",
            "24/7 Gated Security with Boom Barriers"
        ],
        nearbyFacilities: [
            { name: "Sholinganallur IT SEZ", distance: "1.5 km", type: "itpark" },
            { name: "Gleneagles Global Health City", distance: "3.2 km", type: "hospital" },
            { name: "ECR Beach Promenade", distance: "4.0 km", type: "beach" },
            { name: "Chettinad Sarvalokhaa Education School", distance: "2.1 km", type: "education" }
        ],
        owner: {
            name: "Karthik Sundaram",
            designation: "Hilltop Premier Leasing Specialist",
            phone: "+91 98400 66551",
            email: "karthik.s@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-21"
    },
    {
        id: "HT-206",
        title: "Amanora Park Town 1 BHK Studio Apartment",
        tagline: "Smart Compact Urban Home in India's Awarded Township",
        purpose: "rent",
        type: "Studio",
        city: "Pune",
        locality: "Hadapsar / Kharadi",
        address: "Amanora Park Town, Hadapsar-Kharadi Bypass, Pune, Maharashtra 411028",
        state: "Maharashtra",
        bhk: 1,
        bathrooms: 1,
        balconies: 1,
        carpetArea: 580,
        builtUpArea: 720,
        price: 22000,
        formattedPrice: "₹22,000/month",
        securityDeposit: "₹60,000",
        depositAmount: 60000,
        maintenance: "₹1,800/month",
        availableFrom: "Immediate",
        furnishing: "Fully Furnished",
        possession: "Ready to Move",
        facing: "East",
        floor: "12th of 28 Floors",
        parking: "1 Bike + 1 Stilt Car",
        reraId: "Demo Rental Listing",
        isReraVerified: true,
        featured: false,
        badge: "Budget Friendly",
        images: [
            "assets/images/property-6.jpg",
            "assets/images/Room-Type-Cabana-Room.webp",
            "assets/images/18.jpg",
            "assets/images/property-2.jpg"
        ],
        description: "An efficient, impeccably maintained 1 BHK studio inside the futuristic Amanora Park Town. Fully equipped with sofa-cum-bed, workstation desk with ergonomic chair, LED TV, refrigerator, microwave oven, washing machine, and 24x7 smart utilities management.",
        amenities: [
            "Township Security & Smart Card Entry",
            "Amanora Mall Walking Access",
            "Central 26-Acre Green Park & Lake",
            "Township Fire Station & Ambulances",
            "Fitness Gym & Swimming Pool"
        ],
        nearbyFacilities: [
            { name: "Magarpatta Cybercity", distance: "2.0 km", type: "itpark" },
            { name: "EON Free Zone Kharadi", distance: "4.5 km", type: "itpark" },
            { name: "Noble Hospital", distance: "2.8 km", type: "hospital" },
            { name: "Pune Railway Station", distance: "9.0 km", type: "transit" }
        ],
        owner: {
            name: "Nilesh Joshi",
            designation: "Landlord",
            phone: "+91 98220 18834",
            email: "nilesh.j@hilltoprealestate.in",
            verified: true
        },
        dateAdded: "2026-10-11"
    }
];

// LocalStorage Custom Properties Key
const STORAGE_CUSTOM_PROPERTIES = "hilltop_custom_properties";
const STORAGE_FAVOURITES = "hilltop_favourites";
const STORAGE_RECENT_VIEWS = "hilltop_recent_views";

/**
 * Property Data Service
 */
const PropertyStore = {
    // Get all properties combining default + demo user submissions
    getAllProperties: function() {
        let custom = [];
        try {
            const raw = localStorage.getItem(STORAGE_CUSTOM_PROPERTIES);
            if (raw) {
                custom = JSON.parse(raw);
            }
        } catch (e) {
            console.warn("Could not read custom properties from localStorage", e);
        }
        return [...custom, ...DEFAULT_PROPERTIES];
    },

    // Get single property by ID
    getById: function(id) {
        const all = this.getAllProperties();
        return all.find(p => String(p.id).toLowerCase() === String(id).toLowerCase()) || null;
    },

    // Get properties by purpose ('buy' or 'rent')
    getByPurpose: function(purpose) {
        const all = this.getAllProperties();
        if (!purpose || purpose === "all") return all;
        return all.filter(p => p.purpose.toLowerCase() === purpose.toLowerCase());
    },

    // Get featured properties
    getFeatured: function(limit = 6) {
        const all = this.getAllProperties();
        const featured = all.filter(p => p.featured);
        return featured.slice(0, limit);
    },

    // Get recent properties
    getRecent: function(limit = 6) {
        const all = this.getAllProperties();
        return all.slice(0, limit);
    },

    // Save a new demo property submitted by user
    saveCustomProperty: function(propertyData) {
        try {
            let custom = [];
            const raw = localStorage.getItem(STORAGE_CUSTOM_PROPERTIES);
            if (raw) {
                custom = JSON.parse(raw);
            }
            // Generate demo ID
            const newId = "HT-DEMO-" + Math.floor(1000 + Math.random() * 9000);
            const newProperty = {
                id: newId,
                ...propertyData,
                formattedPrice: propertyData.purpose === 'rent' 
                    ? `₹${Number(propertyData.price).toLocaleString('en-IN')}/month` 
                    : PropertyStore.formatINR(propertyData.price),
                dateAdded: new Date().toISOString().split('T')[0],
                isCustomDemo: true,
                badge: "Demo Submission"
            };
            custom.unshift(newProperty);
            localStorage.setItem(STORAGE_CUSTOM_PROPERTIES, JSON.stringify(custom));
            return newProperty;
        } catch (e) {
            console.error("Error saving custom property:", e);
            return null;
        }
    },

    // Get demo properties submitted by current user
    getCustomProperties: function() {
        try {
            const raw = localStorage.getItem(STORAGE_CUSTOM_PROPERTIES);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    },

    // Delete a demo property
    deleteCustomProperty: function(id) {
        try {
            let custom = this.getCustomProperties();
            custom = custom.filter(p => p.id !== id);
            localStorage.setItem(STORAGE_CUSTOM_PROPERTIES, JSON.stringify(custom));
            return true;
        } catch (e) {
            return false;
        }
    },

    // Format Indian Rupee currency
    formatINR: function(amount, isRent = false) {
        const num = Number(amount);
        if (isNaN(num)) return "₹0";

        if (isRent) {
            return "₹" + num.toLocaleString("en-IN") + "/month";
        }

        if (num >= 10000000) {
            const cr = (num / 10000000).toFixed(2).replace(/\.00$/, "");
            return `₹${cr} Crore`;
        } else if (num >= 100000) {
            const lakh = (num / 100000).toFixed(2).replace(/\.00$/, "");
            return `₹${lakh} Lakhs`;
        } else {
            return `₹${num.toLocaleString("en-IN")}`;
        }
    },

    // Favourites Management
    getFavourites: function() {
        try {
            const raw = localStorage.getItem(STORAGE_FAVOURITES);
            return raw ? JSON.parse(raw) : ["HT-101", "HT-201"];
        } catch (e) {
            return [];
        }
    },

    isFavourite: function(id) {
        const favs = this.getFavourites();
        return favs.includes(String(id));
    },

    toggleFavourite: function(id) {
        let favs = this.getFavourites();
        const strId = String(id);
        const index = favs.indexOf(strId);
        let added = false;
        if (index > -1) {
            favs.splice(index, 1);
            added = false;
        } else {
            favs.push(strId);
            added = true;
        }
        localStorage.setItem(STORAGE_FAVOURITES, JSON.stringify(favs));
        // Trigger event for UI updates
        window.dispatchEvent(new CustomEvent("hilltop:favouritesChanged", { detail: { id, added, count: favs.length } }));
        return added;
    },

    // Recently Viewed
    recordView: function(id) {
        try {
            let views = [];
            const raw = localStorage.getItem(STORAGE_RECENT_VIEWS);
            if (raw) views = JSON.parse(raw);
            views = views.filter(v => v !== id);
            views.unshift(id);
            if (views.length > 8) views = views.slice(0, 8);
            localStorage.setItem(STORAGE_RECENT_VIEWS, JSON.stringify(views));
        } catch (e) {
            console.warn("Could not record view", e);
        }
    },

    getRecentViews: function() {
        try {
            const raw = localStorage.getItem(STORAGE_RECENT_VIEWS);
            const ids = raw ? JSON.parse(raw) : [];
            const all = this.getAllProperties();
            return ids.map(id => all.find(p => p.id === id)).filter(Boolean);
        } catch (e) {
            return [];
        }
    },

    // Filter properties based on query criteria
    filterProperties: function(items, criteria = {}) {
        return items.filter(item => {
            // Purpose (buy / rent)
            if (criteria.purpose && criteria.purpose !== 'all' && item.purpose.toLowerCase() !== criteria.purpose.toLowerCase()) {
                return false;
            }

            // Keyword / Search query (title, locality, city, state, description)
            if (criteria.keyword && criteria.keyword.trim() !== '') {
                const kw = criteria.keyword.toLowerCase().trim();
                const searchCorpus = `${item.title} ${item.locality} ${item.city} ${item.state} ${item.type} ${item.description}`.toLowerCase();
                if (!searchCorpus.includes(kw)) {
                    return false;
                }
            }

            // City filter
            if (criteria.city && criteria.city !== 'all' && criteria.city !== '') {
                if (item.city.toLowerCase() !== criteria.city.toLowerCase()) {
                    return false;
                }
            }

            // Property Type
            if (criteria.type && criteria.type !== 'all' && criteria.type !== '') {
                if (item.type.toLowerCase() !== criteria.type.toLowerCase()) {
                    return false;
                }
            }

            // Bedrooms / BHK
            if (criteria.bhk && criteria.bhk !== 'all' && criteria.bhk !== '') {
                const reqBhk = parseInt(criteria.bhk);
                if (!isNaN(reqBhk)) {
                    if (reqBhk === 4 && item.bhk < 4) return false;
                    else if (reqBhk !== 4 && item.bhk !== reqBhk) return false;
                }
            }

            // Furnishing status
            if (criteria.furnishing && criteria.furnishing !== 'all' && criteria.furnishing !== '') {
                if (item.furnishing.toLowerCase() !== criteria.furnishing.toLowerCase()) {
                    return false;
                }
            }

            // Min Price
            if (criteria.minPrice && !isNaN(criteria.minPrice) && Number(criteria.minPrice) > 0) {
                if (item.price < Number(criteria.minPrice)) return false;
            }

            // Max Price
            if (criteria.maxPrice && !isNaN(criteria.maxPrice) && Number(criteria.maxPrice) > 0) {
                if (item.price > Number(criteria.maxPrice)) return false;
            }

            return true;
        });
    },

    // Sort properties
    sortProperties: function(items, sortBy = 'featured') {
        const sorted = [...items];
        switch (sortBy) {
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'newest':
                return sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            case 'area-desc':
                return sorted.sort((a, b) => b.carpetArea - a.carpetArea);
            case 'featured':
            default:
                return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
    },

    // Render HTML card for a property
    renderPropertyCard: function(prop) {
        const isFav = this.isFavourite(prop.id);
        const favIconClass = isFav ? "bi-heart-fill text-danger" : "bi-heart";
        const primaryImage = prop.images && prop.images.length > 0 ? prop.images[0] : "assets/images/property-1.jpg";
        const purposeBadge = prop.purpose === 'rent' ? '<span class="badge bg-info text-dark">FOR RENT</span>' : '<span class="badge bg-primary">FOR SALE</span>';
        const demoBadge = prop.isCustomDemo ? '<span class="badge bg-warning text-dark ms-1">Demo Listing</span>' : '';
        const priceDisplay = prop.purpose === 'rent' ? prop.formattedPrice : (prop.formattedPrice || this.formatINR(prop.price));

        return `
        <div class="col-lg-4 col-md-6 mb-4 property-card-item" data-id="${prop.id}">
            <div class="card h-100 property-card border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                <div class="property-img-wrapper position-relative overflow-hidden">
                    <img src="${primaryImage}" class="card-img-top property-thumb" alt="${prop.title}" onerror="this.src='assets/images/property-1.jpg'">
                    <div class="property-badges position-absolute top-0 start-0 m-3 d-flex flex-wrap gap-1">
                        ${purposeBadge}
                        ${prop.badge ? `<span class="badge bg-dark bg-opacity-75">${prop.badge}</span>` : ''}
                        ${demoBadge}
                    </div>
                    <button class="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-3 btn-fav shadow-sm" 
                            data-fav-id="${prop.id}" 
                            title="${isFav ? 'Remove from Favourites' : 'Add to Favourites'}"
                            onclick="event.stopPropagation(); HilltopUI.toggleFavourite('${prop.id}', this);">
                        <i class="bi ${favIconClass}"></i>
                    </button>
                    <div class="property-price-tag position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark text-white d-flex justify-content-between align-items-end">
                        <div>
                            <span class="fs-5 fw-bold text-white">${priceDisplay}</span>
                            ${prop.pricePerSqft ? `<small class="d-block text-white-50 fs-xs">${prop.pricePerSqft}</small>` : ''}
                        </div>
                        <span class="badge bg-white text-dark fw-semibold px-2 py-1">${prop.bhk ? prop.bhk + ' BHK' : prop.type}</span>
                    </div>
                </div>
                <div class="card-body p-3 d-flex flex-column">
                    <div class="text-muted small mb-1 d-flex align-items-center">
                        <i class="bi bi-geo-alt-fill text-danger me-1"></i>
                        <span class="text-truncate">${prop.locality}, ${prop.city}</span>
                    </div>
                    <h6 class="card-title fw-bold mb-2">
                        <a href="property-details.html?id=${prop.id}" class="text-dark text-decoration-none property-link-hover">
                            ${prop.title}
                        </a>
                    </h6>
                    <p class="card-text text-muted small text-truncate-2 mb-3">
                        ${prop.tagline || prop.description.substring(0, 110) + '...'}
                    </p>
                    <div class="property-specs d-flex justify-content-between py-2 border-top border-bottom text-muted small my-auto">
                        <div class="d-flex align-items-center gap-1" title="Bedrooms">
                            <i class="bi bi-door-open text-primary"></i> <span>${prop.bhk || 1} Beds</span>
                        </div>
                        <div class="d-flex align-items-center gap-1" title="Bathrooms">
                            <i class="bi bi-droplet text-primary"></i> <span>${prop.bathrooms || 1} Baths</span>
                        </div>
                        <div class="d-flex align-items-center gap-1" title="Carpet Area">
                            <i class="bi bi-bounding-box-circles text-primary"></i> <span>${prop.carpetArea} sq.ft</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-3">
                        <span class="badge bg-light text-secondary border px-2 py-1 font-monospace fs-xs">${prop.possession || 'Ready to Move'}</span>
                        <a href="property-details.html?id=${prop.id}" class="btn btn-outline-primary btn-sm px-3 rounded-pill fw-semibold">
                            View Details <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
};

// Expose globally
window.PropertyStore = PropertyStore;
