import { Plus, Pencil, Trash2 } from 'lucide-react';

const MY_PETS = [
  { id: 1, name: "Thor", breed: "Golden Retriever", status: "Em casa", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200" },
  { id: 2, name: "Bolinha", breed: "Vira-lata", status: "Para Adoção", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=200" },
];

export function MyPets() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Meus Pets</h2>
          <p className="text-sm text-gray-500">Gerencie os pets que você cadastrou</p>
        </div>
        <button className="bg-brand-pink text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-all">
          <Plus size={20} /> Novo Pet
        </button>
      </div>

      <div className="space-y-4">
        {MY_PETS.map(pet => (
          <div key={pet.id} className="bg-white p-4 rounded-3xl flex items-center gap-4 border border-gray-100 shadow-sm">
            <img src={pet.img} className="w-20 h-20 rounded-2xl object-cover" alt={pet.name} />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{pet.name}</h3>
              <p className="text-sm text-gray-500">{pet.breed}</p>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                pet.status === 'Para Adoção' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
              }`}>
                {pet.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-brand-dark transition-all">
                <Pencil size={18} />
              </button>
              <button className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-all">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}