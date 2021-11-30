
const HOST = 'https://jsonplaceholder.typicode.com/';

export default async function (url: string, options?: RequestInit) {
    const response = await fetch(`${HOST}${url}`, options);
    return await response.json();
};