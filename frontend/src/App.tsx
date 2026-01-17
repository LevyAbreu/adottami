import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  Search, Heart, LayoutGrid, PlusSquare, Dog, Info, 
  LifeBuoy, MessageSquare, User, Settings, LogOut, ChevronDown 
} from 'lucide-react';
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
      </Routes>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-brand-bg">
      {/* HEADER FIXO */}
      <header className="layout-header">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-fit">
          <img src={logoIcon} alt="Adottami Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold italic text-brand-pink tracking-tight">Adottami</h1>
        </Link>
        
        <div className="relative w-full max-w-md mx-4">
          <input 
            type="text" 
            placeholder="Buscar no Adottami..." 
            className="search-input" 
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <div className="flex items-center gap-4 min-w-fit">
          {/* BOTÃO DE CHAT (DM) */}
          <Link to="/chat" className="header-icon-btn">
            <MessageSquare size={22} />
            <span className="notification-badge"></span>
          </Link>

          {/* DROPDOWN DE PERFIL COM HOVER */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <div className="flex items-center gap-3 pl-2 border-l border-gray-700 cursor-pointer py-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none text-white">Maria</p>
                <p className="text-[10px] text-gray-400">Online</p>
              </div>
              <img 
                src="https://github.com/shadcn.png" 
                className="w-9 h-9 rounded-full border-2 border-gray-700 hover:border-brand-pink transition-colors" 
                alt="Maria" 
              />
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* MENU DROPDOWN */}
            {isProfileOpen && (
              <div className="absolute right-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 mt-0 z-50 animate-in fade-in zoom-in duration-200">
                <DropdownItem to="/perfil" icon={<User size={16} />} label="Meu Perfil" />
                <DropdownItem to="/configuracoes" icon={<Settings size={16} />} label="Configurações" />
                <hr className="my-2 border-gray-100" />
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors font-semibold text-left"
                >
                  <LogOut size={16} />
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* SIDEBAR FIXA */}
        <aside className="sidebar-container">
          <nav className="space-y-2">
            <Link to="/">
              <MenuItem icon={<LayoutGrid size={20} />} label="Feed" active={location.pathname === '/'} />
            </Link>
            <Link to="/adotar">
              <MenuItem icon={<Heart size={20} />} label="Adotar" active={location.pathname === '/adotar'} />
            </Link>
            <Link to="/meus-pets">
              <MenuItem icon={<Dog size={20} />} label="Meus pets" active={location.pathname === '/meus-pets'} />
            </Link>
            
            <div className="pt-4 mt-4 border-t border-gray-800/50">
              <Link to="/sobre">
                <MenuItem icon={<Info size={20} />} label="Sobre o app" active={location.pathname === '/sobre'} />
              </Link>
              <Link to="/suporte">
                <MenuItem icon={<LifeBuoy size={20} />} label="Suporte" active={location.pathname === '/suporte'} />
              </Link>
            </div>
          </nav>
        </aside>

        {/* CONTEÚDO PRINCIPAL (SCROLLÁVEL) */}
        <main className="feed-container">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/adotar" element={<Adoption />} />
            <Route path="/meus-pets" element={<MyPets />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/configuracoes" element={<SettingsPage />} />
            {/* Redireciona qualquer rota não encontrada para o Feed */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// Componentes Auxiliares
function MenuItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`nav-item ${active ? 'nav-item-active' : ''}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
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

// Export Principal com o Router
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}