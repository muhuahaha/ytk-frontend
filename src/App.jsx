import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './pages/Public';
import Navigation from './components/layouts/Navigation';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
