import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayouts from './layouts/MainLayouts';
import NotFound from './pages/NotFound';
import './styles/global.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App