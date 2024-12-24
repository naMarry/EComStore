import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <section>
            <div className="container" style={{ padding: "40px 0" }}>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form className='p-4 border'>
                            <div className='mb-5'>
                                <h2 className='text-center'>Sign Up</h2>
                                <p className='text-center'>Please fill the information below to create new account</p>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='mb-1'>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>already have an account? <Link to='/signin'>Sign In</Link></p>
                            <Link to='/signin' type="submit" class="mt-5 w-100 btn btn-dark text-white">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
