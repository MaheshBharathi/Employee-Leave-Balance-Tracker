
import React, { useState } from 'react';
import "./Leaveinfo.css";

function Leaveinfo() {

  const [reason, setReason] = useState('');
  const [days, setDays] = useState('');
  const [details, setDetails] = useState('');

 
  const handleSubmit = () => {
    alert("Your leave will be allocated");

    
    setReason('');
    setDays('');
    setDetails('');
  };

  return (
    <div className='k11'>
      <div className='ll1'>
        <div className='l1'>
          <h1>Reason for leave</h1>
          <input 
            className='c111' 
            type='text' 
            placeholder='Enter Your Reason' 
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <h1 className='re1'>How Many Days Will You Need</h1>
          <input 
            className='c222' 
            type='text' 
            placeholder='Enter Days' 
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <textarea 
            className='re2' 
            placeholder='Additional details...'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          
          <button className='re3' onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Leaveinfo;
