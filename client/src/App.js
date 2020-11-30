import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Books from "./pages/Books"
import SavedBooks from "./pages/SavedBooks"
import Nav from "./components/Nav"

function App(){
    return(
        <Router>
            <div>
              <Nav />
              <Wrapper>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/savedbooks" component={SavedBooks} />



              </Wrapper>
            </div>
        </Router>
    )
}
export default App