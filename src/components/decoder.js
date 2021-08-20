import React from 'react';
import { cypherMaker } from './cypherMaker';

const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const inputDecoder = (input, rot) => {
  const cypher = cypherMaker(rot, ALPHA);
  const inputKey = Array.from(input).map(
    letter => cypher.indexOf(letter) === -1 ? letter : ALPHA[cypher.indexOf(letter)]
  );
  return inputKey;
};

export default inputDecoder;
