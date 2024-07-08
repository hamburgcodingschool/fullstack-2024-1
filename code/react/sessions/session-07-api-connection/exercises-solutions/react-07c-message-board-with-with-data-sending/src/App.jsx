import { useState, useEffect } from 'react';
import { uid } from 'uid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllPosts from './components/pages/AllPosts';
import AddPost from './components/pages/AddPost';
import PostDetails from './components/pages/PostDetails';
import NavBar from './components/NavBar';
import './App.css';
import { fetchAllPosts, sendAddPost, sendPostUpdate } from './api';

export default function App() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetchAllPosts();
    const data = await response.json();
    setPosts(data);
  }

  async function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
    await sendAddPost(newItem);
    loadPosts();
  }

  async function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
    await sendPostUpdate(id, updatedItem);
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<AllPosts posts={posts} updatePost={updatePost} />}
          />
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
          <Route
            path="/post/:id"
            element={<PostDetails posts={posts} updatePost={updatePost} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
