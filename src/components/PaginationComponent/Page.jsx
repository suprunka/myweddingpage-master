import React, { useState } from 'react'

const Container = ({children, pageSizes}) =>{
    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState(children.length/pageSizes[0])
    const [sizesOfPage, setSizesOfPage] = useState(pageSizes)
    const [chosenSize, setChosenSize] = useState(pageSizes[0])
    return (
        <div className="cnt"> 
               {children.slice((page-1)* chosenSize, page*chosenSize)}

        </div>
    )
}

export default Container;