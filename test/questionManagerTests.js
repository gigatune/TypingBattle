test('Word Model Test', function() {
    var qm = new questionManager();
    qm.setTestData();

    var word_u = new Word( '動く', 'ugoku' );
    var word_h = new Word( '働く', 'hataraku' );
    var w = qm.getWordAtIndex( 0 );
    equal( w.shownWord, word_u.shownWord );
    equal( w.ruby, word_u.ruby );

    equal( qm.isLastWord(0), false );
    equal( qm.isLastWord(1), true );

    equal( qm.progressValue(0,0), 0 );
    equal( qm.progressValue(0,1), 7 );
    equal( qm.progressValue(0,2), 15 );
    equal( qm.progressValue(1,0), 38 );
    equal( qm.progressValue(1,1), 46 );

    equal( qm.progressLabel(0), '0/2' );
    equal( qm.progressLabel(1), '1/2' );

});
