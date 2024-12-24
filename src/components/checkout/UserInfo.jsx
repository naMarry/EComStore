import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function UserInfo() {
    const { totalPrice } = useContext(ProductContext);

    return (
        <div>
            <form >
                <div className="mt-5">
                    <h4 className='mb-4'>
                        <span className='opacity-75'>Shipping Information</span>
                        <span className='text-danger ms-2 mb-4'>*</span>
                    </h4>
                    <div className="mb-4">
                        <label className="form-label fw-medium">Full Name</label>
                        <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-medium">Specific Address</label>
                        <input
                            name="address"
                            type="text"
                            className="form-control"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">City</label>
                            <input
                                name="city"
                                type="text"
                                className="form-control"
                                placeholder="Enter city"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Postcode</label>
                            <input
                                name="postcode"
                                type="text"
                                className="form-control"
                                placeholder="Enter postcode"
                                required
                            />
                        </div>
                    </div>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Country</label>
                            <input
                                name="country"
                                type="text"
                                className="form-control"
                                placeholder="Enter country"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">State</label>
                            <input
                                name="state"
                                type="text"
                                className="form-control"
                                placeholder="Enter state"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="smsUpdate" />
                        <label className="form-check-label" htmlFor="smsUpdate">Please send me SMS shipping updates about my order</label>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className='mb-4'>
                        <span className='opacity-75'>Enter Contact Information</span>
                        <span className='text-danger ms-2 mb-4'>*</span>
                    </h4>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Phone Number</label>
                            <input
                                name="phone"
                                type="text"
                                className="form-control"
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
