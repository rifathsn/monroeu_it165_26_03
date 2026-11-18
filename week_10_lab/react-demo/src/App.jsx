import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeings from './components/Greetings'
import ProductCard from './components/ProductCard'
import { Card } from './components/Card'
import Products from './components/Products'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Greeings/>
      <ProductCard title="Product 1" price={19.99} />
      <ProductCard title="Product 2" price={29.99} />
      <ProductCard title="Product 3" price={39.99} />
      <Card title="Card Title">
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card 1.</p>
        <p>This is some content inside the card 2.</p>
        <p>This is some content inside the card 3.</p>
        <p>This is some content inside the card 4.</p>
        <p>This is some content inside the card 5.</p>
        <p>This is some content inside the card 6.</p>
      </Card>
      <Products />
    </>
  )
}

export default App
