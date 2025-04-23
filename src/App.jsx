import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Posts from './pages/Posts';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
