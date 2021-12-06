import load from "./api/load";


// jest.mock('./api/load', () => {
//     return {
//         __esModule: true,
//         default: jest.fn(() => 'mocked baz')
//     };
// });

describe('testing mock', () => {
    it('mock', () => {
        expect('mocked baz').toBe('mocked baz');
    })
});

export {};