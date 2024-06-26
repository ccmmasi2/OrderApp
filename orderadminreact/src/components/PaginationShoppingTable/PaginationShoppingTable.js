import React, { useMemo, useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table'
import { ShoppingColumns } from './ShoppingColumns'
import '../../table.css';
import { FaTrash } from 'react-icons/fa';  
import MessageBar from '../shared/show-message/MessageBar';
import Modal from 'react-modal'; 
import GenerateOrder from '../shared/generate-order/generate-order-form';
import { useNavigate  } from 'react-router-dom';

export const PaginationShoppingTable = () => {
  const navigate = useNavigate ();

  const columns = useMemo(() => ShoppingColumns, []);
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const [showMessage, setMessage] = useState('');
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setData(parsedCartItems);
      setCartItems(parsedCartItems); 
    } 
  }, []); 

  useEffect(() => {
    getTotalQty();
    getTotalPrice(); 
  }, [cartItems]);

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
        setCartItems(newData);
        getTotalQty();
        getTotalPrice();
      } else {
        setMessage({ message: 'no stock', messageType: 'warning' }); 
      }
  };

  const handleDecrement = (index) => {
      const newData = [...data];
      if (newData[index].orderQty > 0) {
        newData[index].orderQty -= 1;
        setData(newData);
        setCartItems(newData);
        getTotalQty();
        getTotalPrice();
      }
  };

  const handleInputChange = (e, index) => {
    const newValue = parseInt(e.target.value) || 0;
    const newData = [...data];
    newData[index].orderQty = newValue;
    setData(newData);
  }; 

  const removeItem = (product) => { 
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const confirmation = window.confirm(`Are you sure you want to remove "${product.name}" from the cart?`);
      if (confirmation) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        setData(updatedCartItems);
        getTotalQty();
        getTotalPrice();
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setMessage({ message: 'Item removed', messageType: 'success' }); 
      }
    }
  };

  const getTotalQty = () => { 
    let _totalQty = 0;
    for (const item of cartItems) {
      _totalQty += item.orderQty;
    }
    setTotalQty(_totalQty);
  }; 

  const getTotalPrice = () => { 
    let _totalPrice = 0;
    for (const item of cartItems) {
      _totalPrice += item.price * item.orderQty;
    }
    setTotalPrice(_totalPrice);
  }; 

  const handleGenerateOrder = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);  
    navigate('/Catalog');
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
                  else if(cell.column.id === 'delete') {
                    return <td {...cell.getCellProps()}>
                              <button   >
                                <FaTrash size={20}
                                onClick={() => removeItem(row.original)} />
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
      <br></br>
      <div className="separator"></div>
      <div className="Totals">
        <div>Total Qty: {totalQty} </div>
        <div>Total: {totalPrice} </div>
        <button className="button"
                onClick={handleGenerateOrder} >
                Create order
        </button> 
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Generate Order Modal"
        ariaHideApp={false} 
        style={{
          content: {
            width: '600px',
            height: '500px',
            margin: 'auto',  
            overflow: 'auto',  
          },
        }}
      >
        {}
        <GenerateOrder
          totalQty={totalQty}
          totalSum={totalPrice}
          cartItems={cartItems}
          closeModal={closeModal}
        />
      </Modal>
    </>
  )
}