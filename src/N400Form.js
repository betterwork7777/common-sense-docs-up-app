
import React, { useState } from 'react';

const N400Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    countryOfBirth: '',
    address: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">N-400 Citizenship Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label>Country of Birth</label>
              <input type="text" name="countryOfBirth" value={formData.countryOfBirth} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default N400Form;
