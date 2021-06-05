import React, { Component } from 'react';

import SHOP_DATA from './Shop_data.js';
import CollectionPreview from '../../Components/Collection-preview/Collection-preview'


class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    };


    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;