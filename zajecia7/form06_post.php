<?php
session_start();
$link = mysqli_connect('localhost', 'scott', 'tiger', 'instytut');
if (!$link) {
    die('Connect failed: ' . mysqli_connect_error());
}
if (isset($_SESSION['flash'])) {
    echo '<p>' . htmlspecialchars($_SESSION['flash']) . '</p>';
    unset($_SESSION['flash']);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dodaj pracownika</title>
</head>
<body>
    <h1>Dodaj nowego pracownika</h1>
    <form action="form06_redirect.php" method="POST">
        <label for="id_prac">ID Pracownika:</label>
        <input type="text" name="id_prac" id="id_prac"><br>
        <label for="nazwisko">Nazwisko:</label>
        <input type="text" name="nazwisko" id="nazwisko"><br>
        <button type="submit">Wstaw</button>
        <button type="reset">Wyczyść</button>
    </form>
    <p><a href="form06_get.php">Pokaż listę wszystkich pracowników</a></p>
</body>
</html>

<?php
mysqli_close($link);
?>