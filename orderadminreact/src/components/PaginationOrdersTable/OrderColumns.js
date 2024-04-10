import { format } from 'date-fns'

export const OrderColumns = [
  {
    Header: 'Order ID',
    accessor: 'id',
    sticky: 'left'
  },
  {
    Header: 'Date',
    accessor: 'orderDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Identification type',
    accessor: 'identificationType',
    sticky: 'left'
  },
  {
    Header: 'User identification',
    accessor: 'identification',
    sticky: 'left'
  }, 
  {
    Header: 'User name',
    accessor: 'completeName'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Phone number',
    accessor: 'phoneNumber'
  },
  {
    Header: 'Shipping address',
    accessor: 'shippingAddress'
  },
  {
    Header: 'Qty',
    accessor: 'totalQty'
  },
  {
    Header: 'Price',
    accessor: 'totalPrice',
    Cell: ({ value }) => {
      return parseFloat(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
    }
  },
]
 