<?php
session_start();
require_once '../includes/db.php';
require_once '../includes/functions.php';

if (!is_logged_in()) {
  header("Location: ../auth/login.php");
  exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user_id = $_SESSION['user']['id'];
  $country = sanitize($_POST['country']);
  $visa_type = sanitize($_POST['visa_type']);
  $description = sanitize($_POST['description']);
  $status = 'در حال بررسی';

  $stmt = $conn->prepare("INSERT INTO requests (user_id, country, visa_type, status, description) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("issss", $user_id, $country, $visa_type, $status, $description);
  $stmt->execute();

  $success = "درخواست با موفقیت ثبت شد.";
}
?>

<!-- فرم ثبت درخواست -->
<h2>ثبت درخواست مهاجرتی</h2>
<?php if (!empty($success)) echo "<p style='color:green;'>$success</p>"; ?>
<form method="POST">
  <label>کشور مقصد:</label><br>
  <input type="text" name="country" required><br>
  
  <label>نوع ویزا:</label><br>
  <input type="text" name="visa_type" required><br>

  <label>توضیحات:</label><br>
  <textarea name="description" rows="4" cols="30"></textarea><br><br>

  <button type="submit">ثبت درخواست</button>
</form>

