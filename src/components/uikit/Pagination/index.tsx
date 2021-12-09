import React, {  useEffect, useState } from "react";

interface IProps {
    Views: (items: any, isLoading: boolean) => JSX.Element;
    pages: number;
    requestElements: (...args: any[]) => any;
}

export const Pagination = ({ Views, pages, requestElements }: IProps) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await requestElements();
            setItems(response.data);
            setLoading(false);
        })()
    }, []);

    const startPagesEnumeration =  (s => s <= 0 ? 1 : s + 1)(page - Math.floor(pages / 2));
    const handlePageClick = (page: number) => {

    }

    return <div>
        { <Views items={items} isLoading={loading}/> }
        <div>
            <button>предыдущая</button>
            {
                Array.from({length: pages}).map((e, i) => {
                    const currentPage = startPagesEnumeration + i;

                    return <button
                        key={i}
                        onClick={() => handlePageClick(currentPage)}
                    >{ currentPage }</button>
                })
            }
            <button>Следующая</button>
        </div>
    </div>
};