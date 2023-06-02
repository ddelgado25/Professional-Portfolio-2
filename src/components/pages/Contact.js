import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, message } = formData;

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
      console.log('Email sent successfully!', response.status, response.text);

      setFormData({ name: '', email: '', message: '' });

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Email sending failed, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-full p-6 bg-custom-bluee rounded-lg shadow-lg">
        <h1 className="text-custom-orange bg-custom-bluee text-2xl font-bold mb-4">Contact Page</h1>
        <form onSubmit={handleSubmit} className="bg-custom-bluee">
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="name" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineUser className="bg-custom-bluee inline-block mr-2 mb-1" />
              Name
            </label>
            <input
              type="text"
              id="name"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="email" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineMail className="bg-custom-bluee inline-block mr-2 mb-1" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="message" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineMessage className="bg-custom-bluee inline-block mr-2 mb-1" />
              Message
            </label>
            <textarea
              id="message"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-custom-orange hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
