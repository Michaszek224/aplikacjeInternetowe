<?php
session_start();
require('funkcje.php');
if (isset($_GET['utworzCookie']) && isset($_GET['czas'])) {
    $czas = (int) $_GET['czas'];
    setcookie("mojeCookie", "jakasWartosc", time() + $czas, "/");
}
    echo "<p>Ciasteczko zostało utworzone na $czas sekund.</p>";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Cookie Test</title>
    <meta charset='UTF-8' />
</head>
<body>
    <a href="index.php">Strona Główna</a>
</body>
</html>
