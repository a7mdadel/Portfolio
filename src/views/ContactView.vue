<template>
  <div class="section container py-5 text-light">
    <h2 class="mb-4 text-info" data-aos="fade-up">Contact Me</h2>

    <!-- Alert Message -->
    <div v-if="alertMessage" :class="['alert', alertType]" role="alert">
      {{ alertMessage }}
    </div>

    <form @submit.prevent="sendEmail" class="bg-secondary p-4 rounded">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          v-model="form.message"
          class="form-control"
          id="message"
          rows="4"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-outline-info" :disabled="loading">
        {{ loading ? "Sending..." : "Send" }}
      </button>
    </form>

    <div class="mt-4">
      <h5>Or contact me directly:</h5>
      <p>
        📞 Phone: <a href="tel:01154579000" class="text-info">01154579000</a>
      </p>
      <p>
        💬 WhatsApp:
        <a href="https://wa.me/201154579000" target="_blank" class="text-info"
          >Chat on WhatsApp</a
        >
      </p>
      <p>
        🐙 GitHub:
        <a href="https://github.com/a7mdadel" target="_blank" class="text-info"
          >github.com/a7mdadel</a
        >
      </p>
      <p>
        🌐 LinkedIn:
        <a
          href="https://www.linkedin.com/in/ahmed-elbahy-b67a00210/"
          target="_blank"
          class="text-info"
          >linkedin.com/in/a7mdadel</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const alertMessage = ref("");
const alertType = ref("");

const sendEmail = async () => {
  loading.value = true;
  alertMessage.value = "";

  const serviceID = "service_0msayig";
  const templateID = "template_jflhlx7";
  const publicKey = "R_EQ5vud4Wrp0IZpt";

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
      }),
    });

    if (res.ok) {
      alertMessage.value = "✅ Message sent successfully!";
      alertType.value = "alert-success";
      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      alertMessage.value = "❌ Failed to send message. Please try again.";
      alertType.value = "alert-danger";
    }
  } catch (error) {
    alertMessage.value = "❌ Error sending message: " + error.message;
    alertType.value = "alert-danger";
  } finally {
    loading.value = false;
  }
};
</script>
