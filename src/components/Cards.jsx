import React, { useState } from "react";

const companies = [
  {
    name: "L3Harris",
    rating: "4.0",
    reviews: "6125 reviews",
    description:
      "At L3Harris, we are proud to employ innovators and problem solvers dedicated to delivering mission critical solutions our customers on the front lines depend on..",
    employees: "Aerospace & Defense • more than 10,000 employees",
    imageUrl: "/assets/l2banner.jpg", 
    
    logoUrl: "/assets/l2harrislogo.jpg", 
    link: "https://www.indeed.com/cmp/L3harris", // Add link for redirection
  },

  {
    name: "Lockheed Martin",
    rating: "4.0",
    reviews: "9755 reviews",
    description:
      "Lockheed Martin Canada: #1 Defence Company in 2020 With a rich history supporting collective success across Canadian industry, Lockheed Martin Canada continues to grow this positive impact as Canada",
    employees: "Aerospace & Defense • more than 10,000 employees",
    imageUrl: "/assets/lockheedmartinbanner.jpg", 
    
    logoUrl: "/assets/lockheedlogo.jpg", 
    link: "https://www.indeed.com/cmp/Lockheed-Martin",
  },

  {
    name: "Boeing",
    rating: "3.9",
    reviews: "9896 reviews",
    description:
      "Boeing is the world's largest aerospace company. We’re engineers & technicians. Innovators & dreamers. Join us, and build something better.",
    employees: "Aerospace & Defense • more than 10,000 employees",
    imageUrl: "/assets/boeingbanner.jpg", 
    
    logoUrl: "/assets/boeinglogo.jpg", 
    link: "https://www.indeed.com/cmp/Boeing",
  },

  {
    name: "SpaceX",
    rating: "3.6",
    reviews: "764 reviews",
    description:
      "SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/spacexbanner.jpg", 
    
    logoUrl: "/assets/spacexlogo.jpg", 
    link: "https://www.indeed.com/cmp/Spacex",
  },

  {
    name: "Northrop Grumman",
    rating: "4.0",
    reviews: "7307 reviews",
    description:
      "Northrop Grumman solves the toughest problems in space, aeronautics, defense and cyberspace. Our careers give you opportunities to push the boundary of possible in science, technology and engineering.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/northgroupbanner.jpg", 
    
    logoUrl: "/assets/northgrouplogo.jpg", 
    link: "https://www.indeed.com/cmp/Northrop-Grumman", // Add link for redirection
  },

  {
    name: "Raytheon",
    rating: "3.9",
    reviews: "5120 reviews",
    description:
      "Raytheon, an RTX business, creates next-generation defense solutions that are smarter, faster and better than previously thought possible.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/raytheonbanner.jpg", 
    
    logoUrl: "/assets/raytheonLogo.jpg", 
    link: "https://www.indeed.com/cmp/Raytheon",
  },

  {
    name: "Unifi",
    rating: "2.9",
    reviews: "2076 reviews",
    description:
      "Unifi is the largest aviation services company in North America, located at 200+ airports. With stations in more than 200 airports, we provide a full range of ground aviation services!",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/unifibanner.jpg", 
    
    logoUrl: "/assets/unifilogo.jpg", 
    link: "https://www.indeed.com/cmp/Unifi-6",
  },
  {
    name: "Prospect Airport Services",
    rating: "2.7",
    reviews: "2037 reviews",
    description:
      "Our employees continually strive for professional excellence with a strong work ethic and integrity.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/prospectbanner.jpg", 
    
    logoUrl: "/assets/prospectlogo.jpg", 
    link: "https://www.indeed.com/cmp/Prospect-Airport-Services",
  },

  {
    name: "Collins Aerospace",
    rating: "3.6",
    reviews: "3713 reviews",
    description:
      "Collins Aerospace, an RTX business, is a leader in integrated and intelligent solutions for the global aerospace and defense industry.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/collinsbanner.jpg", 
    
    logoUrl: "/assets/collinsL.jpg", 
    link: "https://www.indeed.com/cmp/Collins-Aerospace", // Add link for redirection
  },
  {
    name: "Amentum",
    rating: "3.8",
    reviews: "5182 reviews",
    description:
      "Our Culture We believe in fostering a sense of belonging, welcoming diversity, including all perspectives and contributions, and providing equal access to opportunities and resources for everyone.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/amentumbanner.jpg", 
    
    logoUrl: "/assets/amentumlogo.jpg", 
    link: "https://www.indeed.com/cmp/Amentum",
  },


  // ?????
  // page2



  {
    name: "Pratt & Whitney",
    rating: "3.9",
    reviews: "1504 reviews",
    description:
      "Pratt & Whitney, an RTX business, is a global leader in propulsion systems, powering the most advanced aircraft in the world, and we are shaping the future of aviation.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/pratbanner.jpg", 
    
    logoUrl: "/assets/pratlogo.jpg", 
    link: "https://www.indeed.com/cmp/Pratt-&-Whitney",
  },
  
  
  {
    name: "Blue Origin",
    rating: "3.1",
    reviews: "151 reviews",
    description:
      "Blue Origin was founded with a vision to enable a future where millions of people are living and working in space to benefit Earth.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/bluebanner.jpg", 
    
    logoUrl: "/assets/bluelogo.jpg", 
    link: "https://www.indeed.com/cmp/Blue-Origin",
  },

  {
    name: "Gulfstream Aerospace",
    rating: "3.7",
    reviews: "1113 reviews",
    description:
      "Leading the way to better, faster and safer flight is all in a day's work at Gulfstream.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/gulfstremaerospacebanner.jpg", 
    
    logoUrl: "/assets/gulfstremaerospace.jpg", 
    link: "https://www.indeed.com/cmp/Gulfstream-Aerospace", // Add link for redirection
  },

  {
    name: "Leidos",
    rating: "3.7",
    reviews: "1844 reviews",
    description:
      "Leidos is a global science and technology solutions leader working to solve the world’s toughest challenges. Our 43,000 employees support vital missions for government and commercial customers.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/leidosbanner.jpg", 
    
    logoUrl: "/assets/leidoslogo.jpg", 
    link: "https://www.indeed.com/cmp/Leidos",
  },

  {
    name: "HII",
    rating: "3.7",
    reviews: "2640 reviews",
    description:
      "We are a world class producers of aero engine and industrial gas turbine components, titanium aero ingots and mill products, fastening systems and forged aluminum truck wheels.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/hiibanner].jpg", 
    
    logoUrl: "/assets/hiilogo.jpg", 
    link: "https://www.indeed.com/cmp/Hii-9",
  },
  {
    name: "Howmet Aerospace",
    rating: "3.0",
    reviews: "600 reviews",
    description:
      "We are a world class producers of aero engine and industrial gas turbine components, titanium aero ingots and mill products, fastening systems and forged aluminum truck wheels.",
    employees: "Aerospace & Defense",
    imageUrl: "/assets/howmebanner.jpg", 
    
    logoUrl: "/assets/howmetlogo.jpg", 
    link: "https://www.indeed.com/cmp/Howmet-Aerospace",
  },

  {
    name: "General Dynamics Electric Boat",
    rating: "3.3",
    reviews: "518 reviews",
    description:
      "General Dynamics Electric Boat is the nation's premier designer and builder of nuclear submarines.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/generaldynamicsbanner.jpg", 
    
    logoUrl: "/assets/gdlogo.jpg", 
    link: "https://www.indeed.com/cmp/General-Dynamics-Electric-Boat",
  },
  {
    name: "BAE Systems",
    rating: "3.8",
    reviews: "1330 reviews",
    description:
      "BAE Systems, Inc. is the U.S. subsidiary of BAE Systems plc, an international defense, aerospace and security company. Meaningful. Empowering. Remarkable. That’s a career at BAE Systems.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "assets/baebanner.jpg", 
    
    logoUrl: "/assets/baelogo.jpg", 
    link: "https://www.indeed.com/cmp/BAE-Systems", // Add link for redirection
  },


  {
    name: "KBR",
    rating: "4.1",
    reviews: "4717 reviews",
    description:
      "We deliver science, technology and engineering solutions to governments and companies around the world",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/kbrbanner.jpg", 
    
    logoUrl: "/assets/kbrlogo.jpg", 
    link: "https://www.indeed.com/cmp/KBR-066162f8",
  },

  {
    name: "CACI International",
    rating: "3.8",
    reviews: "2164 reviews",
    description:
      "CACI is ever vigilant in helping our customers meet their greatest challenges in national security and government transformation.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/cacibanner.jpg", 
    
    logoUrl: "/assets/cacilogo.jpg", 
    link: "https://www.indeed.com/cmp/CACI-International-1",
  },

  // page 3? 

  
  {
    name: "ATI",
    rating: "3.3",
    reviews: "9,842",
    description:
      "ATI is a global producer of high performance materials and solutions for aerospace and defense, and critical applications in electronics, medical and specialty energy. We are proven to perform.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/atilbanner.jpg", 
    
    logoUrl: "/assets/atilogo.jpg", 
    link: "https://www.indeed.com/cmp/Ati-7537f2b7", // Add link for redirection
  },

  {
    name: "Airbus",
    rating: "4.0",
    reviews: "8,123",
    description:
      "We pioneer sustainable aerospace for a safe and united world.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/airbusbanner.jpg", 
    
    logoUrl: "/assets/airbuslogo.jpg", 
    link: "https://www.indeed.com/cmp/Airbus-e4b213b1",
  },
  
  {
    name: "Safran",
    rating: "3.7",
    reviews: "3885 reviews",
    description:
      "",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/sarfanabanner.jpg", 
    
    logoUrl: "/assets/sarfanlogo.jpg", 
    link: "/assets/sarfanlogo.jpg",
  },
  {
    name: "Triple Canopy",
    rating: "3.5",
    reviews: "639 reviews",
    description:
      "Constellis is the leading provider of risk management and operational support services to government and commercial clients worldwide.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/triplecanopybanner.jpg", 
    
    logoUrl: "/assets/triplecanopylogo.jpg", 
    link: "https://www.indeed.com/cmp/Triple-Canopy",
  },

  {
    name: "V2X",
    rating: "3.5",
    reviews: "856 reviews",
    description:
      "Boeing is the world's largest aerospace company. We’re engineers & technicians. Innovators & dreamers. Join us, and build something better.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/v2xbanner.jpg", 
    
    logoUrl: "/assets/v2xlogo.jpg", 
    link: "https://www.indeed.com/cmp/V2x-1", // Add link for redirection
  },

  {
    name: "Parsons",
    rating: "3.9",
    reviews: "1124 reviews",
    description:
      "We welcome self starters who solve problems & believe in integrity, safety, quality, innovation, sustainability, & diversity as core values!",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/parsonbanner.jpg", 
    
    logoUrl: "/assets/parsonlogo.jpg", 
    link: "https://www.indeed.com/cmp/Parsons",
  },

  {
    name: "Textron Aviation",
    rating: "3.9",
    reviews: "898 reviews",
    description:
      "Aerospace & Defense•more than 10,000 employees",
    employees: "When you join Textron Aviation, you join the world's leader in private aviation. We don't just build world-class aircraft, we build an environment that challenges, empowers, and encourages you.",
    imageUrl: "/assets/textronbanner.jpg", 
    
    logoUrl: "/assets/textronlogo.jpg", 
    link: "https://www.indeed.com/cmp/Textron-Aviation",
  },

  {
    name: "Akima",
    rating: "3.4",
    reviews: "648 reviews",
    description:
      "Akima supports a diverse portfolio of operating companies with one strategic goal: enabling superior outcomes for government missions.",
    employees: "",
    imageUrl: "/assets/akimabanner.jpg", 
    
    logoUrl: "/assets/akimalogo.jpg", 
    link: "https://www.indeed.com/cmp/Akima-1",
  },

  {
    name: "BAE Systems USA",
    rating: "3.8",
    reviews: "3579 reviews",
    description:
      "BAE Systems, Inc. is the U.S. subsidiary of BAE Systems plc, an international defense, aerospace and security company. Meaningful. Empowering. Remarkable. That’s a career at BAE Systems",
    employees: "",
    imageUrl: "/assets/baesysbanner.jpg", 
    
    logoUrl: "/assets/baesyslogo.jpg", 
    link: "https://www.indeed.com/cmp/BAE-Systems-USA", // Add link for redirection
  },

  {
    name: "ERMC Aviation LLC",
    rating: "2.6",
    reviews: "185 reviews",
    description:
      "",
    employees: "Aerospace & Defense•501 to 1,000 employees",
    imageUrl: "/assets/ermcbanner.jpg", 
    
    logoUrl: "/assets/ermclogo.jpg", 
    link: "https://www.indeed.com/cmp/Ermc-Aviation-LLC",
  },

  // 3444


  {
    name: "Anduril",
    rating: "2.0",
    reviews: "3 reviews",
    description:
      "Some companies make software. Some make hardware. We do both.",
    employees: "Aerospace & Defense•501 to 1,000 employees",
    imageUrl: "/assets/andurlibanner.jpg", 
    
    logoUrl: "/assets/andurlilogo.jpg", 
    link: "/assets/andurlilogo.jpg",
  },
  {
    name: "Rolls-Royce",
    rating: "4.0",
    reviews: "1671 reviews",
    description:
      "We pioneer the power that matters to connect, power and protect society. Together, we can do amazing things. Join our journey & Make an impact",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/RRbanner.jpg", 
    
    logoUrl: "/assets/RRlogo.jpg", 
    link: "https://www.indeed.com/cmp/Rolls--royce",
  },
  {
    name: "General Atomics",
    rating: "3.6",
    reviews: "795 reviews",
    description:
      "The Freedom to explore. The promise to deliver.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/generalbanner.jpg", 
    
    logoUrl: "/assets/generallogo.jpg", 
    link: "https://www.indeed.com/cmp/General-Atomics", // Add link for redirection
  },
  {
    name: "Moog, Inc",
    rating: "3.7",
    reviews: "714 reviews",
    description:
      "Our company began in 1951 with Bill Moog’s invention, the servovalve, which became the heart of high performance motion control systems.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/moogbanner.jpg", 
    
    logoUrl: "/assets/mooglogo.jpg", 
    link: "https://www.indeed.com/cmp/Moog,-Inc",
  },
  {
    name: "StandardAero",
    rating: "3.4",
    reviews: "359 reviews",
    description:
      "With over a century of proven excellence, StandardAero has become an industry leader in MRO services and customized solutions in the aerospace field.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/standardaerbanner.jpg", 
    
    logoUrl: "/assets/standardaerologo.jpg", 
    link: "https://www.indeed.com/cmp/Standardaero",
  },
  {
    name: "Integrated Deicing Services",
    rating: "4.4",
    reviews: "165 reviews",
    description:
      "IDS, a member of the Inland Group of Companies, focuses solely on the delivery of aircraft deicing and anti-icing services. Collectively, we have safely deiced over 500,000 aircraft.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/integrateddsbanner.jpg", 
    
    logoUrl: "/assets/integrated ds logo.jpg", 
    link: "https://www.indeed.com/cmp/Integrated-Deicing-Services",
  },
  {
    name: "Bell Textron Inc.",
    rating: "3.9",
    reviews: "797 reviews",
    description:
      "We are pioneers. We were the first to break the sound barrier and to certify a commercial helicopter. We were aboard NASA’s first lunar mission and brought advanced tiltrotor systems to the market. Today, we’re defining the future of on-demand mobility and vertical lift. For decades, Bell has made its name known by building aircraft that saves lives. Rapidly delivering and retrieving warfighters in extreme, challenging environments. We’ve been developing agile machinery built for fast transport and swift movement for a while. But creating the next-generation of vertical lift products means thinking above and beyond flight. When it comes to developing the world’s first air taxi or producing life-saving commercial and military aircraft, we have the innovative minds and the relentless drive to revolutionize search and rescue operations, business travel and vertical takeoff and lift. Are you ready to join us?.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/belllbanner.jpg", 
    
    logoUrl: "/assets/belllogo.jpg", 
    link: "https://www.indeed.com/cmp/Bell-Textron-Inc.-1", // Add link for redirection
  },
  {
    name: "Thales",
    rating: "3.9",
    reviews: "2762 reviews",
    description:
      "Thales is a global technology leader with more than 81,000 employees across 68 countries, operating in the markets of defence and security, aerospace and space, digital identity and cybersecurity.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/thalesbanner.jpg", 
    
    logoUrl: "/assets/thaleslogo.jpg", 
    link: "https://www.indeed.com/cmp/Thales",
  },
  {
    name: "Spirit AeroSystems",
    rating: "3.5",
    reviews: "1109 reviews",
    description:
      "We design & build big aerostructures. We need dynamic engineers. When talent and Spirit get together, we can do big things.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/spiritbanner.jpg", 
    
    logoUrl: "/assets/spiritlogo.jpg", 
    link: "https://www.indeed.com/cmp/Spirit-Aerosystems",
  },
  {
    name: "NASA Jet Propulsion Laboratory",
    rating: "4.2",
    reviews: "264 reviews",
    description:
      "",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/nasajbanner.jpg", 
    
    logoUrl: "/assets/nasajlogo.jpg", 
    link: "https://www.indeed.com/cmp/Nasa-Jet-Propulsion-Laboratory-4",
  },

  // ???????????555555555
  {
    name: "Leonardo DRS",
    rating: "3.7",
    reviews: "620 reviews",
    description:
      "Leonardo DRS is committed to supporting the places we live and work, both at home and abroad. Leonardo DRS team members are empowered to create the strongest defense solutions imaginable. Leading provider of defense technologies across three segments for our customers in every military domain.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/leonardobanner.jpg", 
    
    logoUrl: "/assets/leonardologo.jpg", 
    link: "https://www.indeed.com/cmp/Leonardo-Drs", // Add link for redirection
  },
  {
    name: "Textron",
    rating: "3.6",
    reviews: "489 reviews",
    description:
      "Textron Inc. is a $13.4 billion multi-industry company with approximately 35,000 employees.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/textronbanner.jpg", 
    
    logoUrl: "/assets/textronlogo.jpg", 
    link: "https://www.indeed.com/cmp/Textron",
  },
  {
    name: "Johns Hopkins University Applied Physics Laboratory",
    rating: "4.0",
    reviews: "208 reviews",
    description:
      "For more than 75 years, Johns Hopkins APL has provided critical contributions to critical challenges with systems engineering and integration, technology research and development, and analysis.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/johnsbanner.jpg", 
    
    logoUrl: "/assets/johnslogo.jpg", 
    link: "https://www.indeed.com/cmp/Johns-Hopkins-University-Applied-Physics-Laboratory",
  },
  {
    name: "Chenega Corporation",
    rating: "3.5",
    reviews: "804 reviews",
    description:
      "Chenega is the most successful Alaska Native village corporation. We deliver value and innovative solutions to our customers while building equity and providing benefits to our shareholders.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/chenegabanner.jpg", 
    
    logoUrl: "/assets/chenegalogo.jpg", 
    link: "https://www.indeed.com/cmp/Chenega-Corporation",
  },
  {
    name: "ManTech International Corporation",
    rating: "3.9",
    reviews: "1744 reviews",
    description:
      "ManTech provides innovative technologies and solutions for mission-critical national security programs.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/mantechbanner.jpg", 
    
    logoUrl: "/assets/mantechlogo.jpg", 
    link: "https://www.indeed.com/cmp/ManTech-International-Corporation", // Add link for redirection
  },
  {
    name: "SNC",
    rating: "3.6",
    reviews: "299 reviews",
    description:
      "Safeguarding our freedom and inspiring the next generation to make a lasting impact on humanity through technology and imagination.",
    employees: "more than 10,000 employees",
    imageUrl: "/assets/sncbanner.jpg", 
    
    logoUrl: "/assets/snclogo.jpg", 
    link: "https://www.indeed.com/cmp/Snc-91572484",
  },
  {
    name: "ASRC Federal",
    rating: "3.4",
    reviews: "322 reviews",
    description:
      "ASRC Federal’s family of companies deliver successful mission outcomes and elevated performance for federal civilian, defense and intelligence agencies",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/asrcbanner.jpg", 
    
    logoUrl: "/assets/asrclogo.jpg", 
    link: "https://www.indeed.com/cmp/Asrc-Federal",
  },
  {
    name: "BWX Technologies",
    rating: "3.1",
    reviews: "302 reviews",
    description:
      "BWX Technologies, Inc. (BWXT) provides safe and effective nuclear solutions for global security, clean energy, environmental restoration, nuclear medicine and space exploration.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/bwxbanner.jpg", 
    
    logoUrl: "/assets/bwxlogo.jpg", 
    link: "https://www.indeed.com/cmp/Bwx-Technologies",
  },
  {
    name: "SOSi",
    rating: "3.6",
    reviews: "253 reviews",
    description:
      "",
    employees: "Aerospace & Defense•501 to 1,000 employees",
    imageUrl: "/assets/sosibanner.jpg", 
    
    logoUrl: "/assets/sosilogo.jpg", 
    link: "https://www.indeed.com/cmp/Sosi", // Add link for redirection
  },
  {
    name: "FlightSafety International",
    rating: "3.5",
    reviews: "351 reviews",
    description:
      "FlightSafety International views safety as a promise and commitment. We build trust over time and continue to earn it each day. Since our founding in 1951, our instructors, engineers, technicians and teammates have greatly contributed to aviation safety around the world. Through comprehensive training programs taught by top instructors. By designing and manufacturing advanced-technology flight simulators and products that provide unmatched realism.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/flightbanner.jpg", 
    
    logoUrl: "/assets/flightsafetylogo.jpg", 
    link: "https://www.indeed.com/cmp/Flightsafety-International",
  },

  // ??????666  
  {
    name: "Teledyne",
    rating: "3.5",
    reviews: "956 reviews",
    description:
      "Teledyne provides enabling technologies for industrial growth markets. We have evolved from a company that was primarily focused on aerospace and defense to one that serves multiple markets that require advanced technology and high reliability. These markets include deepwater oil and gas exploration and production, oceanographic research, air and water quality environmental monitoring, electronics design and development, factory automation and medical imaging. Our products include monitoring and control instrumentation for marine and environmental applications, harsh environment interconnects, electronic test and measurement equipment, digital imaging sensors and cameras, aircraft information management systems, and defense electronics and satellite communication subsystems. We differentiate ourselves from many of our direct competitors by having a customer and company sponsored applied research center that augments our product development expertise. Our strategy continues to emphasize growth in our core markets of instrumentation, digital imaging, aerospace and defense electronics and engineered systems. Our core markets are characterized by high barriers to entry and include specialized products and services not likely to be commoditized. We intend to strengthen and expand our core businesses with targeted acquisitions and through product development. We aggressively pursue operational excellence to continually improve our margins and earnings. At Teledyne, operational excellence includes the rapid integration of the businesses we acquire. Using complementary technology across our businesses and internal research and development, we seek to create new products to grow our company and expand our addressable markets.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/teledynebanner.jpg", 
    
    logoUrl: "/assets/teledynelogo.jpg", 
    link: "https://www.indeed.com/cmp/Teledyne",
  },
  {
    name: "General Dynamics Mission Systems",
    rating: "3.6",
    reviews: "573 reviews",
    description:
      "When you join General Dynamics, you’ll become part of a world class team that inspires innovation.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/generalbanner.jpg", 
    
    logoUrl: "/assets/generaldynamics logo.jpg", 
    link: "https://www.indeed.com/cmp/General-Dynamics-Mission-Systems",
  },
  {
    name: "M&C Assemblies Inc",
    rating: "2.9",
    reviews: "115 reviews",
    description:
      "",
    employees: "Aerospace & Defense",
    imageUrl: "", 
    
    logoUrl: "/assets/mnclogo.jpg", 
    link: "https://www.indeed.com/cmp/M&C-Assemblies-Inc", // Add link for redirection
  },
  {
    name: "AAR Corp",
    rating: "3.2",
    reviews: "657 reviews",
    description:
      "AAR is a leading provider of aviation services to commercial and government customers in more than 100 countries.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/aarbanner.jpg", 
    
    logoUrl: "/assets/aarlogo.jpg", 
    link: "https://www.indeed.com/cmp/Aar-Corp.",
  },
  {
    name: "Bombardier",
    rating: "3.8",
    reviews: "3445 reviews",
    description:
      "The world's only manufacturer of both planes and trains.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/bobmardirbanner.jpg", 
    
    logoUrl: "/assets/bobmardiarlogo.jpg", 
    link: "https://www.indeed.com/cmp/Bombardier",
  },
  {
    name: "The Aerospace Corporation",
    rating: "3.9",
    reviews: "155 reviews",
    description:
      "Aerospace provides independent technical and scientific research, development, and advisory services to national security space programs.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/theaerspacebanner.jpg", 
    
    logoUrl: "/assets/theaerspacelogo.jpg", 
    link: "https://www.indeed.com/cmp/The-Aerospace-Corporation",
  },
  {
    name: "Chromalloy",
    rating: "3.4",
    reviews: "510 reviews",
    description:
      "For over 70 years, Chromalloy has engineered solutions that extend the life of gas turbine engines. Our innovative solutions support the aerospace, energy and military industries around the world.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/chromallybanner'.jpg", 
    
    logoUrl: "/assets/chromallylogo.jpg", 
    link: "https://www.indeed.com/cmp/Chromalloy", // Add link for redirection
  },
  {
    name: "M1 Support Services",
    rating: "3.8",
    reviews: "166 reviews",
    description:
      "M1 Support Services is a veteran-owned, woman-owned business providing aviation support, logistics, information technology, training, supply chain management, acquisition, and facilities and equipment maintenance. We are looking for individuals that excel when challenged, innovative thinkers, and people with integrity. Our employees have unmatched expertise and are passionate about making a difference in their personal and professional lives.",
    employees: "Aerospace & Defense",
    imageUrl: "", 
    
    logoUrl: "/assets/m1logo.jpg", 
    link: "https://www.indeed.com/cmp/M1-Support-Services",
  },
  {
    name: "Hexcel Corporation",
    rating: "3.5",
    reviews: "453 reviews",
    description:
      "Hexcel is a global leader in advanced composites technology. We develop and manufacture lightweight, high-performance structural materials.",
    employees: "",
    imageUrl: "/assets/hexcelbanner.jpg", 
    
    logoUrl: "/assets/hexcellogo.jpg", 
    link: "https://www.indeed.com/cmp/Hexcel-Corporation",
  },
  {
    name: "GKN Aerospace",
    rating: "3.3",
    reviews: "1250 reviews",
    description:
      "With manufacturing facilities in 12 countries covering Asia Pacific, Europe and the Americas we produce aerostructures, engine systems electrical wiring systems, landing gear and transparencies for 90.",
    employees: "more than 10,000 employees",
    imageUrl: "/assets/Gknbanner.jpg", 
    
    logoUrl: "/assets/Gknlogo.jpg", 
    link: "https://www.indeed.com/cmp/Gkn-Aerospace-434e5ec2",
  },

  // 7777
  {
    name: "GHANA ARMED FORCES",
    rating: "4.3",
    reviews: "56 reviews",
    description:
      "Since its establishment, the Academy has produced over 3,500 Ghanaian Officers.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/ghanabanner.jpg", 
    
    logoUrl: "/assets/ghanalogo.jpg", 
    link: "https://www.indeed.com/cmp/Ghana-Armed-Forces", // Add link for redirection
  },
  {
    name: "MIT Lincoln Laboratory",
    rating: "4.2",
    reviews: "125 reviews",
    description:
      "Research and development of technology solutions in support of national defense is the primary mission of MIT Lincoln Laboratory.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/mitbanner.jpg", 
    
    logoUrl: "/assets/mitlogo.jpg", 
    link: "https://www.indeed.com/cmp/MIT-Lincoln-Laboratory",
  },
  {
    name: "Mesa Airlines",
    rating: "2.8",
    reviews: "509 reviews",
    description:
      "Mesa Airlines is the perfect place to begin your airline career or grow as a professional. We are a diverse group of pilots, flight attendants, mechanics, and corporate professionals.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/mesaairlinebanner.jpg", 
    
    logoUrl: "/assets/mesaairlineslogo.jpg", 
    link: "https://www.indeed.com/cmp/Mesa-Airlines",
  },
  {
    name: "General Dynamics Land Systems",
    rating: "3.5",
    reviews: "333 reviews",
    description:
      "General Dynamics Land Systems is the global leader in designing and manufacturing land combat vehicles for the U.S. military and its allies.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/generaldynamicslandbanner.jpg", 
    
    logoUrl: "/assets/generaldynamics logo.jpg", 
    link: "https://www.indeed.com/cmp/General-Dynamics-Land-Systems",
  },
  
  {
    name: "General Dynamics Ordnance and Tactical Systems",
    rating: "3.3",
    reviews: "121 reviews",
    description:
      "General Dynamics Ordnance and Tactical Systems empowers the U.S. military and its allies with an extensive range of overarching product segments applied across all levels of strategic and tactical operations.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/generaldynamicsesebanner.jpg", 
    
    logoUrl: "/assets/generaldynamics logo.jpg", 
    link: "https://www.indeed.com/cmp/General-Dynamics-Ordnance-and-Tactical-Systems", // Add link for redirection
  },
  {
    name: "CAE",
    rating: "3.6",
    reviews: "430 reviews",
    description:
      "At CAE, we equip people in critical roles with the expertise and digitally immersive solutions to create a safer world.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/caebanner.jpg", 
    
    logoUrl: "/assets/caelogo.jpg", 
    link: "https://www.indeed.com/cmp/Cae-f55b2a2a",
  },
  {
    name: "Redcon Solutions Group",
    rating: "3.4",
    reviews: "32 reviews",
    description:
      "",
    employees: "Aerospace & Defenses",
    imageUrl: "", 
    
    logoUrl: "/assets/redconlogo.jpg", 
    link: "https://www.indeed.com/cmp/Redcon-Solutions-Group-1",
  },
  
  {
    name: "Draper",
    rating: "3.9",
    reviews: "112 reviews",
    description:
      "At Draper, we believe exciting things happen when we combine our diverse disciplines to imagine and create new solutions.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/draperbanner.jpg", 
    
    logoUrl: "/assets/draperlogo.jpg", 
    link: "https://www.indeed.com/cmp/Draper-1",
  },
  {
    name: "U.S. Marshals Service",
    rating: "4.3",
    reviews: "182 reviews",
    description:
      "The ethics program in the U.S. Marshals Service is administered by the Office of General Counsel. Within the Office of General Counsel are members of the Ethics Team who advise employees, provide ethics training, collect and review public and confidential financial disclosure reports filed by employees required to complete such reports on an annual basis, and complete ethics reports, as required, that are sent to the Department of Justice and the Office of Government Ethics.The U.S. Marshals Service is committed to the highest standards of ethical behavior as a law enforcement agency entrusted with important authorities on behalf of the American public. To uphold these high ethical standards, all U.S. Marshals Service employees are made aware of important ethics rules and policies on a continuous basis, and many receive annual ethics training.A larger number of employees from all 94 districts and divisions request, receive, and rely on ethics advice and assistance provided by the Ethics Team attorneys",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/usmarshalbanner.jpg", 
    
    logoUrl: "/assets/usmarshallogo.jpg", 
    link: "https://www.indeed.com/cmp/U.S.-Marshals-Service", // Add link for redirection
  },
  {
    name: "Excelsior Defense",
    rating: "3.4",
    reviews: "67 reviews",
    description:
      "",
    employees: "Aerospace & Defense•201 to 500 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/logooooo.png", 
    link: "https://www.indeed.com/cmp/Excelsior-Defense",
  },



  // 8888
  
  
  {
    name: "Air France",
    rating: "4.1",
    reviews: "1089 reviews",
    description:
      "Through its operating units, the company serves more than 250 destinations in about 125 countries with a fleet of some 590 aircraft.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/airfrancebanner.jpg", 
    
    logoUrl: "/assets/airfrancelogo.jpg", 
    link: "https://www.indeed.com/cmp/Air-France",
  },
  {
    name: "Quantem Aviation Services",
    rating: "3.4",
    reviews: "250 reviews",
    description:
      "Quantem Aviation Services (QAS) is a premier aviation service provider. We have been offering a wide array of critical assistance to major airlines and airport authorities since 1992.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/quantembanner.jpg", 
    
    logoUrl: "/assets/quantemlogo.jpg", 
    link: "https://www.indeed.com/cmp/Quantem-Aviation-Services",
  },
  
  {
    name: "Consolidated Precision Products",
    rating: "2.8",
    reviews: "176 reviews",
    description:
      "Consolidated Precision Products (CPP) is an industry-leading manufacturer of highly-engineered components and sub-assemblies.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/consolibanner.jpg", 
    
    logoUrl: "/assets/consolilogo.jpg", 
    link: "https://www.indeed.com/cmp/Lockheed-Martin",
  },
  {
    name: "Jet Aviation",
    rating: "3.4",
    reviews: "235 reviews",
    description:
      "WHO WE ARE Jet Aviation is proud to be the world’s leading business aviation service provider – from aircraft management, flight support, staffing, and charter, to expert maintenance and completions. At destinations in Europe, North America, the Middle East and Asia, our 4000+ employees are the best and most diverse experts delivering all of the assistance, care and technical support that customers need for safe flights in the highest style and comfort. HOW WE WORK Being in one of the most challenging and fast-paced industries in the world, Jet Aviation offers an environment that is engaging, dynamic and rewarding. You will be a part of a diverse, inclusive and multicultural workforce who are passionate and proud of the work that they do. Our teams not only work together and across functional boundaries, but also enjoy and foster a welcoming and friendly workplace. If you are interested in joining, we want to hear from you. A PLACE FOR YOU At Jet Aviation, we offer rewarding job roles and career opportunities that encourage personal and professional development. We are dedicated to cultivating the right kind of growth, across all skillsets, experiences and qualifications, and offer a competitive total reward. If you are looking for internship, graduate or opportunities to progress your professional career, we want to hear from you.",
    employees: "Aerospace & Defense",
    imageUrl: "/assets/jetaviatinbanner.jpg", 
    
    logoUrl: "/assets/jetaviatinlogo.jpg", 
    link: "https://www.indeed.com/cmp/Jet-Aviation",
  },
  {
    name: "Embraer",
    rating: "44.4",
    reviews: "1146 reviews",
    description:
      "We never rest on our laurels. Embraer is the fruit of perseverance and determination, and is the combination of the most advanced technologies and the diverse passions of its people.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/embrarerbanner.jpg", 
    
    logoUrl: "/assets/embrarerlogo.jpg", 
    link: "https://www.indeed.com/cmp/Embraer",
  },
  {
    name: "Turkish Airlines",
    rating: "4.1",
    reviews: "231 reviews",
    description:
      "Founded in 1933 with a modest fleet of 5 aircraft, Star Alliance member Turkish Airlines is an airline company that flies to more than 300 destinations in the world with a fleet of more than 300 (passenger and cargo) aircraft. More information about Turkish Airlines can be found on www.turkishairlines.com or on our Facebook, Twitter, YouTube, Linkedin and Instagram accounts.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/turkishairlineslogo.jpg", 
    link: "https://www.indeed.com/cmp/Turkish-Airlines", // Add link for redirection
  },
  {
    name: "Rocket Lab USA",
    rating: "3.0",
    reviews: "14 reviews",
    description:
      "",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/Rocketlablogo.jpg", 
    link: "https://www.indeed.com/cmp/Rocket-Lab-USA",
  },
  {
    name: "Chicago Police Department",
    rating: "4.0",
    reviews: "201 reviews",
    description:
      "The Chicago Police Memorial Foundation is a not-for-profit organization dedicated to honoring the lives of our fallen heroes. The Foundation provides support and assistance to the families of Chicago police officers who are killed or catastrophically injured in the line of duty.",
    employees: "Aerospace & Defense•2 to 10 employees",
    imageUrl: "/assets/chicagobanner.jpg", 
    
    logoUrl: "/assets/chicagologo.jpg", 
    link: "https://www.indeed.com/cmp/Chicago-Police-Department",
  },
  {
    name: "Firefly Aerospace",
    rating: "3.3",
    reviews: "46 reviews",
    description:
      "Firefly Aerospace is a U.S. based advanced space technology developmental organization focusing on the leading edge of space systems progression. We are straight up, easy to deal with, put people first and avoid bureaucracy. If you are someone who is good at what you do, and would like to work with people who really want to make a difference, then this is the place for you.",
    employees: "Aerospace & Defense•51 to 200 employees",
    imageUrl: "/assets/fireflybanner.jpg", 
    
    logoUrl: "/assets/freflylogo.jpg", 
    link: "https://www.indeed.com/cmp/Firefly-Aerospace",
  },
  {
    name: "Lufthansa Technik",
    rating: "3.9",
    reviews: "392 reviews",
    description:
      "",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/lufthansabanner.jpg", 
    
    logoUrl: "/assets/lufthansalogo.jpg", 
    link: "https://www.indeed.com/cmp/Lufthansa-Technik", // Add link for redirection
  },


  // 

  {
    name: "Japan Airlines",
    rating: "3.9",
    reviews: "102 reviews",
    description:
      "Japan Airlines Co., Ltd. (JAL) (日本航空株式会社, Nihon Kōkū Kabushiki-gaisha, TYO: 9201), is the flag carrier of Japan and the second largest airline in Japan after All Nippon Airways. It is headquartered in Shinagawa, Tokyo, Japan; and its main hubs are Tokyo's Narita International Airport and Tokyo International Airport (Haneda Airport), as well as Osaka's Kansai International Airport and Osaka International Airport",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/japan.jpg", 
    link: "https://www.indeed.com/cmp/Japan-Airlines", // Add link for redirection
  },


  {
    name: "National Geospatial-Intelligence Agency",
    rating: "4.1",
    reviews: "221 reviews",
    description:
      "The National Geospatial-Intelligence Agency delivers world-class geospatial intelligence that provides a decisive advantage to warfighters, policymakers, intelligence professionals & first responders.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/nationalgeobanner.jpg", 
    
    logoUrl: "/assets/nationalgeologo.jpg", 
    link: "https://www.indeed.com/cmp/National-Geospatial--intelligence-Agency",
  },

  {
    name: "Kratos Defense",
    rating: "3.3",
    reviews: "188 reviews",
    description:
      "",
    employees: "Aerospace & Defense",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/kratoslogo.jpg", 
    link: "https://www.indeed.com/cmp/Kratos-Defense",
  },

  {
    name: "National Aviation Services",
    rating: "2.7",
    reviews: "147 reviews",
    description:
      "National Aviation Services- expert Aircraft Appearance and Airport Facility Maintenance Specialists.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/nationalaviationbanner2.jpg", 
    
    logoUrl: "/assets/nationalaviationlogo.jpg", 
    link: "https://www.indeed.com/cmp/National-Aviation-Services",
  },
  {
    name: "Bodycote",
    rating: "3.1",
    reviews: "334 reviews",
    description:
      "Bodycote plc is a supplier of heat treatments, metal joining, hot isostatic pressing and coatings services. Based in Macclesfield, United Kingdom, it is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/bodycotelogo.jpg", 
    link: "https://www.indeed.com/cmp/Bodycote/reviews", // Add link for redirection
  },

  {
    name: "United Launch Alliance (ULA)",
    rating: "3.6",
    reviews: "208 reviews",
    description:
      "ULA is harnessing the potential of space for humanity. We are dreamers inspired by possibilities not yet imagined, believers driven to broaden horizons, and doers combining technology, innovation, expertise, ingenuity and a commitment to the extraordinary.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/unitedbanner.jpg", 
    
    logoUrl: "/assets/unitedlogo.jpg", 
    link: "https://www.indeed.com/cmp/United-Launch-Alliance-(ula)",
  },

  {
    name: "Valiant Integrated Services",
    rating: "3.2",
    reviews: "162 reviews",
    description:
      "VALIANT EMPOWERS THE WORLD’S MOST CRITICAL MISSIONS BY TRAINING, EQUIPPING, PROTECTING, SUSTAINING, AND SUPPORTING THOSE WHO SERVE.",
    employees: "Aerospace & Defense•5,001 to 10,000 employees",
    imageUrl: "/assets/valiantbanner.jpg", 
    
    logoUrl: "/assets/valiantlogo.jpg", 
    link: "https://www.indeed.com/cmp/Valiant-Integrated-Services",
  },

  {
    name: "Maxar Technologies",
    rating: "3.6",
    reviews: "452 reviews",
    description:
      "Maxar Technologies is organized into two core businesses with distinct focuses. Maxar Intelligence and Maxar Space Systems.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/maxarbanner.jpg", 
    
    logoUrl: "/assets/maxarlogo.jpg", 
    link: "https://www.indeed.com/cmp/Maxar-Technologies",
  },

  {
    name: "SITA",
    rating: "3.8",
    reviews: "412 reviews",
    description:
      "SITA is a multinational information technology company providing IT and telecommunication services to the air transport industry. The company provides its services to over 430 members and 2,800 customers worldwide which is around 90% of the world's airline business.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/SITAAA.jpg", 
    link: "https://www.indeed.com/cmp/Sita", // Add link for redirection
  },

  {
    name: "Cathay Pacific",
    rating: "3.9",
    reviews: "487 reviews",
    description:
      "Cathay Pacific (Chinese: 國泰航空) (SEHK: 0293) is the largest airline of Hong Kong, with its head office and main hub located at Hong Kong International Airport. The airline's operations include scheduled passenger and cargo services to 200 destinations in 52 countries worldwide, codeshares, and joint ventures, with a fleet of wide-body aircraft, consisting of Airbus A330, Airbus A340, Boeing 747 and Boeing 777 equipment.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/cathylogo.jpg", 
    link: "https://www.indeed.com/cmp/Cathay-Pacific/reviews",
  },

  // sf
  
  {
    name: "Cyient",
    rating: "3.5",
    reviews: "1044 reviews",
    description:
      "DESIGNING TOMORROW TOGETHER. That is our vision and the basis of our brand promise. Three simple words that describe our unique approach.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/cyiban.jpg", 
    
    logoUrl: "/assets/cyilog.jpg", 
    link: "https://www.indeed.com/cmp/Cyient",
  },

  {
    name: "Triumph Group, Inc.",
    rating: "3.2",
    reviews: "872 reviews",
    description:
      "Triumph Group participates at all levels of the aerospace supply chain – from single components, to complex systems, to aerospace structures and their contents..",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/triumphbanner.jpg", 
    
    logoUrl: "/assets/triumphlogo.jpg", 
    link: "https://www.indeed.com/cmp/Triumph-Group,-Inc.",
  },

  {
    name: "HX5",
    rating: "4.1",
    reviews: "30 reviews",
    description:
      "HX5, LLC was established in Fort Walton Beach, FL in 2004, by Margarita Urbieta Howard.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/hx5banner.jpg", 
    
    logoUrl: "/assets/hx5logo.jpg", 
    link: "https://www.indeed.com/cmp/Hx5", // Add link for redirection
  },

  {
    name: "APEX SECURITY",
    rating: "3.6",
    reviews: "57 reviews",
    description:
      "Our line of security products offer an unbeatable combination of leading-edge technology and industry experience. The results are tried, tested and durable security solutions of the highest quality that are easy to install, easy to use, and are easily upgradable.",
    employees: "Aerospace & Defense",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/apexlogo.jpg", 
    link: "https://www.indeed.com/cmp/Apex-Security",
  },

  {
    name: "General Dynamics",
    rating: "3.8",
    reviews: "2531 reviews",
    description:
      "Headquartered in Falls Church, Virginia, General Dynamics Corporation is a leading defense and aerospace contractor.",
    employees: "Aerospace & Defense•more than 10,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/generaldynamics logo.jpg", 
    link: "https://www.indeed.com/cmp/General-Dynamics",
  },

  {
    name: "Systems Planning and Analysis, Inc. (SPA)",
    rating: "3.5",
    reviews: "59 reviews",
    description:
      "Systems Planning and Analysis, Inc. (SPA) brings a ready team of the right people, processes and unique tools to deliver forward looking solutions to address the nation's critical concerns. We are a professional services provider with a long-standing reputation for unrivaled technical and analytical support to national executive decision makers. Providing timely, objective and cost-effective solutions that maximize performance and minimize risk are critical to impacting important decisions that are made every day. We have developed multiple models and tools that enable us to perform timely and relevant analysis for our clients in areas such as Optimization, Modeling and Simulation and Data and Decision Analytics. Our tailored design provides customized solutions for our clients to address any problems regardless of scale or complexity.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/systemplanningbanner.jpg", 
    
    logoUrl: "/assets/systemplanninglogo.jpg", 
    link: "https://www.indeed.com/cmp/Systems-Planning-and-Analysis,-Inc.-(spa)",
  },

  {
    name: "Avflight",
    rating: "2.8",
    reviews: "146 reviews",
    description:
      "Avflight is a privately held company with 21 unique locations serving the global aviation industry.",
    employees: "Aerospace & Defense•501 to 1,000 employees",
    imageUrl: "/assets/avflightbanner.jpg", 
    
    logoUrl: "/assets/avflightlogo.jpg", 
    link: "https://www.indeed.com/cmp/Avflight",
  },

  {
    name: "Ducommun",
    rating: "3.1",
    reviews: "357 reviews",
    description:
      "Ducommun is a global provider of innovative manufacturing solutions for customers in aerospace, defense and industrial markets.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/ducommunbanner.jpg", 
    
    logoUrl: "/assets/ducommunlogo.jpg", 
    link: "https://www.indeed.com/cmp/Ducommun-9",
  },

  {
    name: "Astrion",
    rating: "3.2",
    reviews: "520 reviews",
    description:
      "",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/astrionbanner.jpg", 
    
    logoUrl: "/assets/astrionlogo.jpg", 
    link: "https://www.indeed.com/cmp/Astrion",
  },

  {
    name: "Barnes Aerospace",
    rating: "3.1",
    reviews: "180 reviews",
    description:
      "Barnes Aerospace continues to grow the successes of today’s industry best practices while leading tomorrow’s innovative solutions - with the goal of serving all aerospace customers across the life of their products. Barnes Aerospace is committed to providing our customers with a “total solutions package” by leveraging the synergies between our “Original Equipment Manufacturing” (OEM) and our Maintenance, Repair and Overhaul (MRO) businesses. Our combined MRO and OEM operations, Special Processes and established Centers of Excellence enable Barnes Aerospace to address the ever-changing, complex needs of our aerospace customers quickly and efficiently - and to support products throughout the entire product lifecycle. As a formidable presence in the aerospace manufacturing industry, and backed by the financial strength and over 160 year history of Barnes Group Inc., Barnes Aerospace is in a unique position to bridge gaps and combine offerings for customers in commercial and Military Aviation. Barnes Aerospace’s machining and fabrication operations produce Critical Engine and Airframe Components through technically advanced processes. Our aftermarket facilities, specializing in Highly Engineered Components and Assemblies such as cases, rotating air seals, shrouds, and honeycomb air seals, also offer repair and refurbishment of our manufactured components.",
    employees: "Aerospace & Defense•1,001 to 5,000 employees",
    imageUrl: "/assets/banner.png", 
    
    logoUrl: "/assets/barneslogo.jpg", 
    link: "https://www.indeed.com/cmp/Barnes-Aerospace",
  },
];


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = companies.slice(indexOfFirstCard, indexOfLastCard);

  // Functions to handle page navigation
  const nextPage = () => {
    if (indexOfLastCard < companies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-8 px-4 w-full flex items-center justify-center flex-col">
      {/* Sorted by Popularity Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Sorted by Popularity</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-y-6 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {currentCards.map((company, index) => (
          <a
            key={index}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md"
          >
            <div
              className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition duration-100 ease-out relative"
              style={{ height: "500px", maxWidth: "100%" }} // Responsive width
            >
              {/* Banner Image */}
              <div className="relative w-full h-36 sm:h-40 md:h-48 lg:h-40">
                <img
                  src={company.imageUrl}
                  alt={`${company.name} banner`}
                  className="w-full h-full object-cover"
                />
                {/* Logo */}
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="absolute left-4 top-3/4 transform -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-white rounded-lg"
                />
              </div>

              {/* Card Content */}
              <div className="pl-20 mt-10 sm:pl-24">
                <h2 className="text-lg font-bold">{company.name}</h2>
                <p className="text-purple-500 text-sm">★ {company.rating}</p>
                <p className="text-gray-600 text-sm mt-1">{company.reviews}</p>

                {/* Below Logo */}
                <div className="mt-2">
                  <p className="text-gray-500 text-sm">{company.employees}</p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {company.description}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-start mt-4 space-x-2">
                <button className="border border-blue-500 text-blue-500 py-1 px-4 rounded hover:text-black hover:border-black transition duration-100 ease-out">
                  Explore
                </button>
                <button className="text-blue-500 py-1 px-4 rounded hover:text-black transition duration-100 ease-out">
                  See Jobs
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastCard >= companies.length}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Cards;
