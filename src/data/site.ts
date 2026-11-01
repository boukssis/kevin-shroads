export const siteConfig = {
  name: "Kevin Shroads",
  descriptor: "Coaching & Transformation",
  location: "Denver, Colorado",
  tagline: "See where you are. Choose what comes next.",
  description:
    "1:1 coaching for people navigating change, uncertainty, or the feeling that their current direction no longer fits.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kevin-shroads.com",
  linkedIn: "https://www.linkedin.com/in/kevin-shroads-882051179/",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  contactEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact",
  social: {
    linkedIn: "https://www.linkedin.com/in/kevin-shroads-882051179/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Coaching", href: "/coaching" },
    { label: "Mindfulness", href: "/mindfulness" },
    { label: "Contact", href: "/contact" },
  ] as const,
  interests: [
    "1:1 Coaching",
    "Mindfulness & Meditation",
    "Group Experience",
    "General Question",
  ] as const,
  seo: {
    title: "Kevin Shroads | Coaching & Transformation",
    titleTemplate: "%s | Kevin Shroads",
    keywords: [
      "Kevin Shroads coaching",
      "personal transformation coach Colorado",
      "1:1 coaching Colorado",
      "mindfulness coaching Colorado",
      "life transition coaching",
    ],
  },
} as const;

export const images = {
  portrait: {
    src: "/images/kevin-portrait.jpg",
    alt: "Kevin Shroads",
  },
  water: {
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=80",
    alt: "Still water under soft open sky",
  },
  trail: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=80",
    alt: "Fog settling over quiet hills",
  },
  journaling: {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    alt: "Hands writing in a notebook with natural light",
  },
  detail: {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    alt: "Close natural texture in soft light",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
    alt: "Soft morning light across open landscape",
  },
} as const;

export const coachingFramework = [
  { number: "01", title: "Notice", description: "See what's actually happening." },
  {
    number: "02",
    title: "Understand",
    description: "Recognize what is shaping the situation.",
  },
  {
    number: "03",
    title: "Choose",
    description: "Clarify what feels true and important.",
  },
  {
    number: "04",
    title: "Move",
    description: "Turn insight into the next step.",
  },
] as const;

export const humanSituations = [
  {
    number: "01",
    title: "At a crossroads",
    description: "Something is changing, but the direction isn't clear.",
  },
  {
    number: "02",
    title: "Disconnected",
    description:
      "Life may look fine externally while something internally no longer fits.",
  },
  {
    number: "03",
    title: "Ready for change",
    description:
      "You want your next decision to come from awareness rather than pressure.",
  },
] as const;

export const coachingFor = [
  "You're entering or leaving a major chapter.",
  "A decision keeps circling without becoming clearer.",
  "Your external life works, but something internally feels off.",
  "You're tired of reacting from urgency.",
  "You want more intention in how you work, relate and live.",
] as const;

export const coachingThemes = [
  "Transitions",
  "Direction",
  "Decision-making",
  "Purpose",
  "Patterns",
  "Work & life",
  "Relationships",
  "Presence",
  "Identity",
  "Next steps",
] as const;

export const approachPillars = [
  {
    title: "Awareness",
    description: "See what is happening before rushing to change it.",
  },
  {
    title: "Perspective",
    description: "Question the story or pressure shaping the moment.",
  },
  {
    title: "Action",
    description: "Move from understanding into a practical next step.",
  },
] as const;

export const coachingFaq = [
  {
    question: "What happens in a coaching session?",
    answer:
      "Focused conversation. You look at where you are, what feels unfinished, and what a clearer next step might be.",
  },
  {
    question: "Who is coaching for?",
    answer:
      "People navigating transitions, decisions, uncertainty, or a direction that no longer fits.",
  },
  {
    question: "Is coaching virtual or in person?",
    answer:
      "Conversations can be held remotely. Format can be confirmed when you connect.",
  },
  {
    question: "How often would we meet?",
    answer:
      "Cadence varies. Format and rhythm can be discussed during an initial conversation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a short note. Kevin responds, and you explore whether the fit feels right.",
  },
] as const;

export const getStartedSteps = [
  {
    number: "01",
    title: "Start",
    description: "Send Kevin a short note about where you are.",
  },
  {
    number: "02",
    title: "Talk",
    description: "Have a conversation and see whether the fit feels right.",
  },
  {
    number: "03",
    title: "Work",
    description: "If it makes sense, begin the coaching process.",
  },
] as const;
