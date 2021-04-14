import react from 'react';
import {useSelector} from "react-redux";


const TestReduxComponent = () => {
    const count = useSelector(state => state.count);

    return (<div>
        <p>{count}</p>
        <button>+</button>
        <button>-</button>
    </div>)
}

export default TestReduxComponent;