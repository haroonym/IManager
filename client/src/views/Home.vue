<template>
  <div>
    <v-container>
      <p style="color: #F1333F" class="font-weight-bold text-h5 text-center mt-2">Willkommen zu Ihrem iManager</p>
      <p style="color: #F1333F" class="font-weight-light text-center mt-2">
        Der iManager ist eine mobile Applikation, in der man einfach und komfortabel das Inventar eines
        Haushaltes erfassen und pflegen kann.
      </p>
      <div class="mb-5" style="position:absolute; bottom: 0; left: 50%; transform: translateX(-50%); text-align:center" >
        <v-btn class="mt-5 mx-auto" outlined style="color: #F1333F" height="125px" width="250px" to="/scan">
          <p style="color: #F1333F" class="font-weight-bold text-h3 mt-auto">SCAN</p>
          <v-img class="ml-2" width="0px" src="../assets/scan-svgrepo-com.svg"></v-img>
        </v-btn>
        <v-btn class="mt-5 mx-auto" outlined style="color: #F1333F" height="125px" width="350px" to="/products">
          <p style="color: #F1333F" class="font-weight-bold text-h3 mt-auto">INVENTAR</p>
          <v-img class="ml-2" width="0px" src="../assets/stock-svgrepo-com.svg"></v-img>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
