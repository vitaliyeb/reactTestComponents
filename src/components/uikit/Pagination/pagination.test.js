import {Pagination} from "./index";
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


const TestPaginationViews = ({ items, isLoading }) => {
    if (isLoading) {
        return (<div data-testid="loading">loading</div>)
    }

    return <div data-testid="items">
        hello
    </div>
}

describe('test Pagination component', () => {

    beforeEach(async () => {
        const response = { data: {}, extra: {} };
        const mockRequest = jest.fn(() => new Promise(res => setTimeout(()=>res(response), 100)));

        await waitFor(() =>
            render(<Pagination
                Views={TestPaginationViews}
                pages={5}
                requestElements={mockRequest}
            />)
        );
    })

    it('first render ', async () => {
        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(await screen.findByTestId('items')).toBeInTheDocument();
    });

})