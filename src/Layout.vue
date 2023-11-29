<template>
  <nav>
    <ul class="flex gap-3">
      <li>
        <router-link to="/" class="text-xl underline">首頁</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-xl underline">關於</router-link>
      </li>
      <li>
        <router-link to="/privacy" class="text-xl underline"
          >隱私權</router-link
        >
      </li>
    </ul>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>
