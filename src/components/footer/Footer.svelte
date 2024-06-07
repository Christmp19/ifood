<script lang="ts">
    import {
        FooterItemsLinks,
        FooterItemsDays,
    } from "../../assets/ExportImages";
</script>

<!-- Footer section -->
<section
    class="flex justify-center items-center bg-gray-100 pb-5 pt-2 px-3 dark:bg-gray-800"
    id="footer"
>
    <div class="lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4">
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {#each FooterItemsLinks as item (item.id)}
                <div class="boxes">
                    <h3 class="text-lg md:text-2xl capitalize transition-colors duration-300 group-hover:text-white font-bold dark:text-white/90 text-indigo-900 mb-4">
                        {item.title}
                    </h3>
                    {#each item.links as link (link.id)}
                        <a
                            href={link.href}
                            class="block transition-colors duration-300 group-hover:text-white text-gray-800 dark:text-white/80 text-md hover:text-green-600 dark:hover:text-green-600"
                            ><i class="fas fa-arrow-right pr-2 text-green-600"
                            ></i>{link.name}</a
                        >
                    {/each}
                </div>
            {/each}

            {#each FooterItemsDays as item (item.id)}
                <div class="box">
                    <h3 class="text-lg md:text-2xl capitalize text-indigo-900 mb-4 transition-colors duration-300 group-hover:text-white font-bold dark:text-white/90">
                        {item.title}
                    </h3>
                    {#each item.days as day (day.id)}
                        <p class="block transition-colors duration-300 group-hover:text-white text-gray-800 dark:text-white/80 text-md hover:text-green-600 dark:hover:text-green-600">{day.day} : {day.hour}</p>
                    {/each}
                </div>
            {/each}
        </div>

        <div class="text-center text-lg block transition-colors duration-300 group-hover:text-white text-gray-800 dark:text-white/80 text-md hover:text-green-600 dark:hover:text-green-600 p-4">
                Copyright ©2024, all rights reserved!| created by <span
                    class="text-green-600">Christie MPASSI</span
                >
            </div>
    </div>
</section>
