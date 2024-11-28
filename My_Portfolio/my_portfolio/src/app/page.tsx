"use client";
import Hero from "@/components/Hero_Section";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-gray-100">
      
      <Hero />
      <Skills />
      <Experience />
      <Footer />

    </main>
  );
}
