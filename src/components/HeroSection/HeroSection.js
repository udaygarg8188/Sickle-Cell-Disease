import React from 'react';
import HeroBg from '../../img/hero-bg.jpg';

const HeroSection = () => {
    return (
        <div
            className="overflow-hidden"
            style={{
                background: `url(${HeroBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto py-24">
                <div className="w-full md:w-2/4">
                    <div className="glass-effect rounded-md my-12 p-8">
                        <h1 className="text-3xl md:text-6xl primary-color font-semibold my-4">
                            What is Sickle Cell Disease?
                        </h1>
                        <p className="text-white text-base md:text-xl leading-7">
                        Sickle cell disease (SCD) is a genetic blood disorder characterized by the production of abnormal hemoglobin (hemoglobin S), which causes red blood cells to become rigid and sickle-shaped. This leads to blockages in blood vessels, resulting in pain, anemia, and increased risk of infections and complications. It is inherited in an autosomal recessive pattern and primarily affects individuals of African, Mediterranean, and Middle Eastern descent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
