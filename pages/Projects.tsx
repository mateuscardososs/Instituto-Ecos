import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { PROJECTS, COLORS } from '../constants';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';

export const Projects: React.FC = () => {
  return (
    <>
      <div className="bg-[#EAC065] py-20 text-[#234568]">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projetos</h1>
            <p className="text-xl max-w-2xl mx-auto font-medium">
              Iniciativas práticas que geram impacto real e mensurável.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="h-full">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide text-[#234568]">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#234568] mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status:</span>
                      <span className={`px-2 py-1 rounded font-medium ${
                        project.status === 'Em andamento' ? 'bg-green-100 text-green-700' :
                        project.status === 'Planejamento' ? 'bg-blue-100 text-blue-700' : 
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <Button variant="outline" fullWidth style={{ borderColor: COLORS.deepBlue, color: COLORS.deepBlue }}>
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Call for Partnership */}
      <Section bgColor="bg-[#2D7CA3]" className="text-white text-center">
        <FadeIn delay={300}>
          <h2 className="text-3xl font-bold mb-6">Sua empresa quer apoiar um projeto?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Oferecemos modelos de parceria com incentivos fiscais e relatórios detalhados de impacto social. 
            Associe sua marca a valores sólidos.
          </p>
          <Button 
            className="bg-white text-[#2D7CA3] hover:bg-gray-100 font-bold"
            onClick={() => window.location.hash = '#/contato'}
          >
            Falar com Parcerias
          </Button>
        </FadeIn>
      </Section>
    </>
  );
};