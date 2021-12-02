import {useCallback} from "react";

export const useFetch = (method: (...arg: any[]) => any) => {
    const request = useCallback(async (payload) => {
        return await method(payload);
    }, [method]);

    return request;
}