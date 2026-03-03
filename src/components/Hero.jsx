import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 to-sky-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 lg:mb-0 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-primary font-medium text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Accepting New Patients
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Your Health, Our <br className="hidden lg:block" />
                            <span className="text-primary">Top Priority</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Experience world-class healthcare with our team of expert doctors, including our homeopathy
                            specialist Dr. Prabhat Sharma. We provide comprehensive medical services tailored to your needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#appointment" className="bg-primary hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 group">
                                Book Appointment
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="tel:+919755486999" className="bg-white font-extrabold hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full  transition-all hover:border-primary/30 hover:text-primary flex items-center justify-center">
                              <Phone size={18} className="mr-2  font-bold" /> Call Now
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-2 lg:gap-8 text-slate-500 text-sm font-medium">
                           
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-secondary" />
                                <span className='text-xs'>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-secondary" />
                                <span className='text-xs'>Modern Clinic</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-secondary" />
                                <span className='text-xs'>Expert Doctors</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Placeholder for doctor image - In real implementation, replace src */}
                            <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center text-slate-400">
                                {/* Simulated Doctor Image */}
                                <img src="/prabhat.jpg" alt="Dr. Prabhat Sharma" className="w-full h-full object-cover" />
                                <div className=" relative w-full h-full bg-gradient-to-tr from-sky-100 to-white flex items-end justify-center pt-10">
                                    <span className="text-9xl absolute left-[-68px] bottom-[-76px] transform -translate-x-1/2 -translate-y-1/2 opacity-20">🧑‍⚕️</span>
                                </div>
                            </div>

                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg shadow-slate-200/50 flex items-center gap-3 max-w-xs border border-white/50"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="font-bold">4.9</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Excellent Rating</p>
                                    <p className="text-xs text-slate-500">Based on 2k+ reviews</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
