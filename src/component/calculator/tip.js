import React, {useState} from 'react'
import './tip.css'
function Tip() {
  const [total, setTotal] = useState({
    bill:50,
    tip:18,
    people:1
  });
  const handleChange = (e) => {
    const inputName = e.target.value;
    const value = e.target.value;
    setTotal({
      ...total
      [inputName]+ value,
    });
  };
  const res = (total.bill * total.tip) / 100;
	const resPerson = (total.bill * total.tip) / 100 / total.number;



  return (
    <>
    <div className='container'>
        <label for="bill">Bill</label>
        <input type="number" id="bill" value={total.bill} name="bill" onChange={handleChange}/><br/>

        <label for="tip">Tip percentage</label>
        <input type="number" id="tip" value={total.tip} name="tip" onChange={handleChange}/><br/>

        <label for="people">Number of people</label>
        <input type="number" id="people" value={total.people} name="people" onChange={handleChange}/><br/><br/>
        <span>Total tip: {res || `-`} $</span>
        <span>Tip Per Person:{resPerson || `-`} $</span>
    </div>
    </>
  )
}

export default Tip;