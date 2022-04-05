import './App.css'
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';
import { Grid, Button } from '../elements';
import {ConnectedRouter} from 'connected-react-router'
import {history} from '../redux/configureStore'
import {actionCreators as userActions} from "../redux/modules/user"
import {useDispatch} from "react-redux"
import {apiKey} from './firebase'
import Permit from './Permit';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import Postlist from '../pages/PostList';


function App() {

  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key)? true:false

  
  React.useEffect(()=>{

    if(is_session){
      dispatch(userActions.loginCheckFB())
    }

  }, [])

  return (
      <React.Fragment>
        <ConnectedRouter history={history} >
        <Grid>
          <Header></Header>
            <Route path='/' exact component={PostList} />
            <Route path='/Login' exact component={Login} />
            <Route path='/SignUp' exact component={SignUp} />
            <Route path='/PostWrite' exact component={PostWrite} />
            <Route path='/PostDetail/:id' exact component={PostDetail} />
        </Grid>
        <Permit>
          <Button is_float text="+" ></Button>
        </Permit>
        </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;