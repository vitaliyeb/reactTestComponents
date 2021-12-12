import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Suspense, lazy } from 'react';
import Loader from "../components/uikit/loader";

const Users = lazy(() => import('../pages/Users'));
const User = lazy(() => import('../pages/User'));
const Posts = lazy(() => import('../pages/Posts'));

const MainRouter = () => {
    return (<BrowserRouter>
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route index element={<Posts />} />
                <Route path='users' element={<Users />} />
                <Route path='user/:userId' element={<User />} />
            </Routes>
        </Suspense>
    </BrowserRouter>);
}


export default MainRouter;