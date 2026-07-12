/**
 * English content dictionary. This is the translated data layer for the
 * homepage — all copy lives here, never hard-coded in components (brief §13).
 * Content mirrors the approved design bundle and uses only verified FMK facts;
 * placeholder entries are flagged (verified/published = false).
 */
export const en = {
  meta: {
    title:
      "FMK Intertrade | Agriculture, Livestock, Engineering & Cold Chain Solutions",
    description:
      "FMK Intertrade delivers integrated agriculture, livestock, engineering, cold storage, logistics and cross-border trade solutions across Southeast Asia.",
    ogAlt: "FMK Intertrade — Integrated Agriculture & Livestock Solutions",
  },
  skip: "Skip to main content",
  brandDescriptor: "Integrated Agriculture & Livestock Solutions",
  topbar: {
    locations: "Thailand · Laos P.D.R. · Myanmar",
    tagline: "Integrated Agriculture & Livestock Solutions",
  },
  nav: [
    { label: "Home", href: "#top" },
    { label: "About FMK", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#solutions" },
    { label: "Projects", href: "#projects" },
    { label: "Knowledge", href: "#knowledge" },
    { label: "Our Network", href: "#network" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    consult: "Request Consultation",
    learnMore: "Learn more",
    contactTeam: "Contact Our Team",
  },
  hero: {
    eyebrow: "TRUSTED INFRASTRUCTURE PARTNER",
    headline: "Building Sustainable Growth for Agriculture and Livestock",
    sub: "FMK delivers integrated products, engineering systems, cold-chain logistics and international trade solutions designed for long-term business performance across Southeast Asia.",
    ctaPrimary: "Explore Our Solutions",
    ctaSecondary: "Discuss Your Project",
    valueTitle: "AN INTEGRATED CAPABILITY",
    values: [
      { icon: "boxes", label: "Products", desc: "Fertilizer, feed, veterinary medicine and packaging" },
      { icon: "gear", label: "Engineering", desc: "Livestock housing and greenhouse systems" },
      { icon: "snowflake", label: "Cold Chain", desc: "Cold storage and packing services" },
      { icon: "globe", label: "Regional Trade", desc: "Import, export and cross-border logistics" },
    ],
  },
  trust: [
    { icon: "layers", title: "Integrated Solutions", desc: "Products, engineering and logistics under one partner" },
    { icon: "globe", title: "Regional Network", desc: "Operating across Thailand, Laos and Myanmar" },
    { icon: "boxes", title: "B2B Capability", desc: "Big-lot supply and full project delivery" },
    { icon: "handshake", title: "Long-term Partnership", desc: "Reliable support throughout the value chain" },
  ],
  about: {
    eyebrow: "ABOUT FMK",
    title: "More Than a Trading Company",
    lead: "A partner across the entire agricultural and livestock value chain.",
    body: "FMK Intertrade bridges production and multi-category distribution — connecting products, engineering systems, warehousing and cold storage, transportation and cross-border trade to strengthen the value chain for farmers and farm operators.",
    badge: "OUR COMMITMENT",
    badgeDesc: "Globally trusted, sustainable growth and ecological responsibility.",
    imageAlt: "PLACEHOLDER — Replace with verified FMK project image",
    principles: [
      { icon: "shield", title: "Reliability", desc: "Dependable supply and consistent standards our partners can plan around." },
      { icon: "gear", title: "Technical Capability", desc: "Engineering-led systems for livestock housing and controlled cultivation." },
      { icon: "globe", title: "Regional Reach", desc: "A footprint that connects local operations to regional markets." },
      { icon: "trending", title: "Sustainable Growth", desc: "Solutions built for long-term operational and environmental performance." },
    ],
  },
  solutions: {
    eyebrow: "INTEGRATED SOLUTIONS",
    title: "One Ecosystem of Solutions for Modern Agriculture",
    sub: "From inputs and animal health to engineering, cold chain and cross-border trade — a single, structured partner across the value chain.",
    items: [
      { slug: "agricultural-inputs", icon: "sprout", num: "01", title: "Agricultural Inputs", desc: "Fertilizer, soil and water conditioners and crop inputs sourced for consistent field performance.", tags: ["Fertilizer", "Soil Conditioner", "Crop Inputs"] },
      { slug: "feed-animal-health", icon: "medical", num: "02", title: "Feed & Animal Health", desc: "Animal feed, premix, feed additives, veterinary medicine and vaccines for productive, healthy herds and flocks.", tags: ["Animal Feed", "Premix", "Veterinary", "Vaccine"] },
      { slug: "livestock-housing", icon: "barn", num: "03", title: "Livestock Housing Systems", desc: "Poultry and swine housing with evaporative cooling, ventilation and environmental control.", tags: ["Evaporative", "Ventilation", "Farm Equipment"] },
      { slug: "greenhouse", icon: "greenhouse", num: "04", title: "Greenhouse Solutions", desc: "Greenhouse structures and protected cultivation with irrigation and environmental systems.", tags: ["Structures", "Irrigation", "Climate Control"] },
      { slug: "cold-storage-packing", icon: "snowflake", num: "05", title: "Cold Storage & Packing", desc: "Temperature-controlled storage, product packing, handling and distribution preparation.", tags: ["Cold Storage", "Packing", "Handling"] },
      { slug: "logistics-trade", icon: "truck", num: "06", title: "Logistics & Cross-border Trade", desc: "Transportation, shipping, import and export with regional distribution across the mainland.", tags: ["Transport", "Import / Export", "Shipping Agent"] },
    ],
  },
  projects: {
    eyebrow: "CAPABILITY & PROJECTS",
    title: "Infrastructure Built Around Real Operations",
    sub: "Representative capability areas across housing, cold chain and logistics. Verified project references will be published as FMK confirms details.",
    viewAll: "View All Projects",
    pending: "Project information pending verification",
    imageAlt: "PLACEHOLDER — verified project image",
    items: [
      { id: "housing", type: "LIVESTOCK HOUSING", name: "Evaporative Livestock Housing", location: "Thailand", scope: "Design & build" },
      { id: "coldchain", type: "COLD CHAIN", name: "Cold Storage & Packing", location: "Thailand" },
      { id: "greenhouse", type: "GREENHOUSE", name: "Protected Cultivation", location: "Thailand" },
    ],
  },
  why: {
    eyebrow: "WHY FMK",
    title: "Standards That Build Lasting Confidence",
    items: [
      { icon: "handshake", num: "01", title: "Responsible Partnership", desc: "We work as a long-term partner, accountable across every stage of delivery." },
      { icon: "check", num: "02", title: "Operational Reliability", desc: "Consistent supply and execution that operations can depend on." },
      { icon: "gear", num: "03", title: "Technical Expertise", desc: "Engineering knowledge applied to real farm and facility challenges." },
      { icon: "trending", num: "04", title: "Sustainable Progress", desc: "Solutions designed for durable, responsible growth." },
    ],
  },
  network: {
    eyebrow: "OUR NETWORK",
    title: "Connected Locally. Positioned Regionally.",
    sub: "A network of offices in Thailand with an established presence in neighbouring markets, positioning FMK to serve operations across the region.",
    thailand: "THAILAND",
    overseas: "OVERSEAS",
    statOffices: "Offices in Thailand",
    statCountries: "Countries served",
    th: [
      { city: "Bangkok", role: "HEAD OFFICE", detail: "142/36 Suksawitthaya Soi, Silom, Bangrak, Bangkok 10500" },
      { city: "Chiang Mai", role: "BRANCH", detail: "Northern regional operations" },
      { city: "Nakhon Phanom", role: "BRANCH", detail: "Northeastern / border operations" },
      { city: "Nakhon Ratchasima", role: "BRANCH", detail: "Northeastern regional operations" },
    ],
    overseasOffices: [
      { city: "Laos P.D.R.", detail: "FMK Laos Intertrade — import & export operations" },
      { city: "Myanmar", detail: "Representative office" },
    ],
  },
  knowledge: {
    eyebrow: "KNOWLEDGE & INSIGHTS",
    title: "Industry Knowledge and Practical Insights",
    viewAll: "All Articles",
    readMore: "Read more",
    imageAlt: "PLACEHOLDER — article image",
    items: [
      { id: "housing-env", category: "Livestock Management", date: "Draft — pending publication", title: "Environmental control in modern livestock housing", excerpt: "Placeholder summary. Replace with a verified FMK article on ventilation and evaporative cooling." },
      { id: "coldchain-integrity", category: "Cold Chain", date: "Draft — pending publication", title: "Maintaining product integrity through the cold chain", excerpt: "Placeholder summary. Replace with a verified FMK article on cold storage and handling." },
      { id: "crossborder", category: "Cross-border Trade", date: "Draft — pending publication", title: "Moving agricultural goods across regional borders", excerpt: "Placeholder summary. Replace with a verified FMK article on logistics and trade." },
    ],
  },
  finalCta: {
    eyebrow: "START A CONVERSATION",
    title: "Let’s Build Your Next Operation Together",
    sub: "Talk to FMK about big-lot supply, livestock systems, agricultural projects, cold storage or regional logistics.",
  },
  contact: {
    title: "DIRECT CONTACT",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Head Office",
  },
  footer: {
    tagline:
      "FMK Intertrade bridges production and multi-category distribution to strengthen the value chain for farmers and farm operators.",
    colCompany: "COMPANY",
    colSolutions: "SOLUTIONS",
    colContact: "CONTACT",
    headOffice: "HEAD OFFICE",
    hours: "Mon–Fri, 08:30–17:30 (ICT)",
    copyright: "© 2026 FMK Intertrade Company Limited. All rights reserved.",
    company: ["About FMK", "Vision & Mission", "Management", "Careers", "Contact"],
    solutions: ["Agricultural Inputs", "Feed & Animal Health", "Livestock Engineering", "Greenhouse", "Cold Chain", "Logistics"],
    legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"],
  },
  form: {
    eyebrow: "REQUEST CONSULTATION",
    title: "Discuss Your Project with FMK",
    sub: "Share a few details and our team will follow up on supply, systems or logistics.",
    demoBadge: "Demo form — backend integration required",
    fullName: "Full Name",
    company: "Company Name",
    position: "Job Position",
    country: "Country",
    email: "Email",
    phone: "Phone",
    solution: "Interested Solution",
    projectType: "Estimated Project Type",
    message: "Message",
    contactMethod: "Preferred Contact Method",
    consent:
      "I agree to FMK Intertrade processing my information to respond to this enquiry, in line with the Privacy Policy.",
    submit: "Submit Request",
    submitting: "Submitting…",
    demoTitle: "Details captured (demo)",
    demoBody:
      "This is a prototype form. No data was sent — connect a backend endpoint to receive submissions.",
    close: "Close",
    errRequired: "This field is required",
    errEmail: "Enter a valid email address",
    errPhone: "Enter a valid phone number",
    errConsent: "Please accept the privacy policy",
    countryOpts: ["Select country", "Thailand", "Laos P.D.R.", "Myanmar", "Cambodia", "Vietnam", "Other"],
    solutionOpts: ["Select a solution", "Agricultural Inputs", "Feed & Animal Health", "Livestock Housing", "Greenhouse", "Cold Storage & Packing", "Logistics & Trade"],
    projectTypeOpts: ["Select type", "Big-lot supply", "Construction project", "Ongoing supply", "Consultation / assessment"],
    contactMethodOpts: ["Phone", "Email", "LINE", "WhatsApp"],
  },
};

export type Dictionary = typeof en;
