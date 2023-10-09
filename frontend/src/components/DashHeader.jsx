import {Link} from 'react-router-dom'

import React from 'react'

const DashHeader = () => {
  return (
  <header className='dash-header'>
      <div className="dash-header__container">
        <Link to="/dash/notes">
          <h1 className="dash-header__title">technotes</h1>
        </Link>
        <nav className="dash-header__nav">
         {/* add nav buttons later*/} 
        </nav>
      </div>
  </header>
  )
}

export default DashHeader
