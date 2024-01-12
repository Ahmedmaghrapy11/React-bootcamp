import { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {

  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('');

  const handleShipping = (event) => {
    console.log(event.target.checked);
    setShipping(event.target.checked);
  };

  const handleFramework = (event) => {
    console.log(event.target.value);
    setFramework(event.target.selected);
  };
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input 
            type="checkbox" 
            name="shipping" 
            id="shipping" 
            checked={shipping} 
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select 
            className='form-input' 
            name="framework" 
            id="framework" 
            onChange={handleFramework}
            value={framework}
          >
            <option value="">Select framework</option>
            {
              frameworks.map((framework) => {
                return <option key={framework} value={framework} >{framework}</option>
              })
            }
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
