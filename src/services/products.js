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
