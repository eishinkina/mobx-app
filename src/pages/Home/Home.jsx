import React from 'react'

import { Container } from '../../layouts'

import  threadsStore  from 'store/threadsStore'


const store = new threadsStore()
console.log(store)

const HomePage = () => {
  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
    </Container>
  )
}

export default HomePage
