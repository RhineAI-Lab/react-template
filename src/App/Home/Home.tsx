import React from 'react'
import Style from './Home.module.scss'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'

function Home() {
  return (
    <div className={Style.Home}>
      <div className={Style.holder}>
        <md-outlined-button>Back</md-outlined-button>
        <span className={Style.space}/>
        <md-filled-button>Next</md-filled-button>
      </div>
    </div>
  )
}

export default Home


