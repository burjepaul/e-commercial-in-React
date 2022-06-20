import { Routes, Route } from "react-router-dom";

import SignIn from "./routes/sign-in/sign-in.component";
import Home from "./routes/home/home.component";
import Navigoation from "./routes/navigation/navigation.component";

const Shop = () =>{
  return(
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigoation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop/>}/>
        <Route path='sing-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
