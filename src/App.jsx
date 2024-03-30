import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/layout';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';


function App() {
  

  return (
    <Router>
      <Routes>
       <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route index  element={<Expenses />} />
        </Route> 
      </Routes>  
    </Router>
  )
}

export default App
