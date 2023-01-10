<template>
  <div class="kwes-form" width="100%">
    <form
      class="form"
      method="POST"
      action="mailto:biodasturchi@gmail.com"
      enctype="text/plain"
    >
      <div>
        <!-- <label for="name">Name</label> -->
        <input
          class="input"
          placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          rules="required"
        />
      </div>
      <div>
        <!-- <label for="email">E-mail</label> -->
        <input
          class="input"
          placeholder="Enter your e-mail"
          type="email"
          name="email"
          id="email"
          rules="required|email|max:255"
        />
      </div>
      <div>
        <textarea
          class="textarea"
          placeholder="Enter text..."
          name="message"
          id="message"
          rules="required"
          rows="4"
        ></textarea>
      </div>
      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "ContactCard",
};
</script>

<style lang="css" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid var(--vp-c-brand-lighter);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
}
.input {
  border: 1px solid var(--vp-c-brand-lighter);
  border-radius: 5px;
  margin: 0 0 5px 0;
  padding: 5px 15px;
}
.textarea {
  padding: 5px 15px;
}
.btn {
  border: 1px solid var(--vp-c-brand-lighter);
  border-radius: 5px;
  padding: 8px 16px;
}
</style>
