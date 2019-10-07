import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import MenuPanel from "./components/menu-panel";
import FilterLeft from "./components/filter-left";
import ListItem from "./components/list-item";

const App = () => {

    const todoData = [
        { label: 'Drink coffe', important: false },
        { label: 'Make awesome app', important: true },
        { label: 'Have a lunch', important: false },
    ]

    return (
    <div>
        <MenuPanel/>
        <FilterLeft/>
        <SearchPanel/>
        <li>
            <ListItem label={'Some text'}/>
        </li>
        <li>
            <ListItem label={'Build my App'}
                      important />
        </li>
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
