import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Post from "./GETPOST/Post";
import Get from "./GETPOST/Get";

class robinInlm extends React.Component {

   render() {
     return (
       <Router>
        <div>
              <nav id="nav">
                 <ul>
                  <li><Link to="/">Home Page</Link></li>
                  <li><Link to="/post">Fetch and post data to website</Link></li>
                 </ul>
              </nav>
                <Route path = "/" exact={true} render = {
                  () => {
                    return ( <div>
                      <h1>Here you can collect, post and view data.</h1>
                    </div>
                   );
                  }
                }/>
                  <Route path = "/post" exact={true} render = {
                  () => {
                    return ( <div>
                         <h1>Post a city and the population it contains</h1>
                         <Post getCities={this.makePost}></Post>
                              <br/> <hr/>
                         <h2>The data collected will be veiwed below!</h2>
                         <Get getCities={this.getData}/>
                                </div>);
           }
         }/>
            </div>
            </Router>
     );
  }
 };
export default robinInlm;
