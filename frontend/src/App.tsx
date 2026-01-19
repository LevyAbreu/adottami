import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  Search, Heart, LayoutGrid, Dog, Info, 
  LifeBuoy, MessageSquare, User, Settings, LogOut, ChevronDown, ShoppingBag 
} from 'lucide-react';

// Importação do Ícone
import logoIcon from './assets/icon-32.png';

// Importação das Páginas
import { Feed } from './pages/Feed';
import { Adoption } from './pages/Adoption';
import { MyPets } from './pages/MyPets';
import { About } from './pages/About';
import { Support } from './pages/Support';
import { Chat } from './pages/Chat';
import { Profile } from './pages/Profile';
import { SettingsPage } from './pages/Settings';
import { Login } from './pages/Login';
import { Marketplace } from './pages/Marketplace';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Esconde a Sidebar e Header se estiver na tela de Login
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-brand-bg flex flex-col">
      {/* HEADER: Fixo no topo */}
      <header className="layout-header sticky top-0 z-40 bg-brand-dark h-16 px-4 md:px-8 flex items-center justify-between border-b border-gray-800 w-full">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-fit">
          <img src={logoIcon} alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-xl font-bold italic text-brand-pink md:text-2xl">Adottami</h1>
        </Link>
        
        <div className="relative flex-1 max-w-md mx-4 hidden sm:block">
          <input type="text" placeholder="Buscar no Adottami..." className="search-input w-full bg-gray-800 text-white rounded-xl px-10 py-2 outline-none focus:ring-2 focus:ring-brand-pink/50" />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/chat" className="text-gray-400 hover:text-brand-pink transition-colors hidden md:block">
            <MessageSquare size={22} />
          </Link>
          
          {/* Perfil Desktop */}
          <div 
            className="relative hidden md:block"
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <div className="flex items-center gap-3 pl-2 border-l border-gray-700 cursor-pointer py-2">
              <img src="https://github.com/shadcn.png" className="w-9 h-9 rounded-full border-2 border-gray-700" alt="User" />
              <ChevronDown size={14} className="text-gray-400" />
            </div>

            {isProfileOpen && (
              <div className="absolute right-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 mt-0 z-50">
                <DropdownItem to="/perfil" icon={<User size={16} />} label="Meu Perfil" />
                <DropdownItem to="/configuracoes" icon={<Settings size={16} />} label="Configurações" />
                <hr className="my-2 border-gray-100" />
                <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-semibold text-left">
                  <LogOut size={16} /> Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR: Apenas Desktop */}
        <aside className="hidden md:block w-64 border-r border-gray-800 bg-brand-dark p-6 h-[calc(100vh-64px)] sticky top-16">
          <nav className="space-y-2">
            <Link to="/"><MenuItem icon={<LayoutGrid size={20} />} label="Feed" active={location.pathname === '/'} /></Link>
            <Link to="/adotar"><MenuItem icon={<Heart size={20} />} label="Adotar" active={location.pathname === '/adotar'} /></Link>
            <Link to="/marketplace"><MenuItem icon={<ShoppingBag size={20} />} label="Marketplace" active={location.pathname === '/marketplace'} /></Link>
            <Link to="/meus-pets"><MenuItem icon={<Dog size={20} />} label="Meus pets" active={location.pathname === '/meus-pets'} /></Link>
            <div className="pt-4 mt-4 border-t border-gray-800/50">
              <Link to="/sobre"><MenuItem icon={<Info size={20} />} label="Sobre" active={location.pathname === '/sobre'} /></Link>
              <Link to="/suporte"><MenuItem icon={<LifeBuoy size={20} />} label="Suporte" active={location.pathname === '/suporte'} /></Link>
            </div>
          </nav>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/adotar" element={<Adoption />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/meus-pets" element={<MyPets />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/configuracoes" element={<SettingsPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>

      {/* BOTTOM NAV: Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <MobileNavItem to="/" icon={<LayoutGrid size={24} />} active={location.pathname === '/'} />
        <MobileNavItem to="/adotar" icon={<Heart size={24} />} active={location.pathname === '/adotar'} />
        <MobileNavItem to="/marketplace" icon={<ShoppingBag size={24} />} active={location.pathname === '/marketplace'} />
        <MobileNavItem to="/chat" icon={<MessageSquare size={24} />} active={location.pathname === '/chat'} />
        <MobileNavItem to="/perfil" icon={<User size={24} />} active={location.pathname === '/perfil'} />
      </nav>
    </div>
  );
}

// Componentes Auxiliares
function MenuItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-brand-pink text-white font-bold' : 'text-gray-400 hover:bg-gray-800'}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function MobileNavItem({ to, icon, active }: { to: string, icon: any, active: boolean }) {
  return (
    <Link to={to} className={`p-2 transition-colors ${active ? 'text-brand-pink' : 'text-gray-400'}`}>
      {icon}
    </Link>
  );
}

function DropdownItem({ to, icon, label }: { to: string, icon: any, label: string }) {
  return (
    <Link to={to} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-pink transition-colors font-medium">
      {icon}
      {label}
    </Link>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}