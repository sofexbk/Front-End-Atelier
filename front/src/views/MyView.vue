<template>
    <div>
      <table class="center">
        <tr v-for="(data,index) in names" :key="index">
            <td>{{ data }}</td>
        </tr>
      </table>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Footer from '@/views/footer.vue'
  //import axios from 'axios';
  export default {
    components:{
      Footer
    },
    data() {
        return {
       names : []
   }
  },
    async mounted(){
       /* try {
          const response = await axios.get('/getNames');
          console.log(response.data.names);
          this.names=response.data.names
          console.log(this.names);
        } catch (error) {
          console.error('Error fetching data:', error);
        }*/
      },
    }
  </script>
  
<style>
.center {
  margin: 0 auto;
  top: 0;
}  
</style>
  