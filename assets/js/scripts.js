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
});