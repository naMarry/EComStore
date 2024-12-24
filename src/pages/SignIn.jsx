import React from 'react';
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <section>
            <div className="container" style={{ padding: "40px 0" }}>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form className='p-4 border'>
                            <div className='mb-5'>
                                <h2 className='text-center'>Log In</h2>
                                <p className='text-center'>Please complete the information below before enter</p>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='mb-1'>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>don't have an account? <Link to='/signup'>Sign up</Link></p>
                            <Link to='/' type="submit" class="mt-5 w-100 btn btn-dark text-white">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
