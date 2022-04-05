import React from 'react';
import styled from 'styled-components'

const Button = (props) => {

    const {text, _onClick, margin, is_float, children, is_post} = props

    if(is_float){
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick} >{text? text:children}</FloatButton>
            </React.Fragment>
    )
    }

    if(is_post){
        return(
        <React.Fragment>
            <Postbt onClick={_onClick} >{text? text:children}</Postbt>
        </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <ElButton onClick={_onClick} >{text? text:children}</ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    _onClick: ()=>{

    },
    margin : false,
    is_float : false,
    children: null,
    is_post: false,
}

const ElButton = styled.button`
width: 100%;
height: 40px;
border: none;
border-radius: 5px;
background: slateblue;
color: white;
font-size: 18px;
font-weight: bold;

`
const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background: slateblue;
    font-size : 40px;
    font-weight: 800;
    box-sizing:border-box;
    position: fixed;
    bottom : 50px;
    right: 30px;
    text-align: center;
    border: none;
    border-radius: 50px;
    vertical-align: middle;
    color: white;
`

const Postbt =styled.button`
width: 20%;
height: 40px;
border: none;
border-radius: 5px;
background: slateblue;
color: white;
font-size: 18px;
font-weight: bold;

`

export default Button;