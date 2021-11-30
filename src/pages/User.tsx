import {
    useLocation,
    useParams,
} from "react-router-dom";


const User = (props: any) => {
    const {userId} = useParams();

    return <p>user {userId} </p>
};

export default User;