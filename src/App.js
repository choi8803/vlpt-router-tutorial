import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import NavigateSample from './components/NavigateSample';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/navigate">예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<NavigateSample />} />
        <Route path="/*" element={<h1>이 페이지는 존재하지 않습니다. - {navigate.path}</h1>} />
      </Routes>
    </div>
  );
}

export default App;
