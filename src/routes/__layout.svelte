// src/routes/__layout.svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchSession } from '$lib/stores/session';

  onMount(() => {
    fetchSession();
  });
</script>

<slot></slot>
