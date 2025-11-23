import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      {/* Hero Header */}
      <div className="bg-[#234568] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Uma história construída com ética, compromisso social e amor ao próximo.
          </p>
        </div>
      </div>

      {/* Institutional Identity */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
             <h3 className="text-sm font-bold text-[#C88849] tracking-widest uppercase mb-2">Identidade Institucional</h3>
            <h2 className="text-3xl font-bold text-[#234568] mb-6">
              Associação Civil de Interesse Público
            </h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                O Instituto Ecos é uma entidade de natureza privada, apartidária, pluralista e sem fins lucrativos. 
                Desde a nossa fundação, atuamos com a missão contínua de promoção da Assistência Social no Brasil, 
                sempre pautados pela seriedade jurídica e responsabilidade técnica.
              </p>
              <p>
                Nossa sede está localizada no Recife-PE, mas nossa atuação não conhece fronteiras. 
                Trabalhamos para criar modelos replicáveis de desenvolvimento que respeitem as particularidades locais 
                e integrem as comunidades aos avanços globais.
              </p>
              <blockquote className="border-l-4 border-[#6DA89B] pl-4 italic text-gray-700 my-6 bg-gray-50 py-4 pr-2 rounded-r-lg">
                "Não realizamos propaganda de qualquer natureza sectária, política ou religiosa. 
                Nosso único partido é o desenvolvimento humano."
              </blockquote>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8CB858]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full text-[#649B42]">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#234568]">Missão</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Promover a assistência social integrada à sustentabilidade, cultura e educação, 
                  gerando autonomia e dignidade para populações vulneráveis.
                </p>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#EAC065]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full text-[#C88849]">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#234568]">Visão</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ser referência nacional em inovação social, demonstrando que é possivel unir 
                  tecnologia, preservação ambiental e calor humano.
                </p>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#2D7CA3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-[#2D7CA3]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#234568]">Valores</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ética, Paz, Cidadania, Direitos Humanos, Democracia e Respeito à Diversidade.
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* History/Timeline Mockup */}
      <Section bgColor="bg-gray-50">
        <SectionTitle title="Nossa Trajetória" />
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
          
          {[
            { year: '2005', title: 'Fundação', desc: 'Início das atividades com foco em educação básica.' },
            { year: '2010', title: 'Expansão', desc: 'Início dos projetos ambientais e culturais.' },
            { year: '2018', title: 'Tecnologia', desc: 'Implementação dos núcleos de inovação tecnológica.' },
            { year: '2023', title: 'Novos Horizontes', desc: 'Ampliação para projetos internacionais.' }
          ].map((item, idx) => (
            <div key={idx} className={`relative flex items-center justify-between mb-8 w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#234568] rounded-full border-4 border-white shadow flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="w-5/12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#6DA89B] font-bold text-lg block mb-1">{item.year}</span>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Commitment Strip */}
      <Section className="py-12 bg-[#6DA89B] text-black">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
             <Award className="mx-auto mb-4 w-12 h-12 text-[#234568]" />
             <h3 className="text-xl font-bold mb-2 text-black">Reconhecimento</h3>
             <p className="text-black opacity-90">Certificados como Organização Social de referência.</p>
          </div>
          <div className="p-4 border-l border-r border-black/20">
             <ShieldCheck className="mx-auto mb-4 w-12 h-12 text-[#234568]" />
             <h3 className="text-xl font-bold mb-2 text-black">Legalidade</h3>
             <p className="text-black opacity-90">Total conformidade com o Marco Regulatório do Terceiro Setor.</p>
          </div>
          <div className="p-4">
             <Target className="mx-auto mb-4 w-12 h-12 text-[#234568]" />
             <h3 className="text-xl font-bold mb-2 text-black">Foco</h3>
             <p className="text-black opacity-90">Resultados mensuráveis e impacto real na sociedade.</p>
          </div>
        </div>
      </Section>
    </>
  );
};