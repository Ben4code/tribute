import React from "react"
import Header from "./header"
import "./layout.css"




const Layout = ({ children }) => {
  

  return (
    <>
      <Header/>
      <div>
        <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()}, Built with {` `} React</footer>
      </div>
    </>
  )
}

export default Layout
