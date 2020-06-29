import React, { Component } from 'react';

class QuoteForm extends Component {

    state = {
        // An object of mock customers
        customerObject: {
            cust001: {
                customerName: 'mock_customer_001', customerDiscount: 35,
            },
            cust002: {
                customerName: 'mock_customer_002', customerDiscount: 30,
            },
        },
        // An object of mock parts
        partObject: {
            part001: {
                partName: '', partBrand: '', partDescription: '', partBasePrice: 10,
            },
        },
        // An object to store the current customer for the quote form
        activeCustomer: {},
    }

    // Basic form for inputting a single quote
    render() {
        const { customerObject } = this.state;
        const customerArray = Object.keys(customerObject);
        console.log(customerObject);
        console.log(customerArray);
        return <form>
            <label htmlFor="customer">Select Customer</label>
            <select name="customer" id="customer">
                <option value="customerListName">SELECT</option>
                {customerArray.map((customer) => {
                    console.log(customerObject[customer].customerName);
                    return <option value={customerObject[customer].customerName} onClick={() => this.handleCustomerSelect(customer)}>{customerObject[customer].customerName}</option>
                })}
            </select>
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter notes about this quote here..."></textarea>
            <label className="partQuantity">
                Quantity
        <input type="int" />
            </label>

        </form>;
    };

    handleCustomerSelect(customerId) {
        console.log(`setting ${customerId} as the active customer`)
        this.setState(
            this.activeCustomer = {
                [customerId]: this.state.customerObject[customerId]
            }
        )
    }

};

export default QuoteForm;

