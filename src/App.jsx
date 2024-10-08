import Navbar from './assets/components/NavBar/Navbar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <div ClassName="App">
      <Navbar/>
      <ItemListContainer saludo={'Aquí podrás encontrar el partido de tu equipo favorito'}/>
    </div>
  )
}

export default App
