<?php
function sanitize($data) {
  return htmlspecialchars(strip_tags(trim($data)));
}

function is_logged_in() {
  return isset($_SESSION['user']);
}
?>

