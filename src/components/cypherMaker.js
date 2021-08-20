import React from 'react';

export const cypherMaker = (rot, alphabet) => {
  const cypherAlpha = alphabet.map(letter => {
    const cypherPos = alphabet.indexOf(letter) + rot;
    let cypherLetter = cypherPos < 26 ? alphabet[cypherPos] : alphabet[cypherPos - 26];
    return cypherLetter;
  });
  return cypherAlpha;
};

export default cypherMaker;
