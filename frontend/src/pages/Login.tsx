import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entraria a lógica de backend futuramente
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-brand-dark z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-4xl p-8 md:p-10 shadow-2xl my-auto animate-in fade-in zoom-in duration-300">
        
        {/* Cabeçalho Dinâmico */}
        <div className="text-center mb-8">
          {isRegistering && (
            <button 
              onClick={() => setIsRegistering(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-brand-pink mb-4 transition-colors text-sm font-bold"
            >
              <ArrowLeft size={16} /> Voltar para o login
            </button>
          )}
          <h1 className="text-4xl font-bold italic text-brand-pink mb-2">Adottami</h1>
          <p className="text-gray-500 text-sm">
            {isRegistering 
              ? "Crie sua conta e ajude milhares de pets!" 
              : "Bem-vindo de volta, amante de pets!"}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Campo Nome (Apenas no Cadastro) */}
          {isRegistering && (
            <div className="animate-in slide-in-from-top-2 duration-300">
              <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1 tracking-wider">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Como quer ser chamado?" 
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 px-6 focus:ring-2 focus:ring-brand-pink outline-none transition-all text-sm" 
                required
              />
            </div>
          )}

          <div>
            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1 tracking-wider">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full bg-gray-50 border-none rounded-2xl py-3.5 px-6 focus:ring-2 focus:ring-brand-pink outline-none transition-all text-sm" 
              required
            />
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1 tracking-wider">Senha</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="w-full bg-gray-50 border-none rounded-2xl py-3.5 px-6 focus:ring-2 focus:ring-brand-pink outline-none transition-all text-sm" 
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] text-gray-400 hover:text-brand-pink transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Campo Repetir Senha (Apenas no Cadastro) */}
          {isRegistering && (
            <div className="animate-in slide-in-from-top-2 duration-400">
              <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1 tracking-wider">Repetir Senha</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 px-6 focus:ring-2 focus:ring-brand-pink outline-none transition-all text-sm" 
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-brand-pink text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-100 hover:bg-pink-600 active:scale-[0.98] transition-all mt-4"
          >
            {isRegistering ? "Criar Conta" : "Entrar"}
          </button>
        </form>

        {/* Alternador de Modos */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            {isRegistering ? "Já tem uma conta?" : "Não tem uma conta?"} 
            <button 
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-brand-pink font-bold ml-1 hover:underline underline-offset-4"
            >
              {isRegistering ? "Faça Login" : "Cadastre-se"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}