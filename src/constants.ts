import * as Yup from "yup";

export const customerInfoSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .required("Please enter your full name"),

  emailAddress: Yup.string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email address")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Email must include a valid domain, such as example.com",
    ),

  phoneNumber: Yup.string()
    // Remove spaces, brackets, and hyphens before validation
    .transform((value) => value?.replace(/[\s()-]/g, ""))
    .matches(
      /^(?:\+20|0020)?01[0125]\d{8}$/,
      "Please enter a valid phone number",
    )
    .required("Please enter your phone number"),
});

export interface formInterface {
  index: number;
  question: string;
  description?: string;
  helper?: string;
  section: number;
}
export interface answersInterface {
  q1: string;
  q2: string;
  q3: string;
  q4: {
    Loyalty: boolean;
    Courage: boolean;
    Discipline: boolean;
    Ambition: boolean;
    Family: boolean;
    Faith: boolean;
    Leadership: boolean;
    Wisdom: boolean;
    Integrity: boolean;
    Creativity: boolean;
    Freedom: boolean;
    Kindness: boolean;
    Honor: boolean;
    Justice: boolean;
    Curiosity: boolean;
  };
  q5: string;
  q6: string;
  q7: string;
  q8: {
    Bold: number;
    Energetic: number;
    Modern: number;
    Expressive: number;
    Emotional: number;
    Supporter: number;
    Careful: number;
  };
  q9: {
    w1: string;
    w2: string;
    w3: string;
  };
  q10: string;
  q11: string;
  q12: string;
}

export const answersMap = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
  "q11",
  "q12",
];

export const minChars = [200, 10, 10, 0, 1, 1, 1, 0, 0, 1, 1, 1];

export const form: formInterface[] = [
  {
    index: 1,
    question: "Tell us your story.",
    description:
      "What's the journey, event, or experience that best defines who you are today?",
    helper: "(A few sentences are enough.)",
    section: 1,
  },
  {
    index: 2,
    question: "What's one moment you'll never forget?",
    description: "The moment that changed you the most.",
    section: 1,
  },
  {
    index: 3,
    question: "What are you most proud of?",
    description: "A person, achievement, decision, or experience.",
    section: 1,
  },
  {
    index: 4,
    question: "⁠Choose up to five values.",
    section: 2,
  },
  {
    index: 5,
    question: "⁠Finish this sentence:",
    description: '"Every day, I strive to..."',
    section: 2,
  },
  {
    index: 6,
    question: "⁠What would you protect no matter the cost?",
    section: 2,
  },
  {
    index: 7,
    question: "⁠In one sentence...",
    description: "How do you hope people remember you?",
    section: 2,
  },
  {
    index: 8,
    question: "Rate yourself",
    section: 3,
  },
  {
    index: 9,
    question: "Choose three words that describe you.",
    section: 3,
  },
  {
    index: 10,
    question: "Who are you becoming?",
    description: "Describe the person you're working to become.",
    section: 4,
  },
  {
    index: 11,
    question:
      "⁠If this bracelet could remind you of one thing every day, what would it be?",
    section: 4,
  },
  {
    index: 12,
    question: "If your life became a symbol...",
    description: "What would it look like?",
    helper: "(There are no right or wrong answers.)",
    section: 4,
  },
];
