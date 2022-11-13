import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function CustomizedPagination({
  count,
  pageNumber,
  setPageNumber,
}) {
  const { items } = usePagination({
    count: count,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          /*  if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else */
          if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {selected ? (
                  <div className="w-10  border-b border-accentColor dark:border-accentColorDark border-2 mx-2"></div>
                ) : (
                  <div onClick={(e)=>setPageNumber(page)} className="w-10 border-b border-background2 dark:border-background2Dark opacity-80 border-2 mx-1"></div>
                )}
              </button>
            );
          } /* else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          } */

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
