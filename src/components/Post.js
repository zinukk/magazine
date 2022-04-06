import React from 'react';
import {Grid, Image, Text} from '../elements'

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid >
                <Grid is_flex>
                    <Grid is_flex >
                        <Image shape="circle" src={props.src}/>
                        <Text bold> {props.user_info.user_name} </Text>
                    </Grid>
                    <Text >{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape='rectangle' src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Post.defaultProps = {
    user_info : {
        user_name : 'gaeko',
        user_propfile : 'http://www.mind-journal.com/news/photo/202104/1187_1971_3558.jpg'
    },
    image_url : ' ',
    contents : '귀여운 개코 도마뱅',
    comment_cnt: 10,
    insert_dt: "2022-04-01"
};

export default Post;