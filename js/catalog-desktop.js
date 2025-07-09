document.addEventListener('DOMContentLoaded', function() {
  // Все элементы меню
  const menuButtons = {
    1: { button: document.getElementById('1'), menu: document.querySelector('.calatog__menu-desktop') },
    2: { button: document.getElementById('2'), menu: document.querySelector('.gifts__menu-desktop') },
    3: { button: document.getElementById('3'), menu: document.querySelector('.events__menu-desktop') }
  };

  // Функция для закрытия всех меню, кроме исключения
  function closeAllMenus(exceptId = null) {
    Object.keys(menuButtons).forEach(id => {
      if (id !== exceptId) {
        menuButtons[id].menu.style.display = 'none';
      }
    });
  }

  // Инициализация - скрываем все меню
  closeAllMenus();

  // Обработчики для каждой кнопки
  Object.keys(menuButtons).forEach(id => {
    const { button, menu } = menuButtons[id];
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Закрываем все другие меню
      closeAllMenus(id.toString());
      
      // Переключаем текущее меню
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Предотвращаем закрытие при клике внутри меню
    menu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Общий обработчик клика по документу
  document.addEventListener('click', function() {
    closeAllMenus();
  });
});