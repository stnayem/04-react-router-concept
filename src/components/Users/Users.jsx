import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px'
    }


    //state --> date
    //state --> loader
    //use effect
    //fetch --> state set --> set state
    return (
        <div >
            <h2>Our users: {users.length}</h2>
            <h3>This is user page</h3>
            <p>This is vodro user.</p>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;