const baseUrl = 'http://localhost:5143';
const urlGetCategories = '/api/Category/GetCategories';
const urlGetIdentificationTypes = '/api/Category/GetCategories';
const urlGetOrdersInformation = '/api/OrderHdr/GetOrdersInformation';
const urlGetProductsByCategoryId = '/api/Product/GetProductsByCategoryId';
const urlCreateOrder = '/api/OrderHdr/AddOrderRequest';

export const getCategories = async () => {
    const response = await fetch(baseUrl + urlGetCategories);
    const data = await response.json();
    return data;
}

export const getIdentificationTypes = async () => {
    const response = await fetch(baseUrl + urlGetIdentificationTypes);
    const data = await response.json();
    return data;
}

export const getOrdersInformation = async () => {
    const response = await fetch(baseUrl + urlGetOrdersInformation);
    const data = await response.json();
    return data;
}

export const getProductsByCategoryId = async (
    categoryId,
    page,
    sizePage,
    sorting
  ) => {
    let url = `${baseUrl}+${urlGetProductsByCategoryId}?categoryId=${categoryId}&page=${page}&sizePage=${sizePage}`;
  
    if (sorting) {
      url += `&sorting=${sorting}`;
    }
  
    try {
      const response = await fetch(url);
      const responseData = await response.json();
  
      const productsData = {
        currentPage: responseData.page,
        sizePage: responseData.pageSize,
        sorting: responseData.sorting,
        totalRecords: responseData.totalCount,
        data: responseData.data
      };
  
      return productsData;
    } catch (error) {
      console.error('Error getting Products by Category Id:', error);
      throw error;  
    }
  };
  
  export const createOrder = async (orderRequest) => {
    const url = `${baseUrl}+${urlCreateOrder}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderRequest)
      });
  
      const responseData = await response.json();
      return responseData.data;  
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;  
    }
  };
  
