export default function ProductCard({ title, price }) {
return (
    <article className="card">
        <h3>{title}</h3>
        <p>${price}</p>
    </article>
)}  
