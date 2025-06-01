document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');
  const submitBtn = document.getElementById('submitBtn');

  if (!name || !phone || !message) {
    status.innerText = "لطفاً تمام فیلدها را با دقت تکمیل کنید.";
    status.style.color = "orange";
    return;
  }

  const phoneRegex = /^09\d{9}$/;
  if (!phoneRegex.test(phone)) {
    status.innerText = "شماره تماس واردشده معتبر نیست. لطفاً شماره‌ای وارد کنید که با 09 شروع شده و 11 رقم باشد.";
    status.style.color = "var(--main-gold)";
    return;
  }

  if (!confirm("آیا اطلاعات واردشده صحیح است؟")) return;

  status.innerText = "⏳ در حال ارسال...";
  status.style.color = "lightblue";
  submitBtn.disabled = true;

  fetch("https://script.google.com/macros/s/AKfycbyHJ4LKD6zX_uhO-4OiZA8DuTwsPDAmVeBEEkOMESYRtDSr5HlpGkPnW88PxPbZYD1nVQ/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, phone, message })
  })
  .then(() => {
    status.innerText = "✅ پیام شما ارسال شد.";
    status.style.color = "lightgreen";
    document.getElementById('form').reset();
    setTimeout(() => {
      window.location.href = "https://t.me/koocheshaway";
    }, 1000);
  })
  .catch(() => {
    status.innerText = "❌ ارسال با خطا مواجه شد. لطفاً مجدداً تلاش کنید.";
    status.style.color = "red";
  })
  .finally(() => {
    submitBtn.disabled = false;
  });
});
