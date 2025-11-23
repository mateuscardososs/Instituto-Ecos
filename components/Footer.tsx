import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { COLORS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: COLORS.deepBlue }} className="text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 brightness-200 grayscale contrast-200" />
              <span className="text-2xl font-bold">Instituto Ecos</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Associação Civil de interesse público, apartidária e filantrópica. 
              Transformando realidades através da assistência social, ecologia e tecnologia.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#6DA89B]">Menu Rápido</h3>
            <ul className="space-y-3">
              {[
                { label: 'Quem Somos', path: '/quem-somos' },
                { label: 'Nossos Projetos', path: '/projetos' },
                { label: 'Transparência', path: '/governanca' },
                { label: 'Como Ajudar', path: '/contato' }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-blue-100 hover:text-white hover:underline decoration-[#6DA89B] underline-offset-4 text-sm">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#6DA89B]">Contato</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#EAC065]" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0 text-[#EAC065]" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0 text-[#EAC065]" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#6DA89B]">Institucional</h3>
            <p className="text-sm text-blue-100 mb-2">CNPJ: {CONTACT_INFO.cnpj}</p>
            <p className="text-xs text-blue-200 opacity-70 leading-relaxed">
              O Instituto Ecos não realiza propaganda de natureza sectária, política ou religiosa. 
              Todas as doações são revertidas para a manutenção dos projetos sociais.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Instituto Ecos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-blue-200">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};