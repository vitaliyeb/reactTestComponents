interface IReturnType {
    next: string;
    last: string;
    first: string;
}

export default function (response: Response): IReturnType | null {
   const link = response.headers.get('link');

    if (link) {
        return link.split(',').reduce((acc, link) => {
            const key = (/rel="(\w+)"/).exec(link);
            const value = (/_page=(\d+)/).exec(link);
            if (key && value){
                acc[key[1] as keyof IReturnType] = value[1];
                return acc;
            }
            return acc;
        }, {} as IReturnType);
    }
    return null;
}