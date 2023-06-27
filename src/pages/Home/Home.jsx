import React from 'react'

import { Container } from '../../layouts'

import threadsStore from 'store/threadsStore'

import fetchReddit from 'utils/fetchReddit'

const store = new threadsStore()
// console.log(store)

const HomePage = () => {
  fetchReddit
    .get()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))

  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
    </Container>
  )
}

export default HomePage
