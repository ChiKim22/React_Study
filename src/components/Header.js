import React from 'react';

// const Header = function() {
//   return(
//     <div>Hello World!!!</div>
//   )
// }

const Header = (props) => {
    console.log(props.title)
    return(
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header