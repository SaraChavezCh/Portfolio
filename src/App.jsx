import React from 'react';
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Footer, NavBarB } from "./ui/components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

      return (
            <HashRouter>
                 
                  <NavBarB/>
                  <AppRouter/>
                  <Footer />
            </HashRouter>
      )
}
 