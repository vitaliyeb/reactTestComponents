import {useParams} from "react-router-dom";


const User = () => {
    const {userId} = useParams();

    return <p>user {userId} </p>
};

export default User;