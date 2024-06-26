import React, { useEffect, useState } from 'react';
import { getIdentificationTypes } from '../../../services/ApiConnectionService';
import { createOrder } from '../../../services/ApiConnectionService';
import MessageBar from '../show-message/MessageBar';

const GenerateOrder = ({ totalQty, totalSum, cartItems, closeModal }) => {

  const [identificationTypeOptions, setIdentificationTypeOptions] = useState([]);
  const [selectIdentificationTypeId, setIdentificationTypeId] = useState(1); 
  const [inputIdentification, setIdentification] = useState('');
  const [inputName, setName] = useState('');
  const [inputLastName, setLastName] = useState('');
  const [inputBirthDay, setBirthDay] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPhoneNumber, setPhoneNumber] = useState('');
  const [inputShippingAddress, setShippingAddress] = useState('');
  const [showMessage, setMessage] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false); 

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getIdentificationTypes();
              setIdentificationTypeOptions(data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, []); 

  const handleIdentificationTypeChange = (event) => {
    const categoryId = parseInt(event.target.value);
    setIdentificationTypeId(categoryId);
  };

  const validateAge = (birthDay) => {
    if (typeof birthDay === 'string') {
      birthDay = new Date(birthDay);
    }
  
    if (!(birthDay instanceof Date) || isNaN(birthDay.getTime())) {
      return false;
    }
  
    const currentDate = new Date();
    const diff = currentDate.getTime() - birthDay.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  
    return age >= 18;
  };  

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitDisabled(true);

    if (
      inputIdentification &&
      inputName &&
      inputLastName &&
      inputBirthDay &&
      inputEmail &&
      inputShippingAddress
    ) {
      if (!validateAge(inputBirthDay)) {
        const errorMessage = `The customer must be over than 18 years old`;
        setMessage({ message: errorMessage, messageType: 'error' }); 
        setSubmitDisabled(false);
        return;
      } else {
        const orderRequest = {
          customer: {
            name: inputName,
            lastName: inputLastName,
            identificationTypeId: selectIdentificationTypeId,
            identification: inputIdentification,
            birthDay: inputBirthDay,
            email: inputEmail,
            phoneNumber: inputPhoneNumber
          },
          products: cartItems,
          shippingAddress: inputShippingAddress
        };

        try {
          const response = await createOrder(orderRequest);
          
          if (response) {
            const infoMessage = 'Order created successfully';
            setMessage({ message: infoMessage, messageType: 'success' });
        
            localStorage.removeItem('cartItems');
        
            setTimeout(() => {
              closeModal();
            }, 3000);
          } else {
            const errorMessage = 'Error creating the Order';
            setMessage({ message: errorMessage, messageType: 'error' });
            setSubmitDisabled(false);
          }
        } catch (error) {
          const errorMessage = `An error occurred while creating the order. Please try again later.`;
          setMessage({ message: errorMessage, messageType: 'error' });
          setSubmitDisabled(false); 
        }
      }
    } else {
      const errorMessage = `Please check all fields.`;
      setMessage({ message: errorMessage, messageType: 'warning' }); 
      setSubmitDisabled(false);
    }
  };

  return (
    <>
      <MessageBar message={showMessage.message} messageType={showMessage.messageType} />

      <div className="basic-container">
        <div className="contain-main">
          <div className="contain-head">
            <div className="contain-title">Generate order</div>
          </div>
          <div className="contain-body">
            <div className="contain-table">
              <div className="form-container">
                <h2>Customer information</h2>
                <form onSubmit={(event) => submitForm(event)}>
                  
                  <div className="form-group">
                    <label className="labelText" htmlFor="selectIdentificationTypes">
                      Identification type:
                    </label>
                    <div className="select-container-intern">
                      <div className="select-container">
                        <select onChange={handleIdentificationTypeChange}>
                            {identificationTypeOptions.map((item) => (
                              <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputIdentification">
                      Identification:
                    </label>
                    <input
                      className="inputText"
                      type="number"
                      id="inputIdentification"
                      name="inputIdentification"
                      value={inputIdentification}
                      onChange={(e) => setIdentification(e.target.value)}
                      maxLength="10"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputName">
                      Name:
                    </label>
                    <input
                      className="inputText"
                      type="text"
                      id="inputName"
                      name="inputName"
                      value={inputName}
                      onChange={(e) => setName(e.target.value)}
                      maxLength="50"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputLastName">
                      Last name:
                    </label>
                    <input
                      className="inputText"
                      type="text"
                      id="inputLastName"
                      name="inputLastName"
                      value={inputLastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength="50"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputBirthDay">
                      Birthday:
                    </label>
                    <input
                      className="inputText"
                      type="date"
                      id="inputBirthDay"
                      name="inputBirthDay"
                      value={inputBirthDay}
                      onChange={(e) => setBirthDay(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputEmail">
                      Email:
                    </label>
                    <input
                      className="inputText"
                      type="text"
                      id="inputEmail"
                      name="inputEmail"
                      value={inputEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength="100"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputPhoneNumber">
                      Phone number:
                    </label>
                    <input
                      className="inputText"
                      type="text"
                      id="inputPhoneNumber"
                      name="inputPhoneNumber"
                      value={inputPhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength="50"
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelText" htmlFor="inputShippingAddress">
                      Shipping address:
                    </label>
                    <input
                      className="inputText"
                      type="text"
                      id="inputShippingAddress"
                      name="inputShippingAddress"
                      value={inputShippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="totals-container">
                    <div>Total Qty: {totalQty}</div>
                    <div>Total: {totalSum}</div>
                  </div>

                  <button className="button" type='submit' disabled={submitDisabled} >
                    Submit
                  </button>

                </form>
              </div>
            </div>
            <div className="separator"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateOrder;
