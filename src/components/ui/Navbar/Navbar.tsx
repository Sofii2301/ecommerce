import logo from "../../../assets/logo.png"
import cart from "../../../assets/cart.svg"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { CartModal } from "../CartModal"

export const Navbar = () => {
    const [showCartModal, setshowCartModal] = useState(false)

    const handleShowCartModal = () => {
        console.log("click")
        setshowCartModal(!showCartModal)
    }
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={logo} alt="React Logo" width={50} height={50}/>
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>2</p>
                <img src={cart} alt="Cart" onClick={handleShowCartModal} />
            </div>
            {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
        </div>
    )
}
