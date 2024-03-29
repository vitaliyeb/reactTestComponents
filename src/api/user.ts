import load from "./load";
import parsePagination from "../utils/parsePagination";

export class User {
    static getUsers({ page }: { page: number}) {
        return load(`users?_page=${page}&_limit=2`, {}, parsePagination);
    }

    getUser() {

    }
}