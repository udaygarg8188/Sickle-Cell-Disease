import React from 'react';
import AboutUsFirst from '../../AboutUsFirst/AboutUsFirst';
import AboutUsSecond from '../../AboutUsSecond/AboutUsSecond';

const AboutUs = () => {
    return (
        <div className="pb-24">
            <div className="py-12">
                <h2 className="text-center text-6xl">Treatments</h2>
            </div>
            <AboutUsFirst></AboutUsFirst>
            {/* <AboutUsSecond></AboutUsSecond> */}
        </div>
    );
};

export default AboutUs;
