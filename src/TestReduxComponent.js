import react from 'react';
import {useSelector} from "react-redux";


const TestReduxComponent = () => {
    const count = useSelector(state => state.count)
    return (<p>{count}</p>)
}

export default TestReduxComponent;