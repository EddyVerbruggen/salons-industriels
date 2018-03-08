<template>
  <Page class="page">

    <ActionBar class="action-bar" :title="$route.meta.title">
      <ActionItem @tap="onAddLead"
                  ios.systemIcon="4" ios.position="right"
                  android.systemIcon="ic_menu_add" android.position="actionBar"></ActionItem>
    </ActionBar>

    <StackLayout>
      <Label text="Leads:"/>
      <ListView for="item in $store.state.leads.items" @itemTap="onTapLead">
        <v-template>
          <Label :text="item.title"/>
        </v-template>
      </ListView>
    </StackLayout>

  </Page>
</template>

<script>
  import { BarcodeScanner } from 'nativescript-barcodescanner';

  let scanner = new BarcodeScanner();

  export default {
    methods: {
      onAddLead () {
        scanner.scan({
          formats: 'QR_CODE',
          closeCallback: () => {
            this.$store.dispatch('addLead', {
              id: 1,
              title: 'Test',
            });
          },
          resultDisplayDuration: 0,
          openSettingsIfPermissionWasPreviouslyDenied: true,
        }).then((result) => {
            console.log('Result:', result.text);
            this.$router.back();
          }, (error) => {
            console.log(error);
          },
        );
      },
      onTapLead (event) {
        this.$router.push(`lead/${event.item.id}`);
      },
    },
  };
</script>
