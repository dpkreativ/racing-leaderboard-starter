<template>
  <div class="layout-container">
    <header class="container">
      <h1 class="heading-level-1 u-text-center">Realtime Racing Leaderboard</h1>
    </header>

    <!-- Start content -->
    <main>
      <slot />
    </main>
    <!-- End content -->

    <footer class="container u-text-center">
      <div>
        Built for
        <a href="https://appwrite.io" class="u-color-text-pink">Appwrite</a> by
        <a href="https://twitter.com/dpkreativ" class="u-color-text-pink"
          >@dpkreativ</a
        >
      </div>
    </footer>
  </div>
</template>
