<script lang="ts">
    // @ts-nocheck

    import { onDestroy, onMount } from "svelte";
    import Navbar from "./components/header/Navbar.svelte";

    // Code pour le bouton retour en haut
    let backtotop: HTMLAnchorElement;

    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add("active");
        } else {
            backtotop.classList.remove("active");
        }
    };

    onMount(() => {
        // Vérifie si le code est exécuté dans le navigateur
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", toggleBacktotop);
            toggleBacktotop();
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", toggleBacktotop);
        }
    });

    const scrollToTop = (event: Event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // //===Fin de code retour en haut===//

    // //===Code pour le mode sombre===//

    // État du mode sombre
    let isDarkMode = false;

    // Fonction pour basculer le mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }

    // Appliquer la préférence du mode sombre au chargement
    onMount(() => {
        const userPreference = localStorage.getItem("darkMode");
        if (userPreference === "true") {
            isDarkMode = true;
            document.documentElement.classList.add("dark");
        } else {
            isDarkMode = false;
            document.documentElement.classList.remove("dark");
        }
    });

    // //===Fin de code pour le mode sombre===//
</script>

<header>
    <Navbar />
</header>

<main></main>

<footer></footer>

<!-- Code du bouton retour en haut -->
<a
    href="/"
    bind:this={backtotop}
    id="skill"
    class="back-to-top flex items-center justify-center"
    on:click={scrollToTop}
>
    <i class="bi bi-arrow-up-short"></i>
</a>
