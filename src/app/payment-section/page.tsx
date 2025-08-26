"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PaymentSection = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    // Simulate payment step
    document.getElementById("payment-summary")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 md:grid md:grid-cols-2 md:p-0">
      {/* Form Section - left on desktop, below on mobile */}
      <div className="flex items-center justify-center order-2 w-full py-8 md:py-0 md:order-1">
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md p-6 space-y-4 bg-white shadow-xl rounded-2xl md:p-12">
          <h2 className="mb-2 text-xl font-bold text-center">Enter your details</h2>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-4 py-2 text-sm border border-gray-300 rounded-full focus:ring focus:ring-indigo-300 md:text-base"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-4 py-2 text-sm border border-gray-300 rounded-full focus:ring focus:ring-indigo-300 md:text-base"
            required
          />
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" id="terms" required className="rounded" />
            <label htmlFor="terms">I agree to the <a href="#" className="text-blue-600 underline">Terms</a></label>
          </div>
          {error && <div className="text-xs text-center text-red-600">{error}</div>}
          <button type="submit" className="flex items-center justify-center px-6 py-2 space-x-2 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800">
            Continue to payment
            <span className="ml-2">→</span>
          </button>
        </form>
      </div>
      {/* Certificate Card - right on desktop, top on mobile */}
      <div className="flex items-center justify-center pt-[90px] sm:pt-0 order-1 w-full py-8 md:py-0 md:order-2">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8 text-center text-white shadow-xl bg-gradient-to-br from-[#2FC1C4] to-[#258a8c] rounded-2xl md:p-12 md:max-w-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="English Speaking" className="mb-4 w-14 h-14" />
          <h2 className="mb-2 text-2xl font-bold">English Speaking Mastery</h2>
          <div className="mb-2 text-base">Professional Certificate</div>
          <div className="mb-4 text-xs">by English Academy</div>
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm">3 Months of Access</span>
            <span className="text-lg font-bold">₹3,499</span>
            <span className="text-xs">Total: ₹3,499</span>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800">Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
