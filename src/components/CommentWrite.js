import React from "react";

import {Grid, Input, Button} from "../elements";

const CommentWrite = () => {

    return (
      <React.Fragment>
        <Grid padding="16px">
        <Grid is_flex>
            <Input placeholder="댓글 내용을 입력해주세요 :)" />
            <button style={{ 
                background:"slateblue",
                border: "none",
                height:"40px",
                borderRadius:"5px",
                color: 'white',
                width: '20%',
                fontSize: '18px'

                 }}>작성</button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

export default CommentWrite;