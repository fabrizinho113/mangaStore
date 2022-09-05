import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import db from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Cart.css';
import Modal from '../components/Modal/Modal';

const Checkout = () => {

    const { products, removeProduct, clear, getTotalPrice } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

    const [purchaseId, setPurchaseId] = useState("");

    const errorNotification = (message) => toast.error(message);


    const finishPurchase = () => {

        let customerName = document.getElementById("name").value;
        let customerMail = document.getElementById("email").value;
        let customerPhone = document.getElementById("phone").value;

        if (customerName !== "" &&
            customerMail !== "" ) {

                const purchaseOrder = {
                    buyer: {
                        name: customerName,
                        email: customerMail,
                        phone: customerPhone
                    },
                    items: [...products],
                    date: serverTimestamp(),
                    total: getTotalPrice()
                }
        
                const purchaseOrders = collection(db, "orders");
                addDoc(purchaseOrders, purchaseOrder)
                    .then((result) => {
                        setPurchaseId(result.id);
                    })
            } else {
                errorNotification("Please fill in all required fields");
            }
    }


    return(

        products.length === 0 ?

        <div className="cartEmpty">
            <h2>Oh! Your cart is empty. <br/>Click <Link to="/category/mangas"><u>here</u></Link> to purchase something!</h2>
            <img src="./assets/img/cart-empty.png" alt="cart img" />
        </div>
        

        :

        purchaseId !== "" ?
            <Modal title="PURCHASE COMPLETED!" >
                <div className="purchaseComplete" close={() => setShowModal()}>
                    <div>
                        <h2>Thank you for your purchase! Your order id is: {purchaseId}</h2>
                        <h3>Click <Link to="/" onClick={() => clear()}><u>here</u></Link> to continue!</h3>
                    </div>

                    <img src="./assets/img/purchase-completed.png" alt="smile face" />
                    
                </div>
            </Modal>
        
        :

        <>
           <div className="cart">
                        <h2>Your purchase</h2>
                        <div>
                            {products.map(product => (
                                <div key={product.id} className="cartProductCard">
                                    <img src={`/assets/img/${product.image}`} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{product.title}</h4>
                                        <div className="purchaseDetails">
                                            <span>Unit Price: ${product.price} ARS</span>
                                            <span>Quantity: {product.quantity}</span>
                                        </div>
                                        <button onClick={() => removeProduct(product.id)}>Remove item</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${getTotalPrice()}</h3>

                        <button onClick={() => setShowModal(true)}>Pay</button>
            </div>

            {showModal && 
                    <Modal title="CUSTOMER INFORMATION" close={() => setShowModal()}>
                        {purchaseId !== "" ? (
                            <>
                            </>
                        ) : (
                        <div className="cartForm">
                            <label htmlFor="name">Enter your name*</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="email">Enter your email*</label>
                            <input type="text" name="name" id="email" />
                            <label htmlFor="name">Enter your phone number</label>
                            <input type="text" name="name" id="phone" />
                            <button onClick={finishPurchase}>Complete purchase</button>
                        </div>

                        )}
                    </Modal>
                }
        </>
    )
}

export default Checkout