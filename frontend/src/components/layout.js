import React from "react"
import Header from "./header"
import Hero from "./hero"
import Categories from "./categories"
import Email from "./email"
import Infocta from "./infocta"
import ProductSlider from "./productslider";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Header title={title}/>
      /*
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      */
    )
  } else {
    header = (
      <Header />
      /*
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      */
    )
  }

  return (
    <div className="" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <main>
        <Hero />
        <ProductSlider />
        <Categories />
        <Email />
        <Infocta svgProp="svg image" maintextProp="Share Your Story"  buttontextProp="Learn More"  />
      </main>
      
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout
