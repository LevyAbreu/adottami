import { Send } from 'lucide-react';

export function Chat() {
  return (
    <div className="w-full max-w-5xl h-[calc(100vh-120px)] bg-white rounded-4xl shadow-sm border border-gray-100 flex overflow-hidden">
      {/* Lista de Contatos */}
      <div className="w-80 border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100 font-bold text-gray-800">Mensagens</div>
        <div className="flex-1 overflow-y-auto">
          <ContactItem name="ONG Patas Felizes" lastMsg="Olá Maria, o Thor está..." active />
          <ContactItem name="Ricardo Silva" lastMsg="Ele já foi vacinado?" />
        </div>
      </div>

      {/* Área da Conversa */}
      <div className="flex-1 flex flex-col bg-gray-50/50">
        <div className="p-4 bg-white border-b border-gray-100 flex items-center gap-3">
          <img src="https://github.com/shadcn.png" className="w-10 h-10 rounded-full" alt="Contato" />
          <span className="font-bold">ONG Patas Felizes</span>
        </div>

        <div className="flex-1 p-6 flex flex-col justify-end gap-4">
          <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm max-w-xs self-start text-sm">
            Olá Maria! O Thor está disponível para visita amanhã?
          </div>
          <div className="bg-brand-pink text-white p-4 rounded-2xl rounded-br-none shadow-md max-w-xs self-end text-sm font-medium">
            Claro! Pode vir às 14h?
          </div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100 flex gap-4">
          <input type="text" placeholder="Escreva sua mensagem..." className="flex-1 bg-gray-50 rounded-2xl px-6 outline-none text-sm" />
          <button className="bg-brand-pink text-white p-4 rounded-2xl shadow-lg shadow-pink-100"><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ name, lastMsg, active = false }: any) {
  return (
    <div className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${active ? 'bg-pink-50' : 'hover:bg-gray-50'}`}>
      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      <div>
        <p className={`text-sm font-bold ${active ? 'text-brand-pink' : 'text-gray-800'}`}>{name}</p>
        <p className="text-xs text-gray-400 truncate w-40">{lastMsg}</p>
      </div>
    </div>
  );
}