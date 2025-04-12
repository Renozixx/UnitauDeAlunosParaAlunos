import React from 'react'
import MyHeader from "../components/MyHeader"

const Main = ({ children }) => {
  return (
    <>
      <MyHeader />
      <main className="h-screen darkmode-backgroundcolor">
        {children}
      </main>
    </>
  )
}

export default Main