import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    // sort of "componentDidMount", will run after screen is displayed
    useEffect(() => {
        dispatch(listProducts());

        return() => {
            //
        };
    }, [dispatch] )

    // if it's loading show "loading" message
    return loading? <div> Loading ...</div> :
    //if error, show error
    error? <div> { error }</div> :

    //if all OK, display the home screen:
     <ul className="products">
        {
            products.map(product =>
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product1" />
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product._id}> {product.name} 
                        </Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} stars ({product.numReviews} reviews)</div>
                    </div>
                </li>
            )
        }

    </ul>
}

export default HomeScreen;