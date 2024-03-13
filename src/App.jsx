
import { useState } from 'react'
import './App.css'
import { Courses } from './componant/Courses/Courses'
import { CoursesDetails } from './componant/CoursesDetails/CoursesDetails'
import Header from './componant/Header/Header'

function App() {
const [carts, setCarts] = useState([]);
const [hour, setHour] = useState(0);
const [price, setPrice] = useState(0);

  const handleSelectBtn = (course, time, priceItem) =>{
   const newCart = [...carts, course];
   setCarts(newCart)
    setHour(time + hour);
    setPrice(price + priceItem)
  }

  return (
    <>
      <Header></Header>
     <div className='flex gap-4 bg-gray-200'>
      <Courses handleSelectBtn={handleSelectBtn}></Courses>
      <CoursesDetails data={carts} time={hour} price={price}></CoursesDetails>
     </div>
    </>
  )
}

export default App
