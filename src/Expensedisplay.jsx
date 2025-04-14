import { useState } from "react";

function Expensedisplay({ onAddExpense }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date) return;
    const newExpense = { name, category, description, amount: Number(amount), date };
    onAddExpense(newExpense);
    setName("");
    setCategory("Food");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-xl font-semibold">Add Expense</h1>
      <p className="text-sm text-gray-600">Enter your Expense details below</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label>Expense Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter Expense Name"
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Food</option>
            <option>Transportation</option>
            <option>Entertainment</option>
            <option>Utilities</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter Description"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter Amount"
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default Expensedisplay;