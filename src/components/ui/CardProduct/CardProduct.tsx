import { useContext } from "react"
import styles from "./CardProduct.module.css"
import { CartContext } from "../../../context/CartContext"


export const CardProduct = ({ product }) => {
    const {dispatch} = useContext(CartContext)

    const item = {
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: 1
    }

    const addToCart = (item) => {
        dispatch({type: "ADD_TO_CART", payload: item})
    }

    type CSSVariables = React.CSSProperties & {
    "--bg-image"?: string;
    };

    const style: CSSVariables = {
    "--bg-image": `url(${product.image})`,
    };

    return (
        <div 
            className={styles.cardContainer}
            style={style}
        >
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.species}</p>
                    <p className={styles.cardPrice}>price, <small>00</small></p>
                </div>
                <button className={styles.cardButton} onClick={() => addToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}
