import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Post } from './pages/Post.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/:id" element={<Post/>} />
    </Routes>
  </Router>
)
