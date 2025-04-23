import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PostContext from './contexts/PostContext';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Posts from './pages/Posts';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './components/SinglePost';

function App() {
  const [postsData, setPostsData] = useState([]);

  const endpoint = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(endpoint)
      .then(res => {
        setPostsData(res.data);
      });
  }, []);


  return (
    <>
      <PostContext.Provider value={postsData}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index path='/' element={<Homepage />} />
              <Route path='/about' element={<About />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/posts/:id' element={<SinglePost />} />
            </Route>
          </Routes >
        </BrowserRouter >
      </PostContext.Provider>
    </>
  );
}

export default App;
