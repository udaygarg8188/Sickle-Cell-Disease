import React from 'react';
import useService from '../../../hooks/useService';
import SingleService from '../../SingleService/SingleService';

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Sickle Awareness Campaign",
            description: "Join us in raising awareness about sickle cell disease and its impact on individuals and families.Our campaign focuses on educating the community about sickle cell disease, its symptoms, and the importance of early diagnosis and treatment. We organize community events, distribute educational materials, and collaborate with local organizations to spread awareness.",
            image: "https://i.ibb.co/6rr8Ryr/medical-equipment.png",
            detailDesc: "Our campaign focuses on educating the community about sickle cell disease, its symptoms, and the importance of early diagnosis and treatment. We organize community events, distribute educational materials, and collaborate with local organizations to spread awareness."
        },
        {
            id: "02",
            title: "Support for Sickle Cell Patients",
            description: "Providing resources and support for patients living with sickle cell disease.We offer support groups, counseling, and resources to help patients manage their condition and improve their quality of life. Our trained professionals provide guidance on coping strategies, pain management, and navigating healthcare systems.",
            image: "https://i.ibb.co/YbDv4Qn/healthcare.png",
            detailDesc: "We offer support groups, counseling, and resources to help patients manage their condition and improve their quality of life. Our trained professionals provide guidance on coping strategies, pain management, and navigating healthcare systems."
        },
        {
            id: "03",
            title: "Fundraising for Research",
            description: "Help us fund research initiatives aimed at finding a cure for sickle cell disease.Your contributions will support vital research projects that aim to develop new treatments and ultimately a cure for sickle cell disease. We organize fundraising events, online campaigns, and partnerships with research institutions to drive innovation.",
            image: "https://i.ibb.co/7rPz3KL/medical-prescription.png",
            detailDesc: "Your contributions will support vital research projects that aim to develop new treatments and ultimately a cure for sickle cell disease. We organize fundraising events, online campaigns, and partnerships with research institutions to drive innovation."
        },
        {
            id: "04",
            title: "Community Health Workshops",
            description: "Participate in workshops that educate the community about sickle cell disease and health management.Our workshops provide valuable information on managing sickle cell disease, including pain management strategies, healthy lifestyle choices, and the importance of regular medical check-ups. These sessions are designed to empower patients and their families with knowledge and resources.",
            image: "https://i.ibb.co/ss6D9MC/doctor.png",
            detailDesc: "Our workshops provide valuable information on managing sickle cell disease, including pain management strategies, healthy lifestyle choices, and the importance of regular medical check-ups. These sessions are designed to empower patients and their families with knowledge and resources."
        }
    ];

    return (
        <div>
            <div className="container mx-auto py-12">
                <div className="pb-5 px-5 md:px-0">
                    <p className="text-lg text-center hidden md:block">
                        The Best Medical And General Practice Care!
                    </p>
                    <h2 className="text-4xl primary-color text-center font-bold my-4">
                        Sickle Cell Campaign Initiatives
                    </h2>
                    <h2 className="text-2xl text-center pb-8">
                        Supporting Our Community Through Awareness and Action.
                    </h2>
                </div>
                <div className="grid grid-cols-1 m-5 md:m-0 md:grid-cols-4 gap-4">
                    {services.map(service => (
                        <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
