import React from 'react';
import {Grid, Text, Button} from '../elements'
import { useRef, useState } from 'react';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { apiKey } from '../shared/firebase';
import {Permit} from '../shared/Permit';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const is_login = useSelector((state) => state.user.is_login)
    
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
    const is_session = sessionStorage.getItem(_session_key)? true:false

    if(is_login && is_session){
        return (
            <React.Fragment>
                <div style={{padding : '16px', background: 'slateblue'}} >
                <Grid is_flex >
                    <Grid>
                        <Text size='30px' margin='0' bold  color="white" _onClick={history.push(`/`)}> I love slateblue </Text>
                    </Grid>
    
                    <Grid is_flex width="250px">
                        <Button text="Profile" ></Button>
                        <Button text='Notification'></Button>
                        <Button text='Logout' _onClick={()=>{
                            dispatch(userActions.logoutFB({}))
                        }}  ></Button>
                    </Grid>
                </Grid>
                </div>
            </React.Fragment>
        );
    }
  


    return (
        <React.Fragment>
            <div style={{padding : '16px', background: 'slateblue'}} >
            <Grid is_flex >
                <Grid>
                    <Text size='30px' margin='0' bold  color="white" > I love slateblue </Text>
                </Grid>

                <Grid is_flex width="250px">
                    <Button text="Login" _onClick={()=>{
                        history.push('/Login')
                    }}  ></Button>
                    <Button text='Sign Up' _onClick={()=>{
                        history.push('/SignUp')
                    }}></Button>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
};

Header.defaultProps={

}

export default Header;