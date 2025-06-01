<?php
session_start();
require_once '../includes/db.php';
require_once '../includes/functions.php';

if (!is_logged_in()) {
  header("Location: ../auth/login.php");
  exit;
}

$success = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user_id     = $_SESSION['user']['id'];
  $country     = sanitize($_POST['country']);
  $visa_type   = sanitize($_POST['visa_type']);
  $description = sanitize($_POST['description']);
  $status      = 'در حال بررسی';

  $stmt = $pdo->prepare("INSERT INTO requests (user_id, country, visa_type, status, description) VALUES (?, ?, ?, ?, ?)");
  $stmt->execute([$user_id, $country, $visa_type, $status, $description]);

  $success = "درخواست با موفقیت ثبت شد ✅";
}
?>

<h2>فرم ثبت درخواست</h2>
<?php if (!empty($success)) echo "<p style='color:green;'>$success</p>"; ?>

<form method="POST">
  <label>کشور مقصد:</label><br>
  <input type="text" name="country" required><br><br>

  <label>نوع ویزا:</label><br>
  <input type="text" name="visa_type" required><br><br>

  <label>توضیحات:</label><br>
  <textarea name="description" rows="4" cols="30" required></textarea><br><br>

  <button type="submit">ثبت درخواست</button>
</form>
