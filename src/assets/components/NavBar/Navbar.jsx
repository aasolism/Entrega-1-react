import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
<nav>
  <h2>Compra de Entradas</h2>
  <div>
    <button>Campeonato Itaú</button>
    <button>Ascenso 1B</button>
    <button>La Liga 2D</button>
  </div>
  <CartWidget/>
</nav>  )
}

export default Navbar