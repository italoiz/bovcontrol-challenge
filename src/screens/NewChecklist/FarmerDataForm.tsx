import React from 'react';

import { TextField } from '@/components';

export const FarmerDataForm = () => {
  return (
    <React.Fragment>
      <TextField
        name="farmer_name"
        label="Nome do fazendeiro"
        placeholder="Nome completo"
      />
    </React.Fragment>
  );
};
