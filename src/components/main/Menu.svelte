<script lang="ts">
    import { menuItems } from "../../assets/ExportImages";
</script>

<!-- Menu section -->
<section
    class="flex justify-center items-center bg-gray-100 pb-8 pt-5 px-3 dark:bg-gray-800"
    id="menu"
>
    <div class="lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4">
        <div class="text-center mb-8">
            <h2 class="satisfy-regular font-semibold text-green-600 text-3xl">Notre Carte</h2
            >
            <h3
                class="transition-colors duration-300 md:text-3xl text-2xl font-bold py-4 text-blue-950 leading-snug dark:text-white/90"
            >
                Nos Meilleurs Plats
            </h3>
        </div>

        <div
            class="box-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8"
        >
            {#each menuItems as item (item.alt)}
                <a
                    href="#item"
                    class="transition-hover box flex items-center bg-gray-50 shadow-md dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300 hover:bg-blue-900 dark:hover:bg-blue-950"
                    data-aos="fade-up"
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        class="h-24 w-24 object-cover rounded-full"
                    />
                    <div class="ml-6">
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white/90 transition-colors duration-300 group-hover:text-white"
                        >
                            {item.title}
                        </h3>
                        <p class="price text-lg text-green-600 mt-2">
                            {item.price}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
