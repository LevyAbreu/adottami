import { useState } from 'react';
import { MapPin, Info, Dog, Cat, Bird, Star, Filter, Heart } from 'lucide-react';

// Mock de dados atualizado e consistente
const PETS_ADOPTION = [
  { 
    id: 1, 
    name: "Bolinha", 
    species: "cachorro", 
    breed: "Vira-lata", 
    age: "2 anos", 
    city: "São Paulo", 
    special: false, 
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500" 
  },
  { 
    id: 2, 
    name: "Luna", 
    species: "gato", 
    breed: "Siamês",
    age: "5 meses",
    specialCondition: "Cegueira parcial", 
    city: "Rio de Janeiro", 
    special: true,
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500" 
  },
  { 
    id: 3, 
    name: "Paco", 
    species: "papagaio", 
    breed: "Papagaio-verdadeiro", 
    age: "1 ano", 
    city: "Curitiba", 
    special: false, 
    img: "" 
  },
  { 
    id: 4, 
    name: "Thor", 
    species: "cachorro", 
    breed: "Golden", 
    age: "3 anos", 
    city: "São Paulo", 
    specialCondition: "Amputado (pata traseira)",
    special: true, 
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=500" 
  },
];

export function Adoption() {
  const [filter, setFilter] = useState('todos');

  // Lógica corrigida: Verifica a flag 'special' ou se existe uma 'specialCondition'
  const filteredPets = PETS_ADOPTION.filter(pet => {
    if (filter === 'todos') return true;
    if (filter === 'especiais') return pet.special || !!pet.specialCondition;
    return pet.species === filter;
  });

  return (
    <div className="w-full max-w-5xl animate-in fade-in duration-500">
      {/* HEADER DA PÁGINA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Pets para Adoção</h2>
          <p className="text-sm text-gray-500">Encontre seu novo melhor amigo</p>
        </div>

        {/* BARRA DE FILTROS */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
          <Filter size={16} className="ml-2 text-gray-400" />
          <FilterButton label="Todos" active={filter === 'todos'} onClick={() => setFilter('todos')} />
          <FilterButton label="Cães" active={filter === 'cachorro'} onClick={() => setFilter('cachorro')} icon={<Dog size={14}/>} />
          <FilterButton label="Gatos" active={filter === 'gato'} onClick={() => setFilter('gato')} icon={<Cat size={14}/>} />
          <FilterButton label="Pássaros" active={filter === 'papagaio'} onClick={() => setFilter('papagaio')} icon={<Bird size={14}/>} />
          <FilterButton 
            label="Especiais" 
            active={filter === 'especiais'} 
            onClick={() => setFilter('especiais')} 
            icon={<Heart size={14} fill={filter === 'especiais' ? "white" : "none"} />} 
          />
        </div>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map(pet => (
          <div key={pet.id} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div className="relative">
              <img 
                src={pet.img} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={pet.name} 
              />
              
              {/* Badge de Espécie */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                {pet.species === 'cachorro' && <Dog size={14} className="text-blue-500" />}
                {pet.species === 'gato' && <Cat size={14} className="text-orange-500" />}
                {pet.species === 'papagaio' && <Bird size={14} className="text-green-500" />}
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">{pet.species}</span>
              </div>

              {/* Badge Informativa de Condição Especial */}
              {pet.specialCondition && (
                <div className="absolute bottom-4 left-4 right-4 bg-brand-pink/90 backdrop-blur-md text-white px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="currentColor" className="animate-pulse" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold leading-tight opacity-80">Condição Especial</span>
                      <span className="text-xs font-semibold leading-tight">{pet.specialCondition}</span>
                    </div>
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xl font-bold text-gray-800">{pet.name}</span>
                <span className="text-xs font-semibold text-brand-pink bg-pink-50 px-2 py-1 rounded-lg">
                  {pet.age || 'Idade desconhecida'}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{pet.breed}</p>
              
              <div className="flex items-center gap-1 text-gray-400 text-xs mb-5">
                <MapPin size={14} /> {pet.city}
              </div>

              <button className="w-full bg-brand-dark text-white py-3 rounded-2xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 text-sm">
                <Info size={18} /> Conhecer história
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredPets.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <p className="text-gray-500 italic">Nenhum amiguinho encontrado com esse filtro. 🐾</p>
        </div>
      )}
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

function FilterButton({ label, active, onClick, icon }: FilterButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
        active 
        ? 'bg-brand-dark text-white shadow-md' 
        : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}