import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleBtn = () => {
    if(isExpanded){
      setIsExpanded(false)
    } else {
      setIsExpanded(true)
    }
  }

  return (
    <>
        <header className='header-container w-full h-14 md:h-20 block md:inline-flex shadow-sm'>
            <nav className='hidden md:inline-flex list-none'>
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
            <div className='justify-between flex w-full md:hidden'>
                <div className=' text-3xl ml-5 mt-2 content-center'>
                  <button onClick={handleBtn}>
                    {isExpanded ? "x" : "="}
                  </button>
                </div>
                <div className=' ml-7 mr-12 mt-3 content-center text-2xl'>
                  <Link to={"/"}><h1>Logo...</h1></Link>
                </div>
            </div>
            {isExpanded && 
            <nav className='fixed header-container py-2'>
                <hr className='w-screen' />
                <div className=' content-center'>
                  <ul className='header-links  ml-2 mr-5 text-xl'>
                    <li className='py-1'><Link to={"/Rules"}>Regras</Link></li>
                    <li className='py-1'><Link to={"/News"}>Novidades</Link></li>
                    <li className='py-1'><Link to={"/"}>Discord</Link></li>
                    <li className='py-1'><Link to={"/About"}>Sobre nós</Link></li>
                    <li className='py-1'><Link to={"/Userpage"}>User Page</Link></li>
                  </ul>
                </div>
            </nav>
            }
        </header>
    </>
  )
}

export default MyHeader