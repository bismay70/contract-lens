export const navItems = [
  { label: "Home", icon: "H" },
  { label: "Dashboard", icon: "D", active: true },
  { label: "Documents", icon: "F" },
  { label: "Analytics", icon: "A" },
  { label: "Knowledge Graph", icon: "K" },
  { label: "Compliance", icon: "C" },
  { label: "Settings", icon: "S" },
];

export const intelligenceCards = [
  {
    title: "KPI Analytics",
    description: "Performance & Anomaly Detection",
    accent: "bars",
  },
  {
    title: "Bidwise",
    description: "Tender & RFP Intelligence",
    accent: "doc",
  },
  {
    title: "Industrial AI",
    description: "Maintenance & Asset intelligence",
    accent: "stack",
  },
];

export const capabilityTags = [
  "Document intelligence",
  "Retrieval-Augmented Generation",
  "Knowledge Graph",
  "Predictive Analytics",
  "Evidence Based Insights",
  "Human-in-the-Loop Review",
];

export const workflowRows = [
  {
    label: "Document Ingestion",
    color: "bg-[#1b332c]",
    bars: [{ left: "0%", width: "100%", color: "bg-[#ded7c9]" }],
    meta: "36 docs",
  },
  {
    label: "Data Extraction",
    color: "bg-[#c86645]",
    bars: [
      { left: "2%", width: "82%", color: "bg-[#e6dfd3]" },
      { left: "69%", width: "16%", color: "bg-[#cbb9f1]" },
    ],
    meta: "420 fields structured",
  },
  {
    label: "Knowledge Graph",
    color: "bg-[#6386d8]",
    bars: [{ left: "1%", width: "99%", color: "bg-[#ded7c9]" }],
    meta: "288 nodes",
  },
  {
    label: "Human Review",
    color: "bg-[#9a68d0]",
    bars: [
      { left: "0%", width: "4%", color: "bg-[#cbb9f1]" },
      { left: "50%", width: "4%", color: "bg-[#d8b3df]" },
      { left: "54%", width: "46%", color: "bg-[#ded7c9]" },
    ],
    meta: "1,318 messages",
  },
];

export const steps = [
  {
    index: "1.",
    title: "Ingest",
    description: "PDFs, Contracts, CAD, Excel",
  },
  {
    index: "2.",
    title: "Extract",
    description: "AI, OCR, NLP, Vision",
  },
  {
    index: "3.",
    title: "Connect",
    description: "Knowledge Graph + RAG",
  },
  {
    index: "4.",
    title: "Insight",
    description: "Analytics & Risk Decisions",
  },
];
