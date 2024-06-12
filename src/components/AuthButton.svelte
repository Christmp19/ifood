<script lang="ts">
    import { session, signIn, signOut } from 'clerk-sveltekit';
</script>

<div on:click={!$session ? signIn : signOut} class="cursor-pointer flex items-center justify-center">
    {#if $session}
        <img src="{$session.user.profileImageUrl}" alt="Profile Picture" class="w-8 h-8 rounded-full" />
        <p class="hover:underline ml-2">Hello, {$session.user.firstName}</p>
    {:else}
        <UserCircleSolid class="w-8 h-8 dark:text-white" />
        <span class="hover:underline dark:text-white ml-2">Sign In</span>
    {/if}
</div>
