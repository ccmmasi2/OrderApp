const baseUrl = 'http://localhost:5143';
const urlGetCategories = '/api/Category/GetCategories';
const urlGetIdentificationTypes = '/api/Category/GetCategories';
const urlGetOrdersInformation = '/api/OrderHdr/GetOrdersInformation';
const urlGetProductsByCategoryId = '/api/Product/GetProductsByCategoryIdNoPag';
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
};

export const getProductsByCategoryId = async (categoryId) => {
  let url = `${baseUrl}${urlGetProductsByCategoryId}?categoryId=${categoryId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const newData = data.map(product => ({
      ...product,
      truncatedDescription: product.description.substring(0, 50) + '...'
    }));

    return newData;

  } catch (error) {
    console.error('Error getting Products by Category Id:', error);
    throw error;  
  }
}
  
export const createOrder = async (orderRequest) => {
  const url = `${baseUrl}${urlCreateOrder}`;
  
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
}