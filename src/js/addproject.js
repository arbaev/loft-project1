'use strict'

var addModule = (function() {

	// инициализация функций
	var init = function () {
		_setupListeners();
	};

	// прослушка событий
	var _setupListeners = function () {
		$('input, textarea').placeholder();
		$('#add-new-project').on('click', _showPopup);
		$('.b-close').on('click', _errorResetOnClose);
		$('#form-add-project').on('submit', _submitProject);
		$('#project-pic').on('change', _fileInput);
		$('.form-element').on('focus', _errorResetOnFocus);
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

	// проверка на наличие данных в полях ввода и вывод тултипов, если нет
	var _submitProject = function(ev) {
		ev.preventDefault();

		// объявляем нужные переменные
		var form = $(this),
			inps = form.find('input, textarea');

		inps.each(function() {
			if($(this).val().length === 0) {
				$(this).addClass('err-input');
				$(this).prev().show();  // тултип всегда идёт перед input
			} else {
				$(this).addClass('good-input');
			}
		});
		return 1;
	};

	// убираем все семафоры ошибок при закрытии окна загрузки проекта
	var _errorResetOnClose = function() {
		var form = $("#form-add-project"),
			inps = form.find('input, textarea');

		inps.each(function(index,input) {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
			$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input
		});
	}

	// убираем семафоры ошибок при фокусе на поле
	var _errorResetOnFocus = function () {
		var inputLength = $(this).val().length
		// если в инпуте уже что-то введено — не удаляем
		if (!inputLength) {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
		};
			$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input

	}

	// вставка имени загружаемого файла в инпут
	var _fileInput = function() {
		// получаем имя файла (+путь) загружаемого файла
        var filePath = $('#project-pic').val();
        // выцепляем из полного пути имя файла
		var fileName = ('' + filePath).replace(/^.*[\\\/]/, '');
		// подставляем в фейковый инпут
		$('#project-pic-fake').val(fileName);
		$('#project-pic-fake').addClass('good-input'); // убираем обводку и очищаем инпут
		// ратычно скрываем тултип и обводку-ошибку
		$('#project-pic-fake').removeClass('err-input'); // убираем обводку
		$('#project-pic-fake').prev().hide();  // скрываем тултип, он всегда идёт перед input
    }

	return {
		init : init
	};

})();

addModule.init();