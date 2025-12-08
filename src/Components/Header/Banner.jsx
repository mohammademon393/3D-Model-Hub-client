import React from 'react';

const Banner = () => {
    return (
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/v4B83CwH/3d-Cover.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              The world best <span className="text-primary">3D Modal</span> Hub
            </h1>
            <p className="mb-5">
              Introduction. A collaborative modeling hub is a centralized data
              portal for modeling challenges. The structured data standards
              combined with robust hubverse software facilitate rapid
              validation, ensembling, visualization, and evaluation of model
              submissions.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;