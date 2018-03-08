<template>
  <Page class="page">

    <ActionBar class="action-bar" :title="pageTitle">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/leads')"/>
      <ActionItem @tap="onRemoveLead"
                  ios.systemIcon="16" ios.position="right"
                  android.systemIcon="ic_menu_delete" android.position="actionBar"></ActionItem>
    </ActionBar>

    <StackLayout>
      <Label :text="$route.params.id"/>
    </StackLayout>

  </Page>
</template>

<script>
  export default {
    computed: {
      pageTitle () {
        return 'Modify lead #' + this.$route.params.id;
      },
    },
    methods: {
      onRemoveLead () {
        this.$store.dispatch('removeLead', {id: this.$route.params.id})
          .then(() => {
            this.$router.back();
          });
      },
    },
  };
</script>
