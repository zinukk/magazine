import React from 'react';
import Post from '../components/Post';
import { Grid } from '../elements';
import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const Postlist = (props) => {

    const dispatch = useDispatch();

    const post_list = useSelector((state) => state.post.list);

    console.log(post_list);

    React.useEffect(()=>{

        dispatch(postActions.getPostFB());

    }, [])

    return (
        <React.Fragment>
            <Grid width="500px" margin="100px auto" >
                {/* <Post/> */}
                {post_list.map((p, idx) => {
                    return <Post key={p.id} {...p}/>
                })}
            </Grid>
        </React.Fragment>
    );
};

export default Postlist;