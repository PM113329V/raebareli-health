"use client";

import { useState } from "react";
import Link from "next/link";

const ADMIN_PIN = "raebareli2026"; // Set your secret admin password here

export default function AdminPage() {
  const [pinInput, setPinInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    qualification: "",
    specialization: "General Physician",
    area: "Civil Lines",
    address: "",
    phone: "",
    opdHours: "",
  });

  const [submittedClinics, setSubmittedClinics] = useState<any[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry = {
      ...formData,
      id: Date.now(),
      isAvailableToday: true,
    };

    setSubmittedClinics([newEntry, ...submittedClinics]);
    setIsSuccess(true);

    // Reset Form
    setFormData({
      name: "",
      doctor: "",
      qualification: "",
      specialization: "General Physician",
      area: "Civil Lines",
      address: "",
      phone: "",
      opdHours: "",
    });

    setTimeout(() => setIsSuccess(false), 4000);
  };

  // Password Lock Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Authentication</h1>
            <p className="text-sm text-gray-500 mt-1">Enter your secret passkey to access entry portal</p>
          </div>

          {authError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm text-center">
              Incorrect password. Please try again.
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Admin Passkey
              </label>
              <input
                type="password"
                required
                placeholder="Enter password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Unlock Portal
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Return to Main Site
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Unlocked Admin Form Interface
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-blue-800 text-white py-6 px-4 shadow-md">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Raebareli Health — Admin Portal</h1>
            <p className="text-sm text-blue-100">Add & Manage Clinic Listings</p>
          </div>
          <Link
            href="/"
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-blue-500"
          >
            ← Back to Public Site
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl text-sm font-semibold">
            ✓ New clinic successfully added to local database!
          </div>
        )}

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Clinic / Doctor Listing</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Clinic Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Skin & Laser Center"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Doctor Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. A. K. Verma"
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Qualifications
                </label>
                <input
                  type="text"
                  placeholder="e.g. MBBS, MD (Dermatology)"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Specialization *
                </label>
                <select
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-800 bg-white"
                >
                  <option value="General Physician">General Physician</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Gynaecology & Obstetrics">Gynaecology & Obstetrics</option>
                  <option value="Oncosurgery">Oncosurgery</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Locality / Area in Raebareli *
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-800 bg-white"
                >
                  <option value="Civil Lines">Civil Lines</option>
                  <option value="Degree College Chauraha">Degree College Chauraha</option>
                  <option value="Indira Nagar">Indira Nagar</option>
                  <option value="Kutchery Road">Kutchery Road</option>
                  <option value="Police Line Chauraha">Police Line Chauraha</option>
                  <option value="Rana Nagar">Rana Nagar</option>
                  <option value="Station Road">Station Road</option>
                  <option value="Super Market">Super Market</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Street Address *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Near Degree College Chauraha, Raebareli, UP"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Primary Phone Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 94500 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  OPD Hours & Days
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mon - Sat: 10:00 AM - 2:00 PM"
                  value={formData.opdHours}
                  onChange={(e) => setFormData({ ...formData, opdHours: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors mt-4"
            >
              Add Clinic Entry
            </button>
          </form>
        </div>

        {submittedClinics.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Recently Added Listings ({submittedClinics.length})
            </h3>
            <div className="space-y-3">
              {submittedClinics.map((clinic) => (
                <div key={clinic.id} className="bg-white p-4 rounded-lg border border-gray-200 text-sm">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                    {clinic.specialization}
                  </span>
                  <h4 className="font-bold text-gray-900 mt-1">{clinic.name}</h4>
                  <p className="text-gray-600">{clinic.doctor} • {clinic.area}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}