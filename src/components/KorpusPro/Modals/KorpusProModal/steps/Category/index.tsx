// src/components/steps/Step5.tsx
'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  data: any;
}

const Category: React.FC<StepProps> = ({ onNext, onPrev, data }) => {
  const [stepData, setStepData] = useState(data || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData({ ...stepData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <input
        name="field1"
        value={stepData.field1 || ''}
        onChange={handleChange}
      />
      <div>
        <button onClick={onPrev}>Back</button>
        <button onClick={() => onNext(stepData)}>Submit</button>
      </div>
    </div>
  );
};

export default Category;
