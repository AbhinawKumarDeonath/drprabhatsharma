import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">+</span>
                            </div>
                            <span className="font-bold text-2xl text-white">Dr.Prabhar Sharma</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Providing advanced medical care with compassion and expertise. Your health is our priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/drprabhat.sharma.9" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                         
                            <a href="https://www.instagram.com/prabhu_parashar/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                           
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-slate-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#doctors" className="text-slate-400 hover:text-primary transition-colors">Doctors</a></li>
                            <li><a href="#appointment" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">General checkup</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Pathology</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Homoeopathic medicine</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Digital X ray</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Laboratory</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span>Homoeopathy Clinic 
Neem chauk, <br/> bagicha road, kansabel </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span>+91 9755486999</span>
                            </li>
                           
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Dr. Prabhar Sharma Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
