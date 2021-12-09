import { User } from "../api";
import {Pagination} from "../components/uikit/Pagination";
import {useFetch} from "../hooks";
import UserCardsViews from "../components/UserCardsViews";


const Users = (...props: any[]) => {
    const getUsers = useFetch(User.getUsers);

    const requestUsers = (page: number) => {
        return getUsers({ page });
    }

    return <div>
        <Pagination
            requestElements={requestUsers}
            pages={10}
            Views={UserCardsViews}
        />
    </div>
};


export default Users;