// ===============================
// 🧩 Card Component Interfaces
// ===============================

export interface CardProps {
  id?: string | number;
  image?: string;
  title: string;
  description?: string;
  price?: string | number;
  location?: string;
  onClick?: () => void;
  // Future properties can include:
  // tags?: string[];
  // isFeatured?: boolean;
  // buttonLabel?: string;
}

// ===============================
// 🔘 Button Component Interfaces
// ===============================

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  className?: string;
  // Optional future extensions:
  // icon?: React.ReactNode;
  // loading?: boolean;
  // size?: "small" | "medium" | "large";
}

// ===============================
// ⚙️ Global / Shared Interfaces
// (You can add more as your app evolves)
// ===============================


