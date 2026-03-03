import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Printer, ArrowLeft } from 'lucide-react';

const PatientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const { data } = await api.get(`/patients/${id}`);
                setPatient(data);
            } catch (error) {
                console.error("Error fetching patient", error);
            }
        };
        fetchPatient();
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    if (!patient) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 print:bg-white print:p-0">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:max-w-none">
                {/* Navigation - Hidden on Print */}
                <div className="p-6 bg-gray-100 flex justify-between items-center print:hidden">
                    <button onClick={() => navigate('/dashboard')} className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back
                    </button>
                    <button onClick={handlePrint} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                        <Printer className="h-4 w-4 mr-2" /> Print Prescription
                    </button>
                </div>

                <div className="p-8" id="printable-area">
                    {/* Header for Prescription */}
                    <div className="border-b-2 border-gray-800 pb-4 mb-6 flex justify-between items-end">
                        <div className="text-left">
                            <h1 className="text-3xl font-bold text-gray-900">Dr. Smith's Clinic</h1>
                            <p className="text-sm text-gray-600">General Physician | MBBS, MD</p>
                            <p className="text-sm text-gray-600">123 Health Street, Wellness City</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold">Ph: +1 234 567 890</p>
                            <p className="text-sm text-gray-600">Timing: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    {/* Patient Details Grid */}
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 print:bg-transparent print:border-gray-300 mb-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-gray-500 text-sm">Patient Name:</span>
                                <p className="font-semibold text-lg">{patient.name}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 text-sm">Date:</span>
                                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 text-sm">Age/Gender:</span>
                                <p className="font-semibold">{patient.age} / {patient.gender}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 text-sm">Contact:</span>
                                <p className="font-semibold">{patient.contact}</p>
                            </div>
                            <div className="col-span-2">
                                <span className="text-gray-500 text-sm">Address:</span>
                                <p className="font-semibold">{patient.address}</p>
                            </div>
                            <div className="col-span-2">
                                <span className="text-gray-500 text-sm">Medical Notes:</span>
                                <p className="font-medium text-gray-700">{patient.medicalHistory || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Prescription Area - Blank Space */}
                    <div className="min-h-[500px] border border-gray-300 rounded-md p-6 relative print:border-none">
                        <h3 className="text-xl font-bold border-b border-gray-300 inline-block mb-4">Rx</h3>
                        <div className="w-full h-full">
                            {/* Lines for writing (Optional, essentially just blank space) */}
                            <div className="space-y-12">
                                <div className="border-b border-gray-200 border-dashed"></div>
                                <div className="border-b border-gray-200 border-dashed"></div>
                                <div className="border-b border-gray-200 border-dashed"></div>
                                <div className="border-b border-gray-200 border-dashed"></div>
                                <div className="border-b border-gray-200 border-dashed"></div>
                                <div className="border-b border-gray-200 border-dashed"></div>
                            </div>
                        </div>

                        {/* Footer Signature */}
                        <div className="absolute bottom-10 right-10 text-center">
                            <div className="w-48 border-b border-gray-800 mb-2"></div>
                            <p className="font-bold text-gray-900">Dr. Smith Signature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
