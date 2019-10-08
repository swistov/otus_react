import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData:  [
            { label: 'Drink coffe', important: false, id: 1 },
            { label: 'Make awesome app', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {

            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            }
        });
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // not do that
            // todoData.splice(idx, 1);

            // [a, b, c, d, e]
            // [a, b,    d, e]
            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem }/>
                <ItemAddForm onItemAdded={ this.addItem }/>
            </div>
        );
    }
};
