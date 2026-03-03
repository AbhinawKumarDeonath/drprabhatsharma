import React from 'react';
import { Stethoscope, Heart, Brain, Baby, Activity, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Stethoscope size={32} />,
        title: 'General checkup',
        description: 'Comprehensive health screening and preventive care for all ages.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: <Heart size={32} />,
        title: 'Pathology ',
        description: 'Expert care for heart health, including diagnostics and treatment.',
        color: 'bg-red-100 text-red-600',
    },
    {
        icon: <Brain size={32} />,
        title: 'Homoeopathic medicine',
        description: 'Safe and effective natural remedies for a wide range of health conditions.',
        color: 'bg-purple-100 text-purple-600',
    },
    
    {
        icon: <Activity size={32} />,
        title: 'Digital X ray',
        description: 'Accurate imaging for bone, joint, and muscle conditions and injuries.',
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: <Microscope size={32} />,
        title: 'Laboratory',
        description: 'Advanced diagnostic testing and pathology services on-site.',
        color: 'bg-orange-100 text-orange-600',
    },
];

const Services = () => {
    return (
        <section id="services" className="lg:py-20 py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Dedicated to Your Well-being</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We offer a wide range of specialized medical services to ensure comprehensive care for you and your family.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-3 place-items-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white lg:p-8 p-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="tel:+91 9755486999" className="inline-flex items-center text-primary font-medium mt-4 hover:underline text-sm">
                                Contact Now
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
