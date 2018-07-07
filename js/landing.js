$(document).ready(function() {


/*
	var array 	= [];
	var items 	= $('.service-item');
	var service = $('.service');
	var i = 0;
	for(; i < items.size(); i++){array[i] = i;}
	for(var j = 0; j < array.length; j++){
		var randI = Math.floor(Math.random()*(array.length-1));
		var temp = array[j];
		array[j] = array[randI];
		array[randI] = temp;
	}
	*/
	var wind = $(window);




	initLand();
	wind.scroll(function(){
		initLand();
	});
});

function initLand(){

	var wind = $(window);

	// about 
	/*
	var min = $('.about').offset().top+400;
	var cur = wind.height()+wind.scrollTop();
	var max = min+$('.about-pictures').height()/2;

	if(wind.height()+wind.scrollTop() >= min){
  	$('.pic-item').css('opacity', (cur-min)/(max-min));
	}
	*/
	// section2
	var sect2 = $('.section2');
	if(wind.height()+wind.scrollTop() >= sect2.offset().top+50){
		var cols = sect2.find('.movable');
		cols.addClass('animateLeft');
	}

	// section3
	var sect3 = $('.section3');
	if(wind.height()+wind.scrollTop() >= sect3.offset().top+50){
		sect3.find('h3').addClass('animateLeft');
		sect3.find('h2').addClass('animateRight');

		if(wind.height()+wind.scrollTop() >= sect3.offset().top+300){
			var cols = sect3.find('[class*="col-"]').slice(1);
	    cols.each(function(i){
	      setTimeout(function(){
	      	//cols.eq(i).addClass('animateDown');
	        cols.eq(i).addClass('opacity').removeClass('transparent');
	      }, 180 * (i+1));
	    });
		}
	}
	// description
	var desc = $('.desc');
	if(wind.height()+wind.scrollTop() >= desc.offset().top+100){
		desc.find('img').addClass('animateDown');
		desc.find('div:nth-child(2)').addClass('animateRight');
	}


	// clients
	var clients = $('.clients');
	if(wind.height()+wind.scrollTop() >= clients.offset().top+100){
		var cols1 = clients.find('.test');
    cols1.each(function(i){
      setTimeout(function(){
        cols1.eq(i).removeClass('transparent').addClass('flipIn');
      }, 180 * (i+1));
    });

    if(wind.height()+wind.scrollTop() >= clients.offset().top+200){
    	var cols2 = clients.find('.row:last-child div[class*="col-"]');

		  cols2.each(function(i){
		    setTimeout(function(){
		      cols2.eq(i).removeClass('transparent').addClass('animateDown');
		    }, 180 * (i+1));
		  });

    }
	}

	// features
	var feat = $('.features');
	if(wind.height()+wind.scrollTop() >= feat.offset().top+100){
		feat.find('h3').addClass('animateLeft');
		feat.find('h2').addClass('animateRight');
		feat.find('p').addClass('animateLeft');

		if(wind.height()+wind.scrollTop() >= feat.offset().top+350){
			feat.find('img').addClass('animateDown');
		}

	}

}