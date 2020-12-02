import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Nav from "./components/Nav"


function App(){
    return(
        <Router>
            <div >
              <Nav />
              <Wrapper>
              <Route exact path="/" component={Search} />
              <Route exact path="/books" component={Search} />
              <Route exact path="/savedbooks" component={Saved} />



              </Wrapper>
            </div>
        </Router>
    )
}
export default App