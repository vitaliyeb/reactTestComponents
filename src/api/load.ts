
const HOST = 'https://jsonplaceholder.typicode.com/';

export default async function (url: string, options?: RequestInit, middleware?: (...arg:any[]) => any) {
    const response = await fetch(`${HOST}${url}`, options);

    const extra = typeof middleware === 'function' ? middleware(response) : null;
    const data = await response.json();

    return {
        data,
        extra,
        error: null
    };
};