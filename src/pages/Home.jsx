import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Services />
            <Doctors />
            <Carousel />
            <AppointmentForm />
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default Home;
