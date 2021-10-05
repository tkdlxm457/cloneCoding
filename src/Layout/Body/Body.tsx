import { Route, Switch } from "react-router-dom";
import User from '../../view/pages/User/main/User';


export default function Body() {

    return (
        <div style={{padding: '15px 72.5px 0px 72.5px'}}>
            <Switch>
                <Route exact path="/">
                    {/* <Body></Body> */}
                </Route>
                <Route path="/List" component={User}></Route>
            </Switch>
        </div >
    );
}