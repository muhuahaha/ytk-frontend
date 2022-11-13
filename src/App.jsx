import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/layouts/Header';
import SidebarNav from './components/layouts/SidebarNav';

import Public from './pages/Public';
import Test from './pages/Test';

import Navigation from './components/layouts/Navigation';
import NotFoundPage from './pages/NotFound';

function App() {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Header menuState={menuState} setMenuState={setMenuState} />
      <SidebarNav menuState={menuState} setMenuState={setMenuState} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="test" element={<Test />} />
          <Route path="notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
