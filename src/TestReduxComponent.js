import react from 'react';
import {useDispatch, useSelector} from "react-redux";


const TestReduxComponent = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (<div>
        <p>счётсчик: {count}</p>
        <div>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
            <button  onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    </div>)
}

export default TestReduxComponent;