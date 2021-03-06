/* Implement your solution here */


/* Do not touch anything below this line, but make sure the example works */
let tree = {
  name: 'INGKA HOLDING BV',
  subsidiaries: [
    {name: 'IKEA FASTIGHETER AB', subsidiaries: [{name: 'IKEA InvestFast AB', subsidiaries: null}]},
    {name: 'IKEA AB', subsidiaries: [
      {name: 'IKEA SVENSKA AB', subsidiaries: null},
      {name: 'IKEA IT AB', subsidiaries: null},
      {name: 'Slutplattan EPIGA 99006 AB', subsidiaries: [{name: 'OAO DOMOSTROITEL', subsidiaries: null}]}
    ]},
    {name: 'IKEA of Sweden AB', subsidiaries: [{name: 'IKEA Communications AB', subsidiaries: null}]}
  ]
};

if (countNonLeafNodes(tree) !== 5) console.error('Invalid amount');
else console.log('Solved!');
