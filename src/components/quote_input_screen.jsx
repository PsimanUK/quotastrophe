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
        partsObject: {
            part001: {
                partName: 'mock_small_tap', partBrand: 'Tappy', partDescription: 'Out smallest tap.', partBasePrice: 10,
            },
            part002: {
                partName: 'mock_big_tap', partBrand: 'Tappy', partDescription: 'Out biggest tap.', partBasePrice: 20,
            },
            part003: {
                partName: 'mock_small_sink', partBrand: 'Sinky', partDescription: 'A pretty small sink, for those with a tiny kitchen.', partBasePrice: 50,
            },
            part004: {
                partName: 'mock_medium_sink', partBrand: 'Sinky', partDescription: 'A medium-sized sink, for those with a bit more money and space', partBasePrice: 75,
            },
            part005: {
                partName: 'mock_large_sink', partBrand: 'Sinky', partDescription: 'A large sink, for large people.', partBasePrice: 100,
            },
            part006: {
                partName: 'mock_pipe', partBrand: 'Pipey', partDescription: 'A generic pipe, for all your piping needs.', partBasePrice: 5,
            },
        },
        // An object to store the current customer for the quote form
        activeCustomer: {},
        quotePartsObject: {
            partCode: '',
            partName: '', partBrand: '', partDescription: '', partBasePrice: 0,

        },
    }

    // Basic form for inputting a single quote
    render() {
        const { customerObject, partsObject, quotePartsObject } = this.state;
        const customerArray = Object.keys(customerObject);
        const partsArray = Object.keys(partsObject);

        console.log(customerObject);
        console.log(customerArray);
        return <form className="quotationForm">
            <section className="quoteFormTop">
                <section className="quoteDetails">
                    <label htmlFor="salesPerson">Sales Person</label>
                    <input name="salesPerson" type="text" />
                    <label htmlFor="customer">Select Customer</label>
                    <select name="customer" id="customer">
                        <option value="customerListName">SELECT</option>
                        {customerArray.map((customer) => {
                            console.log(customerObject[customer].customerName);
                            return <option value={customerObject[customer].customerName} onClick={() => this.handleCustomerSelect(customer)}>{customerObject[customer].customerName}</option>
                        })}
                    </select>
                    <label htmlFor="projectNumber">Project Number</label>
                    <input name="projectNumber" type="text" />
                    <label htmlFor="quoteDate">Quotation Date</label>
                    <input name="quoteDate" type="date" />
                    <label htmlFor="contractStart">Contract Start Date</label>
                    <input name="contractStart" type="date" />
                    <label htmlFor="contractEnd">Contract End Date</label>
                    <input name="contractEnd" type="date" />
                </section>
                <br className="quoteTopSpacer" />
                <section className="quoteNotes">
                    <label htmlFor="notes">Quotation Notes</label>
                    <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter notes about this quote here..."></textarea>
                </section>
            </section>
            <section className="quoteParts">
                <label className="partCode">Part Code</label>
                <select name="partCode" id="partCode">
                    <option value="partcodeBlank">SELECT</option>
                    {partsArray.map((part) => {

                        // console.log(customerObject[customer].customerName);
                        return <option value={part} onClick={() => this.handlePartSelection(part)}>{part}</option>
                    })}
                </select>
                <label className="partName">Name</label>
                <p type="text" >{quotePartsObject.partName}</p>
                <label className="partDescription">Description</label>
                <p type="text" >{quotePartsObject.partDescription}</p>
                <label className="partBrand">Brand</label>
                <p type="text" >{quotePartsObject.partBrand}</p>
                <label className="partQuantity">Quantity</label>
                <input type="int" />
                <label className="partBasePrice">Base Price</label>
                <p type="text" >{quotePartsObject.partBasePrice}</p>
            </section>
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

    handlePartSelection(part) {
        const { partsObject, quotePartsObject } = this.state;
        console.log(`Trying to set state with part ${part}`)
        console.log(`The name of the part is ${partsObject[part].partName}`)

        return this.setState({
            quotePartsObject: {
                partCode: part,
                partName: partsObject[part].partName,
                partBrand: partsObject[part].partBrand,
                partDescription: partsObject[part].partDescription,
                partBasePrice: partsObject[part].partBasePrice,
            }
        }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.quotePartsObject.partName !== prevState.quotePartsObject.partName) {
            console.log('State has changed...')
            console.dir(`The previous state was ${prevState.quotePartsObject.partName}`)
            console.dir(`Current state is ${this.state.quotePartsObject.partName}`)
        } else {
            console.log('The state has not changed...')
        }
    }

};

export default QuoteForm;

