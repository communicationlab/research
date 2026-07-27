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
  labName:  "Communication Networks and Systems Research Cluster",
  labShort: "C2NS",
  subtitle: "Wireless · Optical · Intelligent Communication Systems",
  department: "Department of Electrical & Electronic Engineering",
  school: "BSRM School of Engineering, BRAC University",
  address: "Kha-224, Bir Uttam Rafiqul Islam Ave, Merul Badda, Dhaka 1212, Bangladesh",
  email: "bracu.ac.bd",          // <- lab contact email (edit to your real one)
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
      { value: "IEEE",  label: "TCOM · TMC · TITS" },
      { value: "1600+", label: "Citations" },
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
   ========================================================================= */
const PUBLICATIONS = [
  /* ---------- Dr. Amirul Islam ---------- */
   /* ---------- Dr. Amirul Islam ---------- */
 
/* ---------------------------- JOURNAL PAPERS ---------------------------- */

{ year: 2026, type: "journal", faculty: "islam", authors: "N. N. Karima, S. Ahmad, A. Islam, et al.", title: "Enhancing Short-Term Load Forecasting Using Hyperparameter-Optimized Deep Learning Approaches", venue: "Energies, 19(3), 705", url: "https://doi.org/10.3390/en19030705" },

{ year: 2026, type: "journal", faculty: "islam", authors: "A. M. Arika, A. S. N. Huda, S. Ahmad, A. Islam", title: "Vibration-Based Multi-Class Fault Severity Classification of Wind Turbine Gearboxes Using Explainable Machine Learning", venue: "Energy Conversion and Management: X", url: "https://www.sciencedirect.com/science/article/pii/S2590174526001042" },

{ year: 2026, type: "journal", faculty: "islam", authors: "U. Dev, M. R. Uddin, S. Ahmad, A. Islam, A. S. N. Huda, et al.", title: "Edge Cutting and AI-Driven Protection Strategies for DC Microgrids: A Comprehensive Survey of Challenges, Technologies, and Future Trends", venue: "Results in Engineering, 30", url: "" },

{ year: 2026, type: "journal", faculty: "islam", authors: "S. Mahmood, S. A. Trina, A. S. Sukanna, M. S. Ahmed, A. Islam", title: "Multi-Model Deep Ensemble Framework for Early Diagnosis of Rare Genetic Disorders Using Genomic, Phenotypic, and EHR Data Fusion", venue: "Indonesian Journal of Electrical Engineering and Computer Science", url: "" },


/* -------------------------- CONFERENCE PAPERS --------------------------- */
/* NOTE: conference venue names were not listed on the public records I could
   reach — please fill in the "venue" text before publishing these two.      */

{ year: 2026, type: "conference", faculty: "islam", authors: "A. S. Sukanna, S. Mahmood, S. A. Trina, A. Islam", title: "A Dual-Recurrent Attention Architecture for High-Recall Sentiment Analysis in Noisy Twitter Texts", venue: "", url: "" },

{ year: 2026, type: "conference", faculty: "islam", authors: "S. Mahmood, S. A. Trina, M. S. Ahmed, A. Islam", title: "Energy-Regularized Bidirectional Recurrent Attention Networks with Contrastive Confidence Modeling for Lightweight and Explainable Sentiment Classification", venue: "", url: "" },


  /* ============================================================================
   Dr. Rony Kumer Saha  —  BRAC-affiliation publications
   ----------------------------------------------------------------------------
   Source: official BRACU profile (Google Scholar blocks automated reading).

   ⚠ JOIN-DATE NOTE
   His BRACU profile lists BRAC employment as "January 2022 – to date".
   The 2021 papers below were published during his KDDI post-doc (ended Jan 2022).
   • You said 2021, so all 2021+ journals are included.
   • Want STRICT BRAC-only?  Delete the five entries marked  // 2021 (KDDI-era)
     -> that leaves 2022+ journals (J33–J38).

   HOW TO USE
   In js/data.js, replace ALL current  faculty: "saha"  JOURNAL lines with the
   block below. (Keep them ordered newest-first, as the file already is.)
   ============================================================================ */

/* ---------------- BRAC-affiliation JOURNALS (2021 → present) --------------- */

{ year: 2026, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Multi-MNO Dynamic Spectrum Sharing Between LTE and NR Technologies in Indoor Small Cell Networks", venue: "IEEE Access, 14, 90509-90527", url: "https://doi.org/10.1109/ACCESS.2026.3702365" },
   
{ year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "MBSFN Subframe-Based Dynamic Spectrum Sharing Between LTE and NR in 3D In-Building Small Cell Networks", venue: "IEEE Access, 13, 202062-202085", url: "https://doi.org/10.1109/ACCESS.2025.3636734" },
   
{ year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "How Does DSS Work Between LTE and NR Systems?—Requirements, Techniques, and Lessons Learned", venue: "Technologies, 13, no. 502", url: "https://doi.org/10.3390/technologies13110502"},
   
{ year: 2025, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "A Generic Millimeter-Wave and Terahertz Spectrum Reuse Model for In-Building Multi-Band Small Cells: Achieving Spectral and Energy Efficiencies of 6G", venue: "IEEE Open Journal of the Communications Society, 6, 198–223", url: "https://doi.org/10.1109/OJCOMS.2024.3521503" },

{ year: 2024, type: "journal", faculty: "saha", authors: "R. K. Saha, J. M. Cioffi", title: "Dynamic Spectrum Sharing for 5G NR and 4G LTE Coexistence — A Comprehensive Review", venue: "IEEE Open Journal of the Communications Society, 5, 795–835", url: "https://doi.org/10.1109/OJCOMS.2024.3351528", award: "Quality Journal Publication Award 2025 (Q1, Top 10%)" },

{ year: 2024, type: "journal", faculty: "saha", authors: "R. K. Saha, J. M. Cioffi", title: "Correction to “Dynamic Spectrum Sharing for 5G NR and 4G LTE Coexistence — A Comprehensive Review”", venue: "IEEE Open Journal of the Communications Society, 5, 1275", url: "https://doi.org/10.1109/OJCOMS.2024.3363972" },

{ year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "In-Building Capacity Enhancement Using Small Cells in Mobile Networks: An Overview", venue: "Engineering Journal-Thailand, 26(6)", url: "" },

{ year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Licensed Millimeter-Wave Spectrum Allocation and Reuse in Indoor Environments (Invited)", venue: "IARIA Int. Journal on Advances in Networks and Services, 15(1&2)", url: "" },

{ year: 2022, type: "journal", faculty: "saha", authors: "R. K. Saha", title: "Dynamic Allocation and Sharing of Millimeter-Wave Spectrum with Indoor Small Cells in Multi-Operator Environments Toward 6G", venue: "Mobile Information Systems, 2022, Art. 1912211", url: "https://doi.org/10.1155/2022/1912211" },



/* ---------------- CONFERENCES ---------------------------------------------
   You asked for BRAC conferences "from 2024 onward" — but Dr. Saha has NO
   conference papers in 2022, 2023, 2024, or 2025. His most recent conference
   papers are from 2021 (three of them won Best-Paper awards).

   So there are no 2024+ conferences to add. Choose one:
     (a) Remove all his conference lines from data.js (strict "BRAC 2024+"), or
     (b) Keep the 2021 Best-Paper conferences (recommended — they're notable
         and coincide with your stated 2021 BRAC start).
   Tell me which and I'll finalise.
   -------------------------------------------------------------------------- */

{ year: 2025, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "Multi-Operator Dynamic Spectrum Sharing for LTE and NR Coexistence", venue: "2025 28th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh, 2025, 4765-4770", url: "https://doi.org/10.1109/ICCIT68739.2025.11491314" },

{ year: 2025, type: "conference", faculty: "saha", authors: "R. K. Saha", title: "A Novel Approach for Dynamic Spectrum Sharing Between LTE and NR in Heterogeneous Networks", venue: "2025 7th International Conference on Electrical Information and Communication Technology (EICT), Khulna, Bangladesh, 1-6", url: "https://doi.org/10.1109/EICT68394.2025.11355517" },

];

/* ---------------- PATENT --------------------------------------------------
   The Japanese patent (JP 2019-031876) is dated 2019 (KDDI-era). Keep it or
   drop it — your call. It is not a BRAC-affiliation item.
   -------------------------------------------------------------------------- */
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
