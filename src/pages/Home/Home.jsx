import React from 'react'

import { Container } from '../../layouts'

import threadsStore from 'store/threadsStore'

import fetchData from 'utils/fetch'

const store = new threadsStore()
console.log(store)

const handleFetchData = () => {
  console.log('start')
  fetchData()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))
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
