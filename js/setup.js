'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var getRandomElement = function (array) {
  var len = array.length;

  if (len === 0) {
    return undefined;
  }

  return array[getRandomInt(0, len)];
};

var getWizards = function (amount) {
  var wizards = [];

  for (var i = 0; i < amount; ++i) {
    var name = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
    var coatColor = getRandomElement(COAT_COLORS);
    var eyesColor = getRandomElement(EYES_COLORS);

    var wizard = {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor
    };

    wizards.push(wizard);
  }

  return wizards;
};

var renderWizard = function (wizard, similarWizardTemplate) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var placeWizards = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = getWizards(WIZARDS_AMOUNT);

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; ++i) {
    fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

placeWizards();

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && !evt.target.classList.contains('setup-user-name')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');

var wizardCoat = setupWizard.querySelector('.wizard-coat');
var inputCoat = document.querySelector('input[name="coat-color"]');

wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = coatColor;
  inputCoat.setAttribute('value', coatColor);
});

var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputEyes = document.querySelector('input[name="eyes-color"]');

wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = eyesColor;
  inputEyes.setAttribute('value', eyesColor);
});

var fireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('input[name="fireball-color"]');

fireball.addEventListener('click', function () {
  var fireballColor = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballColor;
  inputFireball.setAttribute('value', fireballColor);
});


