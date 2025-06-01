document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const status = document.getElementById('status');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (!name || !phone || !message) {
      showStatus("لطفاً تمام فیلدها را با دقت تکمیل کنید.", "warning");
      return;
    }

    if (!/^09\d{9}$/.test(phone)) {
      showStatus("شماره تماس باید با 09 شروع شود و 11 رقم باشد.", "warning");
      return;
    }

    if (!confirm("آیا اطلاعات واردشده صحیح است؟")) return;

    showStatus("⏳ در حال ارسال...", "loading");
    submitBtn.disabled = true;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyHJ4LKD6zX_uhO-4OiZA8DuTwsPDAmVeBEEkOMESYRtDSr5HlpGkPnW88PxPbZYD1nVQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, message })
      });

      showStatus("✅ پیام شما ارسال شد.", "success");
      form.reset();
      setTimeout(() => {
        window.location.href = "https://t.me/koocheshaway";
      }, 1000);
    } catch (error) {
      showStatus("❌ ارسال با خطا مواجه شد. لطفاً مجدداً تلاش کنید.", "error");
    } finally {
      submitBtn.disabled = false;
    }
  });

  function showStatus(msg, type) {
    status.innerText = msg;
    const colors = {
      success: "lightgreen",
      error: "red",
      warning: "orange",
      loading: "lightblue"
    };
    status.style.color = colors[type] || "#fff";
  }
});
