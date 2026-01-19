import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Settings, Camera, Save } from 'lucide-react';

export function Profile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Estados locais para o formulário de edição
  const [tempName, setTempName] = useState(user.name);
  const [tempBio, setTempBio] = useState(user.bio);

  const handleSave = () => {
    updateUser({ name: tempName, bio: tempBio });
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner de Fundo */}
        <div className="h-32 bg-gradient-to-r from-brand-pink to-pink-400"></div>
        
        <div className="px-8 pb-8">
          {/* Foto e Botão Editar */}
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="relative group">
              <img 
                src={user.avatar} 
                className="w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover" 
                alt="Profile" 
              />
              <button className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <Camera className="text-white" size={24} />
              </button>
            </div>
            
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-pink hover:text-white transition-all flex items-center gap-2"
              >
                <Settings size={18} />
                Editar Perfil
              </button>
            ) : (
              <button 
                onClick={handleSave}
                className="bg-brand-pink text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-pink-600 transition-all flex items-center gap-2 shadow-lg shadow-pink-100"
              >
                <Save size={18} />
                Salvar
              </button>
            )}
          </div>

          {/* Informações do Perfil */}
          {isEditing ? (
            <div className="space-y-4 mb-6">
              <input 
                className="text-2xl font-bold text-gray-800 w-full bg-gray-50 border-none rounded-xl p-2 focus:ring-2 focus:ring-brand-pink/20"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
              <textarea 
                className="text-gray-500 w-full bg-gray-50 border-none rounded-xl p-2 focus:ring-2 focus:ring-brand-pink/20 h-20 resize-none"
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
              />
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-400 font-medium mb-4">@{user.handle}</p>
              <p className="text-gray-500 mb-6 italic leading-relaxed">
                {user.bio}
              </p>
            </>
          )}
          
          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-6 text-center">
            <div className="hover:bg-gray-50 p-2 rounded-2xl transition-colors cursor-pointer">
              <p className="font-black text-xl text-gray-800">12</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Posts</p>
            </div>
            <div className="hover:bg-gray-50 p-2 rounded-2xl transition-colors cursor-pointer">
              <p className="font-black text-xl text-gray-800">450</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Seguidores</p>
            </div>
            <div className="hover:bg-gray-50 p-2 rounded-2xl transition-colors cursor-pointer">
              <p className="font-black text-xl text-gray-800">2</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Pets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}