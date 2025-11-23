import React from 'react';
import { Section, SectionTitle } from '../components/Section';
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
