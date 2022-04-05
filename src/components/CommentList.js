import React from "react";
import {Grid, Image, Text} from "../elements";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;


const CommentItem = (props) => {

    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle"/>
                <Text bold>{user_name}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Grid is_flex>
                    <Text margin="0px">{contents}</Text>
                    <Text margin="0px">{insert_dt}</Text>
                </Grid>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "zinukk",
    user_id: "",
    post_id: 1,
    contents: "귀여운 도마뱀이네요!",
    insert_dt: '2022-04-05 17:20:00'
}


