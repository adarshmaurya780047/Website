"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Native SVGs
const CameraIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const CodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#09090b]/90 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 p-[1px] shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <div className="w-full h-full bg-[#09090b] rounded-full flex items-center justify-center">
                <CameraIcon className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <span className="block font-bold text-xl tracking-widest text-white uppercase font-serif">
                Adarsh Creator
              </span>
              <span className="block text-[10px] text-amber-500 font-medium tracking-[0.2em] uppercase mt-0.5">
                Cinematography
              </span>
            </div>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest text-zinc-400 uppercase">
            <Link href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</Link>
            <Link href="#services" className="hover:text-amber-500 transition-colors">Services</Link>
            <Link href="#about" className="hover:text-amber-500 transition-colors">About</Link>
          </nav>

          {/* Right Actions (Book Button + Tiny Dev Link) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/adarsh_creator_ayodhya/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-all active:scale-95"
            >
              Book Shoot
            </a>
            
            {/* Minimal Developer Button */}
            <div className="w-[1px] h-6 bg-zinc-800 mx-2" />
            <a
              href="https://chetanjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Developed by Chetan's Agency"
              className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-800 hover:text-white transition-all group"
            >
              <CodeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-white/5 absolute w-full px-6 py-8 space-y-6">
          <Link href="#portfolio" onClick={() => setIsOpen(false)} className="block text-white font-serif text-2xl">Portfolio</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="block text-white font-serif text-2xl">Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block text-white font-serif text-2xl">About</Link>
          
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a href="https://www.instagram.com/adarsh_creator_ayodhya/" className="w-full py-4 rounded-xl bg-white text-black text-center font-bold text-sm uppercase tracking-widest">
              Book Shoot
            </a>
            <a href="https://chetanjs.vercel.app" className="w-full py-4 rounded-xl border border-zinc-800 text-zinc-400 text-center font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              <CodeIcon className="w-4 h-4" />
              <span>Chetan's Agency</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}