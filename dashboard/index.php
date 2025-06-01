<?php
session_start();
require_once '../includes/db.php';
require_once '../includes/functions.php';

if (!is_logged_in()) {
  header("Location: ../auth/login.php");
  exit;
}

$user_id = $_SESSION['user']['id'];
$role = $_SESSION['user']['role'];

// اگر ادمین یا مشاور باشه، همه درخواست‌ها رو ببینه
if ($role === 'admin' || $role === 'consultant') {
  $result = $conn->query("SELECT * FROM requests ORDER BY created_at DESC");
} else {
  // در غیر این صورت فقط درخواست‌های خودش رو ببینه
  $stmt = $conn->prepare("SELECT * FROM requests WHERE user_id=? ORDER BY created_at DESC");
  $stmt->bind_param("i", $user_id);
  $stmt->execute();
  $result = $stmt->get_result();
}
?>

<h2>لیست درخواست‌ها</h2>
<table border="1" cellpadding="6">
<tr>
  <th>کشور</th>
  <th>نوع ویزا</th>
  <th>وضعیت</th>
  <th>توضیحات</th>
  <th>تاریخ</th>
</tr>
<?php while($row = $result->fetch_assoc()): ?>
<tr>
  <td><?= $row['country'] ?></td>
  <td><?= $row['visa_type'] ?></td>
  <td><?= $row['status'] ?>

