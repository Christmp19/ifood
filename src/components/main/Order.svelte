<script lang="ts">
    import { OrderItems } from "../../assets/ExportImages";
</script>

<!-- Order section -->
<section
    class="flex justify-center items-center bg-gray-200 pb-8 pt-5 px-3 dark:bg-gray-900"
    id="order"
>
    <div class="lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4">
        <div class="text-center mb-8" data-aos="fade-up">
            <h2 class="satisfy-regular font-semibold text-green-600 text-3xl">
                Order Now
            </h2>
            <h3
                class="md:text-3xl text-2xl font-bold py-4 text-blue-950 leading-snug dark:text-white/90 transition-colors duration-300"
            >
                Fastest Home Delivery
            </h3>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            data-aos="fade-up"
        >
            {#each OrderItems as item (item.id)}
                <div
                    class="bg-gray-50 shadow-lg dark:bg-gray-700 p-8 text-center rounded-lg"
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        class="mx-auto mb-4 h-24"
                    />
                    <h3
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                    >
                        {item.title}
                    </h3>
                </div>
            {/each}
        </div>

        <form
            class="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
        >
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center mb-4"
            >
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >Your Name</span
                    >
                    <input
                        type="text"
                        required
                        placeholder="customer's name"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:border-green-500 mt-2 dark:text-white/80 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >Your Number</span
                    >
                    <input
                        type="number"
                        required
                        placeholder="customer's number"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:border-green-500 mt-2 dark:text-white/80 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center mb-4"
            >
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >Your Order</span
                    >
                    <input
                        type="text"
                        required
                        placeholder="food you want"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:border-green-500 mt-2 dark:text-white/80 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >How Much</span
                    >
                    <input
                        type="number"
                        required
                        placeholder="number or orders"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:border-green-500 mt-2 dark:text-white/80 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center mb-4"
            >
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >Your Details</span
                    >
                    <input
                        type="text"
                        required
                        placeholder="your message"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:border-green-500 mt-2 dark:text-white/80 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
                <div class="w-full md:mb-2">
                    <span
                        class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-lg"
                        >Pick Up Time</span
                    >
                    <input
                        required
                        placeholder="time"
                        type="datetime-local"
                        class="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 mt-2 dark:text-white/80 shadow-md rounded-lg focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                    />
                </div>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between mb-4"
            >
                <div class="w-full mb-2">
                    <textarea
                        placeholder="your address"
                        class="w-full h-40 md:h-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-white/80 shadow-md rounded-lg focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-600"
                        required
                    ></textarea>
                </div>
                <div class=" w-full mb-2">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d66023.33339825108!2d15.316773282574712!3d-4.221166517428344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scg!4v1716726136765!5m2!1sfr!2scg"
                        frameborder="0"
                        class="w-full h-full shadow-md rounded-lg"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>

            <input
                type="submit"
                value="Proceed to Order"
                class="transition-colors duration-300 text-md bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 cursor-pointer"
            />
        </form>
    </div>
</section>
