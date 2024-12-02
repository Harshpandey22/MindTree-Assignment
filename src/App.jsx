import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthPage from './components/AuthPage'
import Welcome from './components/Welcome'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  )
}

