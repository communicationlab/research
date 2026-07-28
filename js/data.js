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
  labName:  "Research Cluster of Communication Networks and Systems",
  labShort: "C2NS",
  subtitle: "Mobile, Wireless, Optical, and Intelligent Communication Networks and Systems",
  department: "Department of Electrical and Electronic Engineering",
  school: "BSRM School of Engineering, BRAC University",
  address: "Kha-224, Bir Uttam Rafiqul Islam Ave, Merul Badda, Dhaka 1212, Bangladesh",
  email: "bracu.ac.bd",          // <- lab contact email (edit to your real one)      
  phone: "+880 9638 464646",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.296056615635!2d90.42047627822032!3d23.772469623619408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78e49160331%3A0x2fd8ec432cec9fc4!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1707842777541!5m2!1sen!2sbd",

  // Hero copy (home page)
  heroKicker: "BRAC University · EEE",
  heroTitle: "Engineering how information moves through spectrum and space.",
  heroLead: "We research next-generation mobile, wireless, optical, and intelligent communication systems — from dynamic spectrum sharing and 6G to optical camera communication and deep-reinforcement-learned networks.",

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
    tags: ["5G", "6G", "Satellite-Mobile Networks", "Dynamic Spectrum Sharing", "Radio Resource Management", "Multi-MNO", "3D In-building Networks", "Millimeter Wave / Terahertz", "Small Cells"],
    links: {
      profile: "https://engineering.bracu.ac.bd/profile/rony-kumer-saha-phd",
      website: "https://sites.google.com/site/rks107976/crictec/home",
   
     // scholar: "https://scholar.google.com/",
     // researchgate: "https://www.researchgate.net/profile/Rony-Saha-4?ev=hdr_xprf"
    },
    short: "Associate Professor of EEE and member of the Dynamic Spectrum Management Group at Stanford's STAR Laboratory. Fifteen years of research in mobile wireless communications across academia and industry, with 75+ peer-reviewed papers and a Japanese patent.",
    bio: [
      "Dr. Rony Kumer Saha is an Associate Professor in the Department of Electrical and Electronic Engineering at BRAC University. Since February 2023, he has been a member of the Dynamic Spectrum Management Group at the STAR Laboratory, Stanford University, and served as a Visiting Professor of Electrical Engineering at Stanford from February to May 2023.",
      "Earlier, he was a Postdoctoral Researcher across the Optical Access Network, Wireless Platform, and Radio & Spectrum Laboratories at KDDI Research, Inc., Japan (2017–2022), and held faculty positions at American International University-Bangladesh and East West University. He has authored 75+ peer-reviewed international journal and conference papers and filed a Japanese patent.",
      "He received BRAC University's Quality Journal Publication Award (Q1, Top 10%) in 2025, multiple international best-paper awards, and was named an IARIA Fellow (2021/2022). He serves as Associate Editor of the Engineering Journal (Thailand) and reviews for numerous IEEE Transactions and journals." 
    
    ],
    education: [
      { deg: "Research Fellow, Electrical Engineering", org: "Stanford University, USA", year: "2023" },
      { deg: "Postdoctoral Fellow, 5G & Beyond Access Networks", org: "KDDI Research, Inc., Japan", year: "2022" },
      { deg: "Ph.D. in Electrical Engineering", org: "Chulalongkorn University, Thailand", year: "2017" },
      { deg: "M.Eng. in Information & Communications Technologies", org: "Asian Institute of Technology, Thailand", year: "2011" },
      { deg: "M.Sc. Engg. in Electrical and Electronic Engineering (Major in Electronics and Communications) [Incomplete]", org: "Bangladesh University of Engineering and Technology (BUET), Bangladesh", year: "2005" },
      { deg: "B.Sc. in Electrical & Electronic Engineering", org: "Khulna University of Engineering and Technology (KUET), Bangladesh", year: "2004" }
    ],
    interests: [
      "AI/ML Applications to 5G/6G Spectrum Sharing and Management",
      "Coexistence Studies between 5G and 6G Networks", 
      "Multi-MNO Dynamic Spectrum sharing in 5G/6G networks",
      "Coexistence of 4G LTE and 5G NR — dynamic spectrum sharing in low bands",
      "New Radio Unlicensed (NR-U) coexistence with IEEE 802.11",
      "Terahertz and millimeter-wave communications",
      "Dynamic spectrum sharing and policy for 5G/6G networks",
      "Cognitive radio networks and spectrum sensing",
      "Co-channel interference mitigation and cancellation",
      "In-building small-cell planning, design and deployment",
      "Radio resource allocation and scheduling",
      "Cloud-RAN, fronthaul and RAN virtualization/slicing"
    ],
    stats: [
      { value: "820+", label: "Citations" },
      { value: "18",   label: "h-index" },
      { value: "27",   label: "i10-index" },
      { value: "80",   label: "Publications" }
    ]
  },
  {
    id: "islam",
    name: "Dr. Amirul Islam",
    role: "Assistant Professor",
    photo: "https://engineering.bracu.ac.bd/uploads/bsrm-members/1751365884.jpg",
    room: "4E23",
    ext: "1841",
    tags: ["Machine Learning for Communication", "Optical Wireless Communications", "uRLLC", "Vehicular Communications"],
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
     professional: [
      { deg: "Assistant Professor", org: "AIUB, Bangladesh", year: "2025" },
      { deg: "Postdoctoral Researcher", org: "Oxford Brookes University, UK", year: "2023" }
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
      "Optical wireless communication (OWC/OCC)",
      "Automotive and vehicular communication",
      "Medical robotics",
      "Optimization strategies",
      "B5G / 6G wireless communication"
    ],
    stats: [      
      { value: "1600+", label: "Citations" },
      { value: "DRL",   label: "for uRLLC" },
      { value: "30+",   label: "Publications" },
      { value: "ML",  label: "for Comm" }
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
    id: "ml-comms",
    title: "Machine Learning for Communication",
    band: "AI · ML",
    icon: "brain",
    lead: "Deep and reinforcement learning to optimize modulation, coding and resource allocation directly from the radio environment.",
    points: ["Deep reinforcement learning", "Multi-agent optimization", "Learned modulation & coding"]
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
    title: "5G/6G & Beyond Wireless Networks",
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
    id: "vehicular",
    title: "Vehicular & Automotive Communication",
    band: "V2X",
    icon: "car",
    lead: "Connecting the internet of vehicles through optical and radio links with learning-based spectral-efficiency control.",
    points: ["Vehicular OCC", "V2X spectral efficiency", "Region-of-interest signalling"]
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
   status: "published or early-access or accepted or preprint"
   { year: 2026,  month: "Jul", type: "journal", status: "published", faculty: "islam", authors: "...", title: "...", venue: "...", volume: "24", issue: "3", pages: "315-329", quartile: "Q1", doi: "10.11591/ijeecs.v24.i3.pp315-329", url: "..."}
   ========================================================================= */
const PUBLICATIONS = [
  /* ---------- Dr. Amirul Islam ---------- */
   /* ---------- Dr. Amirul Islam ---------- */
 
/* ---------------------------- JOURNAL PAPERS ---------------------------- */

{ year: 2026, type: "journal", faculty: "islam", authors: "N. N. Karima, S. Ahmad, A. Islam, et al.", title: "Enhancing Short-Term Load Forecasting Using Hyperparameter-Optimized Deep Learning Approaches", venue: "Energies, 19(3), 705", url: "https://doi.org/10.3390/en19030705" },

{ year: 2026, type: "journal", faculty: "islam", authors: "A. M. Arika, A. S. N. Huda, S. Ahmad, A. Islam", title: "Vibration-Based Multi-Class Fault Severity Classification of Wind Turbine Gearboxes Using Explainable Machine Learning", venue: "Energy Conversion and Management: X", url: "https://www.sciencedirect.com/science/article/pii/S2590174526001042" },

{ year: 2026, type: "journal", faculty: "islam", authors: "U. Dev, M. R. Uddin, S. Ahmad, A. Islam, A. S. N. Huda, et al.", title: "Edge Cutting and AI-Driven Protection Strategies for DC Microgrids: A Comprehensive Survey of Challenges, Technologies, and Future Trends", venue: "Results in Engineering, vol. 30", url: "https://www.sciencedirect.com/science/article/pii/S2590123026010509" },

{ year: 2026, type: "journal", faculty: "islam", authors: "S. Mahmood, S. A. Trina, A. S. Sukanna, M. S. Ahmed, A. Islam", title: "Multi-Model Deep Ensemble Framework for Early Diagnosis of Rare Genetic Disorders Using Genomic, Phenotypic, and EHR Data Fusion", venue: "Indonesian Journal of Electrical Engineering and Computer Science", url: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/45153/19971" },

{ year: 2026, month: "Apr", type: "journal", status: "published", faculty: "islam", authors: "A. Islam, T. Hossain, R. Basak, Md. S. R. Zishan", title: "Dynamic Power Allocation for Rate Optimization in Vehicular Reliable and Low-latency Camera Communications", venue: "ETRI Journal", volume: "48", issue: "2", pages: "219 – 323", quartile: "Q2", doi: "10.4218/etrij.2025-0010", url: "https://onlinelibrary.wiley.com/doi/10.4218/etrij.2025-0010" },


/* -------------------------- CONFERENCE PAPERS --------------------------- */
/* { year: 2026,  month: "Jul", type: "conference", status: "published", faculty: "islam", authors: "...", title: "...", venue: "...", location: "Seoul, South Korea", pages: "315-329", doi: "10.11591/ijeecs.v24.i3.pp315-329", url: "..."} */

{ year: 2026, type: "conference", faculty: "islam", authors: "A. S. Sukanna, S. Mahmood, S. A. Trina, A. Islam", title: "A Dual-Recurrent Attention Architecture for High-Recall Sentiment Analysis in Noisy Twitter Texts", venue: "", url: "" },

{ year: 2026, type: "conference", faculty: "islam", authors: "S. Mahmood, S. A. Trina, M. S. Ahmed, A. Islam", title: "Energy-Regularized Bidirectional Recurrent Attention Networks with Contrastive Confidence Modeling for Lightweight and Explainable Sentiment Classification", venue: "", url: "" },


  /* ============================================================================
   Dr. Rony Kumer Saha  —  BRAC-affiliation publications
   ----------------------------------------------------------------------------
  /* ---------- Dr. Rony Kumer Saha ---------- */
  { year: 2019, type: "patent", faculty: "saha", authors: "R. K. Saha, K. Yamazaki", title: "User Equipment and Mobile Communication Network", venue: "Japanese Patent JP 2019-031876 (filed Feb. 25, 2019)", url: "" },

  /* Journals */
  { year: 2026, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Multi-MNO Dynamic Spectrum Sharing Between LTE and NR Technologies in Indoor Small Cell Networks", venue: "IEEE Access Journal, vol. 14, pp. 90509-90527, 2026", url: "https://doi.org/10.1109/ACCESS.2026.3702365" },
  { year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "MBSFN Subframe-Based Dynamic Spectrum Sharing Between LTE and NR in 3D In-Building Small Cell Networks", venue: "IEEE Access Journal, vol. 13, pp. 202062-202085, 2025", url: "https://doi.org/10.1109/ACCESS.2025.3636734" },
  { year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "How Does DSS Work Between LTE and NR Systems?—Requirements, Techniques, and Lessons Learned", venue: "MDPI Technologies Journal, vol. 13, no. 502, 2025", url: "https://doi.org/10.3390/technologies13110502" },
  { year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Generic Millimeter Wave and Terahertz Spectrum Reuse Model for In-Building Multi-Band Small Cells: Achieving Spectral and Energy Efficiencies of 6G", venue: "IEEE Open Journal of the Communications Society, vol. 6, pp. 198-223, 2025", url: "https://doi.org/10.1109/OJCOMS.2024.3521503" },
  { year: 2024, type: "journal", faculty: "saha", authors: "R. K. Saha and J. M. Cioffi", title: "Dynamic Spectrum Sharing for 5G NR and 4G LTE Coexistence - A Comprehensive Review", venue: "IEEE Open Journal of the Communications Society, vol. 5, pp. 795-835, 2024", url: "https://doi.org/10.1109/OJCOMS.2024.3351528", award: "Quality Journal Publication Award 2025 (Q1, Top 10%)" },
  { year: 2024, type: "journal", faculty: "saha", authors: "R. K. Saha and J. M. Cioffi", title: "Correction to “Dynamic Spectrum Sharing for 5G NR and 4G LTE Coexistence—A Comprehensive Review", venue: "\" Open Journal of the Communications Society, vol. 5, pp. 1275-1275, 2024", url: "https://doi.org/10.1109/OJCOMS.2024.3363972" },
  { year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "In-building Capacity Enhancement using Small Cells in Mobile Networks: An Overview", venue: "Engineering Journal-Thailand, vol. 26, no.6, June 2022", url: "" },
  { year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Licensed Millimeter-Wave Spectrum Allocation and Reuse in Indoor Environments", venue: "IARIA International Journal on Advances in Networks and Services, vol.15, no. 1&2, 2022", url: "http://www.iariajournals.org/networks_and_services/" },
  { year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Dynamic Allocation and Sharing of Millimeter-Wave Spectrum with Indoor Small Cells in Multioperator Environments toward 6G", venue: "Hindawi Mobile Information Systems Journal, vol. 2022, Article ID 1912211, 19 pages, 2022", url: "https://doi.org/10.1155/2022/1912211" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "An Overview and Mechanism for the Coexistence of 5G NR-U (New Radio Unlicensed) in the Millimeter-Wave Spectrum for Indoor Small Cells", venue: "Wiley/Hindawi Wireless Communications and Mobile Computing Journal, vol. 2021, Article ID 8661797, 18 pages, 2021", url: "https://doi.org/10.1155/2021/8661797" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Coexistence of Cellular and IEEE 802.11 Technologies in Unlicensed Spectrum Bands - A Survey", venue: "IEEE Open Journal of the Communications Society, vol. 2, pp. 1996-2028, 2021", url: "https://doi.org/10.1109/OJCOMS.2021.3106502" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Millimeter-Wave Spectrum Utilization Improvement in Multi-Operator Networks: A Framework using the Equal Likelihood Criterion", venue: "IEEE Access Journal, vol. 9, pp. 72980-72999, 2021", url: "https://doi.org/10.1109/ACCESS.2021.3080326" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Power-Domain Based Dynamic Millimeter-Wave Spectrum Access Techniques for In-Building Small Cells in Multioperator Cognitive Radio Networks Toward 6G", venue: "Wiley/Hindawi Wireless Communications and Mobile Computing Journal, vol. 2021, Article ID 6628751, 13 pages, 2021", url: "https://doi.org/10.1155/2021/6628751" },
  { year: 2021, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Spectrum Allocation and Reuse in 5G New Radio on Licensed and Unlicensed Millimeter-Wave Bands in Indoor Environments", venue: "Hindawi Mobile Information Systems Journal, vol. 2021, Article ID 5538820, 21 pages, 2021", url: "https://doi.org/10.1155/2021/5538820" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Approaches to Improve Millimeter-Wave Spectrum Utilization Using Indoor Small Cells in Multi-Operator Environments Toward 6G", venue: "IEEE Access Journal, vol. 8, pp. 207643-207658, 2020", url: "https://doi.org/10.1109/ACCESS.2020.3037684" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Licensed Countrywide Full-Spectrum Allocation: A New Paradigm for Millimeter-Wave Mobile Systems in 5G/6G Era", venue: "IEEE Access Journal, vol. 8, pp. 166612 – 166629, 2020", url: "https://doi.org/10.1109/ACCESS.2020.3023342" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Hybrid Interweave–Underlay Countrywide Millimeter-Wave Spectrum Access and Reuse Technique for CR Indoor Small Cells in 5G/6G Era", venue: "MDPI Sensors Journal, 2020, vol. 20, 3979, 2020", url: "https://doi.org/10.3390/S20143979" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "On Exploiting Millimeter-Wave Spectrum Trading in Countrywide Mobile Network Operators for High Spectral and Energy Efficiencies in 5G/6G Era", venue: "MDPI Sensors Journal, vol. 20, 3495, 2020", url: "https://doi.org/10.3390/S20123495" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "3D Spatial Reuse of Multi-Millimeter-Wave Spectra by Ultra-Dense In-Building Small Cells for Spectral and Energy Efficiencies of Future 6G Mobile Networks", venue: "MDPI Energies Journal, vol. 13, no. 7, 1748, 2020", url: "https://doi.org/10.3390/EN13071748" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "On Maximizing Energy and Spectral Efficiencies Using Small Cells in 5G and Beyond Networks", venue: "MDPI Sensors Journal, vol. 20, no. 6, 1676, 2020", url: "https://doi.org/10.3390/S20061676" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "On Developing Techniques for Sharing Satellite Spectrum with Indoor Small Cells in 5G", venue: "MDPI Energies Journal, vol. 13, no. 3, 748, 2020", url: "https://doi.org/10.3390/EN13030748" },
  { year: 2020, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Tactic for Architectural Exploitation of Indoor Small Cells for Dynamic Spectrum Sharing in 5G", venue: "IEEE Access Journal, vol. 8, pp. 15056-15071, January 2020", url: "https://doi.org/10.1109/ACCESS.2020.2966230" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Countrywide Mobile Spectrum Sharing with Small Indoor Cells for Massive Spectral and Energy Efficiencies in 5G and Beyond Mobile Networks", venue: "in MDPI Energies Journal, vol. 12, no. 20, 3825, 2019", url: "https://doi.org/10.3390/EN12203825" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Realization of Licensed/Unlicensed Spectrum Sharing Using eICIC in Indoor Small Cells for High Spectral and Energy Efficiencies of 5G Networks", venue: "MDPI Energies Journal, vol. 12, no. 14, 2828, 2019", url: "https://doi.org/10.3390/EN12142828" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Hybrid System and Technique for Sharing Multiple Spectrums of Satellite Plus Mobile Systems with Indoor Small Cells in 5G and Beyond Era", venue: "IEEE Access Journal, vol. 7, pp. 77569-77596, 2019", url: "https://doi.org/10.1109/ACCESS.2019.2921723" },
  { year: 2019, type: "journal", faculty: "saha", authors: "Y. Tsukamoto, R. K. Saha, S. Nanba, and K. Nishimura", title: "Experimental Evaluation of RAN Slicing Architecture with Flexibly Located Functional Components of Base Station According to Diverse 5G Services", venue: "IEEE Access Journal, vol. 7, pp. 76470-76479, 2019", url: "https://doi.org/10.1109/ACCESS.2019.2922251" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha and K. Yamazaki", title: "Enabling Technology and Proof-of-Concept Evaluation for RAN Architectural Migration toward 5G and Beyond Mobile Systems", venue: "Engineering Journal-Thailand, vol. 23, no.3, pp. 51-74, May 2019", url: "https://doi.org/10.4186/EJ.2019.23.3.51" },
  { year: 2019, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Spectrum Sharing in Satellite-Mobile Multisystem using 3D In-Building Small Cells for High Spectral and Energy Efficiencies in 5G and Beyond Era", venue: "IEEE Access Journal, vol. 7, pp. 43846-43868, 2019", url: "https://doi.org/10.1109/ACCESS.2019.2908203" },
  { year: 2018, type: "journal", faculty: "saha", authors: "R. K. Saha, S. Nanba, and K. Nishimura", title: "A Technique for Cloud Based Clustering and Spatial Resource Reuse and Scheduling of 3D In-Building Small Cells Using CoMP for High Capacity CRAN", venue: "IEEE Access Journal, vol. 6, pp. 71602-71621, 2018", url: "https://doi.org/10.1109/ACCESS.2018.2879835" },
  { year: 2018, type: "journal", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "A Novel Frequency Reuse Technique for In-Building Small Cells in Dense Heterogeneous Networks", venue: "Wiley IEEJ Transactions on Electrical and Electronic Engineering, vol. 13, no. 1, pp. 98-111, Jan. 2018", url: "https://doi.org/10.1002/TEE.22503" },
  { year: 2017, type: "journal", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "A Tractable Analytical Model for Interference Characterization and Minimum Distance Enforcement to Reuse Resources in Three-Dimensional In-Building Dense Small Cell Networks", venue: "Wiley International Journal of Communication Systems, vol. 30, no. 11, pp. 95-118, July 2017", url: "https://doi.org/10.1002/DAC.3240" },
  { year: 2017, type: "journal", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "Incentive and Architecture of Multi-Band Enabled Small cell and UE for Up-/Down-link and Control-/User-plane Splitting for 5G Mobile Networks", venue: "De Gruyter Frequenz Journal of RF-Engineering & Telecommunications, vol. 71, no. 1-2, pp. 95-118, Jan. 2017", url: "https://doi.org/10.1515/FREQ-2016-0014" },
  { year: 2017, type: "journal", faculty: "saha", authors: "R. K. Saha, Y. Zhao, and C. Aswakul", title: "Towards 5G Cellular: Understanding 3D In-Building Single Band and Multi-Band Small Cells with Control /User-plane Coupled and Separation Architectures with a Novel Resource Reuse Approach", venue: "Engineering Journal-Thailand, vol. 21, no. 3, pp. 309- 343, June 2017", url: "https://doi.org/10.4186/EJ.2017.21.3.309" },
  { year: 2017, type: "journal", faculty: "saha", authors: "R. K. Saha, Y. Zhao, and C. Aswakul", title: "A Novel Approach for Centralized 3D Radio Resource Allocation and Scheduling in Dense HetNets for 5G Control-/User-plane Separation Architectures", venue: "Engineering Journal-Thailand, vol. 21, no. 4, pp. 287-305, July 2017", url: "https://doi.org/10.4186/EJ.2017.21.4.287" },
  { year: 2016, type: "journal", faculty: "saha", authors: "R. K. Saha, P. Saengudomlert, and C. Aswakul", title: "Evolution Toward 5G Mobile Networks - A Survey on Enabling Technologies", venue: "Engineering Journal-Thailand, vol. 20, no. 1, pp. 87-119, Jan. 2016", url: "https://doi.org/10.4186/EJ.2016.20.1.87" },
  { year: 2014, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Value Measurement of Services of 4G IMT-A Systems: A Perspective of Bangladesh", venue: "STM Journal of Recent Trends in Electronics and Communication Systems (RTECS), vol.1, no. 1, April 2014", url: "" },
  { year: 2013, type: "journal", faculty: "saha", authors: "R. K. Saha & A B M Siddique Hossain", title: "A MATLAB Based Cellular Mobile Communication Laboratory", venue: "SDIWC International Journal of Digital Information and Wireless Communications (IJDIWC), vol. 3, no. 2, pp. 29-40, 2013", url: "" },
  { year: 2013, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Modified Proportional Fair Scheduling for Resource Reuse and Interference Coordination in Two-Tier LTE-Advanced Systems", venue: "SDIWC International Journal of Digital Information and Wireless Communications (IJDIWC), vol. 3, no. 2, pp. 9-28, 2013", url: "" },
  { year: 2013, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Technology Roadmapping Process for Location Based Services Development", venue: "AIUB Journal of Science and Engineering (AJSE), vol. 12, no. 1, pp. 27-38, 2013", url: "" },
  { year: 2012, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Performance Study of Conventional Resource Schedulers with Femtocells for Energy Efficiency in 4G LTE-Advanced Systems", venue: "AIUB Journal of Science and Engineering (AJSE), vol. 11, no. 1, pp. 31-40, 2012", url: "" },
  { year: 2011, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Performance Evaluation of Generic Resource Scheduling Algorithms in Macrocell-Femtocell Network Architecture: 4G LTE-advanced System Perspective", venue: "AIUB Journal of Science and Engineering (AJSE), vol. 10, no. 1, pp. 37-44, 2011", url: "" },

  /* Conferences */
  { year: 2025, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Multi-Operator Dynamic Spectrum Sharing for LTE and NR Coexistence", venue: "2025 28th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh, 2025, pp. 4765-4770", url: "https://doi.org/10.1109/ICCIT68739.2025.11491314" },
  { year: 2025, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Novel Approach for Dynamic Spectrum Sharing Between LTE and NR in Heterogeneous Networks", venue: "2025 7th International Conference on Electrical Information and Communication Technology (EICT), Khulna, Bangladesh, 2025, pp. 1-6", url: "https://doi.org/10.1109/EICT68394.2025.11355517" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Operating Cellular Technologies in Unlicensed Spectrum Bands: A Review", venue: "IARIA Sixteenth International Conference on Systems and Networks Communications (ICSNC), 03-07 October 2021, Barcelona, Spain, pp. 13-17", url: "" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Unlicensed Spectrum Bands for Cellular Mobile Networks-An Overview", venue: "IARIA Sixteenth International Conference on Systems and Networks Communications (ICSNC), Barcelona, Spain, 03-07 October 2021, pp.7-12", url: "" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Power Control based Fair Coexistence of LBT-Free 5G New Radio Small Cells with WiGig Networks", venue: "IARIA Sixteenth International Conference on Systems and Networks Communications (ICSNC), 03-07 October 2021, Barcelona, Spain, pp.1-6", url: "", award: "Best Paper Award" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Achieving High Capacity using Small Cells in Multistory Buildings: A Review", venue: "IARIA The Seventeenth International Conference on Wireless and Mobile Communications (ICWMC), 18-22 July 2021, Nice, FRANCE, pp. 65-41", url: "", award: "Best Paper Award" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Operating 5G New Radio Indoor Small Cells in the 60 GHz Unlicensed Band", venue: "IARIA The Seventeenth International Conference on Wireless and Mobile Communications (ICWMC), 18-22 July 2021, Nice, FRANCE, pp. 38-43", url: "" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Dynamic and Opportunistic Millimeter-Wave Spectrum Access in 5G New Radio Multi-Operator Cognitive Radio Networks", venue: "IARIA The Seventeenth International Conference on Wireless and Mobile Communications (ICWMC), 18-22 July 2021, Nice, FRANCE, pp. 35-38", url: "" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Performance Analysis of In-building Small Cell Networks: Carrier Frequency Band Perspective", venue: "IARIA The Twentieth International Conference on Networks (ICN 2021), 18-22 April 2021, Porto, PORTUGAL, pp. 36-40", url: "", award: "Best Paper Award" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Spectrum Reuse in the Terahertz Band for In-building Small Cell Networks", venue: "IARIA The Twentieth International Conference on Networks (ICN 2021), 18-22 April 2021, Porto, PORTUGAL, pp. 30-35", url: "" },
  { year: 2021, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Dynamic Spectrum Sharing in Multi-Operator Millimeter-Wave Indoor Systems", venue: "IARIA The Twentieth International Conference on Networks (ICN 2021), 18-22 April 2021, Porto, PORTUGAL, pp. 27-29", url: "" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Massive Millimeter-Wave Spectrum Allocation and Exploitation Technique Toward 6G Mobile Networks", venue: "IARIA Fifteenth International Conference on Systems and Networks Communications (ICSNC), Porto, PORTUGAL, 18-22 October 2020, 32-41. URL:", url: "https://www.thinkmind.org/index.php?view=article&articleid=icsnc_2020_2_60_20032", award: "Best Paper Award" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Hybrid Interweave-Underlay Millimeter-Wave Spectrum Access in Multi-Operator Cognitive Radio Networks Toward 6G", venue: "IARIA Fifteenth International Conference on Systems and Networks Communications (ICSNC), Porto, PORTUGAL, 18-22 October 2020, 42-48. URL:", url: "https://www.thinkmind.org/index.php?view=article&articleid=icsnc_2020_2_70_20033" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Evaluating Spectrum Allocation Techniques in Millimeter-Wave Systems using Indoor Smalls for 5G/6G", venue: "IARIA Fifteenth International Conference on Systems and Networks Communications (ICSNC), Porto, PORTUGAL, 18-22 October 2020, 28-31. URL:", url: "https://www.thinkmind.org/index.php?view=article&articleid=icsnc_2020_2_50_20031" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A New Paradigm for Spectrum Allocation in Millimeter-Wave Systems", venue: "IARIA Fifteenth International Conference on Systems and Networks Communications (ICSNC), Porto, PORTUGAL, 18-22 October 2020, 14-17. URL:", url: "https://www.thinkmind.org/index.php?view=article&articleid=icsnc_2020_2_30_20029" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Underlay Cognitive Radio Millimeter-Wave Spectrum Access for In-Building Dense Small Cells in Multi-Operator Environments Toward 6G", venue: "23rd International Symposium on Wireless Personal Multimedia Communications (WPMC), Okayama, JAPAN, 19- 26 October 2020, 1-6", url: "https://doi.org/10.1109/WPMC50192.2020.9309471" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Flexible Licensed Spectrum Allocation Technique for Millimeter-Wave Mobile Systems Toward 6G", venue: "2020 23rd International Symposium on Wireless Personal Multimedia Communications (WPMC), Okayama, JAPAN, 19-26 October 2020, 1-6", url: "https://doi.org/10.1109/WPMC50192.2020.9309488" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "On Application and Evaluation of Millimeter-Wave Spectrum Sharing, Trading and Reusing for Small Cells Toward Spectral and Energy Efficiencies of 6G", venue: "23rd International Symposium on Wireless Personal Multimedia Communications (WPMC), Okayama, JAPAN, 19-26 October 2020, 1-6", url: "https://doi.org/10.1109/WPMC50192.2020.9309473" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Theoretical Framework Toward Realizing Spectral and Energy Efficiencies of 6G Mobile Networks", venue: "2020 92nd Vehicular Technology Conference (VTC2020-Fall), Victoria, BC, CANADA, 18 November-16 December, 2020, 1-6", url: "https://doi.org/10.1109/VTC2020-Fall49728.2020.9348568" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Countrywide Licensed Full Spectrum Allocation Method for Millimeter-Wave Mobile Systems for 6G", venue: "2020 92nd Vehicular Technology Conference (VTC2020- Fall), Victoria, BC, CANADA, 18 November-16 December, 2020, 1-6", url: "https://doi.org/10.1109/VTC2020-Fall49728.2020.9348858" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Interweave Shared-Use Model for Dynamic Spectrum Access in Millimeter-Wave Mobile Systems for 6G", venue: "2020 92nd Vehicular Technology Conference (VTC2020- Fall), Victoria, BC, CANADA, 18 November-16 December, 2020, 1-6", url: "https://doi.org/10.1109/VTC2020-Fall49728.2020.9348671" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Dynamic Exclusive-Use Spectrum Access Method for Millimeter-Wave Mobile Systems Toward 6G", venue: "2020 92nd Vehicular Technology Conference (VTC2020-Fall), Victoria, BC, CANADA, 18 November-16 December, 2020, 1-6", url: "https://doi.org/10.1109/VTC2020-Fall49728.2020.9348475" },
  { year: 2020, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Modeling Interference to Reuse Millimeter-Wave Spectrum to In-Building Small Cells Toward 6G", venue: "2020 92nd Vehicular Technology Conference (VTC2020-Fall), Victoria, BC, CANADA, 18 November-16 December, 2020, 1-6", url: "https://doi.org/10.1109/VTC2020-Fall49728.2020.9348747" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Co-Primary Licensed Spectrum Sharing Techniques for In-building Small Cells in 5G Era", venue: "International Symposium on Dynamic Spectrum Access Networks (DySPAN) Workshop on Data-Driven Dynamic Spectrum Sharing, Newark, NJ, USA, 11-14 November 2019", url: "https://doi.org/10.1109/DySPAN.2019.8935712" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Exploiting In-building Small Cell Architecture for Realizing Dynamic Spectrum Sharing Techniques", venue: "International Symposium on Dynamic Spectrum Access Networks (DySPAN), Newark, NJ, USA, 11-14 November 2019", url: "https://doi.org/10.1109/DYSPAN.2019.8935772" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Nationwide Spectrum Sharing of Mobile Network Operators with Indoor Small Cells", venue: "International Symposium on Dynamic Spectrum Access Networks (DySPAN), Newark, NJ, USA, 11-14 November 2019", url: "https://doi.org/10.1109/DySPAN.2019.8935745" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Technique for Licensed Spectrum Sharing between Space-Satellite and Terrestrial-Mobile Heterogeneous Multisystem", venue: "2019 Joint Conference on Satellite Communications (JC-SAT 2019), JR Hakata City, Fukuoka, Japan, October 10-11, 2019, pp. 1-6", url: "" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Technique for Massive Spectrum Sharing with Ultra-Dense In-building Small Cells in 5G Era", venue: "2019 90th Vehicular Technology Conference: VTC2019-Fall, Honolulu, Hawaii, USA, 22–25 September 2019", url: "https://doi.org/10.1109/VTCFALL.2019.8891437" },
  { year: 2019, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Multi-band Spectrum Sharing with Indoor Small Cells in Hybrid Satellite-Mobile Systems", venue: "2019 90th Vehicular Technology Conference: VTC2019-Fall, Honolulu, Hawaii, USA, 22–25 September 2019", url: "https://doi.org/10.1109/VTCFALL.2019.8891377" },
  { year: 2018, type: "conference", faculty: "saha", authors: "R. K. Saha, Y. Tsukamoto, S. Nanba, K. Nishimura, and K. Yamazaki", title: "Novel M-CORD Based Multi-Functional Split Enabled Virtualized Cloud RAN Testbed with Ideal Fronthaul", venue: "2018 Globecom Workshops (GC Wkshps), Abu Dhabi, United Arab Emirates, 2018, pp. 1-7", url: "https://doi.org/10.1109/GLOCOMW.2018.8644390" },
  { year: 2018, type: "conference", faculty: "saha", authors: "R. K. Saha, S. Nanba, K. Nishimura, Y. Kim, and K. Yamazaki", title: "RAN Architectural Evolution Framework toward 5G and Beyond Cellular-An Overview", venue: "2018 29th Annual International Symposium on Personal, Indoor, and Mobile Radio Communications (PIMRC), Bologna, 2018, pp. 592-593", url: "https://doi.org/10.1109/PIMRC.2018.8580833" },
  { year: 2018, type: "conference", faculty: "saha", authors: "R. K. Saha, S. Nanba, and K. Nishimura", title: "Clustering and Centralized Resource Scheduling of 3D In-Building Small Cells for Intra MAC Functional Split Control-/User-Plane Decoupled CRAN", venue: "2018 International Conference on Communications (ICC), Kansas City, MO, 2018, pp. 1-7", url: "https://doi.org/10.1109/ICC.2018.8422357" },
  { year: 2018, type: "conference", faculty: "saha", authors: "Y. Tsukamoto, S. Nanba, R. K. Saha, K. Nishimura", title: "A Prototype of Flexible Virtualized Radio Access Network Architecture for 5G Services", venue: "IEICE General Conference, Tokyo, Japan, March 2018", url: "" },
  { year: 2017, type: "conference", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "Centralized 3D Radio Resource Allocation and Scheduling for Multi-Tier Control-/User-plane Split Architecture for 5G Mobile Network", venue: "2017 International Conference on Electronics, Information, and Communication (ICEIC), Phuket, Thailand, 11-14 Jan. 2017, pp. 530-533", url: "" },
  { year: 2017, type: "conference", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "Capacity Analysis of Control-/User-plane Traffic of Different Small Cell Base Station Architectures for 5G Cellular", venue: "2017 International Conference on Electronics, Information, and Communication (ICEIC), Phuket, Thailand, 11-14 Jan. 2017, pp. 534- 537", url: "" },
  { year: 2017, type: "conference", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "A Novel Clustering, Frequency Reuse and Allocation Technique for 2D Regular Grid-Based Dense Urban Femtocell Deployment for 5G Mobile Networks", venue: "2017 International Conference on Electronics, Information, and Communication (ICEIC), Phuket, Thailand, 11-14 Jan. 2017, pp. 220-223", url: "" },
  { year: 2017, type: "conference", faculty: "saha", authors: "R. K. Saha and C. Aswakul", title: "Microwave and Millimeter-Wave Enabled Small Cell for Non-Uniform and Asymmetric Traffic in 5G Mobile Network", venue: "2017 International Conference on Electronics, Information, and Communication (ICEIC), Phuket, Thailand, 11-14 Jan. 2017, pp. 240-243", url: "" },
  { year: 2013, type: "conference", faculty: "saha", authors: "R. K. Saha & A B M Siddique Hossain", title: "A MATLAB Based Cellular Mobile Communication Laboratory", venue: "2013 International Conference on Computer, Networks and Communication Engineering (ICCNCE 2013), Beijing, China, May 2013, pp. 5-8", url: "https://doi.org/10.2991/ICCNCE.2013.2" },
  { year: 2011, type: "conference", faculty: "saha", authors: "R. K. Saha and P. Saengudomlert", title: "Novel Resource Scheduling for Spectral Efficiency in LTE-Advanced Systems with Macrocells and Femtocells", venue: "The Electrical Engineering/ Electronics, Computer, Telecommunications and Information Technology (ECTI) Association of Thailand - Conference (ECTI-CON), Thailand, May 2011, pp. 340 – 343", url: "https://doi.org/10.1109/ECTICON.2011.5947844" },

];

const TEAM = [

{ name: "Md. Forhad Javed",  role: "Graduate Student Researcher",  area: "Dynamic Spectrum Sharing in future mobile networks", tag: "Supervisor: Dr. Rony Kumer Saha",  photo: "https://feniuniversity.ac.bd/public/storage/upload/facultyMembers/resize_356X390/260513101215-3917.jpeg" },
{ name: "Mir Hamidul Hussain",  role: "Graduate Student Researcher",   area: "Communication Systems, Wireless Networks, Machine Learning, Artificial Intelligence, Signal Processing, and Next-Generation Communication Technologies ", tag: "Supervisor: Dr. Rony Kumer Saha", photo: "https://cse.sds.bracu.ac.bd/storage/media/1048/IMG_1241.jpeg" },  
{ name: "M.B.M Abdullah",  role: "Graduate Student Researcher",   area: "6G & 5G Coexistence, AI & ML", tag: "Supervisor: Dr. Rony Kumer Saha" },
{ name: "Tasnia Alam Tasfia",  role: "Graduate Student Researcher",   area: "4G/5G/6G Mobile Communications, Wireless Communications, Radio Resource Management, Coexistence Studies, Channel Modeling, Heterogeneous Networks", tag: "Supervisor: Dr. Rony Kumer Saha" },

    
/* { name: "Open position",  role: "Research Assistant",   area: "MSc / Undergraduate — we're recruiting.", tag: "OPEN",   link: "contact.html" },
{ name: "Your name here", role: "Research Assistant",   area: "Placeholder — edit in js/data.js → TEAM.", tag: "RA" },
{ name: "Your name here", role: "Research Assistant",   area: "Placeholder — edit in js/data.js → TEAM.", tag: "RA" },
{ name: "Collaborator",   role: "External / Visiting",  area: "Placeholder — add collaborators here.",    tag: "COLLAB" } */
   
];
