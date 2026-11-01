/**
 * Centralized site configuration for Kevin Shroads Coaching & Transformation.
 */

export const siteConfig = {
  name: "Kevin Shroads",
  descriptor: "Coaching & Transformation",
  location: "Denver, Colorado",
  tagline: "Move through change with more clarity and intention.",
  description:
    "1:1 coaching and mindfulness-based support for people navigating change, questioning what comes next, or wanting to live with greater awareness.",
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
      "meditation coaching",
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
  cta: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
    alt: "Soft morning light across open landscape",
  },
} as const;

/** Website presentation device — not claimed as Kevin's official methodology. */
export const coachingFramework = [
  {
    number: "01",
    title: "Notice",
    description:
      "Create enough space to see what's actually happening.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Explore patterns, pressure, expectations and what matters beneath them.",
  },
  {
    number: "03",
    title: "Choose",
    description: "Clarify the direction that feels most honest.",
  },
  {
    number: "04",
    title: "Move",
    description:
      "Turn insight into practical action and learn from what follows.",
  },
] as const;

export const humanSituations = [
  {
    title: "At a crossroads",
    description:
      "Something is changing, but the next direction isn't clear.",
  },
  {
    title: "Successful but disconnected",
    description:
      "Things may look fine externally while something internally feels off.",
  },
  {
    title: "Ready for a different way",
    description:
      "You want your next decisions to come from awareness instead of pressure.",
  },
] as const;

export const coachingFor = [
  "You're entering or leaving a major chapter.",
  "A decision keeps circling without becoming clearer.",
  "Your external life works, but something internally feels disconnected.",
  "You're tired of reacting from urgency.",
  "You want greater intention in how you work, relate and live.",
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
  "Intentional action",
] as const;

export const approachPillars = [
  {
    title: "Awareness",
    description:
      "See what is actually happening before rushing to change it.",
  },
  {
    title: "Perspective",
    description:
      "Question the story, assumption or pressure shaping the situation.",
  },
  {
    title: "Action",
    description:
      "Move from understanding into a practical next step.",
  },
] as const;

export const coachingFaq = [
  {
    question: "What happens in a coaching conversation?",
    answer:
      "Focused, honest conversation. Together you look at where you are, what feels off or unfinished, and what a more intentional next step might be.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "People navigating transitions, decisions, uncertainty, or the sense that their current direction no longer fits.",
  },
  {
    question: "Is coaching virtual?",
    answer:
      "Conversations can be held remotely. Format and logistics can be confirmed when you connect.",
  },
  {
    question: "How often do people meet with you?",
    answer:
      "Cadence varies. Specific rhythm and format can be discussed during an initial conversation.",
  },
  {
    question: "How do I know whether coaching is right for me?",
    answer:
      "If you're looking for space to think clearly and move with more intention — not clinical treatment — coaching may be a useful fit. An initial conversation helps clarify that.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a short note through the contact form. Kevin will respond and you can explore whether the work feels right.",
  },
] as const;
