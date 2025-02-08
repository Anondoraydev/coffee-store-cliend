import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Coffee from './components/Coffee'

function App() {
  const coffees = useLoaderData();
  const [count, setCount] = useState(0)

  return (
    <>
       
      <h1>Hot cold Coffee :{coffees.length}</h1>
       {
        coffees.map(coffee=><CoffeeCard 
          key={coffee._id}>
          coffee={Coffee}
          </CoffeeCard>)
       }
    </>
  )
}

export default App
