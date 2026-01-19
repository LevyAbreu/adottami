import { useState } from 'react';
import { Image, BarChart2, Smile, Send, MoreHorizontal, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Post {
  id: number;
  user: string;
  handle: string;
  avatar: string;
  image: string | null;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}

export function Feed() {
  const { user } = useAuth(); // Puxa o usuário logado do contexto
  const [postText, setPostText] = useState('');
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Maria",
      handle: "Maria168",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
      caption: "Banho e tosa do nosso bebê",
      likes: 500,
      comments: 150,
      shares: 200,
      time: "20 minutos atrás"
    }, 
    {
      id: 2,
      user: "Lucas",
      handle: "Lucas123",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000",
      caption: "Olha esse modelo",
      likes: 500,
      comments: 0,
      shares: 100,
      time: "25 minutos atrás"
    }, 
  ]);

  const handlePublish = () => {
    if (!postText.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      user: user.name, // Usa o nome do contexto
      handle: user.handle, // Usa o handle do contexto
      avatar: user.avatar, // Usa o avatar do contexto
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
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* CARD DE CRIAÇÃO DE POST */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <div className="flex gap-4 mb-4">
          <img 
            src={user.avatar} 
            className="w-12 h-12 rounded-full border-2 border-brand-pink/10 object-cover" 
            alt="Sua foto" 
          />
          <textarea 
            placeholder={`O que seu pet está aprontando hoje, ${user.name.split(' ')[0]}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 bg-gray-50 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-brand-pink/20 transition-all resize-none h-24"
          />
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex gap-1 md:gap-2">
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all"><Image size={20} /></button>
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all"><BarChart2 size={20} /></button>
            <button className="p-2.5 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-xl transition-all"><Smile size={20} /></button>
          </div>

          <button 
            onClick={handlePublish}
            disabled={!postText.trim()}
            className="bg-brand-pink text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-all disabled:opacity-50 shadow-lg shadow-pink-100"
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
            <div className="p-5 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={post.avatar} className="w-11 h-11 rounded-full border-2 border-gray-50" alt={post.user} />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm leading-none mb-1">{post.user}</h4>
                  <p className="text-[11px] text-gray-400 font-medium">@{post.handle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-gray-300 uppercase">{post.time}</span>
                <button className="text-gray-300 hover:text-gray-600"><MoreHorizontal size={20} /></button>
              </div>
            </div>

            {post.image && (
              <div className="px-5">
                <img src={post.image} className="w-full h-auto rounded-3xl object-cover max-h-[500px]" alt="Post" />
              </div>
            )}

            <div className="p-6">
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                <span className="font-bold mr-2 text-brand-dark">@{post.handle}</span> 
                {post.caption}
              </p>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 text-gray-400 hover:text-brand-pink transition-all">
                  <Heart size={20} className={post.likes > 0 ? 'fill-brand-pink text-brand-pink' : ''} />
                  <span className="text-xs font-black">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500"><MessageCircle size={20} /> <span className="text-xs font-black">{post.comments}</span></button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 ml-auto"><Share2 size={20} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}