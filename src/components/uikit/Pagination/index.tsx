import React, {  useEffect, useState } from "react";
import styles from './style.module.css';
import {IPaginationData} from "../../../utils/parsePagination";

interface IProps {
    Views: (items: any, isLoading: boolean) => JSX.Element;
    pages: number;
    requestElements: (...args: any[]) => any;
}

export const Pagination = ({ Views, pages, requestElements }: IProps) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [extra, setExtra] = useState<IPaginationData | null>(null);
    const lastPage = Number(extra?.last);
    const viewsPages = Math.min(pages, Number(lastPage || Infinity));



    useEffect(() => {
        (async () => {
            const response = await requestElements();
            setItems(response.data);
            setExtra(extra);
            setLoading(false);
        })();
    }, []);

    const startPagesEnumeration =  (p => p + viewsPages > lastPage ? lastPage - viewsPages + 1 : p)(((s: number) => s <= 0 ? 1 : s + 1)(page - Math.ceil(viewsPages / 2)));

    const handlePageClick = async (page: number) => {
        setLoading(true);
        const { data, extra } = await requestElements(page);
        setPage(page);
        setExtra(extra);
        setLoading(false);
        setItems(data);
    }

    return <div>
        { <Views items={items} isLoading={loading}/> }
        <div className={styles.pagination}>
            <button
                className={page === 1 ? styles.disabled : ''}
                onClick={() => handlePageClick(page - 1)}
            >
                предыдущая
            </button>
            {
                Array.from({length: viewsPages}).map((e, i) => {
                    const currentPage = startPagesEnumeration + i;
                    const isActive = currentPage === page;

                    return <button
                        className={[styles.pageButton, isActive ? styles.active : ''].join(' ')}
                        key={i}
                        onClick={() => handlePageClick(currentPage)}
                    >{ currentPage }</button>
                })
            }
            <button
                className={page === lastPage ? styles.disabled : ''}
                onClick={() => handlePageClick(page + 1)}
            >
                Следующая
            </button>
        </div>
    </div>
};