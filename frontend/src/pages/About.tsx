export function About() {
  return (
    <div className="w-full max-w-3xl bg-white p-10 rounded-4xl shadow-sm border border-gray-100">
      <h2 className="text-3xl font-bold text-brand-dark mb-6">Sobre o <span className="text-brand-pink italic">Adottami</span></h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        O Adottami nasceu da vontade de conectar pessoas que amam animais a pets que precisam de um lar. 
        Nossa plataforma não é apenas um site de adoção, mas uma rede social onde a comunidade pode 
        compartilhar momentos, dicas e histórias de superação.
      </p>
      
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div className="space-y-2">
          <h4 className="font-bold text-brand-pink text-xl">Missão</h4>
          <p className="text-sm text-gray-500">Dar visibilidade a todos os pets, especialmente aqueles com condições especiais.</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-brand-pink text-xl">Visão</h4>
          <p className="text-sm text-gray-500">Ser a maior rede de apoio e proteção animal da América Latina.</p>
        </div>
      </div>
    </div>
  );
}