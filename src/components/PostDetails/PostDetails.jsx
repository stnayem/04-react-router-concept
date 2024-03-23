import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const { postId } = useParams();
    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    const { id, title, body } = postDetails;
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;