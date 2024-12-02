import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from '../api';


const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const loadEmployee = async () => {
      const data = await fetchEmployeeById(id);
      setEmployee(data);
    };
    loadEmployee();
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>Employee Details</h1>
      <p>First Name: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Email: {employee.email}</p>
    </div>
  );
};

export default ViewEmployee;
