import React from 'react'
import Style from './App.module.scss'
import M3Style from './theme/material3-theme.module.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import {closeSnackbar, enqueueSnackbar} from "notistack";
import {Slide} from "@mui/material";
import Icon from "../compoments/Icon/Icon";

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

export const tip = (text: string, type = 'default') => {
  const action = <React.Fragment>
    <span className={Style.closeBtn}>
      <Icon size='20px' onClick={e => closeSnackbar()}>close</Icon>
    </span>
  </React.Fragment>
  // type = 'tip'
  enqueueSnackbar(text, {
    variant:type as any,
    autoHideDuration: 1200,
    anchorOrigin: { vertical: 'right', horizontal: 'bottom' },
    TransitionComponent: (props: any) => <Slide {...props} direction="left" />,
    action: action
  })
}

declare module "notistack" {
  interface VariantOverrides {
    tip: true;
  }
}
