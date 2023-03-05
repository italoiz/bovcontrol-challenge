import React from 'react';

import { TextField } from '@/components';

export const FarmerDataForm = () => {
  return (
    <React.Fragment>
      <TextField
        name="farmer"
        label="Nome do fazendeiro"
        placeholder="Nome completo"
      />
    </React.Fragment>
  );
};
