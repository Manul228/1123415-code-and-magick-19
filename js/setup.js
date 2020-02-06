'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EUES_COLORS = ['black','red', 'blue', 'yellow', 'green'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var getRandomName = function () {
  var namesNumber = WIZARD_NAMES.length;
  var surnamesNumber = WIZARD_SURNAMES.length;

  if (namesNumber === 0 && surnamesNumber === 0)
    return "Anonimous";

  var randomNameIndex = getRandomInt(0, namesNumber);
  var randomSurnameIndex = getRandomInt(0, surnamesNumber);

  var name = WIZARD_NAMES[randomNameIndex];
  var surname = WIZARD_SURNAMES[randomSurnameIndex];

  return name + ' ' + surname;
}

console.log(getRandomName());

var getTraitsCollection = function () {

}
