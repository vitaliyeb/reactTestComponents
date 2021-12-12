import load from "./load";


export class PostApi {
    static getPosts({ page }: { page: number}) {
        return load(`posts?_page=${page}&_limit=20`, {});
    }
}