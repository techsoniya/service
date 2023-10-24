import React, { useState } from "react";
import axios from "axios";

const ServicesForm = () => {
  const [formData, setFormData] = useState({
    service_name: "",
    service_description: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/services", formData);
      console.log("Service submitted successfully");
      closeFormModal();
    } catch (error) {
      console.error("Error submitting service:", error);
    }
  };

  const openFormModal = () => {
    setIsModalOpen(true);
  };

  const closeFormModal = () => {
    setIsModalOpen(false);
    setFormData({
      service_name: "",
      service_description: "",
    });
  };

  return (
    <div className="services-form-container">
      <button className="open-form-button" onClick={openFormModal}>
        Add Service
      </button>

      {isModalOpen && (
        <div className="form-modal">
          <div className="form-content">
            <h2 className="form-title">Add New Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="service_name">Service Name</label>
                <input
                  type="text"
                  id="service_name"
                  name="service_name"
                  value={formData.service_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service_description">Service Description</label>
                <textarea
                  id="service_description"
                  name="service_description"
                  value={formData.service_description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button type="button" className="cancel-button" onClick={closeFormModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesForm;
// import React, { useState } from "react";
// import axios from "axios";

// const ServicesForm = () => {
//   const [formData, setFormData] = useState({
//     service_name: "",
//     service_description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send a POST request to the server to submit the form data
//       await axios.post("/api/services", formData);

//       // Reset the form fields after successful submission
//       setFormData({
//         service_name: "",
//         service_description: "",
//       });

//       // You can add additional logic here, such as displaying a success message or updating the services list.
//     } catch (error) {
//       console.error("Error submitting service:", error);
//     }
//   };

//   return (
//     <div className="services-form-container">
//       <h2>Add New Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="service_name">Service Name:</label>
//           <input
//             type="text"
//             id="service_name"
//             name="service_name"
//             value={formData.service_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="service_description">Service Description:</label>
//           <textarea
//             id="service_description"
//             name="service_description"
//             value={formData.service_description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ServicesForm;

