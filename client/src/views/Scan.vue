<template>
  <div>
    <v-container>
      <v-card class="mx-auto" style="background-color: #f1333f" width="350px" height="250px">
        <v-card-text class="white--text text-h4"> Kamera </v-card-text>
      </v-card>
      <v-text-field clearable readonly class="mt-5" color="#F1333F" label="Barcode"></v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        hint="z.B. Coca Cola"
        clearable
        label="Produkttitel"
      ></v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        hint="z.B. koffeinhaltiges Erfrischungsgetränk"
        clearable
        label="Produktbeschreibung"
      ></v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        type="date"
        hint="z.B 01.01.2023"
        clearable
        label="Ablaufdatum"
      ></v-text-field>
      <v-btn
        style="
          position: absolute;
          left: 50%;
          bottom: 7%;
          transform: translateX(-50%);
          text-align: center;
          color: #f1333f;
        "
        class="mt-5 mx-auto text-h4"
        outlined
        height="75px"
        width="300px"
        >Speichern</v-btn
      >
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.custom-label-color .v-label {
  color: red;
  opacity: 1;
}
</style>
