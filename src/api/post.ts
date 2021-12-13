import load from "./load";
import parsePagination from "../utils/parsePagination";


export class PostApi {
    static getPosts({ page }: { page: number}) {
        return load(`posts?_page=${page}&_limit=5`, {}, parsePagination);
    }
}