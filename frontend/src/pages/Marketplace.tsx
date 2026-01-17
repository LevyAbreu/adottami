import { ShoppingCart, Star } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Ração Premium Cães Adultos", price: "189,90", category: "Alimentação", rating: 4.8, img: "https://images.unsplash.com/photo-1589924691106-073b19f593ad?q=80&w=400" },
  { id: 2, name: "Arranhador para Gatos King", price: "124,00", category: "Brinquedos", rating: 4.5, img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=400" },
  { id: 3, name: "Cama Nuvem Ultra Soft", price: "210,00", category: "Acessórios", rating: 5.0, img: "https://images.unsplash.com/photo-1541599540903-21b1296113c9?q=80&w=400" },
  { id: 4, name: "Brinquedo Mordedor Interativo", price: "45,90", category: "Brinquedos", rating: 4.2, img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400" },
];

export function Marketplace() {
  return (
    <div className="w-full max-w-6xl animate-in fade-in duration-500">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Marketplace Pet</h2>
          <p className="text-sm text-gray-500">Tudo o que seu melhor amigo precisa</p>
        </div>

        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
          <button className="px-4 py-1.5 rounded-xl text-xs font-bold bg-brand-dark text-white">Todos</button>
          <button className="px-4 py-1.5 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all">Ração</button>
          <button className="px-4 py-1.5 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all">Brinquedos</button>
          <button className="px-4 py-1.5 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all">Higiene</button>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src={product.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={product.name} />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-brand-pink shadow-sm"></div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                <Star size={12} fill="currentColor" />
                <span className="text-[10px] font-bold text-gray-400">{product.rating}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1 truncate">{product.name}</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-4">{product.category}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block leading-none">R$</span>
                  <span className="text-lg font-black text-brand-dark">{product.price}</span>
                </div>
                <button className="bg-brand-pink text-white p-2.5 rounded-xl hover:bg-pink-600 transition-colors shadow-lg shadow-pink-100">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}