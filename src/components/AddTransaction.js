import React from "react";

function AddTransaction() {
  return (
    <div className='form-wrapper'>
      <form>
        <div className='input-group income'>
          <input type='text' placeholder='Add Income...' autocomplete='off' />
          <input type='number' placeholder='Amount' autocomplete='off' />
          <input type='submit' value='submit' />
        </div>

        <div className='input-group expence'>
          <input type='text' placeholder='Add Expense...' autocomplete='off' />
          <input type='number' placeholder='Amount' autocomplete='off' />
          <input type='submit' value='submit' />
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
