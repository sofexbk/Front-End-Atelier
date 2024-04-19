<template>
    <div class="card">
      <div class="card-header">
        <slot name="header">Default Header</slot>
      </div>
      <div class="card-body">
        <slot>This is the default content for the card body.</slot>
      </div>
      <div class="card-footer">
        <slot name="footer">Default Footer</slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
  }
  
  .card-header {
    font-weight: bold;
  }
  
  .card-footer {
    font-style: italic;
    color: #666;
  }
  </style>
  