import logo from './logo.svg';
import './App.css';
//import "../node_modules/bootsrap/dist/css/bootsrap.min.css"
//import "/node_modules/bootsrap/dist/js/bootsrap.min.js"
import AddRoom from './components/room/AddRoom';
import ExistingRooms from './components/room/ExistingRooms';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditRoom from './components/room/EditRoom';
import Home from './components/home/Home';
import { Navbar } from 'react-bootstrap';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />



          </Routes>
        </Router>
        <Footer />
      </main>

    </>
  )

}

export default App;
