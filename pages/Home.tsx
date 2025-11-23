import React, { useEffect, useRef, useState } from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Button } from '../components/Button';
import { AREAS, COLORS, PROJECTS } from '../constants';
import { ArrowRight, ChevronRight, ChevronLeft, HeartHandshake } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const ParticleOverlay = () => {
  // SVG Paths for organic leaf shapes
  const LEAF_PATHS = [
    "M12 2C12 2 4 10 4 20C4 28 10 32 12 32C14 32 20 28 20 20C20 10 12 2 12 2ZM12 4V30", // Simple Leaf
    "M12 2L9 8L3 10L8 14L7 20L12 17L17 20L16 14L21 10L15 8L12 2Z", // Maple-ish shape
    "M12 2C8 6 4 10 4 16C4 24 10 30 12 30C14 30 20 24 20 16C20 10 16 6 12 2Z", // Oval Leaf
    "M20.5 10c-2-2-5.5-3-9.5-2-4-1-7.5 0-9.5 2-2 2.5-1.5 7 1 9.5 2 2 5.5 1 8.5-1 3 2 6.5 3 8.5 1 2.5-2.5 3-7 1-9.5z" // Wide Leaf
  ];

  const particles = React.useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => { // Reduced count slightly for cleaner look with larger leaves
      const depth = Math.random(); // 0 = far/small, 1 = near/big
      
      return {
        id: i,
        left: Math.random() * 100, 
        delay: Math.random() * -60, // Start mid-animation
        duration: Math.random() * 20 + 35, // 35s to 55s duration (slower/gentler)
        // Significantly increased size range: 40px to 90px based on depth
        size: (Math.random() * 50 + 40) * (depth * 0.5 + 0.8), 
        path: LEAF_PATHS[Math.floor(Math.random() * LEAF_PATHS.length)],
        // Ecos Palette
        color: [COLORS.greenLight, COLORS.greenMedium, COLORS.yellowOchre, COLORS.orangeTerra][Math.floor(Math.random() * 4)],
        // Depth of field effect
        blur: depth < 0.4 ? 'blur(2px)' : 'none', 
        opacity: depth < 0.4 ? 0.6 : 0.9,
        // Randomize sway physics
        swayType: Math.random() > 0.6 ? 'tumble-1' : Math.random() > 0.3 ? 'tumble-2' : 'sway-simple', 
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[5] perspective-[500px]">
      <style>
        {`
          @keyframes fall-drift {
            0% {
              transform: translate(-20vw, -20vh) rotateZ(0deg);
              opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% {
              transform: translate(110vw, 120vh) rotateZ(120deg);
              opacity: 0;
            }
          }
          
          /* 3D Tumbling Effects */
          @keyframes tumble-1 {
            0% { transform: rotate3d(1, 1, 1, 0deg); }
            50% { transform: rotate3d(1, 1, 1, 180deg); }
            100% { transform: rotate3d(1, 1, 1, 360deg); }
          }
          
          @keyframes tumble-2 {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            50% { transform: rotateX(45deg) rotateY(180deg); }
            100% { transform: rotateX(0deg) rotateY(360deg); }
          }

          @keyframes sway-simple {
            0% { transform: rotateZ(-15deg); }
            50% { transform: rotateZ(15deg); }
            100% { transform: rotateZ(-15deg); }
          }
        `}
      </style>
      
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            left: `${p.left}vw`,
            top: '-20%', // Start well above viewport
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1)) ${p.blur}`, // Added shadow for realism
            opacity: 0, // Controlled by keyframes
            animation: `fall-drift ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 32"
            fill={p.color}
            className="w-full h-full"
            style={{
              opacity: p.opacity,
              animation: `${p.swayType} ${p.duration * (Math.random() * 0.2 + 0.1)}s ease-in-out infinite alternate`,
            }}
          >
            <path d={p.path!} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export const Home: React.FC = () => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  
  // Carousel State
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroVideoRef.current) {
        const scrolled = window.scrollY;
        // Limit calculation to when hero is typically visible to optimize
        if (scrolled < 1200) {
          // Move video down at 30% speed of scroll to create depth (parallax)
          heroVideoRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel Responsive Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize(); // Initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index stays valid when itemsPerSlide changes
  useEffect(() => {
    const maxIndex = Math.max(0, PROJECTS.length - itemsPerSlide);
    if (currentProjectIndex > maxIndex) {
      setCurrentProjectIndex(maxIndex);
    }
  }, [itemsPerSlide, currentProjectIndex]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, PROJECTS.length - itemsPerSlide);
    setCurrentProjectIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, PROJECTS.length - itemsPerSlide);
    setCurrentProjectIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1280&auto=format&fit=crop"
            className="w-full h-[140%] object-cover absolute -top-[30%]"
            style={{ willChange: 'transform' }}
          >
            {/* Mobile optimized (SD 360p) - Saves bandwidth on small screens */}
            <source 
              src="https://videos.pexels.com/video-files/855639/855639-sd_640_360_25fps.mp4" 
              type="video/mp4" 
              media="(max-width: 767px)" 
            />
            {/* Desktop optimized (HD 720p) - Better performance than 1080p for backgrounds */}
            <source 
              src="https://videos.pexels.com/video-files/855639/855639-hd_1280_720_25fps.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Overlay for brand colors and text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#234568]/90 via-[#234568]/80 to-[#2D7CA3]/70 mix-blend-multiply" />
          
          {/* Texture Overlay (optional for "paper" feel) */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          {/* Animated Particles */}
          <ParticleOverlay />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white max-w-4xl">
          <FadeIn delay={100}>
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-[#6DA89B]/20 border border-[#6DA89B] text-[#6DA89B] font-semibold tracking-wider text-sm uppercase backdrop-blur-sm">
              Desde 2005 Transformando Vidas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-shadow-lg">
              Assistência social que <span className="text-[#8CB858]">transforma</span> realidades
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Unimos sustentabilidade, cultura e tecnologia para criar oportunidades e promover a cidadania plena em comunidades vulneráveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" onClick={() => window.location.hash = '#/projetos'}>
                Conheça Nossos Projetos
              </Button>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30"
                onClick={() => window.location.hash = '#/quem-somos'}
              >
                Saiba Quem Somos
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro / Mission Summary */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn>
              <div className="flex items-center gap-2 text-[#EAC065] font-bold">
                <HeartHandshake size={24} />
                <span>NOSSO COMPROMISSO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#234568]">
                Desenvolvimento humano integral e sustentável
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O Instituto Ecos é uma associação civil sem fins lucrativos que atua com a missão de promover a assistência social no Brasil. Acreditamos que o verdadeiro desenvolvimento acontece quando cuidamos das pessoas e do ambiente onde elas vivem.
              </p>
              <ul className="space-y-3">
                {['Ética e Transparência', 'Pluralismo e Diversidade', 'Foco no Impacto Social'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#2D7CA3] font-medium">
                    <div className="h-2 w-2 rounded-full bg-[#649B42]" />
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/quem-somos" className="inline-flex items-center text-[#C88849] font-bold hover:gap-2 transition-all mt-4">
                Ler nossa história completa <ArrowRight size={18} className="ml-1" />
              </NavLink>
            </FadeIn>
          </div>
          <div className="relative">
            <FadeIn delay={200}>
              <div className="absolute -inset-4 bg-[#EAC065]/20 rounded-2xl transform rotate-3" />
              <img 
                src="https://picsum.photos/600/400?random=10" 
                alt="Atividade educativa" 
                className="relative rounded-lg shadow-xl w-full object-cover h-80"
              />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Areas of Action Cards */}
      <Section>
        <SectionTitle 
          title="Nossos Pilares de Atuação" 
          subtitle="Trabalhamos de forma integrada para cobrir as principais demandas sociais e ambientais." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS.map((area, idx) => (
            <FadeIn key={area.id} delay={idx * 150} className="h-full">
              <div 
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full"
              >
                <div 
                  className="h-2 w-full" 
                  style={{ backgroundColor: area.color }}
                />
                <div className="p-8">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${area.color}20`, color: area.color }}
                  >
                    <area.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#234568] mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <NavLink 
                    to="/atuacao" 
                    className="inline-flex items-center text-sm font-semibold hover:gap-2 transition-all"
                    style={{ color: area.color }}
                  >
                    Saiba mais <ChevronRight size={16} className="ml-1" />
                  </NavLink>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Featured Projects - Responsive Carousel */}
      <Section bgColor="bg-[#234568]" className="text-white relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#6DA89B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C88849] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
              <p className="text-blue-100">
                Conheça algumas das iniciativas que estão mudando a realidade de centenas de famílias.
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#234568] transition-colors"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#234568] transition-colors"
                aria-label="Próximo projeto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative -mx-4 px-4 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentProjectIndex * (100 / itemsPerSlide)}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {PROJECTS.map((project, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                >
                  <FadeIn className="h-full" delay={idx < 3 ? idx * 100 : 0}>
                    <div className="bg-white rounded-lg overflow-hidden text-[#234568] h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                      <div className="h-48 overflow-hidden shrink-0 relative">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide text-[#234568]">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="mt-8 flex justify-center items-center gap-6 md:hidden">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full border border-white/30 text-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(PROJECTS.length / (itemsPerSlide > 1 ? 1 : 1)) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentProjectIndex === idx ? 'w-6 bg-[#EAC065]' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>

             <button 
              onClick={nextSlide}
              className="p-2 rounded-full border border-white/30 text-white"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop Dots (Optional, if multiple pages exist) */}
          <div className="hidden md:flex justify-center mt-8 gap-2">
            {PROJECTS.length > itemsPerSlide && Array.from({ length: PROJECTS.length - itemsPerSlide + 1 }).map((_, idx) => (
               <button
               key={idx}
               onClick={() => setCurrentProjectIndex(idx)}
               className={`h-2 rounded-full transition-all duration-300 ${
                 currentProjectIndex === idx ? 'w-8 bg-[#EAC065]' : 'w-2 bg-white/30'
               }`}
             />
            ))}
          </div>
          
          <div className="text-center mt-8">
             <Button 
              variant="outline" 
              style={{ borderColor: 'white', color: 'white' }}
              onClick={() => window.location.hash = '#/projetos'}
            >
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Donation */}
      <Section>
        <FadeIn delay={200}>
          <div className="bg-gradient-to-br from-[#EAC065]/20 to-[#C88849]/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#EAC065]/30">
            <h2 className="text-3xl font-bold text-[#234568] mb-4">Faça parte dessa transformação</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Sua contribuição ajuda a manter nossas atividades educacionais, culturais e ambientais. 
              Seja um parceiro do Instituto Ecos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={() => window.location.hash = '#/contato'}>
                Quero ser Voluntário
              </Button>
              <Button 
                className="bg-white text-[#C88849] border border-[#C88849] hover:bg-[#C88849] hover:text-white"
                onClick={() => window.location.hash = '#/contato'}
              >
                Fazer uma Doação
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};