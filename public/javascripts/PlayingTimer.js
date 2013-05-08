function PlayingTimer(){
    var timerId ;

    this.start = function(){
	var passedTime = 0;
	var interval = 200;  // ms

	var repeatFunc = function(){
	    passedTime += interval;
	    $('#timerDiv').html( passedTime );
	};
	timerId = window.setInterval( repeatFunc, 1000 );
    };

    this.end = function(){
	window.clearInterval( timerId );
    };


};

