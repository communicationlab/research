/* ============================================================================
   data.js  —  SINGLE SOURCE OF TRUTH
   ----------------------------------------------------------------------------
   Everything the website shows lives here. To add or edit content, you only
   ever touch THIS file — no HTML changes needed.

     • Add a paper      -> add an object to  PUBLICATIONS
     • Add a project    -> add an object to  PROJECTS
     • Add a research    -> add an object to  RESEARCH
     • Add a person     -> add an object to  PEOPLE
     • Rename the lab   -> edit             SITE

   Keep the field names the same; the pages read them automatically.
   ========================================================================== */

const SITE = {
  labName:  "Communication Systems Research Group",
  labShort: "CSRG",
  subtitle: "Wireless · Optical · Intelligent Communication Systems",
  department: "Department of Electrical & Electronic Engineering",
  school: "BSRM School of Engineering, BRAC University",
  address: "Kha-224, Bir Uttam Rafiqul Islam Ave, Merul Badda, Dhaka 1212, Bangladesh",
  email: "crl@bracu.ac.bd",          // <- lab contact email (edit to your real one)
  phone: "+880 9638 464646",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.296056615635!2d90.42047627822032!3d23.772469623619408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78e49160331%3A0x2fd8ec432cec9fc4!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1707842777541!5m2!1sen!2sbd",

  // Hero copy (home page)
  heroKicker: "BRAC University · EEE",
  heroTitle: "Engineering how information moves through spectrum and space.",
  heroLead: "We research next-generation wireless, optical, and intelligent communication systems — from dynamic spectrum sharing and 6G to optical camera communication and deep-reinforcement-learned networks.",

  // Headline numbers on the home page (edit freely)
  stats: [
    { value: 100, suffix: "+", label: "Peer-reviewed publications" },
    { value: 700, suffix: "+", label: "Citations" },
    { value: 2,   suffix: "",  label: "Core faculty" },
    { value: 8,   suffix: "+", label: "Research thrusts" }
  ]
};

/* ===========================================================================
   PEOPLE
   ========================================================================= */
const PEOPLE = [
  {
    id: "saha",
    name: "Dr. Rony Kumer Saha",
    role: "Associate Professor",
    photo: "https://engineering.bracu.ac.bd/uploads/bsrm-members/1743741145.jpg",
    room: "4E04",
    ext: "1808",
    tags: ["6G", "Spectrum Sharing", "mmWave / THz", "Small Cells"],
    links: {
      profile: "https://engineering.bracu.ac.bd/profile/rony-kumer-saha-phd",
      website: "https://sites.google.com/site/rks107976/crictec/home",
      scholar: "https://scholar.google.com/",
      linkedin: ""
    },
    short: "Associate Professor of EEE and member of the Dynamic Spectrum Management Group at Stanford's STAR Laboratory. Fifteen years of research in mobile wireless communications across academia and industry, with 75+ peer-reviewed papers and a Japanese patent.",
    bio: [
      "Dr. Rony Kumer Saha is an Associate Professor in the Department of Electrical and Electronic Engineering at BRAC University. Since February 2023 he has been a member of the Dynamic Spectrum Management Group at the STAR Laboratory, Stanford University, and served as a Visiting Professor of Electrical Engineering at Stanford from February to May 2023.",
      "Earlier he was a Postdoctoral Researcher across the Optical Access Network, Wireless Platform, and Radio & Spectrum Laboratories at KDDI Research, Inc., Japan (2017–2022), and held faculty positions at American International University-Bangladesh and East West University. He has authored 75+ peer-reviewed international journal and conference papers and filed a Japanese patent.",
      "He received BRAC University's Quality Journal Publication Award (Q1, Top 10%) in 2025, multiple international best-paper awards, and was named an IARIA Fellow (2021/2022). He serves as Associate Editor of the Engineering Journal (Thailand) and reviews for numerous IEEE Transactions and journals."
    ],
    education: [
      { deg: "Research Scholar, Electrical Engineering", org: "Stanford University, USA", year: "2023" },
      { deg: "Postdoctoral Fellow, 5G & Beyond Access Networks", org: "KDDI Research, Inc., Japan", year: "2022" },
      { deg: "Ph.D. in Electrical Engineering", org: "Chulalongkorn University, Thailand", year: "2017" },
      { deg: "M.Eng. in Information & Communications Technologies", org: "Asian Institute of Technology, Thailand", year: "2011" },
      { deg: "B.Sc. in Electrical & Electronic Engineering", org: "KUET, Bangladesh", year: "2004" }
    ],
    interests: [
      "Coexistence of 4G LTE and 5G NR — dynamic spectrum sharing in low bands",
      "New Radio Unlicensed (NR-U) coexistence with IEEE 802.11",
      "Terahertz and millimeter-wave communications",
      "Dynamic spectrum sharing and policy for 5G/6G networks",
      "Cognitive radio networks and spectrum sensing",
      "Co-channel interference mitigation and cancellation",
      "In-building small-cell planning, design and deployment",
      "Radio resource allocation and scheduling",
      "Cloud-RAN, fronthaul and RAN virtualization / slicing"
    ],
    stats: [
      { value: "700+", label: "Citations" },
      { value: "17",   label: "h-index" },
      { value: "27",   label: "i10-index" },
      { value: "76",   label: "Publications" }
    ]
  },
  {
    id: "islam",
    name: "Dr. Amirul Islam",
    role: "Assistant Professor",
    photo: "https://engineering.bracu.ac.bd/uploads/bsrm-members/1751365884.jpg",
    room: "4E23",
    ext: "1841",
    tags: ["Deep RL", "Optical Wireless", "uRLLC", "Vehicular Comms"],
    links: {
      profile: "https://engineering.bracu.ac.bd/profile/amirul-islam-phd",
      website: "https://islamamirul.wordpress.com/",
      scholar: "https://scholar.google.com/",
      linkedin: "https://www.linkedin.com/in/islam-amirul/"
    },
    short: "Assistant Professor of EEE, formerly a Postdoctoral Researcher at Oxford Brookes University's Visual AI Lab. Works at the intersection of machine learning and communication — deep reinforcement learning for ultra-reliable, low-latency and optical wireless systems.",
    bio: [
      "Dr. Amirul Islam is an Assistant Professor in the Department of Electrical and Electronic Engineering at BRAC University, which he joined in June 2025. Before this he was a faculty member at American International University-Bangladesh (2023–2025).",
      "He was a Postdoctoral Researcher at the Visual Artificial Intelligence Laboratory, Oxford Brookes University, UK, where he led the MAESTRO Jr. project on multimodal cognitive-workload assessment in surgical environments.",
      "He earned his Ph.D. in Computing and Electronic Systems from the University of Essex, UK (2022), an M.Sc. in Electronics Engineering from Kookmin University, South Korea (2017), and a B.Sc. in EEE from KUET, Bangladesh (2014). He remains active in interdisciplinary research and welcomes collaboration."
    ],
    education: [
      { deg: "Ph.D. in Computing & Electronic Systems", org: "University of Essex, UK", year: "2022" },
      { deg: "M.Sc. in Electronics Engineering", org: "Kookmin University, South Korea", year: "2017" },
      { deg: "B.Sc. in Electrical & Electronic Engineering", org: "KUET, Bangladesh", year: "2014" }
    ],
    interests: [
      "Machine learning for communication",
      "Deep reinforcement learning",
      "Ultra-reliable and low-latency communication (uRLLC)",
      "Optical wireless communication (OWC / OCC)",
      "Automotive and vehicular communication",
      "Medical robotics",
      "Optimization strategies",
      "B5G / 6G wireless communication"
    ],
    stats: [
      { value: "IEEE",  label: "TCOM · TMC · TITS" },
      { value: "OWC",   label: "Optical camera comms" },
      { value: "DRL",   label: "for uRLLC" },
      { value: "30+",   label: "Publications" }
    ]
  }
];

/* ===========================================================================
   RESEARCH THRUSTS  (communication domain)
   band: label used as the frequency/domain tag on each card
   ========================================================================= */
const RESEARCH = [
  {
    id: "spectrum-sharing",
    title: "Dynamic Spectrum Sharing & Cognitive Radio",
    band: "Sub-6 GHz",
    icon: "share",
    lead: "Coexistence of 4G LTE and 5G NR, licensed/unlicensed sharing, and cognitive-radio policies that squeeze more capacity from finite spectrum.",
    points: ["LTE–NR dynamic spectrum sharing", "Interweave / underlay access models", "Spectrum sensing & policy design"]
  },
  {
    id: "mmwave-thz",
    title: "Millimeter-Wave & Terahertz Communication",
    band: "mmWave · THz",
    icon: "wave",
    lead: "Spectrum reuse models for in-building multi-band small cells reaching the spectral and energy efficiencies targeted by 6G.",
    points: ["3D spatial spectrum reuse", "Multi-band small-cell design", "Energy-efficiency modelling"]
  },
  {
    id: "6g",
    title: "5G / 6G & Beyond Wireless Networks",
    band: "B5G · 6G",
    icon: "signal",
    lead: "Architectures, waveforms and resource management for beyond-5G — from ultra-dense HetNets to non-terrestrial integration.",
    points: ["Ultra-dense HetNets", "RAN virtualization & slicing", "Cloud-RAN and fronthaul design"]
  },
  {
    id: "owc",
    title: "Optical Wireless & Camera Communication",
    band: "Optical",
    icon: "camera",
    lead: "Image-sensor and optical camera communication (OCC) for the internet of vehicles and indoor positioning.",
    points: ["Optical camera communication", "Image-sensor communication", "Indoor optical localization"]
  },
  {
    id: "ml-comms",
    title: "Machine Learning for Communication",
    band: "AI · ML",
    icon: "brain",
    lead: "Deep and reinforcement learning to optimize modulation, coding and resource allocation directly from the radio environment.",
    points: ["Deep reinforcement learning", "Multi-agent optimization", "Learned modulation & coding"]
  },
  {
    id: "urllc",
    title: "Ultra-Reliable Low-Latency Communication",
    band: "uRLLC",
    icon: "bolt",
    lead: "Meeting the strict reliability and latency budgets of mission-critical links, including vehicular and industrial use cases.",
    points: ["5G NR codes & modulation", "Latency-reliability trade-offs", "Mission-critical scheduling"]
  },
  {
    id: "vehicular",
    title: "Vehicular & Automotive Communication",
    band: "V2X",
    icon: "car",
    lead: "Connecting the internet of vehicles through optical and radio links with learning-based spectral-efficiency control.",
    points: ["Vehicular OCC", "V2X spectral efficiency", "Region-of-interest signalling"]
  },
  {
    id: "small-cells",
    title: "Small Cells & In-Building Networks",
    band: "HetNet",
    icon: "grid",
    lead: "Planning, clustering and scheduling of dense in-building small cells for high indoor capacity.",
    points: ["In-building capacity", "Clustering & CoMP scheduling", "Interference coordination"]
  },
  {
    id: "satellite",
    title: "Satellite & Non-Terrestrial Networks",
    band: "NTN",
    icon: "orbit",
    lead: "Sharing satellite spectrum with terrestrial small cells and integrating space-air-ground links.",
    points: ["Satellite–mobile spectrum sharing", "Hybrid multisystem access", "Link-budget analysis"]
  }
];

/* ===========================================================================
   PROJECTS & GRANTS
   ========================================================================= */
const PROJECTS = [
  {
    title: "Dynamic Spectrum Sharing for 5G NR & 4G LTE Coexistence",
    role: "Principal Investigator",
    faculty: "saha",
    org: "BRAC University · STAR Lab collaboration",
    period: "Ongoing",
    tags: ["Spectrum Sharing", "5G NR", "Q1 Award"],
    desc: "A comprehensive framework for low-band coexistence between LTE and NR, recognized with BRAC University's Quality Journal Publication Award (Q1, Top 10%)."
  },
  {
    title: "In-Building mmWave / THz Spectrum Reuse for 6G",
    role: "Principal Investigator",
    faculty: "saha",
    org: "BRAC University",
    period: "Ongoing",
    tags: ["6G", "mmWave", "THz", "Small Cells"],
    desc: "Generic spectrum-reuse models for in-building multi-band small cells that push toward the spectral and energy efficiencies demanded by sixth-generation networks."
  },
  {
    title: "M-CORD Virtualized & Sliced 5G RAN Proof-of-Concept",
    role: "Co-Investigator",
    faculty: "saha",
    org: "Optical Access Network Lab, KDDI Research, Inc., Japan",
    period: "2017 – 2018",
    tags: ["Cloud-RAN", "Virtualization", "Slicing"],
    desc: "Prototype evaluation of virtualization and network slicing for the 5G radio access network with an ideal fronthaul testbed."
  },
  {
    title: "MAESTRO Jr. — Multimodal Cognitive Workload Assessment",
    role: "Postdoctoral Lead",
    faculty: "islam",
    org: "Visual AI Lab, Oxford Brookes University, UK",
    period: "2022 – 2023",
    tags: ["Medical Robotics", "Multimodal ML", "Surgery"],
    desc: "Led a project assessing surgeons' cognitive workload from multimodal signals in surgical environments, bridging medical robotics and machine learning."
  },
  {
    title: "Deep-RL Ultra-Reliable Low-Latency Vehicular OCC",
    role: "Lead Researcher",
    faculty: "islam",
    org: "University of Essex, UK",
    period: "2018 – 2022",
    tags: ["Deep RL", "uRLLC", "Vehicular OCC"],
    desc: "Deep and multi-agent reinforcement learning to jointly optimize codes, modulation and spectral efficiency for ultra-reliable, low-latency vehicular optical camera communication."
  },
  {
    title: "Optical Camera Communication for the Internet of Vehicles",
    role: "Researcher",
    faculty: "islam",
    org: "Kookmin University, South Korea",
    period: "2015 – 2017",
    tags: ["OCC", "IoV", "Image Sensor"],
    desc: "Convolutional-neural-network and adaptive image-sensor schemes for intelligent vehicular optical camera communication and indoor localization."
  }
];

/* ===========================================================================
   PUBLICATIONS   (type: journal | conference | patent)
   Newest first. Add new entries at the top of the relevant block.
   ========================================================================= */
const PUBLICATIONS = [
  /* ---------- Dr. Amirul Islam ---------- */
  { year: 2025, type: "journal", faculty: "islam", authors: "A. Islam, N. Thomos, L. Musavian", title: "Deep Reinforcement Learning Based Ultra Reliable and Low Latency Vehicular OCC", venue: "IEEE Transactions on Communications, 73(5), 3254–3267", url: "https://doi.org/10.1109/tcomm.2024.3478108" },
  { year: 2024, type: "journal", faculty: "islam", authors: "A. Islam, N. Thomos, L. Musavian", title: "5G NR Codes and Modulation Deep-RL Optimization for uRLLC in Vehicular OCC", venue: "IEEE Transactions on Intelligent Transportation Systems, 25(12), 19592–19604", url: "https://doi.org/10.1109/TITS.2024.3462742" },
  { year: 2024, type: "journal", faculty: "islam", authors: "A. Islam, N. Thomos, L. Musavian", title: "Multi-Agent Deep Reinforcement Learning for Spectral Efficiency Optimization in Vehicular Optical Camera Communications", venue: "IEEE Transactions on Mobile Computing, 23(5), 3666–3679", url: "https://doi.org/10.1109/TMC.2023.3278277" },
  { year: 2024, type: "journal", faculty: "islam", authors: "F. Ahmmed, A. Rahman, A. Islam, et al.", title: "Arduino-Controlled Multi-Function Robot with Bluetooth and nRF24L01+ Communication", venue: "Int. Journal of Robotics and Control Systems, 4(3), 1353–1381", url: "http://dx.doi.org/10.31763/ijrcs.v4i3.1517" },
  { year: 2018, type: "journal", faculty: "islam", authors: "A. Islam, M. T. Hossan, Y. M. Jang", title: "Convolutional Neural Network Scheme-Based Optical Camera Communication System for Intelligent Internet of Vehicles", venue: "Int. Journal of Distributed Sensor Networks, 14(4), 1–19", url: "https://doi.org/10.1177/1550147718770153" },
  { year: 2018, type: "journal", faculty: "islam", authors: "M. Z. Chowdhury, M. T. Hossan, A. Islam, Y. M. Jang", title: "A Comparative Survey of Optical Wireless Technologies: Architectures and Applications", venue: "IEEE Access, 6, 9819–9840", url: "https://doi.org/10.1109/ACCESS.2018.2792419" },
  { year: 2017, type: "journal", faculty: "islam", authors: "A. Islam, M. T. Hossan, T. Nguyen, Y. M. Jang", title: "Adaptive Spatial-Temporal Resolution Optical Vehicular Communication System Using Image Sensor", venue: "Int. Journal of Distributed Sensor Networks, 13(11), 1–15", url: "https://doi.org/10.1177/1550147717743698" },
  { year: 2017, type: "journal", faculty: "islam", authors: "T. Nguyen, A. Islam, T. Yamazato, Y. M. Jang", title: "Technical Issues on IEEE 802.15.7m Task Group and Image Sensor Communication Technologies", venue: "IEEE Communications Magazine, 56(2), 213–218", url: "https://doi.org/10.1109/MCOM.2018.1700134" },
  { year: 2017, type: "journal", faculty: "islam", authors: "T. Nguyen, A. Islam, M. T. Hossan, Y. M. Jang", title: "Current Status and Performance Analysis of Optical Camera Communication Technologies for 5G Networks", venue: "IEEE Access, 5, 4574–4594", url: "https://doi.org/10.1109/ACCESS.2017.2681110" },
  { year: 2017, type: "journal", faculty: "islam", authors: "T. Nguyen, A. Islam, Y. M. Jang", title: "Region-of-Interest Signaling Vehicular System Using Optical Camera Communications", venue: "IEEE Photonics Journal, 9(1), 1–20", url: "https://doi.org/10.1109/JPHOT.2016.2644960" },
  { year: 2016, type: "journal", faculty: "islam", authors: "N. T. Le, M. A. Hossain, A. Islam, et al.", title: "Survey of Promising Technologies for 5G Networks", venue: "Mobile Information Systems, 2016, Art. 2676589", url: "https://doi.org/10.1155/2016/2676589" },

  { year: 2022, type: "conference", faculty: "islam", authors: "A. Islam, N. Thomos, L. Musavian", title: "Achieving uRLLC with Machine Learning Based Vehicular OCC", venue: "IEEE GLOBECOM 2022, Rio de Janeiro, 4558–4563", url: "" },
  { year: 2022, type: "conference", faculty: "islam", authors: "A. Islam, L. Musavian, N. Thomos", title: "Multi-Agent Deep Reinforcement Learning in Vehicular OCC", venue: "IEEE VTC2022-Spring, Helsinki, 1–6", url: "" },
  { year: 2019, type: "conference", faculty: "islam", authors: "A. Islam, L. Musavian, N. Thomos", title: "Performance Analysis of Vehicular Optical Camera Communications: Roadmap to uRLLC", venue: "IEEE GLOBECOM 2019, Waikoloa, 1–6", url: "" },
  { year: 2018, type: "conference", faculty: "islam", authors: "A. Islam, M. T. Hossain, M. Z. Chowdhury, Y. M. Jang", title: "Design of an Indoor Positioning Scheme Using Artificial Intelligence Algorithms", venue: "ICOIN 2018, Chiang Mai, 953–956", url: "" },
  { year: 2017, type: "conference", faculty: "islam", authors: "A. Islam, M. T. Hossain, Y. M. Jang", title: "Introduction of Optical Camera Communication for Internet of Vehicles (IoV)", venue: "ICUFN 2017, Milan, 122–125", url: "" },

  /* ---------- Dr. Rony Kumer Saha ---------- */
  { year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Generic Millimeter-Wave and Terahertz Spectrum Reuse Model for In-Building Multi-Band Small Cells: Achieving Spectral and Energy Efficiencies of 6G", venue: "IEEE Open Journal of the Communications Society, 6, 198–223", url: "https://doi.org/10.1109/OJCOMS.2024.3521503" },
  { year: 2024, type: "journal", faculty: "saha", authors: "R. K. Saha, J. M. Cioffi", title: "Dynamic Spectrum Sharing for 5G NR and 4G LTE Coexistence — A Comprehensive Review", venue: "IEEE Open Journal of the Communications Society, 5, 795–835", url: "https://doi.org/10.1109/OJCOMS.2024.3351528", award: "Quality Journal Publication Award 2025 (Q1, Top 10%)" },
  { year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Dynamic Allocation and Sharing of Millimeter-Wave Spectrum with Indoor Small Cells in Multi-Operator Environments Toward 6G", venue: "Mobile Information Systems, 2022, Art. 1912211", url: "https://doi.org/10.1155/2022/1912211" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Coexistence of Cellular and IEEE 802.11 Technologies in Unlicensed Spectrum Bands — A Survey", venue: "IEEE Open Journal of the Communications Society, 2, 1996–2028", url: "https://doi.org/10.1109/OJCOMS.2021.3106502" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Millimeter-Wave Spectrum Utilization Improvement in Multi-Operator Networks: A Framework Using the Equal Likelihood Criterion", venue: "IEEE Access, 9, 72980–72999", url: "https://doi.org/10.1109/ACCESS.2021.3080326" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Licensed Countrywide Full-Spectrum Allocation: A New Paradigm for Millimeter-Wave Mobile Systems in 5G/6G Era", venue: "IEEE Access, 8, 166612–166629", url: "https://doi.org/10.1109/ACCESS.2020.3023342" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "3D Spatial Reuse of Multi-Millimeter-Wave Spectra by Ultra-Dense In-Building Small Cells for Spectral and Energy Efficiencies of Future 6G Mobile Networks", venue: "MDPI Energies, 13(7), 1748", url: "https://doi.org/10.3390/EN13071748" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Hybrid System and Technique for Sharing Multiple Spectrums of Satellite Plus Mobile Systems with Indoor Small Cells in 5G and Beyond Era", venue: "IEEE Access, 7, 77569–77596", url: "https://doi.org/10.1109/ACCESS.2019.2921723" },
  { year: 2018, type: "journal", faculty: "saha", authors: "R. K. Saha, S. Nanba, K. Nishimura", title: "A Technique for Cloud-Based Clustering and Spatial Resource Reuse and Scheduling of 3D In-Building Small Cells Using CoMP for High-Capacity CRAN", venue: "IEEE Access, 6, 71602–71621", url: "https://doi.org/10.1109/ACCESS.2018.2879835" },
  { year: 2017, type: "journal", faculty: "saha", authors: "R. K. Saha, C. Aswakul", title: "A Tractable Analytical Model for Interference Characterization and Minimum Distance Enforcement to Reuse Resources in Three-Dimensional In-Building Dense Small Cell Networks", venue: "Wiley Int. Journal of Communication Systems, 30(11), 95–118", url: "https://doi.org/10.1002/DAC.3240" },

  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Power Control Based Fair Coexistence of LBT-Free 5G New Radio Small Cells with WiGig Networks", venue: "IARIA ICSNC 2021, Barcelona, 1–6", url: "", award: "Best Paper Award" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Achieving High Capacity Using Small Cells in Multistory Buildings: A Review", venue: "IARIA ICWMC 2021, Nice", url: "", award: "Best Paper Award" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Performance Analysis of In-Building Small Cell Networks: Carrier Frequency Band Perspective", venue: "IARIA ICN 2021, Porto, 36–40", url: "", award: "Best Paper Award" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Massive Millimeter-Wave Spectrum Allocation and Exploitation Technique Toward 6G Mobile Networks", venue: "IARIA ICSNC 2020, Porto, 32–41", url: "", award: "Best Paper Award" },
  { year: 2018, type: "conference", faculty: "saha", authors: "R. K. Saha, S. Nanba, K. Nishimura", title: "Clustering and Centralized Resource Scheduling of 3D In-Building Small Cells for Intra-MAC Functional Split Control-/User-Plane Decoupled CRAN", venue: "IEEE ICC 2018, Kansas City, 1–7", url: "https://doi.org/10.1109/ICC.2018.8422357" },

  { year: 2019, type: "patent", faculty: "saha", authors: "R. K. Saha, K. Yamazaki", title: "User Equipment and Mobile Communication Network", venue: "Japanese Patent JP 2019-031876 (filed Feb. 25, 2019)", url: "" }
];

/* ===========================================================================
   TEAM  —  research assistants & collaborators (placeholders)
   Replace / add entries as people join. tag: "RA" | "COLLAB" | "OPEN"
   ========================================================================= */
const TEAM = [
  { name: "Open position",  role: "Research Assistant",   area: "MSc / Undergraduate — we're recruiting.", tag: "OPEN",   link: "contact.html" },
  { name: "Your name here", role: "Research Assistant",   area: "Placeholder — edit in js/data.js → TEAM.", tag: "RA" },
  { name: "Your name here", role: "Research Assistant",   area: "Placeholder — edit in js/data.js → TEAM.", tag: "RA" },
  { name: "Collaborator",   role: "External / Visiting",  area: "Placeholder — add collaborators here.",    tag: "COLLAB" }
];
