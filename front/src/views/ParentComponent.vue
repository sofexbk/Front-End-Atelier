<!-- ParentComponent.vue -->
<template>
    <div>
      <Card>
        <template v-slot:header>
          <h2>Titre de la carte</h2>
        </template>
        <p>Contenu de la carte...</p>
          <template v-slot:footer>
          <button @click="onButtonClick">Cliquez ici</button>
        </template>
      </Card>
      <Test1><h1>hello man</h1></Test1>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  import Swal from 'sweetalert2';
  import Test1 from './Test1.vue';


export default {
  components: {
    Card,Test1
  },
  methods: {
    onButtonClick() {
      Swal.fire({
        title: 'Vous avez cliqué sur le bouton !',
        icon: 'success', // Vous pouvez également utiliser 'error', 'warning', 'info', etc.
        confirmButtonText: 'Ok',
      });
    }
  }
}
  </script>
  