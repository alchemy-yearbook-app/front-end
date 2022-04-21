import React, { useState, useEffect } from 'react';
import AlumAdvices from '../../components/AlumAdvice/AlumAdvices';
import { createAdvice } from '../../services/advice';

export default function AlumAdvice() {
  const handleSubmit = async ({ title, advice, alumni_name, cohort }) => {
    await createAdvice({
      title,
      advice,
      alumni_name,
      cohort,
    });
  };

  return <AlumAdvices handleSubmit={handleSubmit} />;
}
