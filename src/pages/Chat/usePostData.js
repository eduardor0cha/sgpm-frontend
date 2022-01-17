import React from 'react';

const posts = [
  {
    author: 'Beltrano dos Santos',
    authorSpecialty: 'Cardiologista',
    content:
      'Olá! Não vou poder comparecer no plantão do dia 30/08. Gostaria de trocar com alguém.',
    date: new Date(2022, 0, 15, 8, 47, 17, 29)
  },
  {
    author: 'Ciclana Silva',
    authorSpecialty: 'Pediatra',
    content:
      'Bom dia! Estarei livre no dia 25/07. Posso cobrir o plantão de alguém nesse dia. Interessados, entrar em contato comigo.',
    date: new Date(2022, 0, 15, 7, 5, 2, 255)
  },
  {
    author: 'Jeferson',
    authorSpecialty: 'Anestesista',
    content:
      'Boa noite! Hoje eu perdi minhas chaves no hospital. Alguém as encontrou em algum lugar?',
    date: new Date(2022, 0, 14, 19, 56, 22, 112)
  },
  {
    author: 'Jeferson',
    authorSpecialty: 'Anestesista',
    content:
      'Boa noite! Hoje eu perdi minhas chaves no hospital. Alguém as encontrou em algum lugar?',
    date: new Date(2022, 0, 14, 19, 56, 22, 112)
  },
  {
    author: 'Jeferson',
    authorSpecialty: 'Anestesista',
    content:
      'Boa noite! Hoje eu perdi minhas chaves no hospital. Alguém as encontrou em algum lugar?',
    date: new Date(2022, 0, 14, 19, 56, 22, 112)
  },
  {
    author: 'Jeferson',
    authorSpecialty: 'Anestesista',
    content:
      'Boa noite! Hoje eu perdi minhas chaves no hospital. Alguém as encontrou em algum lugar?',
    date: new Date(2022, 0, 14, 19, 56, 22, 112)
  },
  {
    author: 'Jeferson',
    authorSpecialty: 'Anestesista',
    content:
      'Boa noite! Hoje eu perdi minhas chaves no hospital. Alguém as encontrou em algum lugar?',
    date: new Date(2022, 0, 14, 19, 56, 22, 112)
  }
];

function usePostData() {
  return posts;
}

export default usePostData;
