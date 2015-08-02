'use strict'

var addModule = (function() {

	// инициализация функций
	var init = function () {
		_setupListeners();
	};

	// прослушка событий
	var _setupListeners = function () {
		$('#add-new-project').on('click', _showPopup);
		$('#form-add-project').on('submit', _submitProject);
	};

	// показать модальное окно добавления проекта
	var _showPopup = function(ev) {
		ev.preventDefault();
		$('#add-popup').bPopup({
			modalClose: false,
			opacity: 0.7,
			positionStyle: 'fixed' //'fixed' or 'absolute'
		});
	};

	// сабмит добавления проекта
	var _submitProject = function(ev) {
		ev.preventDefault();

		// объявляем нужные переменные
		var form = $(this),
			inps = form.find('input, textarea'),
			tooltips = form.find('.label').next(), // тултип всегда идёт следом за label
			url = 'addproject.php',
			aaa;

		inps.each(function() {
			if($(this).val().length === 0) {
				console.log(1);

				$(this).addClass('err-input');
				$(this).prev().removeClass('noshow');
			} else {
				return 1;
			}
		});

	};

	return {
		init : init
	};

})();

addModule.init();