import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Navbar() {
    // const state = useSelector(state => state.)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MyGallery</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <button className='btn bnt-primary'><NavLink class="nav-link active" aria-current="page" to="/">Gallery</NavLink></button>
        </li>
       
  


      <li class="nav-item">
      <button className='btn bnt-primary'><NavLink class="nav-link active" aria-current="page" to="/like">Like {}</NavLink></button>
        </li>
      <li class="nav-item">
      <button className='btn bnt-primary'><NavLink class="nav-link active" aria-current="page" to="/new">New</NavLink></button>
        </li>

    
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
