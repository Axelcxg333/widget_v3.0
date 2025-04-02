document.addEventListener("DOMContentLoaded", function () {
    init();
});

let user_datal = '';

function setupDesignButtons() {
    document.querySelectorAll(".designs button").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Botón clicado:", this.innerText);
            document.querySelectorAll(".designs button").forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
}


function init() {
    get_menu('menu_edit');
}

function get_menu(action) {
    $.ajax({
        url: 'process/control.php',
        method: 'GET',
        data: {
            action: action
        },
        success: function (response) {
            $('#menu').html(response);
            setupDesignButtons(); 
        },
        error: function (xhr, status, error) {
            console.error("Error en la solicitud AJAX:", status, error);
        }
    });
}

function get_template(action) {
    $.ajax({
        url: 'process/control.php',
        method: 'GET',
        data: {
            action: 'template_0' + action,
        },
        success: function (response) {
            $('#user-info').html(response);
            setupDesignButtons();
            updateUserWidget(user_datal);
        },
        error: function (xhr, status, error) {
            console.error("Error en la solicitud AJAX:", status, error);
        }
    });
}
