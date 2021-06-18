// Получение элемента из DOM
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

// События
// dragstart - когда начали перетаскивать
item.addEventListener('dragstart', dragstart);
// dragend - когда закончили перетаскивать
item.addEventListener('dragend', dragend);

// Проход по элементам
for (const placeholder of placeholders){
    // События
    // Обработка когда мы над территорией
    placeholder.addEventListener('dragover', dragover);
    // Заходим на территорию
    placeholder.addEventListener('dragenter', dragenter);
    // Перетащили, но вышли с территори
    placeholder.addEventListener('dragleave', dragleave);
    // Отпустили
    placeholder.addEventListener('drop', dragdrop);
}

// Функции, которые будут выполнены, когда событие произошло
// event - означает, что мы передаем функции объект
function dragstart(event) {
    // event.targer - ссылка на объект 'Перетащи меня'
    // Добавление класса
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
};

function dragend(event) {
    // Удаление класса
    event.target.classList.remove('hold', 'hide');
};

// По умолчанию функция запрещает перетаскивать элементы
function dragover(event) {
    // Разрешаем перенос
    event.preventDefault();
};

function dragenter(event) {
    event.target.classList.add('hovered');
};

function dragleave(event) {
    event.target.classList.remove('hovered');
};

function dragdrop(event) {
    event.target.classList.remove('hovered');
    // Перенос с js в html
    event.target.append(item);
};