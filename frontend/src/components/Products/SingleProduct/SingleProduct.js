import styles from "./SingleProduct.module.css"

export default function SingleProduct({ product }) {
    const { product_name, description, price, in_stock, tracking_id, img_url } = product;
    return (
        <div className={styles.box}>
            <aside>
                <img src={img_url} alt={product_name} />
            </aside>
            <aside>
                <p><b>{product_name}</b></p>
                <p><small>{description}</small></p>
               
                <p><small>price:${price}</small></p>
               
                <p styles ={{
                    color: in_stock ? 'green' : 'red'
                }}><small>{in_stock?'In stock' : 'Out of stock'}</small></p>
                <p>{tracking_id}</p>
            </aside>
        </div>
    )
}