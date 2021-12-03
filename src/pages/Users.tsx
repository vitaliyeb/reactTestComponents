import {useFetch} from "../hooks";
import { User } from "../api";
import {useEffect, useState} from "react";
import {UserCard} from "../components/uikit/UserCard";
import {Pagination} from "../components/uikit/Pagination";

const Users = (...props: any[]) => {
    const fetchUsers = useFetch(User.getAllUsers);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])

    const getUsers = async (page: number) => {
        const users = await fetchUsers({ page })
        setUsers(users);
    }


    useEffect(() => {getUsers(1)}, []);

    return <div>
        <Pagination
            handlePaginationClick={() => {}}
            pages={10}
            page={5}
        >
           <div>
               {/*{*/}
               {/*    users.map((user, index) => {*/}
               {/*        return <UserCard key={index} />*/}
               {/*    })*/}
               {/*}*/}
           </div>
        </Pagination>
    </div>
};


export default Users;