import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <div
        id="characters"
        class="flex flex-col items-center gap-6 [&_*]:text-accent"
      >
        <h2 class="text-3xl">搭載キャラクター</h2>
        <p>PoinoSingにはPoinoTalkと同じく、レイチーとレイニーが搭載されています。</p>
      </div>
    )
  }
})
