import styles from "./CardProduct.module.css"


export const CardProduct = ({ product }) => {

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
                <button className={styles.cardButton}>Add to cart</button>
            </div>
        </div>
    )
}
