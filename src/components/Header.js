
import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'

export const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button color = 'green' text='Add' onClick={onClick}/>
    </header> 
  )

}

Header.defaultProps = {
    title: 'Dails Tasks',
  }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header