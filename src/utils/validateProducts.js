export const validateProduct = (product, fileRequired=true) => {
const errors = {};
if (!product.name || product.name.trim() === "") {
    errors.name = "El nombre es obligatorio.";
}
if(!product.price || isNaN(product.price) || Number(product.price) <= 0) {
    errors.price = "El precio debe ser un número mayor a 0.";
}
if (!product.category || product.category.trim() === "") {
    errors.category = "La categoría es obligatoria.";       
}
if (fileRequired && !product.file) {
    errors.file = "Debes seleccionar una imagen.";    
}
return errors;

};