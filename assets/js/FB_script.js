document.addEventListener("DOMContentLoaded", function() {
    checkLoginState();
});

window.fbAsyncInit = function() {
    FB.init({
        appId: '3623273967970187',
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

            
            const loginButton = document.getElementById('fb-login-btn');
            loginButton.innerHTML = `<i class="fa-brands fa-facebook" style="color: #009dff;"></i> Conectado`;
            loginButton.disabled = true; 
        } else {
            console.log('Usuario canceló el inicio de sesión');
        }
    }, {
        scope: 'public_profile,user_photos,user_videos,user_posts,user_link'
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
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            let accessToken = response.authResponse.accessToken;
            FB.api('/me', { 
                fields: 'id,name,picture,photos{images},videos{source},posts{message,created_time}', 
                access_token: accessToken 
            }, function(response) {
                console.log("Respuesta de Facebook:", response);
                if (!response || response.error) {
                    console.log('Error obteniendo datos del usuario.');
                    return;
                }
                user_datal = response;
                console.log("Datos guardados en user_datal:", user_datal);
            });
        } else {
            console.log('Usuario no autenticado.');
        }
    });
}



function logout() {
    FB.logout(function(response) {
        document.getElementById('user-info').innerHTML = '<p>Sesión cerrada.</p>';
    });
}