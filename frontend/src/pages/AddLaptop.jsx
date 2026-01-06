import { useState } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function AddLaptop() {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    processor: '',
    ram: '',
    storage: '',
    graphics: '',
    price: '',
    rating: '',
    type: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/laptops', form);
      alert('Laptop added successfully!');
      navigate('/laptops');
    } catch (err) {
      console.error('Error adding laptop:', err);
      alert('Failed to add laptop. Check console.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add New Laptop</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" value={form.model} onChange={handleChange} required />
        <input type="text" name="processor" placeholder="Processor" value={form.processor} onChange={handleChange} required />
        <input type="text" name="ram" placeholder="RAM" value={form.ram} onChange={handleChange} required />
        <input type="text" name="storage" placeholder="Storage" value={form.storage} onChange={handleChange} required />
        <input type="text" name="graphics" placeholder="Graphics" value={form.graphics} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input type="number" step="0.1" name="rating" placeholder="Rating (0-5)" value={form.rating} onChange={handleChange} required />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="gaming">Gaming</option>
          <option value="business">Business</option>
          <option value="student">Student</option>
        </select>

        <button type="submit">Add Laptop</button>
      </form>
    </div>
  );
}

export default AddLaptop;
