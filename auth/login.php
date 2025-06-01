<?php
session_start();
require_once '../includes/db.php';
require_once '../includes/functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = sanitize($_POST['email']);
    $pass = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();

    if ($user && password_verify($pass, $user['password'])) {
        $_SESSION['user'] = $user;
        header("Location: ../dashboard/index.php");
        exit;
    } else {
        $error = "ایمیل یا رمز اشتباه است.";
    }
}
?>

<!-- فرم ورود -->
<h2>ورود به پنل</h2>
<?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
<form method="POST">
  <label>ایمیل:</label><br>
  <input type="email" n

