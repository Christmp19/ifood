<script>
    import "../app.css";
    import App from "../App.svelte";
    import { onMount } from "svelte";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import "bootstrap-icons/font/bootstrap-icons.css";
    import "aos/dist/aos.css";
    import AOS from "aos";
    import "animate.css";

    // Fonction pour le comportement d'animation au défilement
    function animateOnScroll() {
        AOS.init({
            duration: 1000, // Durée de l'animation en millisecondes
            once: true, // Animation ne se produit qu'une seule fois
        });
    }
    // Appeler la fonction d'animation lors du montage du composant
    onMount(() => {
        animateOnScroll();
    });
</script>

<div>
    <App />
</div>
