import React from 'react';
import {Grid, Input, Text, Button, Image} from '../elements'
import Upload from '../shared/Upload';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';


const PostWrite = (props) => {

    const is_login = useSelector((state) => state.user.is_login)
    const {history} = props;

    const [contents, setContents] = React.useState('');
    
    const changeContents = (e) =>{
        setContents(e.target.value)
        
    }

    

    const addPost = () =>{
        dispatch(postActions.addPostFB(contents))
    }

    const dispatch = useDispatch()


    if(!is_login){
        return(
            <Grid padding="200px 16px">
                <Text size="32px" bold  >앗 잠깐!</Text>
                <Text size="16px" >로그인 후에만 글을 쓸 수 있어요!</Text>
                <Button _onClick={()=>{history.replace('/')}} >로그인 하러가기</Button>
            </Grid>
        )
    }
    return (
        <React.Fragment>
            <Grid padding="16px" >
                <Text size="36px" >게시글 작성</Text>
                <Upload/>
            </Grid>

            <Grid>
                <Grid padding="16px">
                    <Text margin="0px" size="24px" bold>미리보기</Text>
                </Grid>
                <Image shape="rectangle" />
            </Grid>
            <Grid padding="16px" >
                <Input _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine/>
            </Grid>
            <Grid padding="16px" >
                <Button _onClick={addPost} >게시글 작성</Button>
            </Grid>
        </React.Fragment>
    );
};

export default PostWrite;