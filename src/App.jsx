import './App.css'
import Juego from './componentes/Juego'
import Principal from "./componentes/Principal"
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Link to="/"/><Link/>
          <Link to="/juego"/><Link/>
            <div>
                <Routes>
                    <Route path='/' element={<Principal/>} />
                    <Route path='/juego' element={<Juego/>} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
