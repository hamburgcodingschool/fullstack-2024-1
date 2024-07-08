import { uid } from 'uid';
import { useLocalStorage } from '@uidotdev/usehooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllPosts from './components/pages/AllPosts';
import AddPost from './components/pages/AddPost';
import PostDetails from './components/pages/PostDetails';
import NavBar from './components/NavBar';
import './App.css';

const initialPosts = [
  {
    id: '1',
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
    votes: 0,
  },
  {
    id: '2',
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
    votes: 0,
  },
  {
    id: '3',
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
    votes: 0,
  },
];

export default function App() {
  const [posts, setPosts] = useLocalStorage('posts', initialPosts);

  function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
  }

  function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

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
