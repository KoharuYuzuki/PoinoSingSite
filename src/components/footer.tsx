import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <footer
        id="footer"
        class="w-full h-fit p-4 flex flex-col"
      >
        <div class="h-12 rounded-2xl bg-theme flex justify-center items-center">
          <p>© 2024 KoharuYuzuki</p>
        </div>
      </footer>
    )
  }
})
