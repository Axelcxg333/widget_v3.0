<!-- Menú lateral -->
<div class="options">
    <ul class="nav flex-column nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="source-tab" data-bs-toggle="tab" href="#source" role="tab" aria-controls="source" aria-selected="true">
                <i class="fa-solid fa-link"></i> Source
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="layout-tab" data-bs-toggle="tab" href="#layout" role="tab" aria-controls="layout" aria-selected="false">
                <i class="fa-solid fa-layer-group"></i> Layout
            </a>
        </li>
    </ul>
</div>

<!-- Contenido de las pestañas -->
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="source" role="tabpanel" aria-labelledby="source-tab">
        <h3>Contenido de Source</h3>
        <button type="button" class="btn btn-light" onclick="FBLogin()">
            <i class="fa-brands fa-facebook" style="color: #009dff;"></i>
            Ingresar con Facebook
        </button>
    </div>
    <div class="tab-pane fade" id="layout" role="tabpanel" aria-labelledby="layout-tab">
        <h3>Contenido de Layout</h3>
        <div class="">
            <label>Selecciona un diseño</label>
            <div class="designs">
                <button onclick="get_template(1)">Small Widget</button>
                <button onclick="get_template(2)">Medium Widget</button>
                <button onclick="get_template(3)">Facebook Posts</button>
                <button onclick="get_template(4)">Facebook Videos</button>
            </div>
            <button class="btn btn-success" onclick="get_menu('menu_edit')" style="height: fit-content;">
                Continuar con este diseño
            </button>
        </div>
    </div>
</div>