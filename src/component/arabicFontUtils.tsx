import React from "react";

// Utility to detect Arabic characters
export function isArabic(text: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text);
}

// Props for the ArabicText component
interface ArabicTextProps {
  children: React.ReactNode;
  heading?: boolean;
  className?: string;
}

// Component to wrap Arabic text with correct font class
export const ArabicText: React.FC<ArabicTextProps> = ({ children, heading = false, className = "" }) => {
  const text = typeof children === "string" ? children : "";
  const isAr = isArabic(text);
  // Always use .arabic-text for Arabic, regardless of heading
  const fontClass = isAr ? "arabic-text" : "";
  return (
    <span className={`${fontClass} ${className}`.trim()}>{children}</span>
  );
};

// Usage example:
// <ArabicText heading>مرحبا بكم</ArabicText>
// <ArabicText>هذا نص عربي عادي</ArabicText>
