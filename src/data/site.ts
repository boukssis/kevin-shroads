/**
 * Centralized site configuration for Kevin Shroads Coaching & Transformation.
 * Replace placeholders after Kevin reviews the demo.
 */

export const siteConfig = {
  name: "Kevin Shroads",
  descriptor: "Coaching & Transformation",
  location: "Colorado / Denver area",
  tagline: "Find clarity in where you are. Move intentionally toward what's next.",
  shortTagline: "Slow down. See clearly. Move forward.",
  description:
    "1:1 coaching and mindfulness-based support focused on clarity, presence, alignment and intentional personal growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kevin-shroads.com",
  linkedIn: "https://www.linkedin.com/in/kevin-shroads-882051179/",
  /**
   * PRODUCTION: set NEXT_PUBLIC_BOOKING_URL to Calendly, Cal.com, or another scheduler.
   * Until configured, CTAs route to the contact form.
   */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  /**
   * PRODUCTION: set NEXT_PUBLIC_CONTACT_ENDPOINT to your form handler.
   * Demo falls back to /api/contact with a simulated success response in development.
   */
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
      "Kevin Shroads Coaching",
      "Life Coach Colorado",
      "Personal Transformation Coach Colorado",
      "Mindfulness Coach Colorado",
      "Meditation Coaching",
      "1:1 Personal Coaching",
      "Transformation Coaching",
      "Clarity Coaching",
    ],
  },
} as const;

export const images = {
  /**
   * PORTRAIT: Replace with a verified professional photo of Kevin Shroads.
   * Do not use an unrelated person's photograph.
   * Until a verified portrait is provided, the site uses a replaceable placeholder treatment.
   */
  portrait: {
    src: "/images/kevin-portrait-placeholder.jpg",
    alt: "Portrait placeholder for Kevin Shroads — replace with verified professional photography",
    hasVerifiedPhoto: false,
  },
  hero: {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80",
    alt: "Quiet mountain ridgeline in soft morning light",
  },
  forest: {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80",
    alt: "Sunlit forest path inviting a slower pace",
  },
  water: {
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2000&q=80",
    alt: "Still lake reflecting open sky",
  },
  trail: {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80",
    alt: "Quiet trail through open landscape",
  },
  morning: {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=80",
    alt: "Soft morning light across a natural landscape",
  },
  reflection: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    alt: "Mountain peaks above quiet clouds",
  },
  journaling: {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    alt: "Hands writing in a notebook with natural light",
  },
  meditationSpace: {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80",
    alt: "Calm seated presence in soft natural light",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
    alt: "Wide alpine landscape under open sky",
  },
} as const;

export const coachingFramework = [
  {
    number: "01",
    title: "Pause",
    description:
      "Step out of the noise long enough to notice what's actually happening.",
  },
  {
    number: "02",
    title: "See",
    description:
      "Develop greater awareness around patterns, choices and priorities.",
  },
  {
    number: "03",
    title: "Clarify",
    description:
      "Separate pressure and expectation from what genuinely matters.",
  },
  {
    number: "04",
    title: "Align",
    description: "Identify the direction that feels honest and intentional.",
  },
  {
    number: "05",
    title: "Move",
    description:
      "Take practical next steps and learn from what unfolds.",
  },
] as const;

export const whoThisIsFor = [
  "You're moving through a transition.",
  "You know something needs to change but can't yet see what.",
  "You're taking action from pressure rather than clarity.",
  "You've achieved things externally but feel disconnected internally.",
  "You're seeking more peace and presence in your everyday life.",
  "You want support navigating your next chapter intentionally.",
  "You want space to hear yourself more clearly.",
] as const;

export const coachingThemes = [
  "Transitions",
  "Direction",
  "Decision-making",
  "Personal alignment",
  "Habits and patterns",
  "Purpose",
  "Growth",
  "Relationship with work and life",
  "Presence",
  "Intentional action",
] as const;

export const workCreatesSpaceFor = [
  {
    title: "Clarity",
    description: "A clearer sense of where you are and what matters next.",
  },
  {
    title: "Perspective",
    description: "Room to see familiar situations from a wider view.",
  },
  {
    title: "Awareness",
    description: "Greater recognition of patterns, pressure and intuition.",
  },
  {
    title: "Intentional action",
    description: "Next steps that feel honest rather than forced.",
  },
] as const;

export const principles = [
  {
    title: "Awareness before action",
    description:
      "Slowing down enough to notice what is driving a choice often changes the choice itself.",
  },
  {
    title: "Presence over pressure",
    description:
      "Clarity tends to arrive more readily when we meet life with attention instead of urgency alone.",
  },
  {
    title: "Progress through learning",
    description:
      "What doesn't go as planned can become useful feedback — a way of refining direction rather than a verdict.",
  },
] as const;

export const coachingExperience = [
  {
    title: "Conversation",
    description:
      "Honest, focused conversations that create room to see your situation differently.",
  },
  {
    title: "Reflection",
    description: "Exploring what is beneath the obvious answer.",
  },
  {
    title: "Awareness",
    description: "Recognizing patterns, assumptions and internal pressure.",
  },
  {
    title: "Action",
    description: "Turning insight into intentional next steps.",
  },
] as const;
