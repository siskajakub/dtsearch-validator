/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
return {
  // Set defaultToken to invalid to see what you do not tokenize yet
  defaultToken: 'error',

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // brackets
      [/[()]/, '@brackets'],

      // operators at wrong place
      [/^[^\w]*(AND|AndAny|OR)([^\w]+NOT)?/, 'error' ], // NOT can be in the begining
      [/(AND|AndAny|OR|NOT)([^\w]+NOT)?[^\w]*$/, 'error' ],
      [/^[^\w]*(NOT[^\w]+)?[^\w]*W\/[0-9]*/, 'error' ],
      [/(NOT[^\w]+)?W\/[0-9]*[^\w]*$/, 'error' ],
      [/^[^\w]*(NOT[^\w]+)?[^\w]*PRE\/[0-9]*/, 'error' ],
      [/(NOT[^\w]+)?PRE\/[0-9]*[^\w]*$/, 'error' ],

      // operators
      [/^NOT\s+/, 'operator' ],
      [/\s+(AND|AndAny|OR)(\s+NOT)?\s+/, 'operator' ],
      [/\s+(NOT\s+)?W\/[1-9][0-9]*(\s+(xfirstword|xlastword))?\s+/, 'operator' ],
      [/\s+(NOT\s+)?PRE\/[1-9][0-9]*\s+/, 'operator' ],

      // strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
      [/"/, 'string', '@string'],
      
      // whitespace
      { include: '@whitespace' },
    ],

    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' } ]
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
    ],
  }
};
