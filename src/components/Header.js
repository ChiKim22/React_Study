import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {

  const location = useLocation();
  // location.pathname

  return (
    <header className="header">
        <h1> {title} </h1>
        {location.pathname === '/' && 
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onAdd={onAdd}/>
        }
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}
//CSS in JS
// const headingStyle = {
//     color:'red', backgroundColr:'black'
// }
export default Header