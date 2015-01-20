jQuery(document).ready(function($) {
	$('.modalbox').fancybox();

	$('form').submit(function(event) {
		$str = $(this).serialize();

		$.post('send.php', $str, function() {
			$.fancybox.close();
			sweetAlert("Успешно отправлено!", "", "success");
		});

		return false;
	});

	function padNumber(number, pad) {
	  var N = Math.pow(10, pad);
	  return number < N ? ("" + (N + number)).slice(1) : "" + number;
	}

	function getLocalDay(day) {
	  if ( day === 0 ) { // день 0 становится 7
	    day = 7;
	  }
	   
	  return getRusWeekDay(day);
	}	

	function getRusWeekDay(day) {
		switch (day) {
		   case 1:
		      return 'Понедельник';
		   case 2:
		      return 'Вторник';
		   case 3:
		      return 'Среда';
		   case 4:
		      return 'Четверг';
		   case 5:
		      return 'Пятница';
		   case 6:
		      return 'Суббота';
		   case 7:
		      return 'Воскресенье';
		   default:
		      return 'Воскресенье';
		}
	}

	function getLocalMonth(month) {
		switch (month) {
		   case 0:
		      return 'Января';            
		   case 1:
		      return 'Февраля';
		   case 2:
		      return 'Марта';
		   case 3:
		      return 'Апреля';
		   case 4:
		      return 'Мая';
		   case 5:
		      return 'Июня';
		   case 6:
		      return 'Июля';
		   case 7:
		      return 'Августа';
		   case 8:
		      return 'Сентября';
		   case 9:
		      return 'Октября';
		   case 10:
		      return 'Ноября';
		   case 11:
		      return 'Декабря';
		   default:
		      return 'Января';
		}
	}

	setInterval(function () { 
		var date    = new Date (),
		    month   = getLocalMonth(date.getMonth()),
		    wdays   = getLocalDay(date.getDay()),
		    days    = padNumber(date.getDate(), 2),
		    hours   = padNumber(date.getHours(), 2), 
		    minutes = padNumber(date.getMinutes(), 2);

		// у нас занятия по вторникам 20 00 
		// четвергам 19 00 и 
		// сб 19 00
		if (date.getDay() < 3  ) {
			days = + days + 2 - date.getDay();
			$('.event__form__title').html('Вторник '+days+' '+month+', <span class="event__form__title__number">20:00</span>');
		} else if (date.getDay() < 5 ) {
			days = + days + 4 - date.getDay();
			$('.event__form__title').html('Четверг '+days+' '+month+', <span class="event__form__title__number">19:00</span>');
		} else {
			days = + days + 5 - date.getDay();
			$('.event__form__title').html('Суббота '+days+' '+month+', <span class="event__form__title__number">19:00</span>');
		}
	}, 1000);	
});