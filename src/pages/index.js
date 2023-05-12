
import * as React from 'react'
import NavBar from './navbar.js'

const IndexPage = () => {
  return (
    <main>
      <h1>Kaleb Kohn</h1>
      <NavBar/>
      <p>Computer Science Major UW-Madison</p>
    </main>
  )
}

export const Head = () => <title>Kaleb's Website</title>

export default IndexPage