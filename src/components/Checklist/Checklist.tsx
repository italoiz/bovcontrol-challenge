import React from 'react';

import * as S from './styles';

export const Checklist = () => {
  const item = {
    fazendeiro: 'Italo Andrade',
    cidade: 'Petrolina',
    dataCriacao: '12/12/2023',
    fazenda: 'AAA',
    tipoChecklist: 'ABC',
    teveSupervisao: true,
  };
  return (
    <S.ChecklistItem>
      <S.ChecklistItemTitle>{item.fazendeiro}</S.ChecklistItemTitle>
      <S.ChecklistItemSubtitle>
        {item.fazenda} - {item.cidade}
      </S.ChecklistItemSubtitle>
      <S.ChecklistItemDate>Criado em: {item.dataCriacao}</S.ChecklistItemDate>
    </S.ChecklistItem>
  );
};
