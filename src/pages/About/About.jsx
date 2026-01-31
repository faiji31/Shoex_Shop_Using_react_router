import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-neutral text-neutral-content">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold tracking-tight">Step into the <span className="text-primary">Future.</span></h1>
            <p className="mb-5 opacity-80">
              We started in a small garage in 2024 with one goal: to redefine how the world walks. Style shouldn't compromise comfort.
            </p>
            <button className="btn btn-primary px-8">Our Journey</button>
          </div>
        </div>
      </div>

      {/* Stats Section - Visual Credibility */}
      <div className="flex justify-center -mt-10 px-4">
        <div className="stats shadow-2xl bg-base-100 w-full max-w-4xl border border-base-200">
          <div className="stat place-items-center">
            <div className="stat-title">Active Users</div>
            <div className="stat-value text-primary">50K+</div>
            <div className="stat-desc">Across 12 countries</div>
          </div>
          
          <div className="stat place-items-center border-x">
            <div className="stat-title">Shoes Delivered</div>
            <div className="stat-value text-secondary">1.2M</div>
            <div className="stat-desc">↘︎ 90 days performance</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Sustainability</div>
            <div className="stat-value text-accent">100%</div>
            <div className="stat-desc">Recycled Materials</div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-outline badge-lg mb-4 text-primary">Our Mission</span>
            <h2 className="text-4xl font-bold mb-6">Quality is not an act, it is a habit.</h2>
            <p className="text-lg text-base-content/70 leading-relaxed mb-6">
              Every pair of shoes we design goes through rigorous testing. We don't just sell footwear; we sell the confidence to move forward. Our team of designers and athletes collaborate to ensure every stitch serves a purpose.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1 bg-success rounded-full text-white">✓</div>
                <span>Premium Italian Leather</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-success rounded-full text-white">✓</div>
                <span>Ethically Sourced Components</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-success rounded-full text-white">✓</div>
                <span>Carbon Neutral Shipping</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=600" alt="Shoe design" className="rounded-box shadow-lg transform translate-y-8" />
            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600" alt="Warehouse" className="rounded-box shadow-lg" />
          </div>
        </div>
      </section>

      {/* Team/CTA Section */}
      <section className="bg-base-200 py-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Join the Community</h3>
          <p className="opacity-60">Follow our journey on social media for the latest drops.</p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="btn btn-ghost btn-circle">FB</button>
          <button className="btn btn-ghost btn-circle">IG</button>
          <button className="btn btn-ghost btn-circle">TW</button>
        </div>
      </section>
    </div>
  );
};

export default About;