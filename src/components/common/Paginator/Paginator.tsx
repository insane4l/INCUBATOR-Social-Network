import React from 'react'
import s from './Paginator.module.css'

const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    className={currentPage === p ? s.selected_page : ''}
                    onClick={() => onPageChanged(p)}>
                    {p}
                </span>
            ))}
        </div>
    )
}

export default Paginator


type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNum: number) => void
}