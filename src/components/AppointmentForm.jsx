import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Send } from 'lucide-react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        department: 'General Checkup',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to backend
        // For now, we can redirect to WhatsApp with pre-filled message
        const message = `New Appointment Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nDepartment: ${formData.department}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/919755486999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        alert('Thank you! Redirecting to WhatsApp to confirm your appointment.'); // Optional feedback
    };

    return (
        <section id="appointment" className="md:py-20 py-10 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden lg:flex">
                    {/* Info Side */}
                    <div className="lg:w-5/12 bg-primary md:p-12 p-5 text-white flex flex-col justify-between">
                        <div>
                            <span className="bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-6">Book Online</span>
                            <h2 className="md:text-3xl text-xl font-bold lg:mb-6 mb-2">Schedule Your Appointment Today</h2>
                            <p className="text-sky-100 mb-12 md:text-lg text-sm">
                                Skip the waiting room. Book your slot online and get confirmation instantly via WhatsApp.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Emergency Cases</h4>
                                        <p className="text-sky-100">+91 9755486999</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Opening Hours</h4>
                                        <p className="text-sky-100">Mon - Sat: 8:00 AM - 9:00 PM Kansabel</p>
                                        <p className="text-sky-100">Friday Only: 8:00 AM - 9:00 PM Pathalgaon</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:mt-12 mt-4 lg:mt-0 pt-8 border-t border-white/20">
                            <p className="text-sm text-sky-100">
                                * Cancellation must be made 24 hours in advance.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-7/12 md:p-12 p-4">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Mohan Ram"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="+91 1234567890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-600"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                                    <div className="relative">
                                        <select
                                            name="department"
                                            className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none text-slate-600"
                                            value={formData.department}
                                            onChange={handleChange}
                                        >
                                            <option>General Checkup</option>
                                            <option>Laboratory Test</option>
                                            <option>Homoeopathic medicine</option>
                                            <option>Digital X ray</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Briefly describe your symptoms or reason for visit..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <button
    type="submit"
    className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
>
    <Send size={20} />
    Book Appointment via WhatsApp
</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
