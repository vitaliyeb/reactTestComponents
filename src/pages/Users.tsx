import { Outlet, useNavigate} from "react-router-dom";

const Users = (...props: any[]) => {
    const t = useNavigate();


    return <div>
        <h1 onClick={() => {
            t('/user/12', {state: {x: 10}});
        }
        }>hello</h1>
        <Outlet />
    </div>
};

export default Users;