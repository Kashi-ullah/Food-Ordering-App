import React from 'react'
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  const sendmessage=(message)=>{
    console.log("This is custom Message");
  }
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button onClick={sendmessage}>sOME</button>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header> 
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Deliciuos Food"></img>
        </div>
    </React.Fragment>
  )
}

export default Header