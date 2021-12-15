import {Pagination} from "./index";
import {render, screen, waitFor, fireEvent} from "@testing-library/react";
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
        const response = { data: {}, extra: {
                first: "1",
                last: "3",
                next: "2",
            } };
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

    it('blocked first and last buttons', async () => {
        const prevButton = screen.getByTestId('prevButton');
        const nextButton = screen.getByTestId('nextButton');

        expect(prevButton).toHaveClass('disabled');
        expect(nextButton).not.toHaveClass('disabled');

        expect(await screen.findByTestId('items')).toBeInTheDocument();

        const goToPageButton= screen.getByText(/3/);
        fireEvent.click(goToPageButton);
        await waitFor(() => expect(goToPageButton).toHaveClass('active'))

        expect(prevButton).not.toHaveClass('disabled');
        expect(nextButton).toHaveClass('disabled');
    });

})