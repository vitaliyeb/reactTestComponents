import React, {ReactElement, useState} from "react";


interface IProps {
    Views: React.FC<{ items: any }>;
    pages: number;
    requestElements: (...args: any[]) => void;
}

export const Pagination = ({ Views, pages }: IProps) => {

    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);

    const startPagesEnumeration =  (s => s <= 0 ? 1 : s + 1)(page - Math.floor(pages / 2));
    const handlePageClick = (page: number) => {

    }

    return <div>
        { <Views items={items}/> }
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