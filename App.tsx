import './index.scss'
import{Home}from './screens/Home'
import { Ressources } from './screens/Ressources';
import {Routes,Route, NavLink} from 'react-router-dom'
import { Contact } from './screens/Contact';


function App() {
  return (
      <div className='container mt-10'>
        <header className={'flex justify-between items-center mb-5'}>
          <img className='w-10' src="images/nature.jpg" alt="nature" /> 
          
          <nav className='flex justify-end'>
            <NavLink className='font-extrabold mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}to='/'>Accueil</NavLink><br></br>
            <NavLink className='mr-3'to='/ressources'style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}>Ressources</NavLink><br></br>
            <NavLink className='mr-3'to='/contact'style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}>Contact</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/ressources' element={ <Ressources/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>

        <footer>

        </footer>
        
      </div>
  );
}

export default App;
