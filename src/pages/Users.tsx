import {useFetch} from "../hooks";
import { User } from "../api";
import { useEffect } from "react";
import {UserCard} from "../components/uikit/UserCard";

const Users = (...props: any[]) => {
    const getUsers = useFetch(User.getAllUsers);

    useEffect(() => {
        (async () => {
            await getUsers({})
        })();
    }, []);

    return <div>
        <UserCard />
    </div>
};


export default Users;