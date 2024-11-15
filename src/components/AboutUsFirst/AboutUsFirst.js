import React from 'react';
import image from '../../img/about-first.jpg';
import geneTherapyImage from '../../img/gene-therapy.jpg';
import boneMarrowImage from '../../img/bone-marrow.jpg';
import hydroxyureaImage from '../../img/hydroxyurea.jpg';

const AboutUsFirst = () => {
    return (
        <div>
            <div className="container w-10/12 mx-auto">
                <div className="md:flex items-center">
                    <div className="md:w-2/5 py-10 shadow border rounded-3xl ">
                        <img
                            className="rounded-3xl mx-auto w-full md:w-10/12 h-auto"
                            src={image}
                            alt="Curing Sickle Cell Disease"
                        />
                    </div>
                    <div className="md:w-1/2 md:px-16">
                        <h2 className="text-2xl md:text-4xl pt-4 primary-color font-bold">
                            Curing Sickle Cell Disease
                        </h2>
                        <p className="py-4 text-xl text-justify md:text-base">
                            Sickle cell disease is a genetic blood disorder that affects millions worldwide. 
                            While there is currently no universal cure, various treatment options can help manage symptoms and improve quality of life.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container w-10/12 mx-auto mt-10">
                <h2 className="text-3xl primary-color font-bold text-center">Treatment Techniques</h2>
                <div className="md:flex items-center mt-8 " style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                    <div className="md:w-1/3 py-5">
                        <img
                            className="rounded-3xl mx-auto w-10/12"
                            src={geneTherapyImage}
                            alt="Gene Therapy"
                        />
                        <h3 className="text-xl font-bold text-center mt-2">Gene Therapy</h3>
                        <p className="text-justify">
                            Gene therapy aims to correct the underlying genetic defect in sickle cell disease. 
                            This innovative approach involves modifying the patient's own stem cells to produce healthy hemoglobin.
                        </p>
                    </div>
                    <div className="md:w-1/3 py-5">
                        <img
                            className="rounded-3xl mx-auto w-10/12"
                            src={boneMarrowImage}
                            alt="Bone Marrow Transplant"
                        />
                        <h3 className="text-xl font-bold text-center mt-2">Bone Marrow Transplant</h3>
                        <p className="text-justify">
                            A bone marrow transplant can potentially cure sickle cell disease by replacing the patient's bone marrow with healthy marrow from a compatible donor.
                            This procedure is most effective in younger patients with severe disease.
                        </p>
                    </div>
                    <div className="md:w-1/3 py-5">
                        <img
                            className="rounded-3xl mx-auto w-10/12"
                            src={hydroxyureaImage}
                            alt="Hydroxyurea Treatment"
                        />
                        <h3 className="text-xl font-bold text-center mt-2">Hydroxyurea Treatment</h3>
                        <p className="text-justify">
                            Hydroxyurea is a medication that can reduce the frequency of pain crises and acute chest syndrome by increasing fetal hemoglobin levels in the blood.
                            It is often used as a long-term treatment option.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsFirst;
