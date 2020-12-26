import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Redirect, Route } from 'react-router-dom';
import './otpstyles.css';

const Otp = ({ setLoggedIn }) => {
  const [code, setCode] = useState('');
  const handleChange = code => {
    setCode(code);
    code.length === 6 && setLoggedIn(true);
  };

  return (
    <Route>
      {code.length === 6 ? (
        <Redirect to='/' />
      ) : (
        <div className='otp__container'>
          <OtpInput
            containerStyle='otp__container'
            inputStyle='otp__inputs'
            shouldAutoFocus
            value={code}
            isInputNum
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
          />
        </div>
      )}
    </Route>
  );
};

export default Otp;
