import {User} from "./api";
import * as testModule from "./api/load";

describe('testing jest api', () => {
    it('mock user getAll ', async function () {
        //@ts-ignore
        jest.spyOn(testModule, "default").mockReturnValue(2);
        expect(User.getAllUsers({ page: 1})).toBe(2);

    });
})

export {};