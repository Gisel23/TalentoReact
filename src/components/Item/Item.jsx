import { Link } from "react-router-dom";
export const Item = ({name, price, description, imageUrl, children}) => {
    return (
       
        <article>
            <img src={imageUrl} alt={description} />
            <h2>{name}</h2>
            <p>Precio: ${price}</p>
            <p>Descripción: {description}</p>
            {children}
        </article>

    );
};