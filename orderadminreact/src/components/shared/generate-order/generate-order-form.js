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
    <div className="basic-container">
      <div className="contain-main">
        <div className="contain-head">
          <div className="contain-title">Generate order</div>
        </div>
        <div className="contain-body">
          <div className="contain-table">
            <div className="form-container">
              <h2>Customer information</h2>
              <form onSubmit={submitForm}>
                
                
              <div className="form-group">
                  <label className="labelText" htmlFor="selectIdentificationTypes">
                    Identification type:
                  </label>
                  <div className="select-container-intern">
                    <div className="select-container">
                      <select
                        id="selectIdentificationTypes"
                        name="selectIdentificationTypes"
                        value={selectIdentificationTypeId}
                        onChange={(e) => setSelectIdentificationTypeId(e.target.value)}
                        required
                      >
                        {identificationTypeOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="identification">
                    Identification:
                  </label>
                  <input
                    className="inputText"
                    type="number"
                    id="identification"
                    name="identification"
                    value={identification}
                    onChange={(e) => setIdentification(e.target.value)}
                    maxLength="10"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="inputText"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength="50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="lastName">
                    Last name:
                  </label>
                  <input
                    className="inputText"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    maxLength="50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="birthDay">
                    Birthday:
                  </label>
                  <input
                    className="inputText"
                    type="date"
                    id="birthDay"
                    name="birthDay"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="inputText"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength="100"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="phoneNumber">
                    Phone number:
                  </label>
                  <input
                    className="inputText"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength="50"
                  />
                </div>

                <div className="form-group">
                  <label className="labelText" htmlFor="shippingAddress">
                    Shipping address:
                  </label>
                  <input
                    className="inputText"
                    type="text"
                    id="shippingAddress"
                    name="shippingAddress"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    required
                  />
                </div>

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
