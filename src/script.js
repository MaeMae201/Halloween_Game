const $ = require('jquery');

const appRoot = $('#app');

var STATE = {
    first: true,
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1
};

$main();
