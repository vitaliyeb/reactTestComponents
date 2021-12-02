import {useFetch} from "../hooks";
import { User } from "../api";
import { useEffect } from "react";
import {UserCard} from "../components/uikit/UserCard";
import {Pagination} from "../components/uikit/Pagination";

const Users = (...props: any[]) => {
    const getUsers = useFetch(User.getAllUsers);

    useEffect(() => {
        (async () => {
            await getUsers({})
        })();
    }, []);

    return <div>
        <Pagination handlePaginationClick={() => {}} pages={10} page={5}>
            <UserCard />
        </Pagination>
    </div>
};


export default Users;