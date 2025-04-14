function Addexpense ({ expenses }) {
    
    return (
      <div className="overflow-x-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Expense Summary</h2>
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
            {expenses.map((expense, index) => (
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
      </div>
    );
  }
  
  export default Addexpense;