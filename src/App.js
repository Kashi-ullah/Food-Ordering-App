import React,{Fragment, useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

const showCartHandler=()=>{
  setCartIsShown(true)
}
const hideCartHandler=()=>{
  setCartIsShown(false)
}
const somefunction=(message)=>{
  console.log(message);
}
  return (
    <Fragment>
      {cartIsShown && <Cart></Cart>}
      <Header onShowCart={showCartHandler} bringSomeData={somefunction}></Header>
    <main><Meals></Meals></main>
    </Fragment>
  );
}

export default App;
