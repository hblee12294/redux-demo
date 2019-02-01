import React, {Component} from 'react'

import Header from './container/Header'
import MainSection from './container/MainSection'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
      </div>
    )
  }
}

export default App
