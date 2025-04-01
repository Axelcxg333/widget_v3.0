window.fbAsyncInit = function() {
    FB.init({
        appId: '1382753952722955',
        cookie: true,
        xfbml: true,
        version: 'v22.0'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function FBLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Usuario inició sesión con éxito');
            checkLoginState();
        } else {
            console.log('Usuario canceló el inicio de sesión');
        }
    }, {
        scope: 'public_profile,email'
    });
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            getUserInfo();
        } else {
            console.log('El usuario no está autenticado.');
        }
    });
}

function getUserInfo() {
    FB.api('/me', {
        fields: 'name,email,picture'
    }, function(response) {
        if (!response || response.error) {
            console.log('Error obteniendo datos del usuario.');
            return;
        }

        // Mostrar los datos en el div #user-info
        document.getElementById('user-info').innerHTML = `
            <div class="card p-3">
                <img src="${response.picture.data.url}" class="img-fluid rounded-circle mb-2" width="100">
                <h4>${response.name}</h4>
                <p>${response.email}</p>
                <button class="btn btn-danger" onclick="logout()">Cerrar sesión</button>
            </div>
        `;
    });
}

// Función para cerrar sesión
function logout() {
    FB.logout(function(response) {
        document.getElementById('user-info').innerHTML = '<p>Sesión cerrada.</p>';
    });
}