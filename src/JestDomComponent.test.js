import { render, screen } from '@testing-library/react';
import App from './App';


describe('тестирование методом библиотеки jest-dom', () => {
    test('тестирование на toBeDisabled и toBeEnabled', () => {
        render(<App />);
        const disabledElement = screen.getByTestId('inputDisabled');
        const enabledElement = screen.getByTestId('inputEnabled');
        expect(disabledElement).toBeDisabled();
        expect(enabledElement).toBeEnabled();
    });

    test('тестирование на toBeEmpty', () => {

    })
})


