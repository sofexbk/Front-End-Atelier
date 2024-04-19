<template>
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  
  .card-header {
    font-weight: bold;
  }
  
  .card-footer {
    text-align: right;
    font-style: italic;
  }
  </style>
  <script>
  export default {
    name: 'CardContent',
  }
</script>