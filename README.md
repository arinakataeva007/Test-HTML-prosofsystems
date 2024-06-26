# Test-HTML-prosofsystems
Завершено

## Содержание

1. <a href = "#start">Как запустить проект?</a>
2. <a href = "#stack">Stack-технологий</a>
3. <a href = "#technical_assignment">Функцонал</a>
4. <a href = "#description">Пояснения к функционалу</a>
  
<a name = start></a>
## Как запустить проект?
  * предварительно должно быть установлено: node.js
    
  1. Установить Angular (Открыть терминал и прописать `npm install -g @angular/cli`)
  2. Скачать проект, открыть его и прописать в терминале `npm install`
  3. После прописать в терминале `ng build`
  4. Прописать в терминале `npm start`
  
<a name = stack></a>  
## Stack-технологий
- Приложение написано на Angular
 
<a name = technical_assignment></a>
## Функционал

| Пункт ТЗ | Путь в проекте  |
| ------- | --- |
| Роутинг по страницам (главная навигация и внутренние навигации) | src/app/children/dashboard/components/main-navigation  |
| Привязана 1 реактивная форма | src/app/children/dashboard/pages/administration-page/pages/main-page/main-page.component.ts |
| Кастомный чекбокс | src/app/children/dashboard/components/custom-checkbox |
| Кастомный селект | src/app/children/dashboard/components/custom-select |
| Стили с миксинами | src/app/children/dashboard/styles/mixin-global.style.scss |
| Стили с переменными | src/app/children/dashboard/styles/variables-global.style.scss |
| При нажатии на клавиатуре Shift + S ставится фокус в поле поиска на левой навигационной панели | src/app/children/dashboard/components/left-navigation/components/search-control |

<a name = description></a>
## Пояснения к функционалу

1. В левой навигационной панели не осуществляется роутинг по страницам.
2. В administration.component есть верстка только mainPage.component (остальные страницы сделаны для только для навигации).
3. В mainPage.component сделана верстка только inside-main-page.component (остальные страницы сделаны для только для навигации).
4. При нажатии на кнопку закрытия вкладки со страницей появлется модальное окно.
5. При введении какого-либо значения в поле ввода: Full Name, справа от формы - в чекбоксе: Not Valid, исчезает галочка.
