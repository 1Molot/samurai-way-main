import classnames from 'classnames';
import React, {useState} from 'react';
import styles from "./Paginator.module.css";

export type PaginatorType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize: number //
}

const Paginator = (props: PaginatorType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber -1 ) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber -1)}}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p: number) => {
                return <span className={classnames({
                [styles.selectedPage]: props.currentPage === p
                },styles.pageNumber) }
                            key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator;