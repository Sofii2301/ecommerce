import styles from "./CartModal.module.css"
import close from "../../../assets/close.svg"
import type { FC } from "react"

interface Props {
    handleShowCartModal : () => void 
}

export const CartModal: FC<Props> = ({handleShowCartModal}) => {
  return (
    <div className={styles.modalContainer}>
        <button onClick={handleShowCartModal} className={styles.modalCloseButton}>
            <img src={close} alt="" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>
                        <button className={styles.modalButtonRemove}>-1</button>
                    </td>
                    <td>12</td>
                    <td>
                        <button className={styles.modalButtonAdd}>+1</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>Total: 400</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>Checkout</button>
        </div>
    </div>
  )
}
