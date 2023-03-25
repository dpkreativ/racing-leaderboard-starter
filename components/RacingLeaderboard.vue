<template>
  <section class="container">
    <table class="table is-selected-columns-mobile">
      <!-- Table Head -->
      <thead class="table-thead">
        <tr class="table-row">
          <th class="table-thead-col" style="--p-col-width: 60">
            <span class="eyebrow-heading-3">Position</span>
          </th>
          <th class="table-thead-col is-only-desktop">
            <span class="eyebrow-heading-3">Car</span>
          </th>
          <th class="table-thead-col">
            <span class="eyebrow-heading-3">Driver</span>
          </th>
          <th class="table-thead-col is-only-desktop">
            <span class="eyebrow-heading-3">Duration</span>
          </th>
          <th class="table-thead-col" style="--p-col-width: 40"></th>
        </tr>
      </thead>

      <!-- Table body -->
      <tbody class="table-tbody u-bold">
        <Racer
          v-for="(racer, idx) in data"
          :key="idx"
          :position="formatPosition(idx + 1)"
          :car="racer.car"
          :car-number="racer.carNumber"
          :driver="racer.driver"
          :duration="formatDuration(racer.duration)"
        />
      </tbody>
    </table>
  </section>
</template>

<script setup>
const { data } = defineProps(['data']);
</script>
