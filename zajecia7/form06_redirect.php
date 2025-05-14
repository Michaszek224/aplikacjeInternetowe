<?php
session_start();
$link = mysqli_connect('localhost', 'scott', 'tiger', 'instytut');
if (!$link) {
    $_SESSION['flash'] = 'Błąd połączenia: ' . mysqli_connect_error();
    header('Location: form06_post.php');
    exit();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id_prac'] ?? '';
    $naz = $_POST['nazwisko'] ?? '';
    if (!is_numeric($id) || !is_string($naz) || trim($naz) === '') {
        $_SESSION['flash'] = 'Niepoprawne dane wejściowe.';
        header('Location: form06_post.php');
        exit();
    }
    $sql = 'INSERT INTO pracownicy(id_prac, nazwisko) VALUES(?, ?)';
    $stmt = $link->prepare($sql);
    $stmt->bind_param('is', $id, $naz);
    if ($stmt->execute()) {
        $_SESSION['flash'] = 'Rekord został dodany pomyślnie.';
        $stmt->close();
        mysqli_close($link);
        header('Location: form06_get.php');
        exit();
    } else {
        $_SESSION['flash'] = 'Błąd zapytania: ' . $stmt->error;
        $stmt->close();
        mysqli_close($link);
        header('Location: form06_post.php');
        exit();
    }
} else {
    header('Location: form06_post.php');
    exit();
}