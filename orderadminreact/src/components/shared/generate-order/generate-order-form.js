import React, { useEffect, useState } from 'react';

const GenerateOrder = ({ totalQty, totalSum, cartItems }) => {
  const [identificationTypeOptions, setIdentificationTypeOptions] = useState([]);
  const [selectIdentificationTypeId, setSelectIdentificationTypeId] = useState(0);
  const [identification, setIdentification] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  useEffect(() => {
    // Simulate fetching identification type options from API
    const fakeIdentificationTypeOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ];
    setIdentificationTypeOptions(fakeIdentificationTypeOptions);
  }, []);

  const validateAge = (birthDay) => {
    // Implement age validation logic
    return true; // Placeholder, replace with actual logic
  };

  const submitForm = () => {
    if (!validateAge(birthDay)) {
      alert('The customer must be over than 18 years old');
      return;
    }

    // Implement submit logic
    alert('Form submitted');
    // history.push('/Order/catalog'); // Uncomment this line to redirect to catalog page after submitting
  };

  return (
    <div className="mat-app-backgroud basic-container">
      <div className="contain-main">
        <div className="contain-head">
          <div className="contain-title">Generate order</div>
        </div>
        <div className="contain-body">
          <div className="contain-table">
            <div className="form-container">
              <h2>Customer information</h2>
              <form onSubmit={submitForm}>
                {/* Form inputs */}
                {/* Total Qty and Total */}
                <div className="totals-container">
                  <div>Total Qty: {totalQty}</div>
                  <div>Total: {totalSum}</div>
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </div>
  );
};

export default GenerateOrder;
