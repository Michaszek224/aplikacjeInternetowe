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
$result = $link->query('SELECT id_prac, nazwisko FROM pracownicy');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Lista pracowników</title>
</head>
<body>
    <h1>Lista pracowników</h1>
    <ul>
        <?php while ($row = $result->fetch_assoc()): ?>
            <li><?php echo $row['id_prac'] . ' - ' . htmlspecialchars($row['nazwisko']); ?></li>
        <?php endwhile; ?>
    </ul>
    <p><a href="form06_post.php">Dodaj kolejnego pracownika</a></p>
</body>
</html>
<?php
$result->free();
mysqli_close($link);
?>