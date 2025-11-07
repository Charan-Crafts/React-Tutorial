import React from 'react';

import PasswordGenerator from './PasswordGenerator/Components/PasswordGenerator';
import CurrencyConvertor from './currencyConverter/CurrencyConvertor';
const App = () => {

  const patients = [
    {
      name: "Aarav Patel",
      diagnosedWith: "Type 2 Diabetes",
      details: "Diagnosed six months ago; currently managing condition with Metformin and diet adjustments."
    },
    {
      name: "Priya Sharma",
      diagnosedWith: "Hypertension",
      details: "Blood pressure consistently above normal; advised regular exercise and low-sodium diet."
    },
    {
      name: "Rohit Verma",
      diagnosedWith: "Asthma",
      details: "Mild persistent asthma triggered by seasonal allergies; prescribed inhaler and antihistamines."
    },
    {
      name: "Sneha Reddy",
      diagnosedWith: "Migraine",
      details: "Experiences severe headaches twice a month; undergoing stress management therapy."
    },
    {
      name: "Karan Mehta",
      diagnosedWith: "Anemia",
      details: "Low hemoglobin levels; currently on iron supplements and follow-up scheduled in two weeks."
    }
  ];

  return (
    <div>
      <CurrencyConvertor></CurrencyConvertor>
    </div>
  );
}

export default App;
