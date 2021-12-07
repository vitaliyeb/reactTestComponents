import {User} from "./api";
import load from "./load";

jest.mock('./api/load', () => {
    return {
        __esModule: true,
        default: jest.fn(() => 2)
    };
});

describe('testing jest api', () => {
    it('mock user getAll ', async function () {
        jest.spyOn(load, "getAllUsers").mockReturnValue(2);
        expect(User.getAllUsers({ page: 1})).toBe(2);

    });
})

export {};