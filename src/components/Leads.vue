<template>
  <ListView for="item in $store.state.leads.items" @tap="editLead">
    <v-template>
      <Label :text="item.title"/>
    </v-template>
  </ListView>
</template>
