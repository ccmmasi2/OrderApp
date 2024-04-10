import React, { useMemo, useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table'
import { ProductColumns } from './ProductColumns'
import '../../table.css';
import { getProductsByCategoryId } from '../../services/ApiConnectionService';
import { FaShoppingCart } from 'react-icons/fa';  
import MessageBar from '../shared/show-message/MessageBar';

export const PaginationProductTable = ({ categoryId }) => {
  const columns = useMemo(() => ProductColumns, []);
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const [showMessage, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProductsByCategoryId(categoryId);
        setData(productsData);
      } catch (error) {
        const errorMessage = `Error fetching products: "${error}"`;
        setMessage({ message: errorMessage, messageType: 'error' }); 
      }
    };

    fetchData();
  }, [categoryId]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state;

  const handleIncrement = (index) => {
      const newData = [...data];
      const currentQty = newData[index].orderQty;
      const stockQty = newData[index].stockQty;
      
      if (currentQty < stockQty) {
        newData[index].orderQty += 1;
        setData(newData);
      } else {
        setMessage({ message: 'No stock', messageType: 'warning' }); 
      }
  };

  const handleDecrement = (index) => {
      const newData = [...data];
      if (newData[index].orderQty > 0) {
        newData[index].orderQty -= 1;
        setData(newData);
      }
  };

  const handleInputChange = (e, index) => {
    const newValue = parseInt(e.target.value) || 0;
    const newData = [...data];
    newData[index].orderQty = newValue;
    setData(newData);
  }; 

  const addToCart = (product) => {
    if (product.orderQty > 0 && product.orderQty <= product.stockQty) {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    
        if (existingProductIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingProductIndex].orderQty = product.orderQty;
          setCartItems(updatedCartItems);
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
          const productToAdd = { ...product };
          const updatedCartItems = [...cartItems, productToAdd];
          setCartItems(updatedCartItems);
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
        }
  
        const infoMessage = `Product "${product.name}" - "${product.productCode}" with amount "${product.orderQty}" added to Cart`;
        setMessage({ message: infoMessage, messageType: 'success' }); 
      } else {
        setMessage({ message: 'Invalid amount', messageType: 'error' }); 
    }
  };

  return (
    <>
      <MessageBar message={showMessage.message} messageType={showMessage.messageType} />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if(cell.column.id === 'truncatedDescription') {
                    return (
                      <td {...cell.getCellProps()} title={row.original.description}>
                        {cell.render('Cell')}
                      </td>
                    );
                  } 
                  else if(cell.column.id === 'orderQty') {
                    return <td {...cell.getCellProps()}>
                              <button onClick={() => handleDecrement(row.index)} 
                                      className={`button ${row.original.orderQty === 0 ? 'error-border' : ''}`}
                                      disabled={row.original.orderQty === 0}>
                                <span className="label">-</span>
                              </button>
                              <input type="text" 
                                      value={cell.value} 
                                      onChange={(e) => handleInputChange(e, row.index)}
                                      className="numberfield"  />
                              <button onClick={() => handleIncrement(row.index)} 
                                      className={`button ${row.original.orderQty > row.original.stockQty ? 'error-border' : ''}`}
                                      disabled={row.original.orderQty > row.original.stockQty}>
                                <span className="label">+</span>
                              </button>
                            </td>
                  }
                  else if(cell.column.id === 'addToCart') {
                    return <td {...cell.getCellProps()}>
                              <button onClick={() => addToCart(row.original)}  
                                className={`button ${row.original.orderQty === 0 || row.original.orderQty > row.original.stockQty ? 'error-border' : ''}`}
                                disabled={row.original.orderQty === 0 || row.original.orderQty > row.original.stockQty}>
                                <FaShoppingCart size={20} />
                              </button>
                            </td>
                  }
                  else {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}