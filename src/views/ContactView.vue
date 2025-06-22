<template>
  <div class="section container py-5 px-5 text-light">
    <h2 class="my-5 text-info" data-aos="fade-right">Contact Me</h2>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      v-if="alertMessage"
      :class="['alert', alertType]"
      role="alert"
    >
      {{ alertMessage }}
    </div>
    <form
      ref="contactForm"
      data-aos="fade-up"
      data-aos-duration="3000"
      @submit.prevent="sendEmail"
      class="p-4 rounded border"
    >
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="form.name"
          type="text"
          name="user_name"
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
          name="user_email"
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
          name="message"
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
    <div class="mt-4 fs-4" data-aos="fade-up" data-aos-duration="3000">
      <h5 class="mb-4 mt-5 fs-2 text-info">Or contact me directly:</h5>
      <p>
        <i class="fa-solid fa-phone"></i> :
        <a href="tel:01154579000" class="text-info">01154579000</a>
      </p>
      <p>
        <i class="fa-brands fa-whatsapp"></i> :
        <a href="https://wa.me/201154579000" target="_blank" class="text-info">
          WhatsAppp
        </a>
      </p>
      <p>
        <i class="fa-brands fa-github"></i> :
        <a href="https://github.com/a7mdadel" target="_blank" class="text-info">
          GitHub
        </a>
      </p>
      <p>
        <i class="fa-brands fa-linkedin"></i> :
        <a
          href="https://www.linkedin.com/in/ahmed-elbahy-b67a00210/"
          target="_blank"
          class="text-info"
        >
          LinkedIn
        </a>
      </p>
      <p class="mt-5 fs-4 rounded">
        <i class="fa-solid fa-file"></i>
        My CV :
        <a href="/Ahmed-Adel-2025-.pdf" target="_blank" class="text-info ms-3"
          ><button class="btn btn-outline-info">View</button></a
        >
        <a
          href="/Ahmed-Adel-2025-.pdf"
          download="/Ahmed-Adel-2025.pdf"
          class="text-info ms-3"
          ><button class="btn btn-outline-info">Download</button></a
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
