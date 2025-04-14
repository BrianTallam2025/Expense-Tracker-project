import { useState } from "react";
import swal from "sweetalert";

function Expensedisplay({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    swal("Expense Added!", "Your expense has been recorded.", "success");
    setFormData({ name: "", category: "", description: "", amount: "", date: "" });
  };

  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-xl font-bold">Add Expense</h1>
      <p className="mb-4 text-gray-600">Enter your Expense details below</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Expense Name"
          className="w-full mb-2 border p-2 rounded"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full mb-2 border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Travel">Travel</option>
          <option value="Household">Household</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          className="w-full mb-2 border p-2 rounded"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter Amount"
          className="w-full mb-2 border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-4 border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default Expensedisplay;
