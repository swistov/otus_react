import React from 'react';


const ListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return <span style={style}>{ label }</span>
};

export default ListItem;