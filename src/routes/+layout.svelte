<script context="module" lang="ts">
    import { loadClerk } from 'clerk-sveltekit';
    import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
    import AuthButton from '$lib/components/AuthButton.svelte';

    export const load = loadClerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
</script>

<script lang="ts">
    import { session } from 'clerk-sveltekit';
</script>

<nav class="flex justify-between items-center p-4">
    <!-- Autres éléments de navigation -->

    <div id="anime" class="hidden md:flex flex-col items-center justify-center text-center cursor-pointer">
        <AuthButton />
    </div>
</nav>

<slot />

{#if $session}
    <p>Hello, {$session.user.firstName}</p>
{:else}
    <p>Please sign in</p>
{/if}
