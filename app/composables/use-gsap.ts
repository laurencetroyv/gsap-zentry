import gsap from "gsap"
import type { WatchSource, MaybeRefOrGetter } from "vue"

interface UseGsapOptions {
  scope?: MaybeRefOrGetter<Element | null | undefined>
  dependencies?: WatchSource[]
  revertOnUpdate?: boolean
}

export function useGsap(
  callback: (context: gsap.Context) => void,
  { scope, dependencies = [], revertOnUpdate = false }: UseGsapOptions = {},
) {
  let ctx: gsap.Context | undefined

  const run = () => {
    ctx = gsap.context(self => callback(self), toValue(scope) ?? undefined)
  }

  onMounted(() => {
    run()

    if (dependencies.length) {
      watch(
        dependencies,
        () => {
          revertOnUpdate ? ctx?.revert() : ctx?.kill()
          run()
        },
        { flush: "post" },
      )
    }
  })

  onBeforeUnmount(() => ctx?.revert())
}
