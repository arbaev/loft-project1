# Учебный проект №1 — "Портфолио"

### Порядок установки проекта

	1. git clone https://github.com/arbaev/loft-project1.git %your_folder%
	2. cd %your_folder%
	3. bower -i
	4. npm -i
	5. gulp

### Замечания по проекту
1. Вёрстка (пока) неадаптивная, но старался сделать совместимо с IE8
2. В форме фидбэка поменял местами кнопки "отправить" и "очистить", а также выделил последнюю красным цветом.
3. *Странно, но цвет ссылок в меню противоположен цвету ссылок в остальных блоках.*
4. *Странно, но заголовки блоков имеют цвет ссылок, хотя и не кликабельны*
5. *Логичным было бы убрать со страницы авторизации не только шапку, но и футер. А также добавить стандартные ссылки восстановления пароля и возврата на главную.*

### Code review и работа над ошибками
текущих нет

### TO DO List
* откомментировать стили и хтмл
* сделать и прописать фавиконку всех форматов
* страница 404
* переделать проект на jade
* сделать пайплайн на gulp с минификацией и пр.

##### works.html

##### feedback.html
* реализовать отправку письма в php

##### login.html
* форму ввода логина центрировать по высоте экрана (и уменьшить размер шрифта)

*что-то ещё? Пишите!*

***

#### Исправленные проблемы
+ [06.08.2015] Не работает эффект наведения в ie8 на странице мои работы
+ [06.08.2015] в IE9 и ранее наблюдается глюк с поиском .prev() элемента - при сабмите скрывается инпут пароля вместо тултипа пароля
+ [05.08.2015] реализовать валидацию данных при сабмите формы и вывод сообщений об ошибках
+ [05.08.2015] поправить вёрстку страницы фидбэка
+ [05.08.2015] Эти ссылки лучше разместить сразу после кнопки <http://joxi.ru/eAO5vvPCPxp7mo>
+ [04.08.2015] Поле для ввода сообщения тоже нужно стилизовать <http://joxi.ru/1A5RVV7uanGnrE>
+ [04.08.2015] Стилизуем не только placeholder но и текст который вводится пользователем в поля формы <http://joxi.ru/V2VGjjPFPxd3Av>
+ [04.08.2015] Проблема со стилизацией поля для загрузки каринки в ie <http://joxi.ru/EA4aVVyh1wDlrb>
+ [04.08.2015] форма загрузки: реализовать обработку данных при сабмите формы
+ [04.08.2015] форма загрузки: реализовать валидацию данных при сабмите формы и вывод сообщений об ошибках
+ [04.08.2015] форма загрузки: реализовать отображение в поле загрузки файла имени выбранного файла
+ [03.08.2015] форма загрузки: в ИЕ наполовину пропадает кнопка загрузки файла после нажатия на неё
+ [03.08.2015] форма загрузки: в ИЕ8 сделать плейсхолдеры на JS
+ [03.08.2015] форма загрузки: в ИЕ8 не работает клик по кнопке загрузке файла (только по полю ввода)
+ [03.08.2015] форма загрузки: клик по заголовку "загрузить картинку" вызывает окно выбора файла
+ [30.07.2015] форма загрузки: реализовать всплывающий попап
+ [29.07.2015] убрать дублирующие описания общих стилей форм из login.css
+ [29.07.2015] сверстать форму добавления работы в портфолио
+ [29.07.2015] Блок с добавлением проекта должен полностью быть ссылкой а не только надпись "Добавить проект"
+ [29.07.2015] Нежелательно вкладывать блочные элементы в строчные <http://joxi.ru/nAyeRRNS6v00AZ>
+ [28.07.2015] Не соответствует дизайну  <http://joxi.ru/xAe8VVQFDRX82y>
+ [28.07.2015] Отступы только слева и снизу. <http://joxi.ru/krD7wwYC7K4XAp>
+ [28.07.2015] Не прописываем жестко размеры картинок  <http://joxi.ru/a2X7vvBCvwDqmg>
+ [28.07.2015] Теги, формирующие дизайн страницы должны иметь класс, так как мы стилизуем не теги, а классы, и навешиваем их на наши теги.  <http://joxi.ru/l2Z3ppPCdzExAJ>
+ [28.07.2015] Футер прибиваем к низу страницы, но не делаем его фиксированным. Он должен отталкиватся контентом если его больше чем высота экрана
+ [27.07.2015] исправить баг с меню - область ссылки лишь в центре пункта (убрать паддинги)
