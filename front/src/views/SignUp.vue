<template>
  <div>
    <h2 style="font-size: 24px; color: #333;">Inscription</h2>
    <form @submit.prevent="signupFormSubmit" style="margin-top: 20px;">
      <div style="margin-bottom: 10px;">
        <label for="email" style="display: block; font-weight: bold;">Email :</label>
        <input type="email" id="email" v-model="email" required style="padding: 5px; width: 200px;">
      </div>
      <div style="margin-bottom: 10px;">
        <label for="newPassword" style="display: block; font-weight: bold;">Mot de passe :</label>
        <input type="password" id="newPassword" v-model="newPassword" required style="padding: 5px; width: 200px;">
      </div>
      <div style="margin-bottom: 10px;">
        <label for="confirmPassword" style="display: block; font-weight: bold;">Confirmer le mot de passe :</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required style="padding: 5px; width: 200px;">
      </div>
      <button type="submit" style="padding: 5px 10px; background-color: #007bff; color: #fff; border: none; cursor: pointer;">Inscription</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpComponent',
  data() {
    return {
      email: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    async signupFormSubmit() {
      try {
        if (this.newPassword !== this.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await this.$store.dispatch('auth/register', {
          email: this.email,
          password: this.newPassword
        });
        this.$router.push('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
};
</script>
