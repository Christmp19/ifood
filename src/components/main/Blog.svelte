<script lang="ts">
    import {blogItems} from '../../assets/ExportImages';
</script>

<!-- Blogs section -->
<section  class="flex justify-center items-center bg-gray-100 pb-8 pt-5 px-3 dark:bg-gray-800" id="blog">
 <div class="lg:flex-row mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl px-4">
     <div class="heading text-center mb-8">
    <h2 class="satisfy-regular font-semibold text-green-600 text-3xl">Nos Blogs</h2>
    <h3 class="md:text-3xl text-2xl font-bold py-4 text-blue-950 leading-snug dark:text-white/90 transition-colors duration-300">Nos Histoires Quotidiennes</h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {#each blogItems as item (item.id)}
      <div class="box rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
        <div class="image relative h-64 overflow-hidden">
          <h3 class="absolute top-4 left-0 ml-2  text-gray-800 text-md p-2 flex justify-center items-center gap-2 bg-gray-50 shadow-sm dark:bg-gray-700 rounded-lg transition-colors duration-300 group-hover:text-white font-bold dark:text-white/90"><i class="fas fa-calendar text-green-600 text-md"></i>{item.date}</h3>
          <img src={item.image} alt={item.title} class="w-full h-full object-cover"/>
        </div>
        <div class="content bg-gray-50 shadow-lg dark:bg-gray-700 rounded-lg p-6 text-center relative">
          <div class="tags pb-4">
            {#each item.tags as tag}
              <a href="#plus" class="capitalize transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/70 text-md mr-2 hover:text-green-600 dark:hover:text-green-600">
                <i class="fas fa-tag text-green-600 mr-1"></i>{tag} /
              </a>
            {/each}
          </div>
          <h3 class="text-2xl text-gray-800 transition-colors duration-300 group-hover:text-white font-bold dark:text-white/90 mb-2">{item.title}</h3>
          <p class="transition-colors duration-300 group-hover:text-white font-semibold text-gray-800 dark:text-white/80 text-md mb-4">{item.content}</p>
          <a href="#plus" class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300 text-md">Read more</a>
        </div>
      </div>
    {/each}
  </div>
 </div>
</section>

