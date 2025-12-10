"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Redefining Modern Fashion in Kenya
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90">
            Urstyle.ke blends technology, creativity, and premium fabrics to create a fashion
            experience tailored for the modern Kenyan.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-900 font-base leading-relaxed text-lg">
              Founded in Kenya, Urstyle.ke was built on the belief that fashion should be
              expressive, accessible, and premium. We blend modern designs with African-inspired
              creativity, empowering individuals to look and feel exceptional every day.
            </p>
            <p className="text-gray-900 font-base leading-relaxed mt-4">
              What started as a small passion project transformed into a full digital fashion
              brand serving customers nationwide with high-quality fabrics, smart sizing, and
              seamless online shopping.
            </p>
          </div>

          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg"
              alt="Fashion creativity"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="p-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-900 font-base text-lg leading-relaxed">
            To revolutionize Kenyan fashion through premium quality, ethical sourcing,
            and a seamless online shopping experience powered by intelligent technology.
          </p>
        </div>

        <div className="p-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-900 font-base text-lg leading-relaxed">
            To be Kenya’s most trusted and trend-setting fashion brand—leading in quality,
            innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* 🔥 STATS SECTION (Enhanced) */}
      <StatsSection />

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Our Core Values</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Premium Quality", desc: "Every detail matters — fabrics, stitching, design." },
            { title: "Customer First", desc: "We prioritize comfort, experience, and satisfaction." },
            { title: "Ethical Production", desc: "Responsible sourcing and fair, transparent production." },
            { title: "Innovation", desc: "Tech-driven shopping, smart sizing, and modern styles." },
          ].map((val, i) => (
            <div key={i} className="bg-gray-50 p-8 shadow-sm rounded-2xl border border-gray-100">
              <h3 className="font-bold text-xl mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Why Choose Urstyle.ke?</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard title="Fast Nationwide Delivery" desc="We deliver quickly and reliably across Kenya." />
            <FeatureCard title="Trend-Driven Designs" desc="Styles inspired by both African and global fashion." />
            <FeatureCard title="Smart Technology" desc="Effortless shopping with a modern, seamless experience." />
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Creative Director", img: "https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg" },
            { name: "Lead Designer", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" },
            { name: "Brand Strategist", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center border">
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                <Image src={member.img} fill className="object-cover" alt={member.name} />
              </div>
              <h3 className="font-bold text-xl">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">Experience Fashion That Feels Premium</h2>
        <p className="mb-8 text-lg opacity-90">Browse our latest collection and step into your new style.</p>
        <a
          href="/shop"
          className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100"
        >
          Shop Now
        </a>
      </section>

    </div>
  );
}


function StatsSection() {
  const stats = [
    { label: "Happy Customers", value: 2500 },
    { label: "Products Delivered", value: 12000 },
    { label: "Premium Products", value: 850 },
    { label: "Avg. Delivery Time", value: 24, suffix: " hrs" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Trusted by Thousands</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Single Stat Card */
function StatCard({ value, label, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
      <h3 className="text-4xl font-extrabold text-purple-600">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-600 mt-2 text-lg">{label}</p>
    </div>
  );
}

/* Feature Card */
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 shadow-sm rounded-2xl border border-gray-900">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
