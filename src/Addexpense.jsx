import { useState } from "react";

function Addexpense({ expenses }) {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Expense Summary</h2>

      <input
        type="text"
        placeholder="Search by name or category..."
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredExpenses.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{expense.name}</td>
                <td className="px-6 py-4">{expense.category}</td>
                <td className="px-6 py-4">{expense.description}</td>
                <td className="px-6 py-4">Ksh {expense.amount}</td>
                <td className="px-6 py-4">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">No matching expenses found.</p>
      )}
    </div>
  );
}

export default Addexpense;
