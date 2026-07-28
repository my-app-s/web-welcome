function navigateTo(url) {
    window.location.href = url;
}

function handleNavigation(event, url) {
    if (event.button === 0) { // Левая кнопка мыши
        navigateTo(url);
    } else if (event.button === 1) { // Средняя кнопка мыши
        window.open(url, "_blank"); // Открывает в новой вкладке
    }
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Отключает контекстное меню
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
        e.preventDefault(); // Отключает сочетания Ctrl+C, Ctrl+U, Ctrl+S
    }
});

document.addEventListener("dragstart", function (e) {
    e.preventDefault(); // Отключает перетаскивание
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        alert("Открытие панели разработчика запрещено.");
    }
});
