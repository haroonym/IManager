<template>
  <div>
    <v-container>
      <p class="font-weight-bold text-h5 text-center mt-2 red--text">Inventar</p>
      <v-data-table
        class="elevation-4 mt-5"
        style="color: #F1333F"
        max-width="100px"
        :headers="headers"
        :items="products"
        item-key="barcode"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
    },
  },
  data: () => ({
    headers: [
      { text: 'Barcode', align: 'start', value: 'barcode', sortable: false },
      { text: 'Marke', value: 'marke' },
      { text: 'Produktname', value: 'produktname' },
      { text: 'Beschreibung', value: 'beschreibung', sortable: false },
      { text: 'Ablaufdatum', value: 'ablaufdatum' },
      // { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
