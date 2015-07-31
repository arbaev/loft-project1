var addModule = (function() {

	var init = function () {
		// инициализация функций
		_setupListeners();
	};

	var _setupListeners = function () {
		// прослушка событий
		$('#add-new-project').on('click', _showPopup);
		$('#form-add-project').on('submit', _addProject);

	};

	var _showPopup = function(ev) {  // показать модальное окно добавления проекта
		ev.preventDefault();
		$('#add-popup').bPopup({
			modalClose: false,
			opacity: 0.7,
			positionStyle: 'fixed' //'fixed' or 'absolute'
		});
	};

	var _addProject = function(ev) { // сабмит добавления проекта
		console.log('submit project');
		ev.preventDefault();

		// объявляем нужные переменные
		var form = $(this),
			url = 'addproject.php';
			serverGiveMeAnswer = _ajaxForm(form, url);

			serverGiveMeAnswer.done(function(answer) {
				console.log("done!");
				console.log(answer);
				if (answer === 'OK') {
					console.log(answer.text);
					form.find('.success-msg').text(answer.text).show();
				}else{
					form.find('.msg > .msg-text').text(answer.text);
					form.find('.err-msg').show();
				}
			});

			serverGiveMeAnswer.always(function() {
				console.log("always!");
			});

	};

	// универсальная функция работы с формой
	// @form - форма
	// @url - путь/имяфайла к обработчику формы
	//
	// 1. проверить введённые данные
	// 2. собрать данные из формы
	// 3. отправить ответ с сервера
	//
	var _ajaxForm = function(form, url) {

		data = form.serialize();

		result = $.ajax({
				url: url,
				type: 'post',
				dataType: "json",
				data: data,
			}).fail(function(answer) {
				console.log("problem in php");
					console.log(answer());

				form.find('.msg > .msg-text').text(answer.text);
				form.find('.err-msg').show();
				// form.find('.err-msg').text('На сервере произошла ошибка').show();
			});

		return result;


	};

	return {
		init : init
	};

})();

addModule.init();