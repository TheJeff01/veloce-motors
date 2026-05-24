"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-transparent border border-[#1E1E1E] text-[#F0EDE8] placeholder-[#6B7280] px-4 py-3 text-sm focus:outline-none focus:border-[#C8932A] transition-colors duration-200";

export default function ContactForm({ cars = [] }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center min-h-64 py-12">
        <div className="w-10 h-[2px] bg-[#C8932A] mb-6" />
        <h3 className="font-display text-3xl font-light text-[#F0EDE8] mb-3">Thank you.</h3>
        <p className="text-[#9DA3AE] text-sm leading-relaxed">
          We&apos;ve received your enquiry. A member of our team will be in contact within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      {cars.length > 0 ? (
        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className={inputClass + " appearance-none"}
        >
          <option value="" disabled>
            Vehicle of Interest
          </option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.year} {car.make} {car.model}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle of Interest"
          value={form.vehicle}
          onChange={handleChange}
          className={inputClass}
        />
      )}
      <input
        type="date"
        name="date"
        min={today}
        value={form.date}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={inputClass + " resize-none"}
      />
      <button
        type="submit"
        className="w-full bg-[#C8932A] text-[#0C0C0C] text-[12px] tracking-[0.18em] uppercase py-3.5 font-semibold hover:bg-[#F0EDE8] transition-colors duration-200"
      >
        Send Enquiry
      </button>
    </form>
  );
}
