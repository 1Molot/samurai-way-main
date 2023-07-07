import React from 'react';
import styles from "./Paginator.module.css";

export type PaginatorType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}

const Paginator = (props: PaginatorType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((p: number) => {
                return <span key={p}
                             className={props?.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>
                           {p}
                       </span>
            })}
        </div>
    )
}

export default Paginator;