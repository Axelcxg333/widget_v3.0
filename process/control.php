<?php

$action = $_GET['action'];

$templates = [
    'menu_edit' => '../pages/menu/menu_edit_template.php',
    'template_01' => '../pages/templates/template_01.php',
    'template_02' => '../pages/templates/template_02.php',
    'template_03' => '../pages/templates/template_03.php',
    'template_04' => '../pages/templates/template_04.php'
];

if (array_key_exists($action, $templates)) {
    include $templates[$action];
    exit; 
} else {
    echo "Acción no válida.";
    exit;
}
