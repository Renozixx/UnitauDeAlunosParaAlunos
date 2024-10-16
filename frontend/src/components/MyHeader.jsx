import React from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <>
        <header className='header-container w-full h-20 inline-flex shadow-sm'>
            <nav className=' inline-flex list-none'>
                <div className=' ml-7 mr-12 content-center text-2xl'>
                  <Link to={"/"}><h1>Logo...</h1></Link>
                </div>
                <hr />
                <div className=' content-center'>
                  <ul className='header-links inline-flex gap-14 ml-7 mr-12 text-2xl'>
                    <li><Link to={"/Rules"}>Regras</Link></li>
                    <li><Link to={"/News"}>Novidades</Link></li>
                    <li><Link to={"/"}>Discord</Link></li>
                    <li><Link to={"/About"}>Sobre nós</Link></li>
                    <li><Link to={"/Userpage"}>User Page</Link></li>
                  </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default MyHeader