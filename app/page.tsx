"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_CLINICS = [
  {
    id: 1,
    name: "Dr S K Jain Clinic & Ultrasound Centre",
    doctor: "Dr S K Jain",
    qualification: "Senior Physician & Specialist",
    specialization: "Cardiology",
    area: "Kutchery Road",
    address: "Avantika Market, Kutchery Rd, opposite Hathi Park, Raebareli, UP 229001",
    phone: "+91 90260 52105",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    isAvailableToday: true,
  },
  {
    id: 2,
    name: "Devati B.K. Memorial Medical & Cardiac Centre",
    doctor: "Cardiac Specialist",
    qualification: "MD Cardiology / General Medicine",
    specialization: "Cardiology",
    area: "Degree College Chauraha",
    address: "Near Madhur Market, Canal Road, Degree College Chauraha, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 10:00 AM - 3:00 PM",
    isAvailableToday: true,
  },
  {
    id: 3,
    name: "Care and Cure Dental Clinic",
    doctor: "Dental Specialist",
    qualification: "BDS / MDS Dentistry",
    specialization: "Dentistry",
    area: "Degree College Chauraha",
    address: "Near Ashirwad Nursing Home, beside City Life Shopping Mall, Degree College Chauraha, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    isAvailableToday: true,
  },
  {
    id: 4,
    name: "Dr Hemant Clinic and Vaccination Center",
    doctor: "Dr Hemant",
    qualification: "General Practice & Child Vaccination Specialist",
    specialization: "General Physician",
    area: "Kutchery Road",
    address: "Kutchery Road, near Durga Market, Nirala Nagar, Raebareli, UP 229001",
    phone: "+91 98390 21346",
    opdHours: "Mon - Sat: 9:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    isAvailableToday: true,
  },
  {
    id: 5,
    name: "Rajshree Clinic (Dr. Rajesh Gupta)",
    doctor: "Dr Rajesh Gupta",
    qualification: "Cardiology & General Physician",
    specialization: "Cardiology",
    area: "Indira Nagar",
    address: "669P+523, Indira Nagar Awas Vikas Colony, Indira Nagar, Raebareli, UP 229001",
    phone: "+91 95982 40205",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM",
    isAvailableToday: true,
  },
  {
    id: 6,
    name: "Om Polyclinic (Dr Rajesh Shukla)",
    doctor: "Dr Rajesh Shukla",
    qualification: "General Physician",
    specialization: "General Physician",
    area: "Police Line Chauraha",
    address: "Near Shanti Nagar, Police Line Chauraha, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    isAvailableToday: true,
  },
  {
    id: 7,
    name: "Raebareli Heart Centre (Dr Rohit Hasani)",
    doctor: "Dr Rohit Hasani",
    qualification: "Cardiologist",
    specialization: "Cardiology",
    area: "Civil Lines",
    address: "Opposite JJ Plaza Complex, Raebareli, UP 229001",
    phone: "+91 84019 69159",
    opdHours: "Mon - Sat: 10:00 AM - 3:00 PM, 5:00 PM - 8:30 PM",
    isAvailableToday: true,
  },
  {
    id: 8,
    name: "Ashirwad Medical Center",
    doctor: "Dr Geeta Kumari",
    qualification: "MBBS, DGO (Gynaecologist)",
    specialization: "Gynaecology & Obstetrics",
    area: "Kutchery Road",
    address: "857, Kutchery Road, Degree College Chauraha, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 11:00 AM - 3:00 PM",
    isAvailableToday: true,
  },
  {
    id: 9,
    name: "Dr Shashank Chaudhary (Rama Cancer Clinic)",
    doctor: "Dr Shashank Chaudhary",
    qualification: "MBBS, MS (Oncosurgery - 7+ Yrs Exp)",
    specialization: "Oncosurgery",
    area: "Degree College Chauraha",
    address: "Mahakal Plaza, Degree College Chauraha, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 11:00 AM - 4:00 PM",
    isAvailableToday: true,
  },
  {
    id: 10,
    name: "Dr Kranti Kumar Singh Clinic / Simhans Hospital",
    doctor: "Dr Kranti Kumar Singh",
    qualification: "General Physician",
    specialization: "General Physician",
    area: "Civil Lines",
    address: "551, Civil Line, near Fire Station, Nirala Nagar, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM",
    isAvailableToday: true,
  },
  {
    id: 11,
    name: "Korean Skin Clinic",
    doctor: "Dermatology Specialist",
    qualification: "Skin & Cosmetology Specialist",
    specialization: "Dermatology",
    area: "Civil Lines",
    address: "848-A Mahiraj Plaza, Civil Lines, Manika Road, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 11:00 AM - 4:00 PM",
    isAvailableToday: true,
  },
  {
    id: 12,
    name: "Aarogya Medical Centre (Dr C.S. Rathore)",
    doctor: "Dr C.S. Rathore",
    qualification: "General Physician",
    specialization: "General Physician",
    area: "Rana Nagar",
    address: "Kanpur Road, below Bank of Baroda, Rana Nagar, Raebareli, UP 229001",
    phone: "+91 94500 00000",
    opdHours: "Mon - Sat: 10:00 AM - 2:00 PM",
    isAvailableToday: true,
  },
];

const SPECIALIZATIONS = [
  "All",
  "Cardiology",
  "Dentistry",
  "Dermatology",
  "General Physician",
  "Gynaecology & Obstetrics",
  "Oncosurgery",
];

const AREAS = [
  "All",
  "Civil Lines",
  "Degree College Chauraha",
  "Indira Nagar",
  "Kutchery Road",
  "Police Line Chauraha",
  "Rana Nagar",
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");
  const [selectedArea, setSelectedArea] = useState("All");

  const filteredClinics = INITIAL_CLINICS.filter((clinic) => {
    const matchesSearch =
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpec = selectedSpec === "All" || clinic.specialization === selectedSpec;
    const matchesArea = selectedArea === "All" || clinic.area === selectedArea;

    return matchesSearch && matchesSpec && matchesArea;
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-blue-700 text-white py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold">Raebareli Health Discovery</h1>
            <p className="mt-1 text-blue-100 text-xs md:text-sm">
              One city, one platform — find doctors and clinics across Raebareli instantly.
            </p>
          </div>
          <Link
            href="/admin"
            className="bg-blue-900 hover:bg-blue-950 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg border border-blue-400 shadow transition-all whitespace-nowrap shrink-0"
          >
            + Admin Portal
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Search Doctor, Clinic, or Specialization
            </label>
            <input
              type="text"
              placeholder="e.g. Dr S K Jain, Cardiology, Kutchery Road..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Medical Specialization
              </label>
              <select
                value={selectedSpec}
                onChange={(e) => setSelectedSpec(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-800 bg-white"
              >
                {SPECIALIZATIONS.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Locality / Area in Raebareli
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-800 bg-white"
              >
                {AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Verified Raebareli Clinics ({filteredClinics.length})
        </h2>

        {filteredClinics.length === 0 ? (
          <div className="bg-white p-8 text-center rounded-xl border border-gray-200">
            <p className="text-gray-500">No clinics found matching your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredClinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
                        {clinic.specialization}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">{clinic.name}</h3>
                      <p className="text-sm font-semibold text-blue-900 mt-0.5">{clinic.doctor}</p>
                      <p className="text-xs text-gray-500">{clinic.qualification}</p>
                    </div>
                    {clinic.isAvailableToday && (
                      <span className="text-xs font-medium px-2 py-0.5 bg-green-100 text-green-800 rounded whitespace-nowrap">
                        Verified Listing
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                    <p>📍 {clinic.address}</p>
                    <p>⏰ {clinic.opdHours}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3 pt-2">
                  <a
                    href={`tel:${clinic.phone}`} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors" > Call Clinic </a> <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      clinic.name + " " + clinic.address
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}