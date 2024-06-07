<script lang="ts">
    import { addToCart, cart } from "../../stores/cartStore";
    import {foodItems} from "../../assets/ExportImages";
    let quantityInputs: { [key: number]: HTMLInputElement | null } = {};

    function handleAddToCart(id: number) {
        const input = quantityInputs[id];
        if (input) {
            addToCart(id, input.valueAsNumber);
        }
    }
</script>

<!-- Popular Menu section -->
<section
    class="flex justify-center items-center bg-gray-200 pb-8 pt-5 px-3 dark:bg-gray-900"
    id="popular"
>
    <div class="lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4">
        <div class="text-center mb-8">
            <h2 class="satisfy-regular font-semibold text-green-600 text-3xl">Nourriture Populaire</h2>
            <h3 class="transition-colors duration-300 md:text-3xl text-2xl font-bold py-4 text-blue-950 leading-snug dark:text-white/90">Nos Plats Spéciaux</h3>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
            {#each foodItems as item (item.id)}
                <div
                    class="box bg-gray-100 shadow-md dark:bg-gray-700 rounded-lg p-6 text-center relative"
                    data-aos="fade-up"
                >
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <!-- svelte-ignore a11y-missing-content -->
                    <a
                        href="#"
                        class="fas fa-heart text-2xl text-gray-600 dark:text-white/80 absolute top-4 right-4 hover:text-green-600 dark:hover:text-green-600"
                    ></a>
                    <div class="image mb-4 flex justify-center items-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            class=" w-3/5 object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 class="text-md transition-hover transition-colors duration-300 group-hover:text-white font-bold text-gray-900 dark:text-white/90">{item.name}</h3>
                        <div
                            class="stars flex justify-center items-center mb-2"
                        >
                            {#each Array(Math.floor(item.stars)) as _, i}
                                <i class="fas fa-star text-yellow-400"></i>
                            {/each}
                            {#if item.stars % 1 !== 0}
                                <i class="fas fa-star-half-alt text-yellow-400"
                                ></i>
                            {/if}
                            <span class="ml-2 text-gray-600 dark:text-white/80"
                                >({item.reviews})</span
                            >
                        </div>
                        <div class="text-md transition-colors duration-300 group-hover:text-white font-bold text-gray-900 dark:text-white/90">
                            {item.price}fr
                            <span class="line-through text-gray-500"
                                >{item.oldPrice
                                    ? `${item.oldPrice}fr`
                                    : ""}</span
                            >
                        </div>
                        <div
                            class="bouton-add flex justify-center items-center space-x-2 py-4"
                        >
                            <input
                                type="number"
                                min="1"
                                value="1"
                                class="bg-blue-950 text-white p-2 rounded w-20 text-center focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 caret-green-600"
                                bind:this={quantityInputs[item.id]}
                            />
                            <button
                                on:click={() => handleAddToCart(item.id)}
                                class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
