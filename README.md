# rot13.js

rot13.js is a simple [ROT13 cypher](https://en.wikipedia.org/wiki/ROT13) built in React. It renders a cyphered message based on user text input. It can also handle other rotate-by substitution cyphers, as well.

## How I worked on this project.

* Project idea was taken from [freecodecamp.org's](freecodecamp.org) Javascript cours and initial code was based on an earlier rot13 project written in plain Javascript.
* I worked with React for this project in order to improve my skills and refamiliarize myself with React basics.
* I attempted to follow funcitonal programming guidelines in order to familiarize myself with functional programming.
* I attempted to use ES6 syntax as well as various array functions (such as map) in order to improve my familiarity and skills in those areas.

## How to navigate this project.

The majority of the project's code is found in `src/components`.
* `/src/components/cypherMaker.js` - contains `cypherMaker`, which generates a cypher by taking a given alphabet array, `input`, and rotating it by a given amount, `rot`, of positions. It is currently hard coded to `13`.

* `src/components/decoder.js` - imports `cypherMaker`, contains an array, `ALPHA` of the standard English alphabet, and the function `inputDecoder`. `inputDecoder` takes a given string, `input`, and integer, `rot`, sends integer `rot` and array `ALPHA` to `cypherMaker` in order to generate a cypher, and then maps through `input` in order to generate an output encrypted or solved by the ROT cypher as `inputKey`.

* `src/components/textInput.js` - imports `inputDecoder` from `./decoder.js`, stores state `text` and `rot`, and accepts text input via a rendered `textarea`. Text entered into the `textarea` updates `textInput.js`'s `text` state with whatever was entered, passes `text` and `rot` to `inputDecoder` as props, and then renders the result of `inputDecoder`.

## How to use this project.

* Run `yarn start` in root
* Type some text in the text area; encrypted text will appear below the text box as you type (*note: rot13.js currently ignores capitalized letters, numbers, and special characters.)

## Future Goals

* Allow users to select various integers to pass to `cypherMaker` so that rot13.js can generate various different substitution cyphers.
* Allow capitalized letters to be factored into the encryption process rather than being ignored.
* Implement some way to display the current cypher created by `cypherMaker`.
