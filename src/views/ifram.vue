<template>
    <iframe :src="path" frameborder="0"></iframe>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>
