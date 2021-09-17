import React from 'react';
import Item from '../item/Item';

export const ItemList = ({items}) => {
    return (
        <>
            { items.map(item=> <Item item={item} />) }
        </>
    )
}
