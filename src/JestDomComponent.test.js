import { render, screen } from '@testing-library/react';
import App from './App';


describe('тестирование методов библиотеки jest-dom', () => {
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

    test('тестирование на toBeInvalid и toBeValid', ()=> {
        const invalidInput = screen.getByTestId('invalidInput');
        const notInvalidInput = screen.getByTestId('validInput');
        const invalidForm = screen.getByTestId('invalidForm');
        const notInvalidForm = screen.getByTestId('validForm');
        expect(invalidInput).toBeInvalid();
        expect(notInvalidInput).toBeValid();
        expect(invalidForm).toBeInvalid();
        expect(notInvalidForm).toBeValid();
    })

    test('тестирование на toBeRequired', () => {
        const requiredElement = screen.getByTestId('requiredElement');
        const notRequiredElement = screen.getByTestId('notRequiredElement');
        expect(requiredElement).toBeRequired();
        expect(notRequiredElement).not.toBeRequired();
    })

    test('тестирование на toBeVisible', () => {
        const visible = screen.getByTestId('tobeVisible-visible');
        const hidden = screen.getByTestId('tobeVisible-hiddenProperty');
        const opacity = screen.getByTestId('tobeVisible-opacity');
        const displayNone = screen.getByTestId('toBeVisible-displayNone');
        expect(visible).toBeVisible();
        expect(hidden).not.toBeVisible();
        expect(opacity).not.toBeVisible();
        expect(displayNone).not.toBeVisible();
    })

    test('тестирование на toContainElement', () => {
        const parentElement = screen.getByTestId('toContainElement-parent');
        const childrenElement = screen.getByTestId('toContainElement-child');
        expect(parentElement).toContainElement(childrenElement);
    })

    test('тестирование на toContainHTML', () => {
        const parent = screen.getByTestId('toContainHTML-parent');
        expect(parent).toContainHTML('<p>test</p>')
    })

    test('тестирование на toHaveAttribute', () => {
        const toHaveAttributeElement = screen.getByTestId('toHaveAttributeElement');
        expect(toHaveAttributeElement).toHaveAttribute('data-myattribute');
        expect(toHaveAttributeElement).toHaveAttribute('data-myattribute', 'test');
    })

    test('тестирование на toHaveClass', () => {
        const element = screen.getByTestId('toHaveClass');
        expect(element).toHaveClass('myClass');
    })

    test('тестирование на toHaveFocus', () => {
        const input = screen.getByTestId('toHaveFocus');
        expect(input).not.toHaveFocus();
        input.focus();
        expect(input).toHaveFocus();
        input.blur();
        expect(input).not.toHaveFocus();
    })

    test('тестирование toHaveFormValues', () => {
        const form = screen.getByTestId('formValuesTest');
        expect(form).toHaveFormValues({
            'username': 'vitaliyeb',
            'agreement': true
        });
    })

    test('тестирование на toHaveStyle', () => {
        const el = screen.getByTestId('haveStyle');
        expect(el).toHaveStyle({
            padding: '20px',
            color: 'red'
        });
    })

    test('тестирование на toHaveTextContent', () => {
        const el = screen.getByTestId('haveTextContent');
        expect(el).toHaveTextContent('test text');
        expect(el).toHaveTextContent(/TEXT/i);
        expect(el).not.toHaveTextContent('brr');
        const elHaveText = screen.getByTestId('haveTextMyText');
        const elNotHaveText = screen.getByTestId('notHaveTextContent');
        expect(elHaveText).toHaveTextContent(/text/);
        expect(elNotHaveText).not.toHaveTextContent(/TEXT/);
    })

    test('тестирование на toHaveValue', () => {
        const elText = screen.getByTestId('toHaveValueText');
        const toHaveValueSelect = screen.getByTestId('toHaveValueSelect');
        expect(elText).toHaveValue('testValues');
        expect(toHaveValueSelect).toHaveValue(['banana', 'apple'])

    })

    test('тестирование на toHaveDisplayValue', () => {
        const input = screen.getByLabelText(/Your name:/i);
        expect(input).toHaveDisplayValue('vitaliy');

    })

    test('тестирование на toBeChecked', () => {
        const input = screen.getByTestId('toBeCheckedTest');
        expect(input).toBeChecked();
    })


    test('тестирование на toHaveDescription', () => {
        const el = screen.getByTestId('divDescription');
        expect(el).toBeInTheDocument();
        // expect(el).toHaveDescription('my description')
    })
})


