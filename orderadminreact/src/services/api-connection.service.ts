const baseUrl = 'http://localhost:5143';
const urlGetCategories = '/api/Category/GetCategories';

export const listCategories = async () => {
    const response = await fetch(baseUrl + urlGetCategories);
    const data = await response.json();
    return data;
}
