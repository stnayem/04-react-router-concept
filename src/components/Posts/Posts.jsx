import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px'
    }

    return (
        <div>
            <h2>Posts: </h2>
            <div style={usersStyle}>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;