export const ProductColumns = [
  {
    Header: 'Product code',
    accessor: 'productCode',
    sticky: 'left'
  },
  {
    Header: 'Name',
    accessor: 'name',
    sticky: 'left'
  },
  {
    Header: 'Description',
    accessor: 'truncatedDescription',
    sticky: 'left'
  }, 
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ value }) => {
      return parseFloat(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
    }
  },
  {
    Header: 'Stock',
    accessor: 'stockQty'
  },
  {
    Header: 'Order qty',
    accessor: 'orderQty'
  },
  {
    Header: 'Add to cart',
    accessor: 'addToCart'
  },
]
 