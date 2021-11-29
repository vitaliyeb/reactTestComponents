import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Suspense, lazy } from 'react';
import Loader from "../components/uikit/loader";

const Users = lazy(() => import('../pages/Users'));

const MainRouter = () => {
    return (<BrowserRouter>
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path='/' element={<Users />} />
            </Routes>
        </Suspense>
    </BrowserRouter>);
}


export default MainRouter;