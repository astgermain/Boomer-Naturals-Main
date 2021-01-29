// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
import "./src/styles/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import Provider from './src/util/provider';

export const wrapRootElement = Provider;

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {

}

