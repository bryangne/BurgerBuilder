import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // props.ingredients is in object format, not array
    // use keys and map to transform into an array
    
    componentDidUpdate() {
        // console.log('[OrderSummary] DidUpdate');
    }
    
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(key => {
            return <li key={key}>
                        <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                    </li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Price: {this.props.totalPrice.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
    
};

export default OrderSummary; 