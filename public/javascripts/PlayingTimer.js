function PlayingTimer(){
    var timerId;

    this.start = function(){
	var passedTime = 0;
	var interval = 1000;  // ms
	var maxTime = 1000 * 60 * 10 // 10sec

	var repeatFunc = function(){
	    passedTime += interval;
	    $('#timerDiv').html( passedTime );

	    if( passedTime > maxTime ){
		window.clearInterval( timerId );
	    };
	};
	timerId = window.setInterval( repeatFunc, interval );
    };

    this.end = function(){
	window.clearInterval( timerId );
    };


};

