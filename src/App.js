import React, {Component} from 'react'
import Toolbar from './Toolbar.js'
import Image from './Image.js'

let size = 50

class App extends Component {
  constructor () {
    super()
      this.state = {
      size: 100
  }
}

  makeBigger = () => {
    const newSize = this.state.size + 10
    this.setState ({
      size: newSize
    })
  }

  makeSmaller = () => {
    let newSize = this.state.size - 10 
    if (newSize < 0) {
      newSize = 1
    }
    this.setState({
      size: newSize
    })
  }

  render () {
    return ( 
      <>
        <Image size={this.state.size}/> 
        <Toolbar makeBigger={this.makeBigger} makeSmaller={this.makeSmaller}/>
      </>
    )
  }
}

export default App