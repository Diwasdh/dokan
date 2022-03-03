/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroBanner = () => {
    return (
        <div className="wrapper">
            <div className="container col-xxl-8 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-2">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="images/hero_img.png"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Girl"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            Save up to 25% in our
                        </h1>
                        <p className="lead">Exclusive Products</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start py-4">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2"
                            >
                                Know More{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
