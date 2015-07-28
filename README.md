# Учебный проект №1 — "Портфолио"

### Порядок установки проекта

	1. git clone https://github.com/arbaev/loft-project1.git %your_folder%
	2. cd %your_folder%
	3. bower -i
	4. npm -i
	5. gulp

### Замечания по проекту
* Вёрстка (пока) неадаптивная, но старался сделать совместимо с IE8
* Взял на себя смелость немного изменить логику разметки макета, а именно:
	1. Для единообразия все ссылки имеют один цвет — и в контенте и в меню и в остальных блоках, а при ховере в контенте — подчёркивание.
	2. Заголовки блоков имеют цвет текста, чтобы визуально не путались со ссылками
	3. В форме фидбэка поменял местами кнопки "отправить" и "очистить", а также  выделил последнюю красным цветом.
	4. *Логичным было бы убрать со страницы авторизации не только шапку, но и футер. Тем более, я добавил стандартные ссылки восстановления пароля и возврата на главную. Это сделаю после реализации валидации и авторизации*

### Code review и работа над ошибками
>- Не прописываем жестко размеры картинок  <http://joxi.ru/a2X7vvBCvwDqmg>
- Отступы только слева и снизу. <http://joxi.ru/krD7wwYC7K4XAp>
- Не соответствует дизайну  <http://joxi.ru/xAe8VVQFDRX82y>


### TO DO List
* сделать error tooltips на страницах feedback и login
* сверстать форму добавления работы в портфолио
* форму ввода логина центрировать по высоте экрана (и уменьшить размер шрифта)
* .... многочисленные пункты про JS пока пропускаем ....
* прописать фавиконку всех форматов
* страница 404
* что-то ещё? Пишите!

***

#### Исправленные проблемы
+ исправить баг с меню - область ссылки лишь в центре пункта (убрать паддинги)
+ Футер прибиваем к низу страницы, но не делаем его фиксированным. Он должен отталкиватся контентом если его больше чем высота экрана
+ Теги, формирующие дизайн страницы должны иметь класс, так как мы стилизуем не теги, а классы, и навешиваем их на наши теги.  <http://joxi.ru/l2Z3ppPCdzExAJ>


