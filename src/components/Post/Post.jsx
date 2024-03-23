import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px'
    }

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={userStyle}>
            <h4>Post id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;