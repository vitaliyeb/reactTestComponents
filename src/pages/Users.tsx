import { User } from "../api";
import {Pagination} from "../components/uikit/Pagination";

const Users = (...props: any[]) => {

    const UsersCardViews = (...props: any[]) => {
        return <p>views</p>
    }

    return <div>
        <Pagination
            requestElements={User.getAllUsers}
            pages={10}
            Views={UsersCardViews}
        />
    </div>
};


export default Users;