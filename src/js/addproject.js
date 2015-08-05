'use strict'

var addModule = (function() {
	// инициализация функций
	var init = function () {
		_errorResetOnClose();
		_setupListeners();
		$('input, textarea').placeholder();  // плейсхолдеры для ИЕ8
	};

	// прослушка событий
	var _setupListeners = function () {
		$('#add-new-project').on('click', _showPopup); // показать модальный попап
		$('.b-close').on('click', _errorResetOnClose); // при отмене попапа - сбросить ошибки
		$('#form-add-project').on('submit', _submitProject); // валидация и отправка формы
		$('#project-pic').on('change', _fileInput); // подстановка имени файла в инпут
		$('.form-element').on('focus', _errorResetOnFocus); // сброс ошибок при фокусе на поле
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
		var form = $(this),
			url = 'addproject.php',
			data = form.serialize();

		ev.preventDefault();

		if (_validateForm(form) === true) {
			// ошибок заполнения формы нет - сбросим все сообщения об ошибках...
			_errorResetOnClose();

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
						// если сервер вернул ОК — выводим сообщение об успехе и по его закрытию закрываем и окно загрузки
						$('.msg-text').text('Проект ' + answer.text + ' загружен!');
						$('.msg-success').bPopup({
							onClose: function(){
						        $('#add-popup').bPopup().close();
							}
						});

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
				console.log(this);
				$('.msg-err').show();
			};


		return 1;
	};

	// проверка всех инпутов на наличие value
	var _validateForm = function (form) {
		var	inps = form.find('input, textarea'),
			answer,
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

	// убираем все семафоры ошибок при закрытии окна загрузки проекта
	var _errorResetOnClose = function() {
		var form = $("#form-add-project"),
			inps = form.find('input, textarea'),
			msgs = form.find('.msg');

		inps.each(function(index,input) {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
			$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input
		});

		msgs.each(function(index,input) {
			$(this).hide();
		});
	};

	// убираем семафоры ошибок при фокусе на поле
	var _errorResetOnFocus = function () {
		var inputLength = $(this).val().length
		// если в инпуте уже что-то введено — не удаляем
		if (!inputLength) {
			$(this).removeClass('err-input good-input').val(''); // убираем обводку и очищаем инпут
		};
			$(this).prev().hide();  // скрываем тултип, он всегда идёт перед input
	};

	// вставка имени загружаемого файла в инпут
	var _fileInput = function() {
		// получаем имя файла (+путь) загружаемого файла
        var filePath = $('#project-pic').val();
        // выцепляем из полного пути имя файла
		var fileName = ('' + filePath).replace(/^.*[\\\/]/, '');
		// подставляем в фейковый инпут
		$('#project-pic-fake').val(fileName);
		$('#project-pic-fake').addClass('good-input'); // добавляем позитивную обводку
		// скрываем тултип и обводку-ошибку
		$('#project-pic-fake').removeClass('err-input'); // убираем обводку
		$('#project-pic-fake').prev().hide();  // скрываем тултип, он всегда идёт перед input
    };

	return {
		init : init
	};

})();

addModule.init();