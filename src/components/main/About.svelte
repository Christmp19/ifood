<script lang="ts">
    import { onMount } from "svelte";
    import { ServiceImages } from "../../assets/ExportImages";
    import AboutImg from "../../assets/home-img1.png";

    let imageContainer: HTMLDivElement;

    onMount(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY, currentTarget } = event;
            const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
                currentTarget as HTMLElement;
            const xPos = (clientX - offsetLeft - offsetWidth / 2) / offsetWidth;
            const yPos =
                (clientY - offsetTop - offsetHeight / 2) / offsetHeight;
            imageContainer.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
        };

        if (imageContainer) {
            imageContainer.addEventListener("mousemove", handleMouseMove);

            return () => {
                imageContainer.removeEventListener(
                    "mousemove",
                    handleMouseMove,
                );
            };
        }
    });
</script>

<!-- About section -->
<section
    class="flex justify-center items-center bg-gray-200 py-8 px-3 dark:bg-gray-900"
    id="about"
>
    <div
        class="flex flex-col items-center justify-center lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4"
    >
        <div
            bind:this={imageContainer}
            class="justify-center items-center hidden md:hidden lg:block lg:w-1/2"
            data-aos="fade-left"
        >
            <img
                src={AboutImg}
                alt="About Img"
                class="relative lg:w-full w-4/5 transition-transform duration-500"
            />
        </div>
        <div class="lg:w-1/2 w-full text-center lg:text-start">
            <div>
                <h2 class="satisfy-regular font-semibold text-green-600 text-3xl">
                Pourquoi Nous Choisir?
            </h2>
            <h3
                class="md:text-3xl text-2xl font-bold py-4 transition-colors duration-300 text-blue-950 leading-snug dark:text-white/90"
            >
                Qu’est-Ce Qui Rend Notre Nourriture Délicieuse!
            </h3>
            <div
            bind:this={imageContainer}
            class="flex lg:hidden justify-center items-center lg:w-1/2 md:mt-3 mt-5"
            data-aos="fade-left"
        >
            <img
                src={AboutImg}
                alt="About Img"
                class="relative lg:w-full w-4/5 transition-transform duration-500"
            />
        </div>
            <p class="text-gray-700 dark:text-white/90 py-2 md:text-lg text-md transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
                explicabo, numquam iusto est a ipsum assumenda tempore esse
                corporis?
            </p>
            <div class="py-4">
                <a
                    href="#order"
                    class="btn bg-green-700 text-white text-lg py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                    >Lire la suite</a
                >
            </div>
            </div>
            <div class="mt-8 grid grid-cols-2 gap-2">
                {#each ServiceImages as item, i (i)}
                    <div
                        class="flex flex-row bg-gray-50 transition-hover transition-colors duration-300 hover:bg-blue-900 dark:hover:bg-blue-950 dark:bg-gray-700 items-center justify-center rounded-lg shadow-md md:p-6 p-3"
                        data-aos="fade-up"
                    >
                        <div class="w-1/4">
                            <img
                            src={ServiceImages[i].src}
                            alt={ServiceImages[i].alt}
                            class="md:w-10 w-8"
                        />
                        </div>
                        <div class="w-3/4 flex justify-center md:justify-start items-center">
                            <span class="text-md transition-colors duration-300 group-hover:text-white font-bold text-gray-900 dark:text-white/90">
                            {ServiceImages[i].title}
                        </span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
