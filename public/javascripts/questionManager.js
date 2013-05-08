function questionManager(){

    this.words = Array();

    this.words.push( new Word( '動く', 'ugoku' ) );
    this.words.push( new Word( '働く', 'hataraku' ) );
    this.words.push( new Word( 'お世話になります', 'osewaninarimasu' ) );
    this.words.push( new Word( '仕様です', 'siyoudesu' ) );
    this.words.push( new Word( '連絡が遅くなり申し訳ありません', 'renrakugaosokunarimousiwakearimasenn' ) );
    this.words.push( new Word( 'print', 'print' ) );
    this.words.push( new Word( 'INSUITE', 'insuite' ) );
    this.words.push( new Word( 'DreamArts', 'DreamArts' ) );

    this.getWordAtIndex = function( idx ){
	if(  this.words[ idx ] ){
	    return this.words[ idx ];
	};
	return new Word('', '');
    };

    this.isLastWord = function( idx ){
	if( ( this.words.length - idx ) == 1 ){
	    return true;
	};
	return false;
    };

    this.progressValue = function( idx ){
	return ( ( idx / this.words.length ) * 100 );
    };

    this.progressLabel = function( idx ){
	return idx + "/" + this.words.length;
    };
};
