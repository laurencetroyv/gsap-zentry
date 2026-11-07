import ScrollTrigger from "gsap/ScrollTrigger"

export function useAppLoader() {
  const is_loading = useState("app-loader", () => true)

  async function finish() {
    if (!is_loading.value) return
    is_loading.value = false
    await nextTick(() => ScrollTrigger.refresh())
  }

  return { is_loading, finish }
}
