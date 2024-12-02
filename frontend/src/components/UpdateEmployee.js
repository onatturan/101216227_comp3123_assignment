import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEmployeeById, updateEmployee } from '../api';

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    const loadEmployee = async () => {
      const data = await fetchEmployeeById(id);
      setFormData(data);
    };
    loadEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, formData);
    alert('Employee updated successfully!');
    navigate('/employees');
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/employees')}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
