// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

// Push your First and Last Name into an empty array
var nameArray = [];
nameArray.push('caity', 'pizza');

// all the missing numbers up to and including 10 to genericNumberArray
genericNumberArray.push(6,7,8,9,10);

// removes the last element of an array
var popResult = colors.pop();

// reverse scrambledWords
scrambledWords.reverse();
phoneNumber.reverse();

// shift to remove first element of array
nextOrder = orderQueue.shift();

// sort mixedNums array
mixedNums.sort();
mixedWords.sort();

// remove elements so fruitCollection only has fruits removing elements
var notFruit = fruitCollection.splice(1, 3);
gemBox.splice(5, 7, 'Sapphire');

// removing elements (working from end of array)
upToTen.splice(upToTen.length - 2, 0, 3, 4, 5, 6, 7, 8);

// why not both
brownOnly.splice(1, 5, "brown", "brown", "brown");

// `orderedValues` array has all numbers between 1 and 10, has a length of 10
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);