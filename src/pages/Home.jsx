import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Morethan from '../Components/Morethan/Morethan.jsx'
import Servicess from '../Components/Servicess/Servicess.jsx'
import Type from '../Components/Type/Type.jsx'
import BookNow from '../Components/BookNow/BookNow.jsx'

const Home = () => {
  return (
    <div className='absolute top-0 left-0'>
      <Header />
      <Morethan />
      <Servicess />
      <BookNow />
      <Type />
    </div>
  )
}

export default Home
