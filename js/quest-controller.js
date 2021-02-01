'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  // TODO: hide the game-start section - V
  $('.game-start').hide();
  renderQuest();
  // TODO: show the quest section - V
  $('.quest').show();
}

function renderQuest() {
  // TODO: select the <h3> inside quest and update its text by the currQuest text - V
  $('h3').text(getCurrQuest().txt);
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');
      onRestartGame();
      // TODO: improve UX - somewhat..
    } else {
      // TODO: hide and show new-quest section - V
      $('.quest').hide();
      $('.new-quest').show();
    }
  } else {
    // TODO: update the lastRes global var - V
    gLastRes = res;
    if (res === 'yes') moveToNextQuest(getCurrQuest().yes.txt);
    else moveToNextQuest(getCurrQuest().no.txt);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  // TODO: Get the inputs' values - V
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  if (!newGuess || !newQuest) return;
  // TODO: Call the service addGuess - V
  addGuess(newQuest, newGuess, gLastRes)
  $('#newGuess').val('');
  $('#newQuest').val('');
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.quest').hide();
  $('.game-start').show();
  _resetGameVars();
  gLastRes = null;
}