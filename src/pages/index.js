// Step 1: Import React
import * as React from 'react'
import NavBar from './navbar.js'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Kaleb Kohn</h1>
      <NavBar/>
      <p>Computer Science Major UW-Madison</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Kaleb's Website</title>

// Step 3: Export your component
export default IndexPage