<?php
session_start();
require_once '../includes/db.php';
require_once '../includes/functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $role = sanitize($_POST['role']);

    $stmt = $conn->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $password, $role);

    if ($stmt->execute()) {
        echo "ثبت‌نام با موفقیت انجام شد.";
    } else {
        echo "خطا: ممکن است ایمیل تکراری باشد.";
    }
}
?>

<h2>ثبت‌نام کاربر جدید</h2>
<form method="POST">
  نام: <input type="text" name="name" required><br>
  ایمیل: <input type="email" name="email" required><br>
  رمز عبور: <input type="password" name="password" required><br>
  نقش: 
  <select name="role">
    <option value="user">کاربر عادی</option>
    <option value="consultant">مشاور</option>
    <option value="admin">ادمین</option>
  </select><br><br>
  <button type="submit">ثبت‌نام</button>
</form>

