import "./phonecases.css";
import { CartContext } from "../Contexts/CartContext";
import { useContext, useState } from "react";
const PhonecasesCard = (props) => {
    const {id, name, category, description, price, imageUrl} = props;
    const {addToCart, setTotal} = useContext(CartContext);
    const [isAdded, setAdded] = useState(false);
    const handleClick=() => {
        setAdded(true);
        const newItems={
            name: name, 
            price: price, 
            imageUrl: imageUrl,
        };
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
    };
    return ( 
        <>
        <section className="phonecases">
            <div className="phonecases-info">
                <p> {name} </p>
                <p> {category} </p>
            </div>
            <div className="phonecases-img-container">
                <img className="phonecases-img" src={imageUrl} alt={'picture of: ${name}'}></img>
            </div>
            <div className="phonecases-description">{description}</div>
            <div className="phonecases-price">{price}$</div>
            {isAdded ? (
                <button className="phonecases-btn-disabled">ADDED</button>
            ): (
            <button className="phonecases-btn" onClick={handleClick}>ADD TO CART</button> )}
        </section>
        </>
     );
}
 
export default PhonecasesCard;