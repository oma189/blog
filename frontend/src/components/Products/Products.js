import { data } from "../../utility/data"
import SingleProduct from "./SingleProduct/SingleProduct"
import styles from "./Products.module.css"

export default function Products() {

    return (
        <div>

            
            <div  className={styles.container}>
                {
                    data.map(product => {
                        return <SingleProduct product={product} />
                    })
                }
            </div>
        </div>
    )
}