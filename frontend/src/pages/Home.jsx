import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
  Rss,
  FolderGit2,
  Video,
  Image as ImageIcon,
  Smile,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Search,
  MessageSquare,
  Lock
} from 'lucide-react';

const Home = () => {
  // Sample Data for Projects (to render as sponsored / cards)
  const featuredProjects = [
    {
      title: "Dev Portfolio & Blog CMS",
      description: "Hệ thống portfolio kết hợp CMS quản lý bài viết. Tích hợp AI Gemini để tự động tóm tắt bài viết, tạo SEO tag và sinh nội dung liên quan.",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
      github: "https://github.com",
      demo: "https://example.com",
      accentColor: "from-indigo-500 to-purple-600"
    },
    {
      title: "TaskFlow Planner",
      description: "Ứng dụng quản lý dự án Kanban cho team lập trình. Hỗ trợ cập nhật real-time trạng thái công việc.",
      tech: ["React", "Express.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      accentColor: "from-cyan-500 to-blue-600"
    }
  ];

  // Sample Data for Blog Posts (to render as Facebook Posts in Center column)
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Nguyễn Đức Hùng",
      role: "Tác giả",
      date: "23 Tháng 6 lúc 15:47",
      privacy: "public",
      title: "Tối ưu hóa Docker Multi-stage Build cho ứng dụng React",
      excerpt: "Bạn đã từng đau đầu vì Docker image cho ứng dụng React quá nặng? Bằng cách sử dụng Nginx Alpine làm máy chủ tĩnh và phân tách quá trình build thành multi-stage, mình đã nén kích thước image từ 900MB xuống chỉ còn vỏn vẹn 30MB! Điều này giúp tăng tốc độ triển khai CI/CD lên gấp 10 lần. Dưới đây là bài chia sẻ chi tiết...",
      tags: ["DevOps", "Docker", "Nginx"],
      likes: 58,
      comments: 14,
      isLiked: false,
      readTime: "5 phút đọc",
      slug: "docker-multistage-react"
    },
    {
      id: 2,
      author: "Nguyễn Đức Hùng",
      role: "Tác giả",
      date: "18 Tháng 6 lúc 09:30",
      privacy: "public",
      title: "Tích hợp Gemini API vào ứng dụng Node.js: Hướng dẫn từ A-Z",
      excerpt: "Một tính năng cực kỳ xịn sò trên blog CMS này là khả năng tự động tóm tắt bài viết bằng AI. Mình đã sử dụng SDK Google Gen AI của Gemini Pro để tự động phân tích bài viết markdown mới đăng, trích xuất 5 từ khóa SEO quan trọng nhất và tạo đoạn tóm tắt meta description chỉ trong 2 giây. Dev tiện tay bấm một nút là xong, không cần nhập thủ công nữa!",
      tags: ["AI", "Gemini", "NodeJS"],
      likes: 42,
      comments: 9,
      isLiked: false,
      readTime: "7 phút đọc",
      slug: "gemini-api-nodejs-guide"
    },
    {
      id: 3,
      author: "Nguyễn Đức Hùng",
      role: "Tác giả",
      date: "12 Tháng 6 lúc 14:15",
      privacy: "public",
      title: "Tìm hiểu State Machine trong quản lý luồng bài viết (Draft/Publish)",
      excerpt: "Khi làm CMS, quản lý trạng thái bài viết là phần rất dễ lỗi nếu không thiết kế chặt chẽ. Mình đã thiết kế MongoDB Schema tách biệt rõ ràng publishedAt và updatedAt kết hợp State Machine: Bản nháp (Draft) -> Đang duyệt (Review) -> Đã xuất bản (Published). API công khai chỉ lấy các bài có trạng thái Published, còn Admin thì quản lý toàn bộ. Cách tiếp cận này giúp bảo mật dữ liệu tuyệt đối.",
      tags: ["Backend", "MongoDB", "Design Patterns"],
      likes: 31,
      comments: 6,
      isLiked: false,
      readTime: "4 phút đọc",
      slug: "cms-draft-publish-state-machine"
    }
  ]);

  // Skill category data (for Left Sidebar shortcuts)
  const skills = [
    "React (Hooks, Context)",
    "Tailwind CSS",
    "Node.js & Express",
    "MongoDB & SQL",
    "Docker & CI/CD",
    "Gemini AI API"
  ];

  // Friends list (Right Sidebar)
  const onlineFriends = [
    { name: "Gemini AI Assistant", avatar: "🤖", status: "Online", isBot: true, desc: "AI Assistant" },
    { name: "Tech Lead - DevCMS", avatar: "👨‍💻", status: "Online", isBot: false, desc: "Đồng nghiệp" },
    { name: "Khách hàng Tiềm năng", avatar: "💼", status: "Online", isBot: false, desc: "Đối tác" },
    { name: "Recruiter HR", avatar: "👩‍💼", status: "Away", isBot: false, desc: "Nhà tuyển dụng" },
    { name: "Lập trình viên Cộng đồng", avatar: "🧑‍💻", status: "Online", isBot: false, desc: "Mạng lưới" }
  ];

  const handleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6">
      
      {/* 3-COLUMN LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ================= LEFT SIDEBAR (4 Columns) ================= */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
          
          {/* Profile Card */}
          <div className="glass rounded-2xl overflow-hidden shadow-xl border border-slate-900">
            {/* Cover photo placeholder */}
            <div className="h-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 relative"></div>
            
            {/* Avatar & Profile */}
            <div className="px-4 pb-5 relative flex flex-col items-center -mt-10 text-center">
              <div className="w-20 h-20 rounded-full border-4 border-slate-950 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg relative">
                <span>NH</span>
                <span className="absolute bottom-0 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
              </div>
              
              <h2 className="mt-3 font-extrabold text-lg text-slate-100 flex items-center space-x-1.5">
                <span>Nguyễn Đức Hùng</span>
              </h2>
              <p className="text-xs text-indigo-400 font-semibold tracking-wide">@hungdev · Fullstack Developer</p>
              
              <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-[220px]">
                "Đam mê xây dựng hệ thống sạch, tối ưu Docker, viết blog chia sẻ & tích hợp Gemini AI."
              </p>
            </div>
            
            {/* Detail Stats */}
            <div className="border-t border-slate-900/60 p-4 space-y-3.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2.5">
                <Briefcase className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Lập trình tại <strong className="text-slate-200">DevCMS Studio</strong></span>
              </div>
              <div className="flex items-center space-x-2.5">
                <GraduationCap className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Học CNTT tại <strong className="text-slate-200">Đại học Bách Khoa</strong></span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Sống tại <strong className="text-slate-200">Hà Nội, Việt Nam</strong></span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Rss className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Có <strong className="text-slate-200">{posts.length} bài viết</strong> được chia sẻ</span>
              </div>
            </div>
          </div>

          {/* Shortcuts / Tech Stack Card */}
          <div className="glass p-4 rounded-2xl shadow-xl border border-slate-900 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Phím tắt / Kỹ năng chính</span>
            </h3>
            
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-350 border border-slate-800/80 rounded-lg text-xs font-medium cursor-pointer transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-2 border-t border-slate-900/60 space-y-2 text-xs">
              <a href="#projects" className="block text-slate-400 hover:text-indigo-400 transition-colors flex items-center justify-between">
                <span>Dự án chính của tôi</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <Link to="/admin" className="block text-slate-400 hover:text-indigo-400 transition-colors flex items-center justify-between">
                <span>CMS Admin Dashboard</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </aside>

        {/* ================= MAIN COLUMN FEED (6 Columns) ================= */}
        <main className="lg:col-span-6 space-y-6">
          
          {/* Mock Create Post Box */}
          <div className="glass p-4 rounded-2xl shadow-xl border border-slate-900 space-y-3.5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                <span>NH</span>
              </div>
              <div className="flex-grow bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 rounded-full px-4 py-2.5 text-slate-400 text-sm cursor-pointer transition-colors">
                Hùng ơi, bạn đang nghĩ gì thế? Chia sẻ kiến thức mới...
              </div>
            </div>
            
            <div className="border-t border-slate-900/60 pt-3 flex items-center justify-between text-xs text-slate-400">
              <button className="flex items-center space-x-2 py-2 px-3 hover:bg-slate-900 rounded-xl transition-colors font-medium">
                <Video className="w-4 h-4 text-rose-500" />
                <span>Video trực tiếp</span>
              </button>
              <button className="flex items-center space-x-2 py-2 px-3 hover:bg-slate-900 rounded-xl transition-colors font-medium">
                <ImageIcon className="w-4 h-4 text-emerald-500" />
                <span>Ảnh/Video</span>
              </button>
              <button className="flex items-center space-x-2 py-2 px-3 hover:bg-slate-900 rounded-xl transition-colors font-medium">
                <Smile className="w-4 h-4 text-amber-500" />
                <span>Cảm xúc/Hoạt động</span>
              </button>
            </div>
          </div>

          {/* MAIN BLOG FEED */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="glass p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-900 space-y-4 hover:border-slate-800 transition-colors"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      <span>NH</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-sm text-slate-200 hover:underline cursor-pointer">
                          {post.author}
                        </span>
                        <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md text-[10px] font-bold uppercase">
                          {post.role}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-500 pt-0.5">
                        <span>{post.date}</span>
                        <span>·</span>
                        {post.privacy === "public" ? (
                          <Globe className="w-3.5 h-3.5 text-slate-550" />
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-550" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <button className="p-2 hover:bg-slate-900 rounded-full text-slate-500 hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Post Text Description */}
                <p className="text-sm text-slate-350 leading-relaxed font-normal whitespace-pre-line">
                  {post.excerpt}
                </p>

                {/* Facebook-style Shared Link Preview (Standard DevCMS Layout) */}
                <div 
                  className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:bg-slate-900/60 cursor-pointer transition-all duration-300 flex flex-col"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  <div className="h-44 bg-gradient-to-tr from-slate-900 to-slate-950 p-5 flex flex-col justify-between relative border-b border-slate-900">
                    {/* Glowing effect inside preview */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-40"></div>
                    
                    <div className="flex justify-between items-center z-10">
                      <div className="flex items-center space-x-1.5 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <Terminal className="w-3 h-3 text-indigo-400" />
                        <span>MDX Render</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-950/80 border border-slate-800/60 px-2 py-0.5 rounded-md">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="z-10 space-y-2">
                      <div className="flex gap-1.5">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-bold text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 text-xs flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Xem chi tiết bài viết</p>
                      <p className="text-slate-400 font-medium">devcms-blog.vercel.app/{post.slug}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>
                </div>

                {/* Interaction stats info */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1.5 px-1 border-b border-slate-900/60 pb-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white">👍</div>
                    <span className="hover:underline cursor-pointer font-medium">{post.likes} lượt thích</span>
                  </div>
                  <span className="hover:underline cursor-pointer font-medium">{post.comments} bình luận</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold pt-1">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center justify-center space-x-2 py-2 flex-1 rounded-xl hover:bg-slate-900 transition-colors ${
                      post.isLiked ? 'text-indigo-400' : 'hover:text-slate-200'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${post.isLiked ? 'fill-indigo-500/20' : ''}`} />
                    <span>Thích</span>
                  </button>
                  <button 
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                    className="flex items-center justify-center space-x-2 py-2 flex-1 rounded-xl hover:bg-slate-900 hover:text-slate-200 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Bình luận</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-2 flex-1 rounded-xl hover:bg-slate-900 hover:text-slate-200 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Chia sẻ</span>
                  </button>
                </div>

              </article>
            ))}
          </div>

          {/* Static section representing all portfolio projects */}
          <section id="projects" className="glass p-5 rounded-2xl shadow-xl border border-slate-900 space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-slate-900/60">
              <h3 className="font-extrabold text-base text-slate-100 flex items-center space-x-2">
                <FolderGit2 className="w-5 h-5 text-indigo-400" />
                <span>Dự án lập trình nổi bật</span>
              </h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:underline">Tất cả</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProjects.map((project, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors group">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-850">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ================= RIGHT SIDEBAR (3 Columns) ================= */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
          
          {/* Sponsored/Ad-like Cards (Featured product showcase) */}
          <div className="glass p-4 rounded-2xl shadow-xl border border-slate-900 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Được tài trợ / Quảng bá</h3>
            
            <div className="space-y-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3.5 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg relative overflow-hidden">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1 flex-grow">
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-indigo-400 transition-colors leading-tight">Hire Me! Freelance / Fulltime</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">Có kinh nghiệm triển khai hệ thống an toàn và tối ưu.</p>
                  <p className="text-[9px] text-slate-500 font-semibold">devcms.vercel.app</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contacts / Friends list */}
          <div className="glass p-4 rounded-2xl shadow-xl border border-slate-900 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Người liên hệ (Bạn bè)</h3>
              <div className="flex space-x-1 text-slate-500">
                <Search className="w-3.5 h-3.5 hover:text-slate-350 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-3.5">
              {onlineFriends.map((friend, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8.5 h-8.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-base relative shadow-inner">
                      <span>{friend.avatar}</span>
                      {friend.status === "Online" ? (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                      ) : (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-slate-950"></span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{friend.name}</p>
                      <p className="text-[9px] text-slate-500">{friend.desc}</p>
                    </div>
                  </div>

                  {friend.isBot && (
                    <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded text-[9px] font-bold">
                      BOT AI
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Box Quick Button */}
            <div className="pt-2 border-t border-slate-900/60">
              <a 
                href="mailto:contact@example.com" 
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-center text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Gửi tin nhắn liên hệ</span>
              </a>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Home;
