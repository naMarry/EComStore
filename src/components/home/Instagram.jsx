import React from 'react';
import assets from '../../assets/assets'

export default function Instagram() {
  return (
    <section className="instagram spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="instagram__pic">
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst1} alt="" />
                        </div>
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst2} alt="" />
                        </div>
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst3} alt="" />
                        </div>
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst4} alt="" />
                        </div>
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst5} alt="" />
                        </div>
                    <div
                        className="instagram__pic__item set-bg">
                            <img src={assets.inst6} alt="" />
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="instagram__text">
                    <h2>Instagram</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3>#Male_Fashion</h3>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
