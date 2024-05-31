import React, {useState} from 'react'
import { Collapse, initMDB } from 'mdb-react-ui-kit';
import {Routes, BrowserRouter, Route} from 'react-router-dom';

const Header = () => {


  return (
    <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="/"
                    ><img
                        id="blogify-logo"
                        src="/images/logo.jpg"
                        alt="Blogify Logo"
                        draggable="false"
                        height="30"
                    /></a>
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="/"><i class="fas fa-home pe-2"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="/addBlog"><i class="fas fa-plus-circle pe-2"></i>Add Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="/about"><i class="fas fa-info-circle pe-2"></i>About</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header