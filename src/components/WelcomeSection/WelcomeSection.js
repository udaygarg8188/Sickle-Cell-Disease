import React from 'react';
import welcome from '../../img/welcome.png';
const WelcomeSection = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 px-8">
                        <img src={welcome} alt="Sickle Cell Awareness" />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h2>Understanding Sickle Cell Disease</h2>
                        <h2 className="text-4xl pt-4 primary-color font-bold">
                        Improving Lives Through Awareness and Treatment.
                        </h2>
                        <p className="py-4 leading-8 text-xl">
                        Sickle cell disease is a genetic blood disorder that affects millions worldwide. 
                        It is crucial to understand its impact and the importance of treatment options available.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
