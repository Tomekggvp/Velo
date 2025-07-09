document.querySelectorAll('.lang-switcher__item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Удаляем активный класс у всех элементов
    document.querySelectorAll('.lang-switcher__item').forEach(el => {
      el.classList.remove('lang-switcher__item--active');
    });
    
    // Добавляем активный класс только к выбранному
    this.classList.add('lang-switcher__item--active');
  });
});