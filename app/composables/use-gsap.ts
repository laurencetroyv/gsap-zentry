import gsap from "gsap"

export function useGsap(
    callback: (context: gsap.Context) => void,
    scope?: Element | string | object
) {
    let context: gsap.Context | undefined

    onMounted(() => {
        context = gsap.context(ctx => callback(ctx), scope)
    })

    onUnmounted(context?.revert)
}