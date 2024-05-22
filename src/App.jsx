import {BarImage} from './assets/components/BarImage'
import {Header} from './assets/components/Header'
import { SectionLocation } from './assets/components/SectionLocation'
import { SectionLinks } from './assets/components/SectionLinks'
import { Main } from './assets/components/Main'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

export const App = () => {

  return (
    <Router>
      <>
        <BarImage />
        <Header />
        <SectionLocation />
        {/* <SectionLinks /> */}
        <Main />
      </>
    </Router>
  )
}

