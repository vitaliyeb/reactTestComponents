import { render, screen } from '@testing-library/react';
import App from './App';


describe('тестирование методом библиотеки jest-dom', () => {
    beforeEach(() => {
        render(<App />);
    })

    test('тестирование на toBeDisabled и toBeEnabled', () => {
        const disabledElement = screen.getByTestId('inputDisabled');
        const enabledElement = screen.getByTestId('inputEnabled');
        expect(disabledElement).toBeDisabled();
        expect(enabledElement).toBeEnabled();
    });

    test('тестирование на toBeEmpty', () => {
        const divEmpty = screen.getByTestId('divEmpty');
        const divNotEmpty = screen.getByTestId('divNotEmpty');
        expect(divEmpty).toBeEmpty();
        expect(divNotEmpty).not.toBeEmpty();
    });

    test('тестирование toBeEmptyDOMElement', () => {
        const filledText = screen.getByTestId('filledTextDOMElement');
        const emptyDOMElement = screen.getByTestId('emptyDOMElement');
        expect(filledText).not.toBeEmptyDOMElement();
        expect(emptyDOMElement).toBeEmptyDOMElement();
    })

    test('тестирование на toBeInTheDocument', () => {
        const element = screen.getByTestId('elementInDocument');
        const nonExistentElement = screen.queryByText(/non-existent element/);
        expect(element).toBeInTheDocument();
        expect(nonExistentElement).not.toBeInTheDocument();
    })

    test('тестирование на toBeInvalid', ()=> {
        const invalidInput = screen.getByTestId('invalidInput');
        const notInvalidInput = screen.getByTestId('notInvalidInput');
        const invalidForm = screen.getByTestId('invalidForm');
        const notInvalidForm = screen.getByTestId('notInvalidForm');
        expect(invalidInput).toBeInvalid();
        expect(notInvalidInput).not.toBeInvalid();
        expect(invalidForm).toBeInvalid();
        expect(notInvalidForm).not.toBeInvalid();
    })

    test('тестирование на toBeRequired', () => {
        const requiredElement = screen.getByTestId('requiredElement');
        const notRequiredElement = screen.getByTestId('notRequiredElement');
        expect(requiredElement).toBeRequired();
        expect(notRequiredElement).not.toBeRequired();
    })
})


