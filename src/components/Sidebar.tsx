import React from 'react'
import withAuthenctication from '../utils/withAuthentication'

const Sidebar = () => {
  return (
    <div className='sidebar'></div>
  )
}

export default withAuthenctication(Sidebar);