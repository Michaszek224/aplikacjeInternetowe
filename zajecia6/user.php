<?php
    session_start();
    if (!isset($_SESSION['zalogowany']) || $_SESSION['zalogowany'] !== 1) {
        header('Location: index.php');
        exit;
    }
    if (isset($_FILES['myfile'])) {
        move_uploaded_file(
            $_FILES['myfile']['tmp_name'],
            __DIR__ . '/uploads/obrazek.jpg'
        );
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
            require_once('funkcje.php');
            echo "Zalogowano";
            echo "<p>Witaj " . $_SESSION["zalogowanyImie"] . "</p>";
        ?>

        <form action="user.php" method="POST" enctype="multipart/form-data">
            <input name="myfile" type="file" accept="image/jpeg,image/png"><br><br>
            <input type="submit" value="Prześlij obrazek">
        </form>

        <form action="index.php" method="POST">
            <input type="submit" name="wyloguj" value="wyloguj">
        </form>

        <?php if (file_exists(__DIR__ . '/uploads/obrazek.jpg')) {
            echo '<img src="uploads/obrazek.jpg" alt="Obrazek użytkownika">';
        } else {
            echo '<p>Obrazek nie został jeszcze przesłany.</p>';
        } ?>

        <p><a href="index.php">Strona główna</a></p>
    </body>
</html>