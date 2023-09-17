<template>
    <div>
      <h2>Witaj, {{ name }}!</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
    },
  };
  </script>