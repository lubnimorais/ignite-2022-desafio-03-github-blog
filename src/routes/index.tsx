import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { PostPage } from '../pages/Post';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export { Router };
