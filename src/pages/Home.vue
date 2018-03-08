<template>
  <Page class="page">

    <ActionBar class="action-bar" :title="$route.meta.title"/>

    <StackLayout>
      <TabView>

        <TabViewItem title="Leads">
          <leads></leads>
        </TabViewItem>

        <TabViewItem title="Scan">
          <scan></scan>
        </TabViewItem>

      </TabView>
    </StackLayout>

  </Page>
</template>

<script>
  import Leads from '../components/Leads';
  import Scan from '../components/Scan';

  export default {
    components: {
      Leads,
      Scan,
    },
  };
</script>
