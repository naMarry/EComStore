import React from 'react'
import Table from './Table'
import Order from './Order'

export default function Content() {
    return (
        <section>
            <div className="container py-5">
                <h3 className='mb-3 fw-bold'>Your Cart</h3>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <Table />
                    </div>
                    <div className="col-12 col-md-5">
                        <Order />
                    </div>
                </div>
            </div>
        </section>
    )
}
