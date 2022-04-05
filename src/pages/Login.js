import React from 'react';
import styled from 'styled-components';
import { Text, Input, Grid, Button } from '../elements';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../shared/common';

const Login = (props) => {

    const dispatch = useDispatch()

    const [id, setId] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    console.log(id);

    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([0-9a-zA-Z])*/;

    console.log(_reg.test(id)); 

    const login = () =>{

        if(id ===''||pwd===''){
            window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!')
            return;
        }

        if(!emailCheck(id)){
            window.alert('이메일 형식이 맞지 않습니다!')
            return;
        }

        dispatch(userActions.loginFB(id, pwd))
    }


    return (
        <React.Fragment>
            <Grid padding='16px'>
            <Text size="32px" bold color='slateblue' >
                Login
            </Text>
            <Grid padding='16px 0' >
            <Input 
            label="아이디" 
            placeholder="아이디를 입력해주세요"
            _onChange={(e)=> {
                setId(e.target.value); ;
            }}
            />
            </Grid>
            <Grid padding='16px 0' >
            <Input 
            type="password"
            label="패스워드" 
            placeholder="패스워드를 입력해주세요" 
            _onChange={(e)=> {
                setPwd(e.target.value);
            }}
            />
            </Grid>
            <Grid padding='16px' >
                <Button text='로그인하기' _onClick={()=>{
                    login()
                    console.log('로그인 했어');
                    }}> </Button>
            </Grid>
            </Grid>
        </React.Fragment>
    );
};




export default Login;