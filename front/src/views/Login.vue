<template>
  <div>
    <h2 style="font-size: 24px; color: #333;">Connexion</h2>
    <form @submit.prevent="loginFormSubmit" style="margin-top: 20px;">
      <div style="margin-bottom: 10px;">
        <label for="email" style="display: block; font-weight: bold;">Email :</label>
        <input type="email" id="email" v-model="email" required style="padding: 5px; width: 200px;">
      </div>
      <div style="margin-bottom: 10px;">
        <label for="password" style="display: block; font-weight: bold;">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required style="padding: 5px; width: 200px;">
      </div>
      <button type="submit" style="padding: 5px 10px; background-color: #007bff; color: #fff; border: none; cursor: pointer;">Connexion</button>
    </form>
  </div>
  <tbody>
  <tr v-for="E in etudiants" :key="E.id">
    <th scope="row">{{ E.id }}</th>
    <td>{{ E.nom }}</td>
    <td>{{ E.prenom }}</td>
    <td>{{ E.note }}</td>
    <td>
      <router-link :to="'/edit/' + E.id" type="button" class="btn btn-primary">
        Edit
      </router-link>
      /
      <button @click="deleteEtudiant(E.id)" type="button" class="btn btn-danger">
        Delete
      </button>
    </td>
  </tr>
</tbody>

</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginFormSubmit() {
      try {
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        });
        this.$router.push('/card1');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  }
}
</script>

    /*async mounted() {
    try {
    const response = await axios.get("http://127.0.0.1:8000/api/etudiants");
    this.etudiants = response.data;
    } catch (error) {
    console.error('Error fetching etudiants:', error);
    }
    },
    async ajouterEtudiant() 
    { try  {
       await axios.post("http://127.0.0.1:8000/api/etudiants", this.etudiant); 
       // Traitement après l'ajout réussi de l'étudiant 
      } catch (error) {
        console.error('Error adding etudiant:', error); }
    },
    async modifierEtudiant(id) {
    try {
    await axios.put("http://127.0.0.1:8000/api/etudiants/" + id, this.etudiant);
    // Traitement après la modification réussie de l'étudiant
  } catch (error) {
    console.error('Error updating etudiant:', error);
  }
},
async supprimerEtudiant(id) {
  try {
    await axios.delete("http://127.0.0.1:8000/api/etudiants/" + id);
    // Traitement après la suppression réussie de l'étudiant
  } catch (error) {
    console.error('Error deleting etudiant:', error);
  }
},
methods: {
  async save() {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/etudiants", this.etudiant);
      this.$router.push({ path: "/" });
    } catch (error) {
      console.error('Error saving etudiant:', error);
      console.log("Erreur");
    }
  }
},
mounted() {
  this.fetchEtudiant();
},

methods: {
  async fetchEtudiant() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/etudiants/" + this.$route.params.id);
      this.etudiant = response.data;
    } catch (error) {
      console.error('Error fetching etudiant:', error);
    }
  },

  async save() {
    try {
      await axios.put("http://127.0.0.1:8000/api/etudiants/" + this.$route.params.id, this.etudiant);
      this.$router.push({ path: "/" });
    } catch (error) {
      console.error('Error updating etudiant:', error);
      this.erreur = true;
    }
  }
}



