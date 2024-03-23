import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userD = useLoaderData();
    const { name, email } = userD;
    return (
        <div>
            <h2>Details about user</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;