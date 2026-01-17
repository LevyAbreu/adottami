import { Bell, Shield, Eye, Smartphone } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-4xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Configurações</h2>
      
      <div className="space-y-6">
        <SettingRow icon={<Bell size={20} />} title="Notificações" desc="Alertas de novos chats e curtidas" checked />
        <SettingRow icon={<Eye size={20} />} title="Perfil Público" desc="Permitir que vejam seus pets cadastrados" checked />
        <SettingRow icon={<Shield size={20} />} title="Privacidade" desc="Gerenciar quem pode te enviar DMs" />
        <SettingRow icon={<Smartphone size={20} />} title="Modo Noturno" desc="Ajustar cores para ambientes escuros" />
      </div>

      <div className="mt-10 p-4 bg-red-50 rounded-2xl flex justify-between items-center">
        <div>
          <p className="text-red-600 font-bold text-sm">Zona de Perigo</p>
          <p className="text-red-400 text-xs">Excluir sua conta permanentemente</p>
        </div>
        <button className="text-red-600 font-bold text-xs hover:underline">Excluir conta</button>
      </div>
    </div>
  );
}

function SettingRow({ icon, title, desc, checked = false }: any) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-50 rounded-xl text-gray-500">{icon}</div>
        <div>
          <p className="font-bold text-gray-800 text-sm">{title}</p>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      </div>
      <div className={`w-12 h-6 rounded-full transition-all cursor-pointer flex items-center px-1 ${checked ? 'bg-brand-pink' : 'bg-gray-200'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all ${checked ? 'ml-6' : 'ml-0'}`}></div>
      </div>
    </div>
  );
}