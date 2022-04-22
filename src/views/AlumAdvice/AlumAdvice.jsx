import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import AlumAdvices from '../../components/AlumAdvice/AlumAdvices';

import { createAdvice, getAdvice } from '../../services/advice';

export default function AlumAdvice() {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdvice();
      setAdvice(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <h1>Loading advice</h1>;
  }

  const handleSubmit = async ({ title, advice, alumni_name, cohort }) => {
    await createAdvice({
      title,
      advice,
      alumni_name,
      cohort,
    });
  };

  return <AlumAdvices advices={advice} handleSubmit={handleSubmit} />;
}
