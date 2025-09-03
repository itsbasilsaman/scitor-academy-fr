"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContentWithDirection({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>;
}
