import { useState } from 'react';
// Adicionei o MessageSquare aqui na lista de imports
import { ChevronLeft, MoreVertical, Send, Search, Paperclip, MessageSquare } from 'lucide-react';

const CONTACTS = [
  { id: 1, name: "Pet Shop Rex", lastMsg: "Seu pedido saiu para entrega!", time: "10:30", avatar: "https://github.com/diego3g.png", online: true },
  { id: 2, name: "Dr. André (Vete)", lastMsg: "O exame ficou pronto.", time: "09:15", avatar: "https://i.pravatar.cc/150?u=2", online: false },
];

export function Chat() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [msg, setMsg] = useState("");

  const activeContact = CONTACTS.find(c => c.id === selectedChat);

  return (
    <div className="flex h-[calc(100vh-140px)] md:h-[calc(100vh-120px)] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      
      {/* COLUNA ESQUERDA: LISTA DE CONVERSAS */}
      {/* No mobile, some se houver um chat selecionado */}
      <div className={`${selectedChat ? 'hidden' : 'flex'} md:flex w-full md:w-80 flex-col border-r border-gray-50`}>
        <div className="p-4 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mensagens</h2>
          <div className="relative">
            <input type="text" placeholder="Buscar conversa..." className="w-full bg-gray-50 rounded-xl py-2 px-10 text-sm outline-none" />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {CONTACTS.map(contact => (
            <div 
              key={contact.id}
              onClick={() => setSelectedChat(contact.id)}
              className={`p-4 flex gap-3 cursor-pointer transition-colors ${selectedChat === contact.id ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
            >
              <div className="relative">
                <img src={contact.avatar} className="w-12 h-12 rounded-full object-cover" />
                {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm text-gray-800 truncate">{contact.name}</h4>
                  <span className="text-[10px] text-gray-400">{contact.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{contact.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLUNA DIREITA: TELA DE CONVERSA */}
      {/* No mobile, só aparece se houver um chat selecionado */}
      <div className={`${!selectedChat ? 'hidden' : 'flex'} md:flex flex-1 flex-col bg-gray-50/50`}>
        {selectedChat ? (
          <>
            {/* TOPBAR DA CONVERSA */}
            <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                {/* Botão de Voltar (Mobile apenas) */}
                <button onClick={() => setSelectedChat(null)} className="md:hidden p-1 text-gray-500">
                  <ChevronLeft size={24} />
                </button>
                <img src={activeContact?.avatar} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm text-gray-800 leading-none">{activeContact?.name}</h4>
                  <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* ÁREA DE MENSAGENS */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm text-gray-700 leading-relaxed border border-gray-100">
                  Olá! Como posso ajudar você e seu pet hoje? 🐾
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-brand-pink text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%] text-sm leading-relaxed">
                  Oi! Gostaria de saber o horário da tosa.
                </div>
              </div>
            </div>

            {/* INPUT DE MENSAGEM */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-2 border border-gray-100">
                <button className="p-2 text-gray-400 hover:text-brand-pink transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Digite sua mensagem..." 
                  className="flex-1 bg-transparent text-sm outline-none px-2"
                />
                <button 
                  disabled={!msg.trim()}
                  className="bg-brand-pink text-white p-2.5 rounded-xl hover:bg-pink-600 transition-all disabled:opacity-50 shadow-lg shadow-pink-100"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* TELA VAZIA (Desktop) */
          <div className="flex-1 hidden md:flex flex-col items-center justify-center text-gray-400 gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <MessageSquare size={40} />
            </div>
            <p className="text-sm font-medium">Selecione uma conversa para começar</p>
          </div>
        )}
      </div>
    </div>
  );
}