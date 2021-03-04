import React, { Component } from 'react'

export default class Fim extends Component {

    constructor(){
          super()
          this.state = {date: new Date()}
          console.log("Fui iniciado")
      }

      componentDidMount(){
          console.log("Fui montado")
      }

      componentWillUnmount(){
        console.log("vou ser desmontando")
      }

      render() {
          console.log("Fui renderizado")
          return (
              <div>
                    <></>
              </div>
          )
      }
}
