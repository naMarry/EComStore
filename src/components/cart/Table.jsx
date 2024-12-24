import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function Table() {

    const {
        selectedProducts,
        handleRemoveCart,
        handleDecreaseCart,
        handleIncreaseCart,
        selectedItems
    } = useContext(ProductContext);

    return (
        <table className='w-100'>
            <tbody>
                {selectedProducts.map((product, index) => (
                    <tr key={index}>
                        <td style={{ cursor: 'pointer' }} onClick={() => handleRemoveCart(product.id)}><i class="bi bi-x-circle text-danger fs-4"></i></td>
                        <td style={{ padding: '10px 0' }}><img src={product.image} alt="" className='object-fit-cover ' style={{ width: '100px', height: '120px' }} /></td>
                        <td style={{ padding: '10px 0' }} className='w-25'>{product.title}</td>
                        <td style={{ padding: '10px 0' }}>
                            <div className="d-flex gap-3">
                                <span style={{ cursor: 'pointer' }} onClick={() => handleDecreaseCart(product.id)}>-</span>
                                <span>{selectedItems[product.id]}</span>
                                <span style={{ cursor: 'pointer' }} onClick={() => handleIncreaseCart(product.id)}>+</span>
                            </div>
                        </td>
                        <td style={{ padding: '10px 0' }}>{product.price}$</td>
                        <td style={{ padding: '10px 0' }}>{selectedItems[product.id] * product.price}$</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

