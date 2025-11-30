const BASE_URL = "https://691f5a4631e684d7bfc978b9.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
    });
    if (!res.ok) {
        throw new Error("Error al crear el producto");
    }
    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;  
    if (category) {
        url = `${BASE_URL}?category=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al obtener los productos");
    }   
    const result = await res.json();
    return result;
};

//Traigo producto por ID
export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }   
    return await res.json();
};