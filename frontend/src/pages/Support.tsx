import { MessageCircle, Mail, Phone } from 'lucide-react';

export function Support() {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Suporte</h2>
      <p className="text-gray-500 mb-8">Como podemos te ajudar hoje?</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <ContactCard icon={<Mail className="text-brand-pink" />} label="E-mail" value="ajuda@adottami.com" />
        <ContactCard icon={<MessageCircle className="text-green-500" />} label="Chat" value="Abrir chamado" />
        <ContactCard icon={<Phone className="text-blue-500" />} label="Telefone" value="0800-PET-LOVE" />
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-100">
        <h3 className="font-bold text-lg mb-4">Perguntas Frequentes</h3>
        <div className="space-y-4">
          <FAQItem question="Como funciona o processo de adoção?" answer="Basta entrar em contato com o anunciante pelo botão 'Conhecer História' e seguir os protocolos da ONG ou protetor." />
          <FAQItem question="É gratuito anunciar um pet?" answer="Sim! O Adottami é uma plataforma gratuita para ajudar na causa animal." />
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, label, value }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center flex flex-col items-center shadow-sm">
      {icon}
      <span className="text-xs text-gray-400 mt-2">{label}</span>
      <span className="text-sm font-bold text-gray-800">{value}</span>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <h4 className="font-bold text-gray-700 mb-1">{question}</h4>
      <p className="text-sm text-gray-500">{answer}</p>
    </div>
  );
}