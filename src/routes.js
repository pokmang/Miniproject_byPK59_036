import React from "react" ;
import { Switch, Route } from "react-router-dom" ;


//import components ที่ใช้
import LoginFrom from "./component/formlogin"
import RegisterForm from "./component/formregister"


const Routes = () =>(
    <Switch>
        <Route exact path="/login" component= {LoginFrom} />
        <Route exact path="/register" component= {RegisterForm} />
    </Switch>
)

export default Routes;