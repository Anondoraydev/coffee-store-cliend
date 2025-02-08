import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData();
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-20'>

        <h1 className=' text-center font-bold text-6xl text-orange-500'>Hot cold Coffee: {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-4 my-20'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id} coffee={coffee}>
            </CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
