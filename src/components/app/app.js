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
            this.createTodoItem('Drink coffe'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Have a lunch')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem,
            [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

       return items.filter((item) => {
            return  item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    render() {
        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className='top-panel d-flex'>
                    <SearchPanel
                        onSearchChange={ this.onSearchChange }/>
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }/>
                <ItemAddForm onItemAdded={ this.addItem }/>
            </div>
        );
    }
};
