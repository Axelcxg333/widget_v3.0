<div class="widget card">
    <div class="wid-header card-header p-0">
        <div class="background position-relative">
            <div class="background-img bg-primary" style="height: 120px;"></div>
            <div class="background-actions position-absolute end-0 top-0 p-2">
                <a href="#" id="profile-link" target="_blank" class="btn btn-light btn-sm">Ver Perfil</a>
            </div>
        </div>
        <div class="user-data text-center p-3">
            <img src="" alt="User Image" class="user-img rounded-circle border border-3 border-white" style="width: 80px; height: 80px; object-fit: cover;">
            <h5 class="user-name mt-2 mb-1"></h5>
            <p class="user-likes text-muted small"></p>
        </div>
        <ul class="nav nav-tabs" id="widgetTabs">
            <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#posts">Posts</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#images">Imágenes</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#videos">Videos</a></li>
        </ul>
    </div>
    <div class="wid-body card-body tab-content">
        <div class="tab-pane fade show active" id="posts"><p class="text-center">Cargando publicaciones...</p></div>
        <div class="tab-pane fade" id="images"><p class="text-center">Cargando imágenes...</p></div>
        <div class="tab-pane fade" id="videos"><p class="text-center">Cargando videos...</p></div>
    </div>
</div>