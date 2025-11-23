import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CONTACT_INFO, COLORS } from '../constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-[#6DA89B] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Estamos prontos para ouvir você. Entre em contato para parcerias, dúvidas ou doações.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#234568] mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#234568]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Endereço</h3>
                    <p className="text-gray-600 max-w-xs">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#234568]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#234568]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">E-mail</h3>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#234568]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta, das 08h às 17h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl overflow-hidden relative">
               <img 
                 src="https://picsum.photos/600/400?grayscale&blur=1" 
                 alt="Mapa da localização" 
                 className="w-full h-full object-cover opacity-60" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white px-4 py-2 rounded shadow text-sm font-bold text-gray-500">
                   Mapa Google Maps (Simulado)
                 </span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#234568] mb-6">Envie sua mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <input 
                    id="name" 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DA89B] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone</label>
                  <input 
                    id="phone" 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DA89B] focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                <input 
                  id="email" 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DA89B] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DA89B] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>Quero ser voluntário</option>
                  <option>Dúvidas sobre projetos</option>
                  <option>Parcerias corporativas</option>
                  <option>Imprensa</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DA89B] focus:border-transparent outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <Button type="submit" fullWidth style={{ backgroundColor: COLORS.orangeTerra, color: 'white' }}>
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};