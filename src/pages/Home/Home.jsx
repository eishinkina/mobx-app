import React from 'react'

import { Container } from '../../layouts'

import threadsStore from 'store/threadsStore'

const store = new threadsStore()
console.log(store)

const handleFetchData = () => {
  console.log('running')
  fetch('https://www.reddit.com/r/reactjs.json')
    .then((res) => res.json())
    .then((json) => console.log(json))
}


const HomePage = () => {

  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
      <button onClick={handleFetchData}>fetch</button>
    </Container>
  )
}

export default HomePage
