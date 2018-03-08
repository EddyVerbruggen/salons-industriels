<template>
  <FlexBoxLayout justifyContent="center">
    <Button @tap="scan" alignSelf="flex-end" class="btn btn-primary">Scan</Button>
  </FlexBoxLayout>
</template>

<script>
  export default {
    methods: {
      scan () {
        console.log('Scanning...');
      },
    },
  };
</script>
