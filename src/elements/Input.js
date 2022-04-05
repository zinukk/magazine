import React from 'react';
import styled from 'styled-components'
import {Text, Grid} from './index';

const Input = (props) => {

    const {label, placeholder, _onChange, type, multiLine} = props;

    if(multiLine){
        return(
            <Grid>
                {label ? '' : <Text margin="0px" >{label}</Text>} 
                <ElTextarea placeholder={placeholder} onChange = {_onChange}></ElTextarea>
            </Grid>
        )
    }    

    return (
        <React.Fragment>
            <Grid>
            {label ? '' : <Text margin="0px" >{label}</Text>} 
            <ElInput type={type} placeholder={placeholder} onChange = {_onChange} />
            </Grid>
        </React.Fragment>
    );
};

Input.defaultProps = {
    label : false,
    placeholder: '텍스트를 입력해주세요',
    _onChange: ()=>{},
    type: 'text',
    multiLine: false,
    
}

const ElInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid slateblue;
    border-radius: 5px;
     
`

const ElTextarea = styled.textarea`
width: 100%;
height: 40px;
border: none;
border-bottom: 2px solid slateblue;
border-radius: 5px;
min-height: 150px;
`

export default Input;