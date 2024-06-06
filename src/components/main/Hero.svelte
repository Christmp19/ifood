<script lang="ts">
  import { onMount } from "svelte";
  import Hero1 from "../../assets/hero1.png";
//   import Hero2 from "../../assets/home-parallax-img2.png";

  let imageContainer: HTMLDivElement;

  onMount(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY, currentTarget } = event;
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget as HTMLElement;
      const xPos = (clientX - offsetLeft - offsetWidth / 2) / offsetWidth;
      const yPos = (clientY - offsetTop - offsetHeight / 2) / offsetHeight;
      imageContainer.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
    };

    if (imageContainer) {
      imageContainer.addEventListener('mousemove', handleMouseMove);

      return () => {
        imageContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  });
</script>

<section class="min-h-screen" id="home">
  <div class='flex flex-col items-center justify-center lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl md:px-10 px-4 md:py-24 pt-20 md:pt-28 pb-20 lg:pb-20'>
    <div
      class="order-2 lg:order-1 content text-center lg:w-1/2 lg:text-left lg:pt-10"
      data-aos="fade-up"
    >
      <span class="block text-3xl md:text-4xl font-semibold mb-2 text-green-600 py-4">Bienvenue Aux Gourmets</span>
      <h2 class="text-5xl font-bold mb-4 text-blue-950 leading-tight dark:text-white/90">
        Différentes Épices Pour Les Différents Goûts 😋
      </h2>
      <p class="text-gray-700 dark:text-white/90 mb-6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
        dolores temporibus hic quam debitis tenetur harum nemo.
      </p>
      <a
        href="#order"
        class="btn bg-green-700 text-white text-lg py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >Commander Maintenant</a
      >
    </div>

    <div
      bind:this={imageContainer}
      class="image order-1 lg:order-2 relative lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
      data-aos="fade-left"
    >
      <img src={Hero1} alt="hero 1" class="relative w-full transition-transform duration-500" />
      <!-- <img
        src={Hero2}
        alt="hero 2"
        class="absolute pointer-events-none top-[-100px] right-[-100px] w-[80px] h-[80px] sm:top-[-150px] sm:right-[-150px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] lg:top-[-200px] lg:right-[-200px] transition-transform duration-500"
      /> -->
    </div>
  </div>
</section>
