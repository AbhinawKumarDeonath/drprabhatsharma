import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const doctors = [
    
    {
        name: ' Homeopathy and pathology Labs',
        specialty: 'Neem chauk, bagicha road, kansabel ',
        image: '/kansabel.jpg',
    },
    {
        name: ' Homeopathy and pathology Labs',
        specialty: 'Pathalgaon ',
        image: '/pathalgaon.jpg',
    },
];

const Doctors = () => {
    return (
        <section id="doctors" className="md:py-20 py-10 bg-slate-50">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Team</span>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Branchs</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Experienced professionals dedicated to providing top-quality medical care.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="relative overflow-hidden ">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full  object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <div className="flex gap-4 text-white">
                                        <a href="https://www.facebook.com/drprabhat.sharma.9" target='_blank' className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                                        <a href="https://www.instagram.com/prabhu_parashar/" target='_blank' className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                                <p className="text-primary font-medium">{doctor.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
