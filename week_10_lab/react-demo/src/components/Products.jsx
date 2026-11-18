const products = [
    { id: 1, title: "Product 1", price: 19.99 },
    { id: 2, title: "Product 2", price: 29.99 },
    { id: 3, title: "Product 3", price: 39.99 }
];

export default function Products() {
    return (
        <>
            <section>
                {products.map(product => (
                    <ul>
                        <li key={product.id}>{product.title} - ${product.price}</li>
                    </ul>
                ))}
            </section>
        </>
    );
}