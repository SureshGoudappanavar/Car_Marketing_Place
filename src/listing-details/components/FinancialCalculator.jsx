import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'



// function FinancialCalculator() {
// const [carPrice,setCarPrice]= useState(0); 
// const [interestRate,setInterestRate]= useState(0);
// const [loanTerm,setLoanTerm]= useState(0);
// const [downPayment,setDownPayment]= useState(0); 
// const [monthlyPayment,setMonthlyPayment]= useState(0); 


// const CalculateMonthlyPayment=()=>{
//     console.log(carPrice,interestRate,loanTerm,downPayment)
//     const Principal=carPrice-downPayment;
//     const MonthlyInterestRate=interestRate/1200  //Convert to decimal
//     const MonthlyPayment=(Principal*MonthlyInterestRate*Math.pow(1+MonthlyInterestRate,loanTerm))/
//     (Math.pow(1+MonthlyInterestRate,loanTerm)-1);

//     setMonthlyPayment(MonthlyPayment.toFixed(2));

// }




//   return (
//     <div className='p-10 border rounded-xl shadow-md mt-7'>
//         <h2 className='font-medium text-2xl'>
//             Financial Calculator
//         </h2>
//         <div className='flex gap-5 mt-5'>
//             <div className='w-full'> 
//                 <label> Price $</label>
//                <Input type="number " onChange={(e)=>setCarPrice(e.target.value)}/>
//             </div>
//             <div> 
//                 <label> Interest Rate</label>
//                <Input type="number " onChange={(e)=>setInterestRate(e.target.value)}/>
//             </div>
        
//         </div>

//         <div className='flex gap-5 mt-5'>
//             <div className='w-full'> 
//                 <label> Loan Term (month)</label>
//                <Input type="number " onChange={(e)=>setLoanTerm(e.target.value)}/>
//             </div>
//             <div> 
//                 <label> Down Payment</label>
//                <Input type="number " onChange={(e)=>setDownPayment(e.target.value)}/>
//             </div>
        
//         </div>

// {monthlyPayment>0 && <h2 className='font-medium text-2xl mt-5 '>Your Monthly Payment is :<span className='text-4xl font-bold'>${monthlyPayment}</span></h2>}

// <Button className=" w-full mt-5 " size="lg"
// onClick={CalculateMonthlyPayment}
// >Calculate</Button>
//     </div>
//   )
// }

function FinancialCalculator() {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    const Principal = carPrice - downPayment;
    const MonthlyInterestRate = interestRate / 1200;
    const MonthlyPayment =
      (Principal * MonthlyInterestRate * Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);

    setMonthlyPayment(MonthlyPayment.toFixed(2));
  };

  return (
    <div className='p-4 sm:p-10 border rounded-xl shadow-md mt-7'>
      <h2 className='font-medium text-xl sm:text-2xl'>Financial Calculator</h2>

      <div className='flex flex-col sm:flex-row gap-4 mt-5'>
        <div className='w-full'>
          <label>Price $</label>
          <Input type="number" onChange={(e) => setCarPrice(Number(e.target.value))} />
        </div>
        <div className='w-full'>
          <label>Interest Rate</label>
          <Input type="number" onChange={(e) => setInterestRate(Number(e.target.value))} />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-5'>
        <div className='w-full'>
          <label>Loan Term (months)</label>
          <Input type="number" onChange={(e) => setLoanTerm(Number(e.target.value))} />
        </div>
        <div className='w-full'>
          <label>Down Payment</label>
          <Input type="number" onChange={(e) => setDownPayment(Number(e.target.value))} />
        </div>
      </div>

      {monthlyPayment > 0 && (
        <h2 className='font-medium text-xl sm:text-2xl mt-5'>
          Your Monthly Payment is:
          <span className='text-3xl sm:text-4xl font-bold'> ${monthlyPayment}</span>
        </h2>
      )}

      <Button className='w-full mt-5' size='lg' onClick={CalculateMonthlyPayment}>
        Calculate
      </Button>
    </div>
  );
}


export default FinancialCalculator
