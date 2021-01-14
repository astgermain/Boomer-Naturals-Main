import React from "react"
import ".././styles/product-template.css"

const Pagination = ({ data, pageContext, location, alt, altLink, alt2, alt2Link, alt3, alt3Link }) => {
  if (alt != null) {
    return (
      <div className="headtrail-container">
        <a className="headtrail-text" href="/">
          <span>Home </span>
        </a>
        <span> {">"} </span>
        <a className="headtrail-text" href={altLink}>
          <span>{alt}</span>
        </a>
        {alt2 != null &&
        <>
        <span> {">"} </span>
        <a id="headtrail-last" href={alt2Link}>
          <span>{alt2}</span>
        </a>
        </>
        }
        {alt3 != null &&
        <>
        <span> {">"} </span>
        <a id="headtrail-last" href={alt3Link}>
          <span>{alt3}</span>
        </a>
        </>
        }
      </div>
    )
  } else {
    const UrlLocationPathname = location.pathname
    const UrlLocationOrigin = location.origin
    const FirstPathName = UrlLocationPathname.split("/")[1]
    const SecondPathName = UrlLocationPathname.split("/")[2].replace(/-/g, " ")
    const SecondPathNameUrl = location.href

    return (
      <div className="headtrail-container">
        <a className="headtrail-text" href={UrlLocationOrigin}>
          <span>Home </span>
        </a>
        <span> {">"} </span>
        <a className="headtrail-text" href="/filter">
          <span>{FirstPathName}</span>
        </a>
        <span> {">"} </span>
        <a id="headtrail-last" href={SecondPathNameUrl}>
          <span>{SecondPathName}</span>
        </a>
      </div>
    )
  }
}

export default Pagination
