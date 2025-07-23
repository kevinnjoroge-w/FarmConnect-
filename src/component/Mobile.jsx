import React from 'react'

const Mobile = () => {
  return (
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get the FarmConnectMobile App</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Order fresh produce, manage subscriptions, and track deliveries on the go.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
                    <i className="fab fa-apple text-2xl mr-2"></i>
                    <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="font-bold">App Store</div>
                    </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
                    <i className="fab fa-google-play text-2xl mr-2"></i>
                    <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="font-bold">Google Play</div>
                    </div>
                </button>
            </div>
        </div>
    </section>
  );
};

export default Mobile;