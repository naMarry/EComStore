import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Error() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container py-5">
          <div className="d-flex justify-content-center align-items-end">
            <h3 className='mb-0 fw-bold'>Opp! Error 404. Page can't be found</h3>
            <i class="bi bi-emoji-frown fs-3 ms-3"></i>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
