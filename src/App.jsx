//import all the components we use
import About from './components/About/About';
import React from 'react'
import './App.css'
import People from './components/People/People'
import Navbar from './components/Navbar/Navbar';
import Degrees from './components/Degrees/Degrees';
import Minors from './components/Minors/Minors';
import Employment from './components/Employment/Employment';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      {/* show the components in the order we want */}
      <Navbar />
      {/* gave name attribute to components for navigation to send you to the desired section */}
      <About name="about"/>
      <Degrees name="degrees"/>
      <Minors name="minors"/>
      <Employment name="employment"/>
      <People name="people"/>
      <Footer />
    </>
  )
}

export default App
