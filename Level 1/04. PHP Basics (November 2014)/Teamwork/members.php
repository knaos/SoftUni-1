<?php
header('Content-Type: text/html; charset=utf-8');
// Db
include 'config/db.php';
include_once 'root.php';
include_once 'lib/database.php';
include_once 'lib/auth.php';

include_once 'controllers/master_controller.php';
include_once 'models/master.php';
include_once 'models/user.php';

$db = \Lib\Database::get_instance()->get_db();
$auth = \Lib\Auth::get_instance();

$user_model = new \Models\User_Model();
$users = $user_model->find();

if (isset($_GET['logout'])) {
    Lib\Auth::get_instance()->logout();
    header( 'Location: ' . DX_ROOT_URL );
}

$title = 'Members';
$template_file = 'views/members.php';
include 'views/layouts/default.php';
