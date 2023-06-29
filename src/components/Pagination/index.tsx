import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import * as S from './style'

interface IProps {
  resultCharacters: any
  setCharactersPerPage: Function
}

const Pagination = ({ resultCharacters, setCharactersPerPage }: IProps) => {
  console.log('🚀 ~ Pagination ~ resultCharacters:', resultCharacters)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 16

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % resultCharacters?.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCharactersPerPage(resultCharacters?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(resultCharacters?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, resultCharacters])

  return (
    <S.PaginationContainer>
      <ReactPaginate
        previousLabel={<ArrowBackIosNewSharpIcon />}
        nextLabel={<ArrowForwardIosSharpIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </S.PaginationContainer>
  )
}

export default Pagination
