import './index.css';

function Header() {
  return (
    <>
    <div className="bg-gray-200 p-4">
    <header>
      <h1 className="text-3xl font-bold text-center text-blue-600 mt-10 ">Expense Tracker Application</h1>
    </header>
    <hr></hr>
    <p className="text-gray-600 mt-2 mb-4 text-sm"> 
        This is a simple expense tracker application built with React. It allows users to track their expenses and manage their budget effectively.
        Users can add, edit, and delete expenses, as well as view their total expenses and remaining budget.
    </p>
    </div>
    </>
  );
}

export default Header;