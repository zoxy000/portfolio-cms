import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Mock routes for future development so clicking menu links won't break */}
          <Route path="/blog" element={
            <div className="max-w-7xl mx-auto px-4 py-24 text-center min-h-[50vh] flex flex-col justify-center items-center">
              <h2 className="text-3xl font-extrabold mb-4 text-gradient sm:text-4xl">Blog cá nhân</h2>
              <p className="text-slate-400 max-w-md">Trang danh sách bài viết chia sẻ kinh nghiệm đang được xây dựng ở các bước tiếp theo.</p>
            </div>
          } />
          <Route path="/blog/:slug" element={
            <div className="max-w-3xl mx-auto px-4 py-24 min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-4 text-gradient leading-tight">Chi tiết bài viết</h2>
              <p className="text-slate-400">Trang chi tiết bài viết Markdown/MDX đang được xây dựng ở các bước tiếp theo.</p>
            </div>
          } />
          <Route path="/admin" element={
            <div className="max-w-7xl mx-auto px-4 py-24 text-center min-h-[50vh] flex flex-col justify-center items-center">
              <h2 className="text-3xl font-extrabold mb-4 text-gradient-cyan sm:text-4xl">CMS Admin Dashboard</h2>
              <p className="text-slate-400 max-w-md">Trang dashboard quản lý bài đăng, tải lên media và trạng thái nháp đang được xây dựng.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;