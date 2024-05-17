import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage/Homepage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import EditorPage from './pages/EditorPage/EditorPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogPost/:blogPostId" element={<BlogPostPage/>} />
        <Route path="/createPost" element={<EditorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
