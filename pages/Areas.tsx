import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { AREAS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const Areas: React.FC = () => {
  return (
    <>
      <div className="bg-[#649B42] py-20 text-white relative overflow-hidden">
        {/* Abstract leaf pattern background opacity */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Áreas de Atuação</h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Uma abordagem holística para resolver problemas complexos.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {AREAS.map((area, idx) => (
            <FadeIn key={area.id} delay={idx * 150}>
              <div className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div 
                      className="absolute inset-0 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
                      style={{ backgroundColor: area.color }}
                    />
                    {/* Image Wrapper for Scale Effect */}
                    <div className="relative rounded-2xl shadow-lg overflow-hidden h-[300px] md:h-[400px] bg-white z-10">
                      <img 
                        src={area.imageUrl}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div 
                      className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg z-20"
                      style={{ color: area.color }}
                    >
                      <area.icon size={32} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <span 
                    className="text-sm font-bold tracking-widest uppercase mb-2 block"
                    style={{ color: area.color }}
                  >
                    Pilar {idx + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-[#234568] mb-6">{area.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {area.description}
                    <br /><br />
                    Atuamos estrategicamente para criar indicadores de sucesso que transformam não apenas indivíduos, mas toda a comunidade ao redor.
                  </p>
                  
                  <h3 className="font-bold text-[#234568] mb-4">Linhas de ação:</h3>
                  <ul className="space-y-3">
                    {area.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} style={{ color: area.color }} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};