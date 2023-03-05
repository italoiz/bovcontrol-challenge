import React from 'react';

import { Box, RadioButton, TextField } from '@/components';

export const FarmDataForm = () => {
  return (
    <React.Fragment>
      <Box row>
        <TextField
          name="farm_name"
          label="Nome da fazenda"
          placeholder="Minha fazendinha"
          fillContainer
        />
        <Box width={12} />
        <TextField
          name="farm_city"
          label="Cidade"
          placeholder="São Paulo"
          fillContainer
        />
      </Box>

      <Box height={12} />

      <TextField
        name="supervisor_name"
        label="Nome do supervisor"
        placeholder="Digite o nome do supervisor da fazenda"
      />

      <Box height={12} />

      <RadioButton
        name="type"
        label="Tipo de checklist"
        options={[
          { label: 'BPA', value: 'BPA' },
          { label: 'Antibiótico', value: 'Antibiotic' },
          { label: 'BPF', value: 'BPF' },
        ]}
      />

      <Box height={12} />

      <Box row>
        <TextField
          name="milk_produced"
          label="Leite produzido"
          placeholder="Total em litros"
          fillContainer
        />
        <Box width={12} />
        <TextField
          name="cows_head"
          label="Cabeças de Gado atual"
          placeholder="1200"
          fillContainer
        />
      </Box>

      <Box height={12} />

      <RadioButton
        name="had_supervision"
        label="Houve supervisão no mês atual?"
        options={[
          { label: 'Sim', value: 'yes' },
          { label: 'Não', value: 'no' },
        ]}
      />
    </React.Fragment>
  );
};
