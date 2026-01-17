import { Heart, MessageCircle, Send } from 'lucide-react';

const POSTS_MOCK = [
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
];

export function Feed() {
  return (
    <div className="flex flex-col items-center">
      {POSTS_MOCK.map((post) => (
        <div key={post.id} className="post-card">
          <div className="p-4 flex items-center gap-3">
            <img src={post.avatar} className="w-10 h-10 rounded-full" alt={post.user} />
            <span className="font-bold text-gray-800">{post.user}</span>
          </div>

          <div className="px-4">
            <img src={post.image} className="post-image" alt="Pet" />
          </div>

          <div className="p-5">
            <div className="flex items-center gap-5 text-gray-600 mb-4">
              <div className="flex items-center gap-1"><Heart size={22} /><span className="text-sm font-bold">{post.likes}</span></div>
              <div className="flex items-center gap-1"><MessageCircle size={22} /><span className="text-sm font-bold">{post.comments}</span></div>
              <div className="flex items-center gap-1"><Send size={22} /><span className="text-sm font-bold">{post.shares}</span></div>
              <span className="ml-auto text-[10px] text-gray-400 uppercase tracking-wider">{post.time}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold mr-2 text-gray-900">{post.handle}</span> 
              {post.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}