import React from 'react'
import Style from './App.module.scss'
import M3Style from './theme/Material3Theme.module.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div className={Style.App}>
      <div className={M3Style.MaterialYou + ' ' + M3Style.Green}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line
    interface IntrinsicElements {
      [tag: string]: any
    }
  }
}
