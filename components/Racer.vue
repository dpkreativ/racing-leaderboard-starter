<template>
  <tr class="table-row">
    <td class="table-col" data-title="Position">
      <span class="text">{{ position }}</span>
    </td>
    <td class="table-col is-only-desktop" data-title="Car">
      <div class="text">#{{ carNumber }}</div>
      <div class="heading-level-7 u-break-word">{{ car }}</div>
    </td>
    <td class="table-col" data-title="Driver">
      <span class="heading-level-7">{{ driver }}</span>
    </td>
    <td class="table-col is-only-desktop" data-title="Duration">
      <span class="text">{{ duration }}</span>
    </td>
    <td class="table-col u-overflow-visible">
      <button class="button is-text is-only-icon" aria-label="more options">
        <span class="icon-dots-horizontal" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
</template>

<script setup>
const { position, car, carNumber, driver, duration } = defineProps([
  'car',
  'carNumber',
  'driver',
  'duration',
  'position',
]);
</script>
