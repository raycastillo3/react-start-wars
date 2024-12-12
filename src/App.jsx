import './App.css';
import StarshipCard from '../components/StarshipCard';
import { Navbar} from '../components/Navbar';
import {GetAllStarships} from '../services/sw-api'
export default function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <GetAllStarships />
    </div>
    </>
  )
}
