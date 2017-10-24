function show(x, y, z) {
    var x = $(x),
        y = $(y),
        z = $(z);
    x.addClass('win');
    y.addClass('win');
    z.addClass('win');
    lockAll();
    setTimeout(reset, 1500);
}

function reset() {
    $('.game-field').html('');
    game.moves = 1;
    $('.game-field').attr('onClick', 'icon(this.id)');
    $('.win').removeClass('win');
    setTimeout(firstMove, 200);
}
