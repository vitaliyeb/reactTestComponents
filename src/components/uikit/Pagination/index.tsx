import {ReactElement} from "react";


interface IProps {
    children: ReactElement;
    handlePaginationClick: () => void;
    pages: number,
    page: number
}

export const Pagination = ({ children, pages, page }: IProps) => {


    const startPagesEnumeration =  (s => s <= 0 ? 1 : s + 1)(page - Math.floor(pages / 2));
    const handlePageClick = (page: number) => {

    }

    return <div>
        <div>
            { children }
        </div>
        <div>
            <button>предыдущая</button>
            {
                Array.from({length: pages}).map((e, i) => {
                    const currentPage = startPagesEnumeration + i;

                    return <button
                        key={i}
                        onClick={() => handlePageClick(page)}
                    >{ currentPage }</button>
                })
            }
            <button>Следующая</button>
        </div>
    </div>
};