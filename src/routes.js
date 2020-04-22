import React from "react" ;
import { Switch, Route } from "react-router-dom" ;


//import components ที่ใช้
import LoginFrom from "./component/formlogin"
import RegisterForm from "./component/formregister"
import Addbooks from "./component/addbook"
import Booklist from "./component/booklist"

const Routes = () =>(
    <Switch>
        <Route exact path="/login" component= {LoginFrom} />
        <Route exact path="/register" component= {RegisterForm} />
        <Route exact path="/addbook" component= {Addbooks} />
        <Route exact path="/booklist" component= {Booklist} />
    </Switch>
)

export default Routes;