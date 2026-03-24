export type StrengthTypeKey =
  | "drive_creativity"
  | "empathy_patience"
  | "creativity_drive"
  | "analytical_drive"
  | "patience_drive"
  | "analytical_empathy"
  | "drive_patience"
  | "patience_creativity"
  | "empathy_drive"
  | "empathy_creativity"
  | "default";

export interface StrengthTypeStyle {
  mainColor: string;
  subColor: string;
  gradient?: string;
}

export const strengthTypeStyles: Record<string, StrengthTypeStyle> = {
  drive_creativity: {
    mainColor: "#FF4D4F",
    subColor: "#FFA39E",
    gradient: "linear-gradient(135deg, #FF4D4F, #FF7A45)",
  },
  empathy_patience: {
    mainColor: "#FF8FB1",
    subColor: "#FFE4EC",
    gradient: "linear-gradient(135deg, #FF8FB1, #FFC0CB)",
  },
  creativity_drive: {
    mainColor: "#FFD600",
    subColor: "#FFF59D",
    gradient: "linear-gradient(135deg, #FFD600, #FFF176)",
  },
  analytical_drive: {
    mainColor: "#3A7AFE",
    subColor: "#D6E4FF",
    gradient: "linear-gradient(135deg, #3A7AFE, #7ABCFF)",
  },
  patience_drive: {
    mainColor: "#6B7280",
    subColor: "#D1D5DB",
    gradient: "linear-gradient(135deg, #6B7280, #9CA3AF)",
  },
  analytical_empathy: {
    mainColor: "#8B5CF6",
    subColor: "#E9D5FF",
    gradient: "linear-gradient(135deg, #8B5CF6, #C084FC)",
  },
  drive_patience: {
    mainColor: "#FF6A00",
    subColor: "#FFD8B5",
    gradient: "linear-gradient(135deg, #FF6A00, #FF9500)",
  },
  patience_creativity: {
    mainColor: "#34D399",
    subColor: "#D1FAE5",
    gradient: "linear-gradient(135deg, #34D399, #6EE7B7)",
  },
  empathy_drive: {
    mainColor: "#FF3CAC",
    subColor: "#784BA0",
    gradient: "linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
  },
  empathy_creativity: {
    mainColor: "#4FACFE",
    subColor: "#00F2FE",
    gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  },
};

