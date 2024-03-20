import logo from './logo.svg';
import './App.css';
//import "../node_modules/bootsrap/dist/css/bootsrap.min.css"
//import "/node_modules/bootsrap/dist/js/bootsrap.min.js"
import AddRoom from './components/room/AddRoom';
import ExistingRooms from './components/room/ExistingRooms';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditRoom from './components/room/EditRoom';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />



          </Routes>
        </Router>
      </main>

    </>
  )

}

export default App;
