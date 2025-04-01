<?php

$action = $_GET['action'];

switch ($action) {
    case 'menu_select':
        include '../pages/menu/menu_select_template.php';
        exit;

    case 'menu_edit':
        include '../pages/menu/menu_edit_template.php';
        exit;

    case 'template_01':
        include '../pages/templates/template_01.php';
        exit;

    case 'template_02':
        include '../pages/templates/template_02.php';
        exit;
        
    case 'template_03':
        include '../pages/templates/template_03.php';
        exit;
        
    case 'template_04':
        include '../pages/templates/template_04.php';
        exit;

    default:
        exit;
}
