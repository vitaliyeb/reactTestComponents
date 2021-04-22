import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

function renderWithRedux (component, { reducer, initialState }) {
    return(
        <Provider store={createStore(reducer, initialState)}>

        </Provider>
    )
}


it('test render components', () => {
    renderWithRedux(<App />, {
        initialState: { count: 0 },
        reducer: (state) => {
            return state;
        }
    });
    screen.debug();
})