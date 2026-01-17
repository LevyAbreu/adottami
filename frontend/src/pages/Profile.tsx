export function Profile() {
  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100">
        <div className="h-32 bg-brand-pink"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <img src="https://github.com/shadcn.png" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" alt="Profile" />
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">Editar Perfil</button>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Maria Oliveira</h2>
          <p className="text-gray-500 mb-6 italic">Apaixonada por Golden Retrievers e protetora independente.</p>
          
          <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-6 text-center">
            <div><p className="font-bold text-xl">12</p><p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Posts</p></div>
            <div><p className="font-bold text-xl">450</p><p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Seguidores</p></div>
            <div><p className="font-bold text-xl">2</p><p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Pets</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}