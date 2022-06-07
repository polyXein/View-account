import './App.css';
import React  from 'react'

import Cuenta from './Cuenta.jsx'
import { Routes, Route} from "react-router-dom";
import PersonalInformation from './components/PersonalInformation'
import Home from './components/Home'
import PageViewAccount from "./pages/PageViewAccount.jsx"

function App() {

  return (

    <div className="App">       
       <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/viewaccount/personal-information" element={<PersonalInformation />} />
          <Route path="/viewaccount" element={<PageViewAccount/> } />
        </Routes> 


       {/*  <ToastContextProvider>

           <Foo></Foo>
        </ToastContextProvider> */}





       </div>
  );
}

export default App;
