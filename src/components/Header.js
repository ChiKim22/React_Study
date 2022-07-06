import React from 'react';
import Button from './Button';

// const Header = function() {
//   return(
//     <div>Hello World!!!</div>
//   )
// }

const Header = ({title}) => {

    const onAdd = () => {
        console.log("btn Clicked")
    }

    return(
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" onAdd={onAdd}></Button>
        </header>
    )
}

export default Header