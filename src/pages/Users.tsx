import {useResolvedPath, resolvePath, useLocation, Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

const Users = (...props: any[]) => {
    return <div>
        <h1>hello</h1>
        <Outlet />
    </div>
};

export default Users;