test('Word Model Test', function() {
    var w = new Word('動く', 'ugoku');
    equal( w.judge( 'o' ), false );
    equal( w.judge( 'u' ), true );
    equal( w.isFinished(), false );
    equal( w.judge( 'g' ), true );
    equal( w.isFinished(), false );
    equal( w.judge( 'o' ), true );
    equal( w.isFinished(), false );
    equal( w.judge( 'k' ), true );
    equal( w.isFinished(), false );
    equal( w.judge( 'u' ), true );
    equal( w.isFinished(), true );
    equal( w.judge( 'x' ), false );
});
