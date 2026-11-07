<template>
  <section
    id="features"
    class="bg-black pb-52"
  >
    <div class="container mx-auto px-3 md:px-10">
      <div class="px-5 py-32">
        <p class="font-circular-web text-lg text-blue-50">Into eternity</p>

        <p class="font-circular-web max-w-md text-lg text-blue-50 opacity-50">
          On winding shores and towering cliffs, and in forests and mountains full of secrets,
          witness the Eternity pursued by Her Excellency, the Almighty Narukami Ogosho.
        </p>
      </div>

      <bento-tilt
        class="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
      >
        <bento-card
          src="/videos/feature-1.mp4"
          title="R<b>a</b>iden S<b>h</b>ogu<b>n</b>"
          description="Eternity stretches things out over a long time. But each moment within it becomes all the more fragile."
          title-color="text-[#20293D]"
        />
      </bento-tilt>

      <div class="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
        <bento-tilt class="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <bento-card
            src="/videos/feature-2.mp4"
            title="Ka<b>m</b>isato Ay<b>a</b>ka"
            description="Snow that once adorned the world in silver, thaws to reveal the gleam of the fruit upon frost-laden branches."
          />
        </bento-tilt>

        <bento-tilt class="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <bento-card
            src="/videos/feature-3.mp4"
            title="Ya<b>e</b> Mi<b>k</b>u"
            description="I'm not the kind of person who risks life and limb for any old reason"
          />
        </bento-tilt>

        <bento-tilt class="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <bento-card
            src="/videos/feature-4.mp4"
            title="Y<b>o</b>imi<b>y</b>a"
            description="Fireworks are for now, but friends are forever"
          />
        </bento-tilt>

        <bento-tilt class="bento-tilt_2">
          <div class="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 class="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
            </h1>
            <icon
              name="typcn:location-arrow"
              class="m-5 scale-[5] self-end"
            />
          </div>
        </bento-tilt>

        <bento-tilt class="bento-tilt_2">
          <video
            src="/videos/feature-5.mp4"
            loop
            muted
            autoplay
            class="size-full object-cover object-center"
          />
        </bento-tilt>
      </div>
    </div>
  </section>
</template>
