import { useState } from 'react'
import { Pagination, PaginationItem } from '@mui/material'

const useUiPagination = (params: {
  pages: number
  className?: string
  shapeClassName?: string
  variant?: 'outlined'
  shape?: 'rounded'
  size?: 'small' | 'medium' | 'large'
  onChange?: () => void
}) => {
  const [page, setPage] = useState(1)

  const onChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    params.onChange && params.onChange()
  }

  const render = () => {
    return (
      <UiPagination
        page={page}
        pages={params.pages}
        className={params.className}
        variant={params.variant}
        shape={params.shape}
        size={params.size}
        shapeClassName={params.shapeClassName}
        onChange={onChange}
      />
    )
  }

  return { page, setPage, render }
}

export default useUiPagination

type TUiPagination = {
  pages: number
  page: number
  variant?: 'outlined'
  shape?: 'rounded'
  size?: 'small' | 'medium' | 'large'
  className?: string
  shapeClassName?: string
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export const UiPagination: React.FC<TUiPagination> = (props) => {
  return (
    <>
      {props.pages > 1 && (
        <div className={`${props.className}`}>
          <Pagination
            count={props?.pages}
            page={props?.page}
            variant={props.variant}
            shape={props.shape}
            size={props.size}
            onChange={props?.onChange}
            renderItem={(item) => {
              console.log(item)
              return (
                <PaginationItem
                  className={['previous', 'next', 'end-ellipsis'].includes(item.type) ? '' : props.shapeClassName}
                  {...item}
                />
              )
            }}
          />
        </div>
      )}
    </>
  )
}
