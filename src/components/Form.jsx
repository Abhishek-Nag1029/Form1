import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [guest, setGuest] = useState("No");
  const [guestName, setGuestName] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setGuest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, age, guest, guestName };
    setSubmittedData(formData);
  };

  return (
    <div class="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500 text-sm">
      {!submittedData ? (
        <div>
          <form class="bg-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg"
          onSubmit={handleSubmit}>
            <div className='form-container'>
              <h1>Event Registration Form</h1>
              <div className="formwrap">
                <label class="mb-5">Name</label>
                <input 
                  type="text" 
                  class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800" 
                  name='username' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="formwrap">
                <label class="mb-5">Email</label>
                <input 
                  type="email" 
                  class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                  name='email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="formwrap">
                <label class="mb-5">Age</label>
                <input 
                  type="number" 
                  class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800" 
                  name='age' 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required 
                  min="1"
                />
              </div>
              <div className="formwrap">
                <label class="mb-5" style={{marginBottom:"25px"}}>Are you attending with a guest?</label>
                <div>
                  <label class="mb-5">
                  Yes
                  </label>
                    <input
                      class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                      type="radio"
                      name="guest"
                      value="Yes"
                      onChange={handleChange}
                      checked={guest === 'Yes'}
                    />
                   
                  <label class="mb-5">
                  No
                  </label>
                    <input
                    
                      type="radio"
                      name="guest"
                      value="No"
                      onChange={handleChange}
                      checked={guest === 'No'}
                    />
                   
                </div>
              </div>
              {guest === 'Yes' && (
                <div className="formwrap">
                  <label class="mb-5">Guest Name</label>
                  <input 
                    type="text" 
                    className='guestName' 
                    name='guestName' 
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required={guest === 'Yes'}
                  />
                </div>
              )}
              <button type="submit" class="mt-5 bg-blue-500 py-3 rounded-md text-white">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <div className='Summary'>
          <h3>Form Summary</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Attending with a guest: {submittedData.guest}</p>
          {submittedData.guest === 'Yes' && (
            <p>Guest Name: {submittedData.guestName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
