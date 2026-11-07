<template>
  <div
    id="contact"
    class="my-20 min-h-96 w-screen px-10"
  >
    <div class="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <div
        class="absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96"
      >
        <image-clip-box
          class="contact-clip-path-1"
          src="/img/contact-1.webp"
        />
        <image-clip-box
          class="contact-clip-path-2 translate-y-60 lg:translate-y-40"
          src="/img/contact-2.webp"
        />
      </div>

      <div
        class="absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80"
      >
        <image-clip-box
          class="absolute md:scale-125"
          src="/img/swordman-partial.webp"
        />
        <image-clip-box
          class="sword-man-clip-path md:scale-125"
          src="/img/swordman.webp"
        />
      </div>

      <div class="flex flex-col items-center text-center">
        <p class="font-general text-[10px] uppercase">Join Zentry</p>
        <p class="special-font font-zentry text-5px mt-10 w-full leading-[0.9] md:text-[6rem]">
          Let's b<b>u</b>ild <br />
          the new era of <br />
          g<b>a</b>ming t<b>o</b>gether
        </p>

        <custom-button
          title="Contact Us"
          class="mt-10 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
