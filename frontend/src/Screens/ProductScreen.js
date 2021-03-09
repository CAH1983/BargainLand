import React from 'react';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(elem => Number(elem._id) === Number(props.match.params.id));
    return <div>
        <h1>{product.name}</h1>
    </div>
}

export default ProductScreen;