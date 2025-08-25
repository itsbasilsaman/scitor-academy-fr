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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-2 md:p-10 gap-4 md:gap-10">
      {/* Left: Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 md:p-8 flex flex-col gap-3 md:gap-5">
        <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Enter your details</h2>
        <label className="font-medium text-sm md:text-base">Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
          required
        />
        <label className="font-medium text-sm md:text-base">Email<span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
          required
        />
        {error && <div className="text-red-600 text-xs md:text-sm">{error}</div>}
        <button type="submit" className="w-full py-3 mt-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 text-base md:text-lg shadow">Continue to payment</button>
      </form>
      {/* Right: Payment Summary */}
      <div id="payment-summary" className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 md:p-8 flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3 md:gap-4">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="English Speaking" className="h-8 md:h-10 w-auto" />
          <div>
            <div className="font-bold text-base md:text-lg">English Speaking Mastery Professional Certificate</div>
            <div className="text-xs text-gray-500">by English Academy</div>
            <button className="text-xs text-blue-600 hover:underline mt-1">Remove from cart</button>
          </div>
        </div>
        <div className="border-t pt-3 md:pt-4">
          <div className="flex justify-between text-gray-700 font-medium text-sm md:text-base">
            <span>3 Months of Access:</span>
            <span>₹3,499</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-2">
            <span>Total:</span>
            <span>₹3,499</span>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Testimonial" className="w-12 md:w-16 h-12 md:h-16 rounded-lg object-cover" />
          <div className="text-gray-700 text-xs md:text-sm">
            The courses I took taught me how to turn theory into concrete & systematic practice. Coursera has been paramount to the advancement of my career.
            <div className="mt-2 text-xs text-gray-500">— Ana C.</div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-8 mt-3 md:mt-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-base md:text-lg">140 Million+</span>
            <span className="text-xs text-gray-500">Learners</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-base md:text-lg">10,000+</span>
            <span className="text-xs text-gray-500">Courses</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 mt-4 md:mt-6">
          <div className="flex gap-2 items-center flex-wrap">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-5 md:h-6" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="h-5 md:h-6" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-5 md:h-6" />
            <img src="https://img.icons8.com/color/48/000000/bank-card-back-side.png" alt="Net Banking" className="h-5 md:h-6" />
            <img src="https://img.icons8.com/color/48/000000/upi.png" alt="UPI" className="h-5 md:h-6" />
            <span className="ml-2 text-xs text-gray-500">EMI</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            By continuing to payment, I agree to the <a href="#" className="text-blue-600 underline">Terms of Use</a>, <a href="#" className="text-blue-600 underline">Refund Policy</a>, and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
