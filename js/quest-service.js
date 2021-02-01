var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;


createQuestsTree()
function createQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars - V
    var keyForQuest = _getKeyByValue(gCurrQuest, res)
    gPrevQuest = gCurrQuest;
    if (keyForQuest === 'no') gCurrQuest = gPrevQuest.no;
    else gCurrQuest = gPrevQuest.yes;
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree - V
    if (lastRes === 'yes') {
        gPrevQuest.yes = createQuest(newQuestTxt);
        gCurrQuest = gPrevQuest.yes;
    }
    else {
        gPrevQuest.no = createQuest(newQuestTxt);
        gCurrQuest = gPrevQuest.no;
    }
    gCurrQuest.yes = createQuest(newGuessTxt);
    gCurrQuest.no = createQuest(_getRandomWrongGuess());
}

function _resetGameVars(){
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function getCurrQuest() {
    return gCurrQuest
}