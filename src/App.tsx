import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Blocks, ArrowLeft, ArrowRight, X, Sparkles, Database, ShieldAlert, Cpu, Route, Activity, Zap, Clock, DollarSign, TrendingUp, PieChart, Rocket, Crown, Star, Check, Handshake, ChevronDown } from 'lucide-react';

const row1Testimonials = [
  {
    quote: "VYRON's web design transformed our digital presence. Our client acquisition rate skyrocketed, and navigating our new platform has never been easier!",
    author: "James Carter",
    role: "CEO at TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The bespoke UI design created by Vyron is stunning. We saw an immediate 40% jump in visitor engagement and direct conversion rates!",
    author: "Sophia Martinez",
    role: "Operations Manager at NexaCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The interactive dashboard and typography are outstanding. Our SaaS users can navigate their portals seamlessly, making onboarding incredibly fast!",
    author: "Marcus Vance",
    role: "Founder of FinSolve",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Our online checkout experience is now seamless. Customer booking friction was reduced drastically, and our brand reputation is at an all-time high, thanks to Vyron.",
    author: "Elena Rostova",
    role: "Design Director at Apex",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const row2Testimonials = [
  {
    quote: "Our new e-commerce storefront is a masterpiece. The responsive layout and animations keep visitors browsing longer, which boosted our sales by 35%!",
    author: "David Miller",
    role: "Head of Marketing at ApexRetail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Partnering with Vyron gave us a site that feels alive. The micro-animations and typography perfectly capture our agency's identity.",
    author: "Chloe Laurent",
    role: "Design Lead at Vivid Creative",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The load speeds on our new documentation hub are lightning-fast. The clean layout structure makes technical content easy to navigate.",
    author: "Alex Chen",
    role: "CTO at Innovate Labs",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Our real estate portal is incredibly sleek. Clients love the smooth image transitions and responsive filters, making it a joy to use on mobile devices.",
    author: "Sarah Jenkins",
    role: "Founder of Stellar Homes",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

// Custom SVG Logo Components for Logoipsum variations
const Logo1 = () => (
  <div className="flex items-center gap-2.5 text-black shrink-0 select-none">
    <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
    <span className="font-bold text-xl tracking-tight text-[#0f172a]">logoipsum</span>
  </div>
);

const Logo2 = () => (
  <div className="flex items-center gap-3 text-black shrink-0 select-none">
    <svg className="w-8 h-6 text-[#0f172a] fill-current" viewBox="0 0 32 24">
      <rect width="32" height="24" rx="6" />
      <circle cx="10" cy="12" r="3" fill="white" />
      <circle cx="22" cy="12" r="3" fill="white" />
      <circle cx="10" cy="12" r="1.2" fill="black" />
      <circle cx="22" cy="12" r="1.2" fill="black" />
    </svg>
    <span className="font-bold text-xl tracking-tight text-[#0f172a]">logoipsum</span>
  </div>
);

const Logo3 = () => (
  <div className="flex items-center gap-2.5 text-black shrink-0 select-none">
    <svg className="w-6 h-6 text-black stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7c0 2.76-2.24 5-5 5 2.76 0 5 2.24 5 5 0-2.76 2.24-5 5-5-2.76 0-5-2.24-5-5z" fill="currentColor" stroke="none" />
    </svg>
    <span className="font-bold text-xl tracking-tight text-[#0f172a]">logoipsum</span>
  </div>
);

const Logo4 = () => (
  <div className="flex items-center gap-2.5 text-black shrink-0 select-none">
    <svg className="w-6 h-6 text-black stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41" />
    </svg>
    <span className="font-bold text-xl tracking-tight text-[#0f172a]">logoipsum</span>
  </div>
);

const LogoFinSolve = () => (
  <div className="flex items-center gap-2 text-white select-none font-sans">
    <svg className="w-5 h-5 text-purple-500 fill-current" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
    <span className="font-bold text-base tracking-tight text-white">FinSolve</span>
  </div>
);

const LogoHealthFlow = () => (
  <div className="flex items-center gap-2 text-white select-none font-sans">
    <svg className="w-5 h-5 text-emerald-400 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v10M7 12h10" />
    </svg>
    <span className="font-bold text-base tracking-tight text-white">HealthFlow</span>
  </div>
);

const LogoApex = () => (
  <div className="flex items-center gap-2 text-white select-none font-sans">
    <svg className="w-5 h-5 text-amber-500 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
      <path d="M12 12v10" />
    </svg>
    <span className="font-bold text-base tracking-tight text-white">Apex Logistics</span>
  </div>
);

interface CaseStudy {
  id: string;
  logo: React.ReactNode;
  companyName: string;
  quote: string;
  description: string;
  impact: string[];
  image: string;
  color: string;
  themeColor: string;
  fullDetails: {
    challenge: string;
    solution: string;
    process: { step: string; title: string; desc: string }[];
    architecture: string[];
    results: string[];
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "finsolve",
    logo: <LogoFinSolve />,
    companyName: "FinSolve",
    quote: "Redesigning the financial advisory experience boosted client conversions by 42%",
    description: "FinSolve, a global asset management and advisory firm, struggled with low digital engagement due to an outdated client portal. We designed a hyper-personalized, AI-driven financial dashboard interface that simplifies complex portfolio data visualizations and forecasts investment performance in real-time.",
    impact: [
      "42% Booking Conversion Increase",
      "65% Rise in Portal Engagement",
      "18% Drop in Support Inquiries",
      "3x Faster Advisory Matching"
    ],
    image: "/finsolve_web_mockup.png",
    color: "#8b5cf6",
    themeColor: "purple",
    fullDetails: {
      challenge: "Advisory clients faced confusing spreadsheets and dense texts, leading to high drop-off rates on mobile and portal abandonment. Customer service spent 40% of their time explaining asset charts and balancing queries.",
      solution: "We designed an intuitive, responsive web portal powered by AI asset prediction dashboards. The interface translates client data into clean visual insights, letting users simulate investment horizons instantly through a modular drag-and-drop layout.",
      process: [
        { step: "01", title: "User Journey Mapping", desc: "Audited advisory feedback and friction points during client portfolio reviews." },
        { step: "02", title: "UI Pattern Definition", desc: "Designed customizable dark-theme dashboard widgets with sleek, harmonic typography." },
        { step: "03", title: "AI Model Integration", desc: "Connected front-end data hooks to real-time predictive calculation APIs." },
        { step: "04", title: "Responsive Launch", desc: "Developed responsive layouts optimizing the dashboard for tablet and mobile use cases." }
      ],
      architecture: [
        "Responsive Layout Matrix",
        "Dynamic Data Chart Engines",
        "Interactive Horizon Simulator"
      ],
      results: [
        "Client advisor booking conversions increased by 42% in 4 weeks.",
        "Portal return visits grew by 65%, reducing average support call times.",
        "Mobile dashboard usage surged, maintaining 99.8% crash-free sessions."
      ]
    }
  },
  {
    id: "healthflow",
    logo: <LogoHealthFlow />,
    companyName: "HealthFlow",
    quote: "Redesigning the outpatient scheduling directory cut booking friction by 60%",
    description: "HealthFlow operates a network of 14 multi-disciplinary outpatient clinics. An outdated web directory and booking form led to scheduling drop-offs. We designed a clean, patient-centric scheduling directory UI that makes doctor matchmaking and appointment reservation seamless.",
    impact: [
      "60% Scheduling Friction Reduction",
      "38% Increase in Direct Bookings",
      "94% Patient Directory CSAT",
      "14 Days Saved in Dev Cycles"
    ],
    image: "/healthflow_web_mockup.png",
    color: "#10b981",
    themeColor: "emerald",
    fullDetails: {
      challenge: "Patients struggled to locate specialized medical providers due to a rigid, multi-step search form. Bookings required navigating five page reloads, causing a 35% user exit rate on mobile devices.",
      solution: "We designed a streamlined, single-screen directory search interface. The front-end leverages search indexing to match patients with physicians instantly, letting them schedule appointments with a sleek, 2-click scheduling card.",
      process: [
        { step: "01", title: "Directory UX Audit", desc: "Mapped scheduling friction points and analyzed user exit rates across patient forms." },
        { step: "02", title: "Modern Wireframing", desc: "Constructed a fluid, search-centric layout minimizing layout shift and reloads." },
        { step: "03", title: "Interaction Design", desc: "Polished UI components using teal-accented cards and accessible high-contrast fonts." },
        { step: "04", title: "Performance Tuning", desc: "Optimized bundle loading speeds, lowering page entry response to 0.4 seconds." }
      ],
      architecture: [
        "Single-Screen Directory Search",
        "Modular Clinic Schedule Widgets",
        "Accessibility Contrast System"
      ],
      results: [
        "Reduced patient booking drop-off rates by 60% within 30 days.",
        "Drove a 38% increase in direct appointments scheduled online.",
        "Achieved 94% patient satisfaction rating for mobile accessibility."
      ]
    }
  },
  {
    id: "apex",
    logo: <LogoApex />,
    companyName: "Apex Logistics",
    quote: "Redesigning the dispatch routing dashboard improved coordinator efficiency by 34%",
    description: "Apex Logistics operates a commercial shipping fleet of over 200 cargo vehicles. Dispatchers were overwhelmed by a complex, legacy shipping map interface. We designed a state-of-the-art dispatch optimization portal featuring live route maps, telemetry dashboards, and intelligent alerts.",
    impact: [
      "34% Coordinator Efficiency Gain",
      "22 Minutes Saved per Transit Run",
      "99.4% On-Time Web Accuracy",
      "45% Dashboard Load Speedup"
    ],
    image: "/apex_web_mockup.png",
    color: "#f59e0b",
    themeColor: "amber",
    fullDetails: {
      challenge: "Logistics dispatchers struggled to track shipments on a static map that refreshed every 2 minutes. The legacy UI lacked telemetry visualization, causing communication delays during traffic accidents.",
      solution: "We built a real-time tracking console with an interactive vector map overlay. The dark-themed interface highlights active routes, calculates arrival times, and delivers color-coded alerts on traffic blocks directly to dispatchers.",
      process: [
        { step: "01", title: "Dispatcher Audits", desc: "Observed dispatch coordinators in high-stress environments to map interface bottlenecks." },
        { step: "02", title: "Console Architecture", desc: "Engineered a dark-mode multi-pane layout to support multi-monitor tracking arrays." },
        { step: "03", title: "Visual Layering", desc: "Added vector maps with custom glows, avoiding visual clutter." },
        { step: "04", title: "Live Data Sync", desc: "Integrated low-latency dashboard state updates for live telemetry tracking." }
      ],
      architecture: [
        "Real-Time Vector Mapping Hub",
        "Multi-Pane Dashboard Console",
        "Color-Coded Status System"
      ],
      results: [
        "Boosted daily coordinator route assignments by 34%.",
        "Cut transit communication delays by 22 minutes per dispatcher.",
        "Reduced dispatcher eye strain complaints by transitioning to a sleek dark interface."
      ]
    }
  }
];


const faqData = [
  {
    question: "How does custom website design help my business convert more visitors?",
    answer: "Unlike generic templates, our custom website designs are engineered around user psychology. We optimize the layout, visual hierarchy, typography, and call-to-actions specifically for your target demographic, resulting in an average 30%+ increase in direct sign-ups and sales."
  },
  {
    question: "Do we get full access to the custom Figma design files?",
    answer: "Absolutely. Once the design project is finalized and approved, we hand over full ownership of organized, component-driven Figma files, along with all associated brand asset guidelines and custom icons."
  },
  {
    question: "How do you handle animations and interactive micro-interactions?",
    answer: "We utilize advanced frontend animation libraries like Framer Motion and custom CSS transitions. Every interaction (hovers, card transitions, loading states, scroll reveals) is carefully crafted to feel fluid and premium, avoiding lag and keeping performance scores at 98%+."
  },
  {
    question: "Can you redesign our existing platform or do you build only from scratch?",
    answer: "We handle both. We can perform a comprehensive UX audit of your current platform, identify conversion bottlenecks, and completely overhaul its visual identity, or construct a brand new digital asset from scratch."
  },
  {
    question: "What kind of design support and revisions do you offer?",
    answer: "Every plan includes dedicated revision cycles. We work closely with you through interactive Figma feedback and review stages to guarantee the final layout matches your exact specifications. Post-launch support is also included for ongoing tweaks."
  }
];

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [optScore, setOptScore] = useState(0.0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [sliderDirection, setSliderDirection] = useState(0);
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleNext = () => {
    setSliderDirection(1);
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setSliderDirection(-1);
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  return (
    <div 
      onMouseMove={(e) => {
        setGlobalMousePos({ x: e.clientX, y: e.clientY });
      }}
      className="min-h-screen bg-black text-white selection:bg-purple-500/30 relative font-sans flex flex-col overflow-x-hidden scroll-smooth"
    >
      
      {/* Looping Hero Background Video */}
      <div className="absolute inset-0 h-screen w-full z-0 overflow-hidden pointer-events-none opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* Premium Dark Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        {/* Interactive Global Cursor Spotlight */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${globalMousePos.x}px`,
            top: `${globalMousePos.y}px`
          }}
        />
      </div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between w-full px-6 py-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-none flex items-center justify-center text-black">
            <Blocks className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">VYRON.</span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <button className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-none transition-colors">
            Book a call
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center text-center pt-8">
        
        {/* Hero Content Wrapper with padding */}
        <div className="px-4 py-12 flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-transparent border border-white/10 mb-6 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-none" />
            <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Premium Digital Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight md:tracking-tighter mb-4 pb-3 max-w-4xl leading-[1.12] bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent"
          >
            The Next-Generation<br />AI Web Design Agency.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl font-medium leading-relaxed"
          >
            We fuse human creativity with advanced artificial intelligence to build
            breathtaking, high-converting websites that elevate your brand and scale
            your revenue.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-none text-sm font-semibold transition-all">
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-none text-sm font-semibold transition-all">
              View services
            </button>
          </motion.div>
        </div>

        {/* Logos Marquee Section (Centered Capsule, Solid White Background) */}
        <div className="w-[calc(100%-2rem)] max-w-2xl bg-white text-black py-3 px-6 mb-8 mt-4 z-10 relative border border-gray-100 rounded-none shadow-lg shadow-black/5 mx-auto flex items-center gap-6 justify-between">
          <p className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase shrink-0">
            Over 50+ business trust us
          </p>
          
          {/* Vertical Divider */}
          <div className="w-px h-5 bg-gray-200 shrink-0" />

          {/* Logo Slider Wrapper */}
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="animate-marquee-left flex items-center whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex gap-6 items-center pr-6 shrink-0">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
              </div>
              {/* Set 2 (for infinite loop) */}
              <div className="flex gap-6 items-center pr-6 shrink-0">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* About Us / Methodology Section */}
      <section className="w-full bg-[#030303] py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Video Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] rounded-none overflow-hidden relative border border-white/10 shadow-2xl bg-black group"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            >
              <source src="/about-us-bg.mp4" type="video/mp4" />
            </video>
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Plain Text Subtitle (No rounded corners) */}
            <span className="text-xs font-bold text-[#8b5cf6] tracking-widest uppercase mb-4 block">
              About Us
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.15] bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Pioneering the Next Era of Digital Design.
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed font-normal">
              VYRON is a next-generation digital design partner. We bridge the gap between imagination and execution, leveraging cutting-edge artificial intelligence to build high-performance, high-converting digital products.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              By automating the complexities of structural code and layout optimization, we empower brands to scale faster, stand out deeper, and lead the future of the web.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section 
        className="w-full bg-[#f8f9fa] text-black py-16 md:py-20 mb-8 relative z-10 overflow-hidden group/services"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-80" />
          
          {/* Interactive cursor-tracking spotlight glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover/services:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.05), rgba(16, 185, 129, 0.03), transparent 75%)`
            }}
          />

          {/* Soft blur light glows */}
          <div className="absolute top-[10%] left-[-20%] w-[60%] h-[40%] rounded-full bg-purple-100/30 blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[20%] right-[-20%] w-[60%] h-[40%] rounded-full bg-blue-100/20 blur-3xl opacity-55 animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[30%] rounded-full bg-emerald-50/20 blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 border border-black/10 bg-gray-200/50 text-xs font-semibold tracking-wider text-gray-800 uppercase mb-8 shadow-sm rounded-none"
          >
            Our Services
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-6 max-w-2xl mx-auto leading-[1.2]"
          >
            AI Solutions That Take Your<br className="hidden md:inline" /> Business to the Next Level
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal mb-20"
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>

          {/* Services Rows */}
          <div className="mt-16 flex flex-col gap-28 max-w-5xl mx-auto text-left">
            
            {/* Service 1: AI-Driven Design (Image Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image with Design Selector Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full aspect-[4/3] rounded-none overflow-hidden relative border border-black/10 shadow-2xl bg-[#09090b] flex flex-col p-4 select-none font-mono hover:scale-[1.015] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] transition-all duration-300 ease-out"
              >
                {/* Generated Design Mockup Background */}
                <img src="/service_design.png" alt="UI/UX Design Canvas Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                
                {/* Active selector box overlay */}
                <div className="absolute inset-0 bg-purple-500/5 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-[75%] h-[65%] border-2 border-purple-500 rounded-none relative animate-pulse">
                    <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-purple-500 rounded-none" />
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-purple-500 rounded-none" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-purple-500 rounded-none" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-purple-500 rounded-none" />
                  </div>
                </div>

                {/* Floating System Parameters Overlay */}
                <div className="absolute bottom-4 right-4 bg-[#121217]/95 backdrop-blur-md border border-white/10 rounded-none p-3 text-[10px] text-gray-400 flex flex-col gap-1.5 shadow-2xl z-20">
                  <span className="text-[11px] font-bold text-white mb-0.5">Parameters</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-2.5 h-2.5 rounded-none bg-purple-500" />
                    <span>Primary: #8B5CF6</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-2.5 h-2.5 rounded-none bg-emerald-500" />
                    <span>Secondary: #10B981</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>Layout: Fluid Grid</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Text content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200/50 px-3 py-1.5 rounded-none uppercase tracking-wider mb-4 inline-block">
                    UI/UX Design
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                    Generative layouts & custom design systems
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    We design tailor-made user interfaces, layout grids, and brand asset guidelines custom-tuned to your target demographic. Our system produces beautiful Figma-grade prototypes and sets up design tokens automatically.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Design Token Systems</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Custom Figma Mocks</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Responsive Grids</span>
                  </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#8b5cf6] hover:text-[#7c3aed] transition-colors duration-200 group">
                  Explore design system <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </motion.div>
            </div>

            {/* Service 2: Automated Code Compilation (Text Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start order-2 lg:order-1"
              >
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 rounded-none uppercase tracking-wider mb-4 inline-block">
                    Frontend Compiling
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                    Production-ready Next.js & React compiler
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    We skip bloated template structures and slow builders. Our compiler converts layouts directly into modular, clean-coded components utilizing utility-first CSS. Built for performance, lightning load speeds, and optimal SEO.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Next.js & Vite</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Tailwind CSS</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Perfect PageSpeed</span>
                  </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200 group">
                  Explore sandbox compiler <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </motion.div>

              {/* Right Column: Code Compiler Image with Compiler Log Overlay */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full aspect-[4/3] rounded-none overflow-hidden relative border border-black/10 shadow-2xl bg-[#09090b] flex flex-col p-4 select-none font-mono order-1 lg:order-2 hover:scale-[1.015] hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition-all duration-300 ease-out"
              >
                {/* Generated Compiler Mockup Background */}
                <img src="/service_code.png" alt="React Code Editor Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80" />

                {/* Floating Compiler Console Log Overlay */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-emerald-500/30 rounded-none p-3 font-mono text-[9px] text-emerald-400 shadow-2xl flex flex-col gap-1 z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-white">vyron-compiler</span>
                  </div>
                  <span>✓ Tokens successfully parsed</span>
                  <span>✓ Compile bundle size: 24.8kB</span>
                  <span className="text-white mt-1">Status: SUCCESS (100 Lighthouse)</span>
                </div>
              </motion.div>
            </div>

            {/* Service 3: Workflow Automation (Image Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Scrolling Tasks Queue Overlay on Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full aspect-[4/3] rounded-none overflow-hidden relative border border-black/10 shadow-2xl bg-[#09090b] flex flex-col p-5 select-none font-mono hover:scale-[1.015] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] transition-all duration-300 ease-out"
              >
                {/* Generated Workflow Mockup Background */}
                <img src="/service_automation.png" alt="Automation Dashboard Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80" />

                {/* Scrolling Queue Overlay Container */}
                <div className="absolute inset-y-6 right-6 w-52 bg-black/80 backdrop-blur-md border border-white/10 rounded-none p-4 shadow-2xl overflow-hidden flex flex-col font-mono z-10">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-[9px] text-gray-400 select-none">
                    <span className="text-white font-bold">Automation Queue</span>
                  </div>
                  
                  {/* List scroll mask */}
                  <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    <div className="animate-slide-up space-y-2.5">
                      {/* Item 1 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">Lead list</div>
                            <div className="text-[7.5px] text-gray-500">70% prepared</div>
                          </div>
                        </div>
                        <div className="w-3.5 h-3.5 rounded-full border border-purple-500/40 border-t-purple-500 animate-spin" />
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">Reminders</div>
                            <div className="text-[7.5px] text-gray-500">sent to clients</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-[#8b5cf6]">✓</span>
                      </div>

                      {/* Item 3 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">Payroll</div>
                            <div className="text-[7.5px] text-gray-500">Due 2nd July</div>
                          </div>
                        </div>
                        <span className="text-[9px] text-gray-500">🕒</span>
                      </div>

                      {/* Item 4 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">User Sync</div>
                            <div className="text-[7.5px] text-gray-500">Active tracking</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-[#8b5cf6]">✓</span>
                      </div>

                      {/* --- LOOP REPEAT --- */}
                      {/* Item 1 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">Lead list</div>
                            <div className="text-[7.5px] text-gray-500">70% prepared</div>
                          </div>
                        </div>
                        <div className="w-3.5 h-3.5 rounded-full border border-purple-500/40 border-t-purple-500 animate-spin" />
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-none bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white/95">Reminders</div>
                            <div className="text-[7.5px] text-gray-500">sent to clients</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-[#8b5cf6]">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Text content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200/50 px-3 py-1.5 rounded-none uppercase tracking-wider mb-4 inline-block">
                    Workflow Automation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                    Automate manual operations & pipelines
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Connect your user interfaces directly to automated backends. We deploy data pipeline bots, CRM sync triggers, and instant automated email reminders that replace tedious manual tasks and eliminate user errors.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Internal Task Bots</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">CRM Syncs</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Trigger Actions</span>
                  </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#8b5cf6] hover:text-[#7c3aed] transition-colors duration-200 group">
                  Explore custom triggers <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </motion.div>
            </div>

            {/* Service 4: Semantic Content & SEO (Text Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start order-2 lg:order-1"
              >
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/50 px-3 py-1.5 rounded-none uppercase tracking-wider mb-4 inline-block">
                    AI Copywriting & SEO
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                    Automate content creation & search discovery
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    We integrate custom language models directly into your admin panel to automatically author blog posts, optimize product descriptions, and write search meta tags based on your target keywords. Keep rankings high without manual copy edits.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Semantic SEO Engine</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Meta Automations</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Custom LLM Integration</span>
                  </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-200 group">
                  Explore SEO analytics <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </motion.div>

              {/* Right Column: Copy editor image with score dial overlay */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full aspect-[4/3] rounded-none overflow-hidden relative border border-black/10 shadow-2xl bg-[#09090b] flex flex-col p-4 select-none font-mono order-1 lg:order-2 hover:scale-[1.015] hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)] transition-all duration-300 ease-out"
              >
                {/* Generated Content Mockup Background */}
                <img src="/service_seo.png" alt="AI Copywriting Dashboard Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80" />

                {/* Glowing Circular Score Dial Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md border border-white/10 rounded-none p-3 shadow-2xl flex flex-col items-center gap-2 text-center font-mono z-10">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="98, 100" strokeLinecap="round" className="animate-pulse" />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-white">98</span>
                  </div>
                  <span className="text-[8px] text-gray-400">SEO Content Audit</span>
                </div>
              </motion.div>
            </div>

            {/* Service 5: Predictive Heatmaps (Image Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heatmap dots overlay on preview mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full aspect-[4/3] rounded-none overflow-hidden relative border border-black/10 shadow-2xl bg-[#09090b] flex flex-col p-4 select-none font-mono hover:scale-[1.015] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] transition-all duration-300 ease-out"
              >
                {/* Generated Analytics Mockup Background */}
                <img src="/service_heatmap.png" alt="Heatmap UX Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80" />

                {/* Translucent Heatmap hotspot blurs */}
                <div className="absolute top-[22%] left-[28%] w-16 h-16 rounded-full bg-red-500/35 blur-xl animate-pulse z-10" style={{ animationDuration: '2.5s' }} />
                <div className="absolute top-[48%] left-[50%] w-12 h-12 rounded-full bg-orange-400/35 blur-lg animate-pulse z-10" style={{ animationDuration: '3.5s' }} />
                <div className="absolute bottom-[22%] left-[38%] w-14 h-14 rounded-full bg-blue-500/25 blur-xl animate-pulse z-10" style={{ animationDuration: '4.5s' }} />
                
                {/* Attention data block overlay */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-none p-2 text-[9px] font-mono text-gray-300 z-20">
                  <span>Gaze Focus: 84% Hero CTA</span>
                </div>
              </motion.div>

              {/* Right Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200/50 px-3 py-1.5 rounded-none uppercase tracking-wider mb-4 inline-block">
                    Predictive UX Analytics
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                    Predict and test user conversion flow
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Before launch, our pre-trained transformer models simulate user eye movements to locate friction points, identify cold spots, and ensure critical headings get maximum attention. Iterate design with data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Gaze Simulation</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Attention Heatmaps</span>
                    <span className="text-xs text-gray-600 bg-gray-200/50 px-3 py-1.5 border border-black/5 rounded-none font-medium">Conversion Auditing</span>
                  </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-[#7c3aed] transition-colors duration-200 group">
                  Request attention audit <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </motion.div>
            </div>
            
          </div>

        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full bg-[#050505] text-white pt-12 pb-16 relative z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-60" />
        
        {/* Ambient slow-pulsing background light orb */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/2 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/2 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '13s' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header block (Reduced padding) */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-5 rounded-none"
            >
              Our Process
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-[1.12]"
            >
              Our Simple, Smart, <br className="sm:hidden" />and Scalable Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              We design, develop, and implement automation tools that help you work smarter, not harder.
            </motion.p>
          </div>

          {/* 2-Column Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Step 1 Card: Smart Analyzing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-[#0b0b0d] border border-white/5 p-8 rounded-none flex flex-col justify-start hover:border-purple-500/20 hover:shadow-[0_0_35px_rgba(139,92,246,0.1)] transition-all duration-300 h-full select-none gap-5"
            >
              <div className="flex flex-col">
                <div className="inline-flex items-center px-3 py-1 border border-white/10 bg-white/5 text-[10px] font-bold text-gray-300 uppercase mb-4 self-start rounded-none">
                  Step 1
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Smart Analyzing</h3>
                <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                  We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
                </p>
              </div>

              {/* Visual Widget: Radar Scanner */}
              <div className="w-full aspect-[16/9] bg-black/40 border border-white/5 flex rounded-none overflow-hidden h-40 mt-auto">
                {/* Radar Grid on Left */}
                <div className="w-1/2 flex items-center justify-center p-4 border-r border-white/5 relative h-full bg-black/20">
                  <div className="relative w-24 h-24 rounded-none border border-purple-500/15 flex items-center justify-center">
                    <div className="absolute inset-2.5 rounded-none border border-purple-500/10 flex items-center justify-center">
                      <div className="absolute inset-2.5 rounded-none border border-purple-500/5" />
                    </div>
                    {/* Rotating conic gradient */}
                    <div className="absolute inset-0 rounded-none animate-radar pointer-events-none" style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 60%, rgba(139,92,246,0.2) 100%)'
                    }} />
                    <span className="text-[7px] font-mono text-purple-400 absolute bottom-1 tracking-wider uppercase">Analyzing...</span>
                  </div>
                </div>

                {/* Checks on Right */}
                <div className="w-1/2 flex flex-col justify-center p-4 gap-2.5 text-[9px] font-mono text-gray-500 bg-black/10">
                  <div className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300 delay-75">
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 shrink-0 transition-colors duration-300 delay-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300 delay-75 font-medium">System check</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300 delay-150">
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 shrink-0 transition-colors duration-300 delay-150 animate-spin" style={{ animationDuration: '6s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300 delay-150 font-medium">Process check</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300 delay-225">
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 shrink-0 transition-colors duration-300 delay-225" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300 delay-225 font-medium">Speed check</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-red-400/80 transition-colors duration-300 delay-300">
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-red-400/80 shrink-0 transition-colors duration-300 delay-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    <span className="text-gray-600 group-hover:text-red-300/80 transition-colors duration-300 delay-300 font-medium font-bold">Manual friction</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-red-400/80 transition-colors duration-300 delay-375">
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-red-400/80 shrink-0 transition-colors duration-300 delay-375" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    <span className="text-gray-600 group-hover:text-red-300/80 transition-colors duration-300 delay-375 font-medium font-bold">Repetitive loops</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 Card: AI Development */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-[#0b0b0d] border border-white/5 p-8 rounded-none flex flex-col justify-start hover:border-emerald-500/20 hover:shadow-[0_0_35px_rgba(16,185,129,0.1)] transition-all duration-300 h-full select-none gap-5"
            >
              <div className="flex flex-col">
                <div className="inline-flex items-center px-3 py-1 border border-white/10 bg-white/5 text-[10px] font-bold text-gray-300 uppercase mb-4 self-start rounded-none">
                  Step 2
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">AI Development</h3>
                <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                  Our team builds intelligent automation systems tailored to your business processes.
                </p>
              </div>

              {/* Visual Widget: Code Terminal */}
              <div className="w-full aspect-[16/9] bg-black/40 border border-white/5 flex rounded-none overflow-hidden h-40 mt-auto">
                <div className="w-full h-full bg-[#060608] font-mono text-[9px] text-gray-400 flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/5 px-3 py-2 bg-black/40">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-none bg-white/10" />
                      <span className="w-2 h-2 rounded-none bg-white/10" />
                      <span className="w-2 h-2 rounded-none bg-white/10" />
                    </div>
                    <span className="text-[8px] text-gray-500">model_builder.py</span>
                    <div className="w-8" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-0.5 leading-relaxed text-gray-600 bg-black/10 select-none justify-center">
                    <div className="group-hover:text-gray-300 transition-colors duration-300"><span className="text-purple-400/70 group-hover:text-purple-400">if</span> value &gt; self.threshold:</div>
                    <div className="pl-4 group-hover:text-gray-200 group-hover:bg-purple-500/5 transition-all duration-300 delay-75">self.status = <span className="text-emerald-400/70 group-hover:text-emerald-400">"active"</span></div>
                    <div className="pl-4 group-hover:text-gray-200 group-hover:bg-purple-500/5 transition-all duration-300 delay-150"><span className="text-purple-400/70 group-hover:text-purple-400">return</span> <span className="text-emerald-400/70 group-hover:text-emerald-400">"Automation triggered!"</span></div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300 delay-225"><span className="text-purple-400/70 group-hover:text-purple-400">else</span>:</div>
                    <div className="pl-4 group-hover:text-gray-400 transition-colors duration-300 delay-300"><span className="text-purple-400/70 group-hover:text-purple-400">return</span> <span className="text-gray-500 group-hover:text-gray-300">"No action taken."</span></div>
                    <div className="mt-1 group-hover:text-gray-300 transition-colors duration-300 delay-375"><span className="text-purple-400/70 group-hover:text-purple-400">def</span> <span className="text-blue-400/70 group-hover:text-blue-400">get_status</span>(self):</div>
                    <div className="pl-4 group-hover:text-gray-200 transition-all duration-300 delay-450"><span className="text-purple-400/70 group-hover:text-purple-400">return</span> <span className="text-emerald-400/70 group-hover:text-emerald-400">f"Status: &#123;self.status&#125;"</span><span className="animate-blink bg-purple-400 w-1.5 h-3 inline-block align-middle ml-0.5 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_#10b981] transition-all" /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 Card: Seamless Integration */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-[#0b0b0d] border border-white/5 p-8 rounded-none flex flex-col justify-start hover:border-purple-500/20 hover:shadow-[0_0_35px_rgba(139,92,246,0.1)] transition-all duration-300 h-full select-none gap-5"
            >
              <div className="flex flex-col">
                <div className="inline-flex items-center px-3 py-1 border border-white/10 bg-white/5 text-[10px] font-bold text-gray-300 uppercase mb-4 self-start rounded-none">
                  Step 3
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Seamless Integration</h3>
                <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                  We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.
                </p>
              </div>

              {/* Visual Widget: Animated network diagram */}
              <div className="w-full aspect-[16/9] bg-black/40 border border-white/5 flex rounded-none overflow-hidden h-40 mt-auto">
                <div className="w-full h-full bg-[#060608] flex items-center justify-center p-3">
                  <svg className="w-full h-24" viewBox="0 0 300 100" fill="none">
                    {/* DB Node */}
                    <rect x="15" y="32" width="70" height="36" rx="0" stroke="rgba(255,255,255,0.05)" fill="rgba(255,255,255,0.01)" className="group-hover:stroke-purple-500/20 transition-colors" />
                    <text x="50" y="53" fill="#4b5563" fontSize="8" fontFamily="monospace" textAnchor="middle" className="group-hover:fill-gray-400 transition-colors">Legacy DB</text>

                    {/* Ripple rings (drawn behind central VYRON core) */}
                    <circle cx="150" cy="50" r="26" stroke="#8b5cf6" strokeWidth="1" opacity="0" className="core-ripple-1 pointer-events-none" />
                    <circle cx="150" cy="50" r="26" stroke="#8b5cf6" strokeWidth="1" opacity="0" className="core-ripple-2 pointer-events-none" />

                    {/* Central VYRON Engine */}
                    <rect x="110" y="24" width="80" height="52" rx="0" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.03)" className="group-hover:fill-purple-500/10 group-hover:shadow-2xl transition-all" />
                    <text x="150" y="50" fill="#9ca3af" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle" className="group-hover:fill-white transition-colors">VYRON CORE</text>
                    <text x="150" y="60" fill="#6b21a8" fontSize="7" fontFamily="monospace" textAnchor="middle" className="group-hover:fill-purple-400 transition-colors font-bold">CONNECTED</text>

                    {/* Hub Node */}
                    <rect x="215" y="32" width="70" height="36" rx="0" stroke="rgba(255,255,255,0.05)" fill="rgba(255,255,255,0.01)" className="group-hover:stroke-emerald-500/20 transition-colors" />
                    <text x="250" y="53" fill="#4b5563" fontSize="8" fontFamily="monospace" textAnchor="middle" className="group-hover:fill-gray-400 transition-colors">API GATEWAY</text>

                    {/* Connectors */}
                    <path d="M 85 50 L 110 50" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                    <path d="M 85 50 L 110 50" stroke="#8b5cf6" strokeWidth="1.5" className="animate-flow" />

                    <path d="M 190 50 L 215 50" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                    <path d="M 190 50 L 215 50" stroke="#10b981" strokeWidth="1.5" className="animate-flow" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Step 4 Card: Continuous Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onMouseEnter={() => {
                let current = 0;
                const interval = setInterval(() => {
                  current += 3.5;
                  if (current >= 84.2) {
                    setOptScore(84.2);
                    clearInterval(interval);
                  } else {
                    setOptScore(parseFloat(current.toFixed(1)));
                  }
                }, 25);
                (window as any)._optInterval = interval;
              }}
              onMouseLeave={() => {
                clearInterval((window as any)._optInterval);
                setOptScore(0.0);
              }}
              className="group bg-[#0b0b0d] border border-white/5 p-8 rounded-none flex flex-col justify-start hover:border-emerald-500/20 hover:shadow-[0_0_35px_rgba(16,185,129,0.1)] transition-all duration-300 h-full select-none gap-5"
            >
              <div className="flex flex-col">
                <div className="inline-flex items-center px-3 py-1 border border-white/10 bg-white/5 text-[10px] font-bold text-gray-300 uppercase mb-4 self-start rounded-none">
                  Step 4
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Continuous Optimization</h3>
                <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                  We refine performance, analyze insights, and enhance automation for long-term growth.
                </p>
              </div>

              {/* Visual Widget: Interactive Graph */}
              <div className="w-full aspect-[16/9] bg-black/40 border border-white/5 flex rounded-none overflow-hidden h-40 mt-auto">
                <div className="w-full h-full bg-[#060608] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[8px] font-mono text-gray-500">
                    <span>Performance Matrix</span>
                    <span className="text-emerald-400 font-bold tracking-wider transition-all duration-300 group-hover:text-emerald-300">
                      +{optScore > 0 ? optScore.toFixed(1) : "0.0"}% Optimization
                    </span>
                  </div>
                  <div className="relative flex-1 flex items-end mt-2">
                    <svg className="w-full h-16" viewBox="0 0 200 60" fill="none">
                      <path d="M10,50 Q40,46 70,32 T130,24 T190,6" stroke="rgba(16,185,129,0.05)" strokeWidth="2" />
                      <path d="M10,50 Q40,46 70,32 T130,24 T190,6" stroke="#10b981" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" className="animate-flow group-hover:stroke-emerald-300" />
                      <circle cx="190" cy="6" r="3" fill="#10b981" className="animate-pulse group-hover:fill-emerald-300 group-hover:scale-125 transition-all" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-[7px] font-mono text-gray-600 mt-2 border-t border-white/5 pt-1.5">
                    <span>WEEK 1</span>
                    <span>WEEK 2</span>
                    <span>WEEK 3</span>
                    <span>WEEK 4</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button className="flex items-center gap-2.5 px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-none text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/25">
              Transform Your Workflow
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full bg-[#050505] text-white pt-12 pb-16 relative z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-60" />
        
        {/* Ambient slow-pulsing background light orb */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500/2 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '11s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/2 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '15s' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-5 rounded-none"
            >
              Case Studies
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-[1.12]"
            >
              Crafting High-Performance <br className="hidden sm:inline" />Digital Portals
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              Explore how we combine system design thinking with advanced AI web methodologies to deliver bespoke, high-converting digital platforms.
            </motion.p>
          </div>

          {/* Slider Outer Container */}
          <div className="max-w-5xl mx-auto relative select-none">
            <div className="overflow-visible relative w-full min-h-[420px] lg:min-h-[380px]">
              <AnimatePresence initial={false} custom={sliderDirection} mode="wait">
                <motion.div
                  key={activeCaseStudy}
                  custom={sliderDirection}
                  variants={{
                    enter: (dir: number) => ({
                      x: dir > 0 ? 120 : -120,
                      opacity: 0,
                      filter: 'blur(4px)',
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    },
                    exit: (dir: number) => ({
                      x: dir < 0 ? 120 : -120,
                      opacity: 0,
                      filter: 'blur(4px)',
                      transition: {
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      // Swiped left -> next
                      handleNext();
                    } else if (info.offset.x > swipeThreshold) {
                      // Swiped right -> prev
                      handlePrev();
                    }
                  }}
                  className="w-full py-6 md:py-8 cursor-grab active:cursor-grabbing transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Image mockup */}
                    <div className="lg:col-span-5 w-full aspect-square md:aspect-[16/10] lg:aspect-square bg-black border border-white/10 overflow-hidden rounded-none relative group/img">
                      <img
                        src={caseStudies[activeCaseStudy].image}
                        alt={caseStudies[activeCaseStudy].companyName}
                        className="w-full h-full object-cover select-none pointer-events-none group-hover/img:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
                    </div>
                    
                    {/* Right Column: Text content */}
                    <div className="lg:col-span-7 flex flex-col justify-start text-left">
                      {/* Logo and metadata */}
                      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                        {caseStudies[activeCaseStudy].logo}
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                          CASE 0{activeCaseStudy + 1}
                        </span>
                      </div>

                      {/* Main Quote */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug tracking-tight font-sans">
                        "{caseStudies[activeCaseStudy].quote}"
                      </h3>

                      {/* Paragraph */}
                      <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                        {caseStudies[activeCaseStudy].description}
                      </p>

                      {/* Impact section */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Impact :</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                          {caseStudies[activeCaseStudy].impact.map((point, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-none shrink-0" style={{ backgroundColor: caseStudies[activeCaseStudy].color }} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Avoid triggering drag state on outer container
                            setIsCaseStudyModalOpen(true);
                          }}
                          className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
                        >
                          Explore Full Case Study
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider navigation dots & arrows */}
            <div className="flex items-center justify-center gap-6 mt-8 font-mono text-xs text-gray-500 uppercase tracking-widest select-none">
              <button
                onClick={handlePrev}
                className="hover:text-white transition-all duration-200 p-2 cursor-pointer flex items-center justify-center hover:-translate-x-1"
              >
                <ArrowLeft className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
              <span className="flex items-center gap-2">
                <span>DRAG TO EXPLORE</span>
              </span>
              <button
                onClick={handleNext}
                className="hover:text-white transition-all duration-200 p-2 cursor-pointer flex items-center justify-center hover:translate-x-1"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full bg-black text-white py-16 relative z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
        
        {/* Ambient slow-pulsing background light orb */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/3 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/2 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-5 rounded-full"
            >
              Benefits
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-[1.12]"
            >
              The Key Benefits of AI Web Design <br className="hidden sm:inline" />for Your Business Growth
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how AI-powered web design enhances user experience, accelerates iteration, and drives business conversions with smarter layout choices.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Benefit Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <Zap className="w-5 h-5 text-white mb-6 stroke-[2]" />
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Increased Productivity</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                Generate high-fidelity web layouts and custom design elements in minutes instead of weeks.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Benefit Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <Handshake className="w-5 h-5 text-white mb-6 stroke-[2]" />
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Better Customer Experience</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                AI-optimized UI layouts adapt dynamically to user behavior, boosting conversion rates.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Benefit Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <Clock className="w-5 h-5 text-white mb-6 stroke-[2]" />
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">24/7 Availability</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                Our cloud-hosted interactive design mockups are accessible 24/7 for collaborative team review.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Benefit Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <svg className="w-5 h-5 text-white mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M14.5 10a1.5 1.5 0 0 0-1.5-1.5H10.5A1.5 1.5 0 0 0 9 10v0a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 1 15 13v0a1.5 1.5 0 0 1-1.5 1.5H10a1.5 1.5 0 0 1-1.5-1.5" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Cost Reduction</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                AI-assisted UI/UX prototyping cuts development costs and optimizes design delivery timelines.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Benefit Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <PieChart className="w-5 h-5 text-white mb-6 stroke-[2]" />
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Data-Driven Insights</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                Use data-driven UI layouts backed by millions of successful conversions to design smarter pages.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Benefit Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 flex flex-col justify-start select-none group relative overflow-hidden"
            >
              <svg className="w-5 h-5 text-white mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Scalability & Growth</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light z-10">
                Seamlessly scale your site's pages and designs dynamically as your business and traffic expand.
              </p>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full bg-[#050505] text-white py-16 relative z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
        
        {/* Ambient slow-pulsing background light orb */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-500/3 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/2 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '14s' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-5 rounded-full"
            >
              Pricing
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-[1.12]"
            >
              The Best AI Web Design, <br className="hidden sm:inline" />at the Right Price
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              Choose a plan that fits your business needs and start building premium web experiences
            </motion.p>
          </div>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16 select-none">
            <span className={`text-xs uppercase tracking-wider transition-colors duration-300 ${!isAnnualBilling ? 'text-white font-bold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnualBilling(!isAnnualBilling)}
              className="w-14 h-7 bg-white/10 hover:bg-white/15 p-1 transition-all duration-300 rounded-full relative flex items-center cursor-pointer border border-white/10"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 bg-[#8b5cf6] rounded-full"
                style={{
                  alignSelf: isAnnualBilling ? 'flex-end' : 'flex-start',
                  marginLeft: isAnnualBilling ? 'auto' : '0'
                }}
              />
            </button>
            <span className={`text-xs uppercase tracking-wider transition-colors duration-300 ${isAnnualBilling ? 'text-white font-bold' : 'text-gray-500'}`}>
              Annually
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* Card 1: Starter */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 flex flex-col justify-between rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 h-full relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-gray-400">
                  <Rocket className="w-5 h-5 stroke-[2]" />
                  <span className="text-sm font-bold tracking-tight uppercase">Starter</span>
                </div>
                
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-extralight">$</span>
                  <span className="text-5xl font-light tracking-tight transition-all duration-300">
                    {isAnnualBilling ? "29" : "37"}
                  </span>
                  <span className="text-xs text-gray-500 ml-2 uppercase font-mono">/ month</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-8">
                  Perfect for small businesses starting with premium web design.
                </p>

                <div className="border-t border-white/5 pt-8 mb-8">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">What's Included:</h4>
                  <ul className="space-y-3.5 text-xs text-gray-400 font-light">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>1 Premium Homepage Design</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>AI-Assisted Layout Exploration</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Standard SEO & Performance Tuning</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Email & chat support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Up to 3 Design Revision Cycles</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xl cursor-pointer z-10">
                Choose this plan
              </button>
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#8b5cf6]/3 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/6 transition-all duration-500" />
            </motion.div>

            {/* Card 2: Professional (Popular) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0b0b0e] border-2 border-[#8b5cf6]/40 p-8 flex flex-col justify-between rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.08)] transition-all duration-300 h-full relative group overflow-hidden"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0b0b0e] border border-white/10 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 font-mono rounded-full z-10">
                Popular
              </div>
              
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-purple-400">
                  <Zap className="w-5 h-5 stroke-[2]" />
                  <span className="text-sm font-bold tracking-tight uppercase">Professional</span>
                </div>
                
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-extralight">$</span>
                  <span className="text-5xl font-light tracking-tight transition-all duration-300">
                    {isAnnualBilling ? "59" : "75"}
                  </span>
                  <span className="text-xs text-gray-500 ml-2 uppercase font-mono">/ month</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-8">
                  Perfect for growing brands requiring custom, interactive multi-page sites.
                </p>

                <div className="border-t border-white/5 pt-8 mb-8">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">What's Included:</h4>
                  <ul className="space-y-3.5 text-xs text-gray-400 font-light">
                    <li className="flex items-center gap-2.5 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Up to 5 Custom Page Layouts</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Advanced Micro-Animations & Interactions</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Enhanced Speed & Core Web Vitals Audit</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Priority Support & Figma Handoff</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Up to 10 Custom Web Components</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="w-full py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xl cursor-pointer shadow-lg hover:scale-102 z-10">
                Choose this plan
              </button>
              
              {/* Violet glows matching brand color precisely */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/20 transition-all duration-500" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-all duration-500" />
            </motion.div>

            {/* Card 3: Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0b0b0e] border border-white/5 p-8 flex flex-col justify-between rounded-2xl hover:border-[#8b5cf6]/20 transition-all duration-300 h-full relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-gray-400">
                  <Crown className="w-5 h-5 stroke-[2]" />
                  <span className="text-sm font-bold tracking-tight uppercase">Enterprise</span>
                </div>
                
                <div className="flex items-baseline mb-3">
                  <span className="text-5xl font-light tracking-tight">Custom</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-8">
                  Perfect for large organizations demanding tailored, bespoke digital products.
                </p>

                <div className="border-t border-white/5 pt-8 mb-8">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">What's Included:</h4>
                  <ul className="space-y-3.5 text-xs text-gray-400 font-light">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Bespoke Design & Custom Interactions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Dedicated Art Director & Front-End Developer</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Enterprise SEO, Security, & High-Speed Hosting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>24/7 Dedicated Slack & Video Support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                      <span>Unlimited Pages & Production Handoff</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xl cursor-pointer z-10">
                Schedule a call
              </button>
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#8b5cf6]/3 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/6 transition-all duration-500" />
            </motion.div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full bg-black text-white py-16 relative z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-5 rounded-full"
            >
              Testimonials
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-[1.12]"
            >
              Why Businesses Love <br className="hidden sm:inline" />Our Web Designs
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              Real businesses, real results with premium website design.
            </motion.p>
          </div>

          {/* Testimonials Marquee Sliders */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-10 flex flex-col gap-8">
            
            {/* Fade Gradient Masks for Left/Right Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-black to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-black to-transparent z-20" />
            
            {/* Top Row: Sliding Right */}
            <div className="w-full overflow-hidden">
              <div className="animate-marquee-right flex gap-6 px-6">
                {[...row1Testimonials, ...row1Testimonials, ...row1Testimonials, ...row1Testimonials].map((t, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="w-[360px] bg-[#0b0b0e] border border-white/5 p-8 flex flex-col justify-between rounded-2xl hover:border-[#8b5cf6]/30 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(139,92,246,0.03)] transition-all duration-300 shrink-0"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-6 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-sans font-light italic mb-8">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.author}</h4>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Sliding Left */}
            <div className="w-full overflow-hidden">
              <div className="animate-marquee-left flex gap-6 px-6">
                {[...row2Testimonials, ...row2Testimonials, ...row2Testimonials, ...row2Testimonials].map((t, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="w-[360px] bg-[#0b0b0e] border border-white/5 p-8 flex flex-col justify-between rounded-2xl hover:border-[#8b5cf6]/30 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(139,92,246,0.03)] transition-all duration-300 shrink-0"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-6 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-sans font-light italic mb-8">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.author}</h4>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-black text-white py-16 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.02)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Centered pill badge */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-300">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-white mt-6 mb-4 leading-tight">
              We've Got the Answers <br className="hidden sm:inline" />You're Looking For
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Quick answers to your web design and layout questions.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#050505] border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#8b5cf6] transition-colors focus:outline-none group"
                  >
                    <span className="text-sm sm:text-base font-bold font-sans tracking-wide">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-gray-500 shrink-0 group-hover:text-white transition-colors"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed font-sans border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full bg-black text-white py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="relative bg-[#050507] border border-white/5 rounded-3xl py-10 px-6 sm:py-12 sm:px-12 text-center overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* Soft Ambient Brand Glow inside CTA card */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#8b5cf6]/10 blur-[100px] pointer-events-none group-hover:bg-[#8b5cf6]/15 transition-all duration-700" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-purple-950/15 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                Let Premium Design do the Work <br className="hidden sm:inline" />so you can Scale Faster
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-lg mb-8">
                Book a Call Today and Start Building Your High-Converting Digital Presence.
              </p>
              
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-[#8b5cf6]/20 transition-all hover:scale-[1.03] cursor-pointer">
                <span>Book a free call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#030303] text-white pt-12 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            {/* Brand details + Newsletter column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 cursor-pointer mb-4">
                  <div className="w-7 h-7 bg-white rounded-none flex items-center justify-center text-black">
                    <Blocks className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-lg font-bold tracking-tight">VYRON.</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  Vyron — Bespoke Web Design, High Conversion, Made Effortless. We build visual narratives that scale your enterprise.
                </p>
              </div>

              {/* Newsletter subscribe form */}
              <div className="max-w-md">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Join our newsletter
                </h4>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 bg-white/[0.02] border border-white/5 p-1 rounded-xl focus-within:border-white/10 transition-colors">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none min-w-0"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links, Pages, Social columns */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
              {/* Links */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Links</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-sans">
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                  <li><a href="#case-studies" className="hover:text-white transition-colors">Case studies</a></li>
                  <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Pages</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-sans">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">404</a></li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Socials</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-sans">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Credit bar */}
          <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans uppercase tracking-wider">
            <div>
              &copy; 2026 VYRON. All rights reserved. Built by Marvelous Ndukwe.
            </div>
            <div>
              Visioned and Crafted by Kanishk Dubey
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Case Study Full Overlay Modal */}
      <AnimatePresence>
        {isCaseStudyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-12 select-none"
            onClick={() => setIsCaseStudyModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-[#050505] border border-white/10 w-full max-w-5xl rounded-none p-8 md:p-16 text-white relative mt-8 mb-8 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()} // Stop propagation so modal clicks won't close it
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCaseStudyModalOpen(false)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-all p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-12 border-b border-white/10 pb-8 mt-4">
                <div className="flex items-center gap-4 mb-6">
                  {caseStudies[activeCaseStudy].logo}
                  <span className="text-[10px] tracking-widest font-mono text-gray-500 uppercase">
                    / Brand Portfolio Redesign Case Study
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12] font-sans mb-8">
                  "{caseStudies[activeCaseStudy].quote}"
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-400 font-mono pt-4 uppercase tracking-wider">
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">CLIENT</div>
                    <div className="text-white font-bold">{caseStudies[activeCaseStudy].companyName}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">DISCIPLINE</div>
                    <div className="text-white font-bold">AI Web Design & UI/UX</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">YEAR</div>
                    <div className="text-white font-bold">2026</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">STATUS</div>
                    <div className="text-emerald-400 font-bold">LIVE PLATFORM</div>
                  </div>
                </div>
              </div>

              {/* Hero Image Showcase */}
              <div className="w-full aspect-[16/7] md:aspect-[21/9] bg-black border border-white/10 overflow-hidden relative mb-12 select-none pointer-events-none">
                <img
                  src={caseStudies[activeCaseStudy].image}
                  alt="Mockup"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Asymmetric Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                {/* Left Column: Key Metrics (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-start gap-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-white/10 pb-3">Performance Index</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                    {caseStudies[activeCaseStudy].impact.map((metric, idx) => {
                      const parts = metric.split(" ");
                      const value = parts[0];
                      const label = parts.slice(1).join(" ");
                      return (
                        <div key={idx} className="border-l border-white/10 pl-4 py-2 flex flex-col">
                          <span className="text-3xl font-light text-white tracking-tight" style={{ color: caseStudies[activeCaseStudy].color }}>
                            {value}
                          </span>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1.5 leading-snug">
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Challenge & Design Solution (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">/ Context & Challenge</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans font-light">
                      {caseStudies[activeCaseStudy].fullDetails.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">/ The Creative Vision</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans font-light">
                      {caseStudies[activeCaseStudy].fullDetails.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Integration Workflow */}
              <div className="border-t border-white/10 pt-12 mb-16">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">/ Strategic Redesign Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {caseStudies[activeCaseStudy].fullDetails.process.map((stepItem, idx) => (
                    <div key={idx} className="flex flex-col border-t border-white/5 pt-4 group">
                      <div className="text-4xl font-extralight tracking-tight text-white/20 group-hover:text-white transition-colors duration-300 mb-3" style={{ color: caseStudies[activeCaseStudy].color + '40' }}>
                        {stepItem.step}
                      </div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">{stepItem.title}</div>
                      <div className="text-xs text-gray-400 leading-relaxed font-light">{stepItem.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Architecture & Long-Term Results */}
              <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-6">
                {/* Platform Architecture */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">/ Portal Architecture</h3>
                  <ul className="space-y-4 font-sans text-xs text-gray-300">
                    {caseStudies[activeCaseStudy].fullDetails.architecture.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-3 border-b border-white/5 pb-2">
                        <span className="w-1.5 h-1.5 rounded-none" style={{ backgroundColor: caseStudies[activeCaseStudy].color }} />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Outcomes */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">/ Direct Outcomes</h3>
                  <ul className="space-y-4 text-xs text-gray-300">
                    {caseStudies[activeCaseStudy].fullDetails.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span className="font-light">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer close option */}
              <div className="border-t border-white/10 pt-12 mt-12 flex justify-end">
                <button
                  onClick={() => setIsCaseStudyModalOpen(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-none text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

