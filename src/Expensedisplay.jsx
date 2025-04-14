function Expensedisplay() {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 ">
        <h1 className=" ">Add Expense</h1>
        <p>Enter your Expense details below</p>
        <div className="mt-4">
          <label>Expense Name</label>
          <form>
          <input type="text" placeholder="Enter Expense Name" />
          <input type="text" placeholder="Enter Category" />
          <input type="text" placeholder="Enter Description" />
          <input type="text" placeholder="Enter Amount" />
          <input type="text" placeholder="Enter Date" />
          </form>
        </div>
      </div>
    );
  }
  
  export default Expensedisplay;
  