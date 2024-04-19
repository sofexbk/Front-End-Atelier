<template>
    <div class="footer">
      <h1>im footer</h1>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  /* Example styles */
  .footer {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  