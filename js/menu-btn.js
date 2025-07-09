document.addEventListener('DOMContentLoaded', function() {
  // Элементы меню
  const catalogMenu = document.querySelector('.catalog__menu');
  const headerMenu = document.querySelector('.header__menu');
  const phonesMenu = document.querySelector('.phones__menu');
  const gadgetsMenu = document.querySelector('.gadgets__menu');
  const menuButton = document.querySelector('.header__button .header__link');
  
  // Элементы для смены иконки
  const menuIcon = document.querySelector('.header__group--left .header__button:first-child img');
  const icons = {
    default: '/img/menu-btn.svg',
    active: '/img/close-btn.svg'
  };

  // Находим кнопки навигации
  const catalogMenuItem = document.querySelector('.header__menu .menu__item--with-action a');
  const backButton = document.querySelector('.catalog__menu .menu__item--simple .menu__link');
  const smartphonesMenuItem = document.querySelector('.catalog__menu .menu__item--with-action a');
  const phonesBackButton = document.querySelector('.phones__menu .menu__item--simple .menu__link');
  
  // ИСПРАВЛЕННЫЙ селектор для кнопки "Гаджеты" - теперь он ищет конкретно пункт с текстом "Гаджеты"
  const gadgetsMenuItem = Array.from(document.querySelectorAll('.phones__menu .menu__item--with-action .menu__link'))
    .find(item => item.querySelector('.menu__text').textContent.includes('Гаджеты'));
  
  const gadgetsBackButton = document.querySelector('.gadgets__menu .menu__item--simple .menu__link');

  // Функция для закрытия всех меню
  function closeAllMenus() {
    headerMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    phonesMenu.style.display = 'none';
    gadgetsMenu.style.display = 'none';
    menuIcon.src = icons.default;
    menuIcon.alt = 'Открыть меню';
  }

  // Функция для открытия основного меню
  function openMainMenu() {
    closeAllMenus();
    headerMenu.style.display = 'block';
    menuIcon.src = icons.active;
    menuIcon.alt = 'Закрыть меню';
  }

  // Функция для открытия меню каталога
  function openCatalogMenu() {
    closeAllMenus();
    catalogMenu.style.display = 'block';
    menuIcon.src = icons.active;
    menuIcon.alt = 'Закрыть меню';
  }

  // Функция для открытия меню смартфонов
  function openPhonesMenu() {
    closeAllMenus();
    phonesMenu.style.display = 'block';
    menuIcon.src = icons.active;
    menuIcon.alt = 'Закрыть меню';
  }

  // Функция для открытия меню гаджетов
  function openGadgetsMenu() {
    closeAllMenus();
    gadgetsMenu.style.display = 'block';
    menuIcon.src = icons.active;
    menuIcon.alt = 'Закрыть меню';
  }

  // Обработчик для кнопки меню
  if (menuButton) {
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isAnyMenuOpen = headerMenu.style.display === 'block' || 
                          catalogMenu.style.display === 'block' || 
                          phonesMenu.style.display === 'block' ||
                          gadgetsMenu.style.display === 'block';
      
      if (isAnyMenuOpen) {
        closeAllMenus();
      } else {
        openMainMenu();
      }
    });
  }

  // Обработчик для открытия меню каталога
  if (catalogMenuItem) {
    catalogMenuItem.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openCatalogMenu();
    });
  }

  // Обработчик для кнопки "Назад" в каталоге
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openMainMenu();
    });
  }

  // Обработчик для открытия меню смартфонов
  if (smartphonesMenuItem) {
    smartphonesMenuItem.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openPhonesMenu();
    });
  }

  // Обработчик для кнопки "Назад" в меню смартфонов
  if (phonesBackButton) {
    phonesBackButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openCatalogMenu();
    });
  }

  // Обработчик для открытия меню гаджетов (ТОЛЬКО для пункта "Гаджеты")
  if (gadgetsMenuItem) {
    gadgetsMenuItem.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openGadgetsMenu();
    });
  }

  // Обработчик для кнопки "Назад" в меню гаджетов
  if (gadgetsBackButton) {
    gadgetsBackButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openPhonesMenu();
    });
  }

  // Закрытие меню при клике вне их области
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.header__menu') && 
        !e.target.closest('.catalog__menu') &&
        !e.target.closest('.phones__menu') &&
        !e.target.closest('.gadgets__menu') &&
        !e.target.closest('.header__button')) {
      closeAllMenus();
    }
  });
});