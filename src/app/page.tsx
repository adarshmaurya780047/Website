import Link from "next/link";

// Native SVGs
const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const PlayCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
);
const CameraIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
const VideoIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
);

// Mapped exactly to your provided Instagram posts
const portfolioItems = [
  {
    title: "Bridal Masterpiece (Part 1)",
    category: "Royal Bridal Shoot",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", // Replace with downloaded real image path e.g. "/insta-1.jpg"
    link: "https://www.instagram.com/p/DdP2i_emEyC/?img_index=1",
    tag: "Trending",
  },
  {
    title: "The Haldi Celebration",
    category: "Cinematic Moments",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop", // Replace
    link: "https://www.instagram.com/p/DdRJB9gGL07/?img_index=1",
    tag: "New",
  },
  {
    title: "Bridal Details (Part 2)",
    category: "Jewelry & Attire",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop", // Replace
    link: "https://www.instagram.com/p/DdP2i_emEyC/?img_index=2",
    tag: "Editorial",
  },
  {
    title: "Groom Portraits",
    category: "The Regal Look",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop", // Replace
    link: "https://www.instagram.com/p/DdRJB9gGL07/?img_index=3",
    tag: "Classic",
  },
  {
    title: "Bridal Elegance (Part 3)",
    category: "Signature Edit",
    img: "https://images.unsplash.com/photo-1595954421407-b6f7883b276b?q=80&w=1200&auto=format&fit=crop", // Replace
    link: "https://www.instagram.com/p/DdP2i_emEyC/?img_index=3",
    tag: "Viral",
  },
  {
    title: "Bridal Portraiture (Part 5)",
    category: "Final Look",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", // Replace
    link: "https://www.instagram.com/p/DdP2i_emEyC/?img_index=5",
    tag: "4K Quality",
  },
];

const services = [
  {
    icon: <VideoIcon className="w-8 h-8 text-amber-500" />,
    title: "Cinematic Wedding Films",
    desc: "Epic storytelling with drone vistas, slow-motion cuts, and emotional sound design.",
  },
  {
    icon: <CameraIcon className="w-8 h-8 text-amber-500" />,
    title: "Luxury Bridal Portraits",
    desc: "Magazine-quality editorial shots focusing on traditional aesthetics and raw emotion.",
  },
  {
    icon: <PlayCircleIcon className="w-8 h-8 text-amber-500" />,
    title: "Viral Instagram Reels",
    desc: "Fast-paced, color-graded sequences perfectly synced to trending audio.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 font-sans pb-20 md:pb-0 selection:bg-amber-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Indian Bride"
            className="w-full h-full object-cover scale-105 opacity-60"
            style={{ animation: "zoomInOut 25s infinite alternate ease-in-out" }}
          />
        </div>
        
        {/* Deep Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/40 to-[#09090b]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center mt-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-amber-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <SparklesIcon className="w-4 h-4 text-amber-400" />
            <span>Ayodhya&apos;s Premium Cinematography</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight text-white leading-[1.1]">
            Cinematic <br />
            <span className="italic font-light text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Storytelling</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-zinc-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Elevating your wedding moments into breathtaking visual masterpieces. Specializing in luxury bridal shoots and 4K reels.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="https://www.instagram.com/adarsh_creator_ayodhya/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-sm uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-all"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Book Your Shoot</span>
            </a>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              <PlayCircleIcon className="w-5 h-5" />
              <span>Watch Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section id="portfolio" className="pt-24 pb-16 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="border-l-4 border-amber-500 pl-5">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Latest <span className="text-amber-500 italic font-light">Frames</span></h2>
            <p className="text-zinc-500 mt-2 text-sm md:text-base font-medium">Click any image to view the original Instagram post.</p>
          </div>
          <a
            href="https://www.instagram.com/adarsh_creator_ayodhya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20"
          >
            <span>View Full Gallery</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#18181b] rounded-2xl aspect-[4/5] shadow-lg border border-white/5 hover:border-amber-500/50 transition-all duration-500 cursor-pointer block"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md rounded-full text-amber-400 border border-white/10">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. CINEMATIC SERVICES */}
      <section id="services" className="py-24 bg-[#09090b] border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">The Director&apos;s <span className="italic text-zinc-600">Cut</span></h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium">We provide end-to-end cinematic production for your most important days.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="group p-8 sm:p-10 rounded-3xl bg-[#18181b] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 text-center shadow-xl"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-500">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{srv.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black/90 to-transparent pb-6">
        <a
          href="https://www.instagram.com/adarsh_creator_ayodhya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-amber-500 text-black font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-95 transition-transform"
        >
          <InstagramIcon className="w-5 h-5" />
          <span>Book Shoot</span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes zoomInOut { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
      `}} />
    </div>
  );
}