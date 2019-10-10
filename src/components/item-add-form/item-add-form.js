import React, { Component } from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        console.log(event);
    };

    render() {
        return (
            <form className='item-add-form d-flex'
                    onSubmit={this.onSubmit}>
                <input type={'text'}
                        className={'form-rol'}
                        onChange={this.onLabelChange}
                        placeholder={'What need to be done'} />
                <button className={'btn btn-outline-secondary'}
                        onClick={() => this.props.onItemAdded('Hello world')}>
                    Add item
                </button>
            </form>
        )
    }
}