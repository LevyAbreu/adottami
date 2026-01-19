import { useState } from 'react';
import { Image, BarChart2, Smile, Send, MoreHorizontal, Heart, MessageCircle, Share2 } from 'lucide-react';

// 1. Criamos a interface para o Post
interface Post {
  id: number;
  user: string;
  handle: string;
  avatar: string;
  image: string | null; // Aqui dizemos que pode ser string OU nulo
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}

export function Feed() {
  const [postText, setPostText] = useState('');
  
  // 2. Tipamos o useState com a nossa interface <Post[]>
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Maria",
      handle: "Maria168",
      avatar: "https://github.com/shadcn.png",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
      caption: "Banho e tosa do nosso bebê 🐾",
      likes: 500,
      comments: 150,
      shares: 200,
      time: "20 minutos atrás"
    },
    {
      id: 2,
      user: "Rex Company",
      handle: "rex_tosa",
      avatar: "https://github.com/diego3g.png",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
      caption: "Olha esse novo cliente! 😍",
      likes: 120,
      comments: 10,
      shares: 5,
      time: "45 minutos atrás"
    }
  ]);

  const handlePublish = () => {
    if (!postText.trim()) return;

    // 3. Agora o TypeScript aceita o image como null sem reclamar
    const newPost: Post = {
      id: Date.now(),
      user: "Maria Oliveira",
      handle: "maria_oliver",
      avatar: "https://github.com/shadcn.png",
      image: null, 
      caption: postText,
      likes: 0,
      comments: 0,
      shares: 0,
      time: "Agora mesmo"
    };

    setPosts([newPost, ...posts]);
    setPostText('');
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* CARD DE CRIAÇÃO DE POST (Ajustado com 2 linhas) */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        {/* Linha 1: Perfil e Textbox */}
        <div className="flex gap-4 mb-4">
          <img 
            src="https://github.com/shadcn.png" 
            className="w-12 h-12 rounded-full border-2 border-brand-pink/10 object-cover" 
            alt="Sua foto" 
          />
          <textarea 
            placeholder="O que seu pet está aprontando hoje?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 bg-gray-50 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-brand-pink/20 transition-all resize-none h-24"
          />
        </div>

        {/* Linha 2: Botões de Ação e Publicar */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex gap-1 md:gap-2">
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all" title="Anexo">
              <Image size={20} />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all" title="Enquete">
              <BarChart2 size={20} />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all" title="Emoji">
              <Smile size={20} />
            </button>
          </div>

          <button 
            onClick={handlePublish}
            disabled={!postText.trim()}
            className="bg-brand-pink text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-100"
          >
            <span className="text-sm">Publicar</span>
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* LISTA DE POSTS */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100 animate-in slide-in-from-top-4 duration-500">
            {/* Cabeçalho do Post */}
            <div className="p-5 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img 
                  src={post.avatar} 
                  className="w-11 h-11 rounded-full border-2 border-gray-50" 
                  alt={post.user} 
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm leading-none mb-1">{post.user}</h4>
                  <p className="text-[11px] text-gray-400 font-medium tracking-tight">@{post.handle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{post.time}</span>
                <button className="text-gray-300 hover:text-gray-600 p-1">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            {/* Conteúdo com Imagem (Se houver) */}
            {post.image && (
              <div className="px-5">
                <img 
                  src={post.image} 
                  className="w-full h-auto rounded-3xl object-cover max-h-[500px] shadow-sm" 
                  alt="Pet Content" 
                />
              </div>
            )}

            {/* Rodapé do Post */}
            <div className="p-6">
              {/* Legenda (Em cima das ações para parecer mais social) */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                <span className="font-bold mr-2 text-brand-dark">@{post.handle}</span> 
                {post.caption}
              </p>

              {/* Estatísticas e Ações */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <button 
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-pink transition-all active:scale-125"
                >
                  <Heart size={20} className={post.likes > 0 && post.id === Date.now() ? 'fill-brand-pink text-brand-pink' : ''} />
                  <span className="text-xs font-black">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-all">
                  <MessageCircle size={20} />
                  <span className="text-xs font-black">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-all ml-auto">
                  <Share2 size={20} />
                  <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider">Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}