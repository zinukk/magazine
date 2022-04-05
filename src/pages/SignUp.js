import React from 'react';
import styled from 'styled-components';
import { Text, Input, Grid, Button } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../shared/common';

const SignUp = () => {

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');
    const [user_name, setUserName] = React.useState('');

    const dispatch = useDispatch()

    const signup = () => {

        if(pwd !== pwd_check){
            window.alert('패스워드가 일치하지 않습니다!')
            return;
        }


        if(!emailCheck(id)){
            window.alert('이메일 형식이 맞지 않습니다!')
            return;
        }

        if(id === '' || pwd ===''|| user_name === ''){
            window.alert('아이디, 패스워드, 닉네임을 모두 입력해주세요!')
            return;
        }


        dispatch(userActions.signupFB(id, pwd, user_name))
    }

    return (
        <React.Fragment>
            <Grid padding='16px'>
                <Text size="32px" bold color='slateblue' >
                    Sign Up
                </Text>
            <Grid padding='16px 0' >
                <Input 
                label="아이디" 
                placeholder="아이디를 입력해주세요"
                _onChange={(e)=> {
                    setId(e.target.value)
                    
                }}
                />
            </Grid>
            <Grid padding='16px 0' >
                <Input 
                label="닉네임" 
                placeholder="닉네임 입력해주세요" 
                _onChange={(e)=> {
                    setUserName(e.target.value)
                }}
                />
            </Grid>
            <Grid padding='16px 0' >
                <Input
                type="password" 
                label="패스워드" 
                placeholder="패스워드를 입력해주세요" 
                _onChange={(e)=> {
                    setPwd(e.target.value)
                }}
            />
            </Grid>
            <Grid padding='16px 0' >
                <Input
                type="password" 
                label="패스워드" 
                placeholder="패스워드를 다시 한 번 입력해주세요" 
                _onChange={(e)=> {
                    setPwdCheck(e.target.value);
                }}
                />
            </Grid>
                <Button text='가입하기' _onClick={()=>{
                    console.log('가입하기!');
                    signup();
                    }}> </Button>
            </Grid>
        </React.Fragment>
    );
};



export default SignUp;