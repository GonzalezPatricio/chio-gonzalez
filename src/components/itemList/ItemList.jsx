import React from 'react';
import Item from '../item/Item';

export const ItemList = ({items}) => {
    return (
        <React.Fragment>
            { items.map(item=> <Item item={item} key={item.id}/>)}
        </React.Fragment>
    )
}
