'use strict'

var loginModule = (function() {
	// инициализация функций
	var init = function () {
		var form = $("#login");

		_clearLoginForm(form);
		_setupListeners();
		// $('input, textarea').placeholder();  // плейсхолдеры для ИЕ8
	};

	// прослушка событий
	var _setupListeners = function () {
		$('#login').on('submit', _submitLogin); // валидация и отправка формы
		$('.form-element').on('focus', _errorResetOnFocus); // сброс ошибок при фокусе на поле
	};

	var _submitLogin = function(ev) {
		var form = $(this),
			url = 'login.php',
			data = form.serialize();

		ev.preventDefault();
		console.log(_validateLoginForm(form));
		if (_validateLoginForm(form) === true) {
			// ошибок заполнения формы нет - сбросим все сообщения об ошибках...
			_clearLoginForm(form);

			// ...и отдаём на бэкенд
			$.ajax({
					url: url,
					type: 'post',
					dataType: 'json',
					data: data,
				})
				.done (function(answer) {
					console.log(answer);
					if (answer.status === 'OK') {
						// если сервер вернул ОК — выводим сообщение об успехе
						$('.msg-success .msg-text').text('Вы вошли как ' + answer.text);
						$('.msg-success').bPopup();

					} else {
						// если сервер не вернул ОК — выводим текст ошибки
						$('.msg-text').text(answer.text);
						$('.msg-err').show();
					};
				})
				.fail (function(answer) {
					console.log('fail');
				});
			} else {
				// ошибки заполнения формы есть — просим устранить
				$('.msg-err').show();
			};

		return 1;

	};

	// очищаем все инпуты в форме
	// убираем все семафоры ошибок при закрытии окна загрузки проекта
	var _clearLoginForm = function(form) {
		var	inps = form.find('input, textarea'),
			msgs = form.find('.msg');

		inps.each(function() {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
			$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input
		});
		msgs.each(function() {
			$(this).hide();
		});
	};

	// убираем семафоры ошибок при фокусе на поле
	var _errorResetOnFocus = function () {
		var inputLength = $(this).val().length;
		// если в инпуте уже что-то введено — не удаляем
		if (inputLength === 0) {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
			};
		$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input
	};

	// проверка всех инпутов на наличие value
	var _validateLoginForm = function (form) {
		var	inps = form.find('input, textarea'),
			valid = true;

		inps.each(function() {
			if($(this).val().length === 0) {
				$(this).addClass('err-input');
				$(this).prev().show();  // тултип всегда идёт перед input
				valid = false;
			} else {
				$(this).addClass('good-input');
			}
		});

		return valid;
	};



return {
		init : init
	};

})();

loginModule.init();