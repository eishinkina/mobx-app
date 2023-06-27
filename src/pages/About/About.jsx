import React, { useState } from 'react'

import { Container } from '../../layouts'
///store


import { observer } from "mobx-react-lite";

// console.log(store.name)

const AboutPage = observer(() => {

  return (
    <Container>
      <h1 className='ui-title-1'>About Page</h1>
    </Container>
  )
})

export default AboutPage
