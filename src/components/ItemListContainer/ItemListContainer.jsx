import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({titulo}) => {

const [products, setProducts] = useState ([]);

useEffect (() => {
    fetch("/data/products.json")
    .then((res) => {
        if(!res.ok){
            throw new Error("Ocurrió un problema en tu búsqueda de producto");
        } 
        return res.json();
    })
    .then((data) => {
        setProducts(data)
    } )
    .catch((err)  => {
        console.log(err);
    });
}, []);

return (
    <section>
        <h1>{titulo}</h1>

       <ItemList lista={products} />
    </section>
);

};