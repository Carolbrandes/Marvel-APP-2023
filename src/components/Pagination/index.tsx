import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import * as S from './style'
import { ICharacter } from '@common/types/IglobalContext'

interface IProps {
  characters: ICharacter[]
  setCharactersPerPage: (value: ICharacter[]) => void
}

interface IEvent {
  selected: number
}

const Pagination = ({ characters, setCharactersPerPage }: IProps) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 15

  const handlePageClick = (event: IEvent) => {
    console.log('🚀 ~ file: index.tsx:26 ~ handlePageClick ~ event:', event)
    console.log('event.selected =>', event.selected)
    const newOffset = (event.selected * itemsPerPage) % characters?.length
    setItemOffset(newOffset)
  }

  useEffect(() => console.log('pagination render'))

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCharactersPerPage &&
      setCharactersPerPage(characters?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(characters?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, characters, setCharactersPerPage])

  return (
    <S.PaginationContainer data-component="pagination-PaginationContainer">
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
