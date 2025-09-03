"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LearningDashboard from "@/component/student-dashboard/DashboardBanner";

export default function StudentDashboard() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem('scitorUser');
    if (!user) {
      router.replace('/login');
    }
  }, [router]);
  return <LearningDashboard />;
}