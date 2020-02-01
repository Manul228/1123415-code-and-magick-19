'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var FIRST_GAP = 40;
var REGULAR_GAP = 50;
var BOTTOM_GAP = 20;
var TOP_GAP = 80;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; ++i) {
    ctx.fillText(players[i], CLOUD_X + FIRST_GAP + ((BAR_WIDTH + REGULAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - BOTTOM_GAP);
    ctx.fillRect(CLOUD_X + FIRST_GAP + ((BAR_WIDTH + REGULAR_GAP) * i), CLOUD_Y + TOP_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + FIRST_GAP + ((BAR_WIDTH + REGULAR_GAP) * i), CLOUD_Y + TOP_GAP - FONT_GAP );
  }
};
