<script>
  export let faq;

  // let showData = false;
</script>


<section class='bg-[#042f2e]'>
  <div class='extra-bdr py-20 px-2 mx-auto flex flex-col justify-center max-w-4xl'>
    {#each faq as data}
        <div class='extra-bdr bg-neutral-100 my-4 py-3 px-4 max-w-4xl'>
          <h3 on:click={()=> data.showData = !data.showData} class='flex flex-row justify-between items-center font-semibold p-3 cursor-pointer text-teal-800'>
            <span class='xl:text-center lg:text-center  md:text-center text-left xl:text-2xl lg:text-2xl md:text-2xl text-md'>
              {data.q}
            </span>
<!--
 -->
            <svg
                  class:rotate-180={data.showData}
                  class="fill-current text-teal-800 h-20 w-20 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </h3>

            {#if data.showData}
              <div
                class="overflow-hidden transform transition-transform duration-1000"
              >
              {#each data.a as answer}
                <p class="p-3 text-teal-800">
                  {answer}
                </p>
                {/each}
            </div>
            {/if}
        </div>
      {/each}
  </div>


  <div class='max-w-lg pb-10 mx-auto px-2'>
        <div class='w-full max-w-md mb-4 mx-auto'>
          <p class='hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out text-center'>This is an open-source project, with <a class='font-bold' href="https://github.com/oleg-darkdev/ecocide_app" target='_blank'>open repository on github </a> and is distributed under a license <a class='font-bold' href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target='_blank'>CC BY-NC-SA</a>.</p>
        </div>

        <div class='w-full  lg:mb-4 xl:mb-4 md:mb-4 mb-6  '>
          <p class='text-center hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out'>Idea Author: <a class='font-bold' href="https://oleg-darkdev.vercel.app/" target='_blank'>Oleg DarkDEV</a></p>
        </div>

        <div class='w-full mb-6 flex flex-wrap flex-row lg:justify-between xl:justify-between md:justify-between justify-center mx-auto'>
            <div class='hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out'>
              <a class='' href="https://darkdev-foundation.vercel.app/" target='_blank'>
              <figure class=''>
                <figcaption class='text-sm '>Development by DarkDev.Foundation</figcaption>
                <img src="logos/darkdev.svg" class='h-16 transform-none scale-0' alt="DarkDEV logo" />
              </figure>
               </a>
            </div>
            <div class='w-[60px] xl:flex lg:flex md:flex hidden'>
                <div class='w-1 mx-auto bg-neutral-200 h-14  my-auto mx-auto'>
                </div>
              </div>
            <div class='mx-autohover:scale-110 hover:transition lg:mt-0 xl:mt-0 md:mt-0 mt-4 hover:duration-1000  hover:ease-in-out'>
              <a class='' href="https://44games.vercel.app/" target='_blank'>
              <figure class=''>
                <figcaption class='text-sm mb-1 text-center'>Production by 44Games</figcaption>
                <img src="logos/44games.svg" class='h-16 transform-none scale-0' alt="44Games logo" />
              </figure>
               </a>
            </div>
        </div>
  </div>



</section>
