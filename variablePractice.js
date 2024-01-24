const yourVariable = "Learning to code gives you superpowers";

const yourSecondVariable = 10;

const yourThirdVariable = { firstProperty: "hello world" };

const firstArray = [10, 234, 543, 213];

const secondArray = [
  4324,
  12,
  124,
  1,
  "a string",
  { prop: "sdgsdfg" },
  [43, 231],
];

console.log(firstArray[0]);
console.log(secondArray[3][0]);

//objects//
const objectVariable = { prop1: 20, prop2: 50 };
objectVariable.prop1; //20

const nestedObject = {
  layer1: {
    layer2: {
      layer3: {
        targetValue: 20,
      },
    },
  },
};

nestedObject.layer1.layer2.layer3.targetValue; //20
