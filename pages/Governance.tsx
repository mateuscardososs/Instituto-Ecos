import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { BOARD } from '../constants';
import { FileText, Download } from 'lucide-react';

export const Governance: React.FC = () => {
  return (
    <>
      <div className="bg-[#234568] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Governança e Transparência</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nossa estrutura administrativa é pautada pela responsabilidade e prestação de contas.
          </p>
        </div>
      </div>

      <Section>
        <SectionTitle title="Corpo Diretivo" subtitle="Mandato 2023 - 2027" />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Executive Board */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#234568]">
            <h3 className="text-2xl font-bold text-[#234568] mb-6 pb-2 border-b border-gray-100">
              Diretoria Executiva
            </h3>
            <ul className="space-y-6">
              {BOARD.executive.map((member, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#234568] font-bold text-lg shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{member.name}</h4>
                    <span className="text-[#6DA89B] font-medium">{member.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Fiscal Council */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#C88849]">
            <h3 className="text-2xl font-bold text-[#C88849] mb-6 pb-2 border-b border-gray-100">
              Conselho Fiscal
            </h3>
            <ul className="space-y-6">
              {BOARD.fiscal.map((member, idx) => (
                <li key={idx} className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#C88849] font-bold text-lg shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{member.name}</h4>
                    <span className="text-[#6DA89B] font-medium">{member.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Funding Sources */}
      <Section bgColor="bg-gray-50">
        <SectionTitle title="Sustentabilidade Financeira" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Contribuições de associados",
            "Prestação de serviços e contratos",
            "Patrocínios corporativos",
            "Doações nacionais e internacionais",
            "Subvenções públicas",
            "Rendimentos patrimoniais"
          ].map((source, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="h-2 w-2 bg-[#8CB858] rounded-full" />
              <p className="text-gray-700 font-medium">{source}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Transparency Documents */}
      <Section>
        <SectionTitle title="Prestação de Contas" subtitle="Acesse nossos relatórios e documentos oficiais." />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Estatuto Social", year: "Vigente" },
            { title: "Relatório de Atividades", year: "2023" },
            { title: "Balanço Patrimonial", year: "2023" },
            { title: "Relatório de Atividades", year: "2022" },
            { title: "Balanço Patrimonial", year: "2022" },
            { title: "Certidões Negativas", year: "Atualizado" }
          ].map((doc, idx) => (
            <a key={idx} href="#" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2D7CA3] transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileText className="text-gray-400 group-hover:text-[#2D7CA3]" />
                <div>
                  <h4 className="font-bold text-gray-700">{doc.title}</h4>
                  <span className="text-xs text-gray-500">{doc.year}</span>
                </div>
              </div>
              <Download size={20} className="text-gray-300 group-hover:text-[#2D7CA3]" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};