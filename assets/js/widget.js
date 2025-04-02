function updateUserWidget(userData) {
    console.log("Datos recibidos:", userData);

    if (!userData || !userData.picture) {
        console.error("Los datos del usuario no están completos.");
        return;
    }

    document.querySelectorAll(".widget").forEach(widget => {
        widget.querySelector(".user-img").src = userData.picture.data?.url || "default.jpg";
        widget.querySelector(".user-name").innerText = userData.name || "Usuario desconocido";
        widget.querySelector("#profile-link").href = `https://facebook.com/${userData.id || ""}`;

        let postsContainer = widget.querySelector("#posts");
        postsContainer.innerHTML = "";
        if (userData.posts && userData.posts.data) {
            let postsHtml = userData.posts.data.map(post => {
                let postMessage = post.message ? post.message : "Este post no tiene texto";
                return `<p>${postMessage}</p>`;
            }).join("<hr>");
            postsContainer.innerHTML = postsHtml;
        } else {
            postsContainer.innerHTML = "<p class='text-center'>No hay publicaciones.</p>";
        }

        let imagesContainer = widget.querySelector("#images");
        imagesContainer.innerHTML = "";
        if (userData.photos && userData.photos.data) {
            let imagesHtml = userData.photos.data.map(photo => `<img src="${photo.images[0]?.source}" class="img-thumbnail m-1" style="width: 100px;">`).join("");
            imagesContainer.innerHTML = imagesHtml;
        } else {
            imagesContainer.innerHTML = "<p class='text-center'>No hay imágenes.</p>";
        }

        let videosContainer = widget.querySelector("#videos");
        videosContainer.innerHTML = "";
        if (userData.videos && userData.videos.data) {
            let videosHtml = userData.videos.data.map(video => `<video controls src="${video.source}" class="w-100 my-2"></video>`).join("");
            videosContainer.innerHTML = videosHtml;
        } else {
            videosContainer.innerHTML = "<p class='text-center'>No hay videos.</p>";
        }
    });
}


