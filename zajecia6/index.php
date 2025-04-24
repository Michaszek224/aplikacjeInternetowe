<?php
session_start();
require('funkcje.php');

if (isset($_POST['wyloguj'])) {
    $_SESSION['zalogowany'] = 0;
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Formularz logowania</title>
    <meta charset="UTF-8" />
</head>
<body>
    <?php echo "<h1>Nasz system</h1>"; ?>

    <fieldset>
        <legend>Formularz logowania</legend>
        <form action="logowanie.php" method="POST">
            <label for="login">Login:</label><br>
            <input type="text" id="login" name="login"><br><br>

            <label for="haslo">Hasło:</label><br>
            <input type="password" id="haslo" name="haslo"><br><br>

            <input type="submit" name="zaloguj" value="Zaloguj">
        </form>
    </fieldset>

    <p><a href="user.php">Przejdź do strony użytkownika</a></p>

    <fieldset>
        <legend>Tworzenie cookie</legend>
        <form action="cookie.php" method="GET">
            <label for="czas">Czas życia cookie (w sekundach):</label><br>
            <input type="number" id="czas" name="czas"><br><br>
            <input type="submit" name="utworzCookie" value="Utwórz cookie">
        </form>
    </fieldset>

    <!-- Wyświetlanie wartości cookie, jeśli istnieje -->
    <?php
    if (isset($_COOKIE['mojeCookie'])) {
        echo '<p>Wartość ciasteczka mojeCookie: ' . $_COOKIE['mojeCookie'] . '</p>';
    } else {
        echo '<p>Cookie mojeCookie nie istnieje lub wygasło.</p>';
    }
    ?>
</body>
</html>