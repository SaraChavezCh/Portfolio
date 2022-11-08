import React from 'React';
import { Navigate, Route, Routes } from "react-router-dom";
import { Contact, Education, Home, Projects, Technologies } from '../site/pages/';

export const AppRouter = () => {
      return (
            <Routes>
                  <Route path="/home" element={ <Home/> } />
                  <Route path="/technologies" element={ <Technologies/> } />
                  <Route path="/projects" element={ <Projects/> } />
                  <Route path="/education" element={ <Education/> } />
                  <Route path="/contacto" element={ <Contact/> } />
                  <Route path="/*" element={ <Navigate to="/home" /> } />
            </Routes>
      )
}
