import { defineComponent } from 'vue'
import Link from './link'

export default defineComponent({
  render() {
    return (
      <div
        id="cover"
        class="flex flex-col items-center gap-6 mt-16"
      >
        <h1 class="text-accent text-5xl">PoinoSing</h1>
        <p class="text-accent text-lg text-center break-keep">
          なかの人がいない
          <wbr/>
          歌唱音声合成ソフト
        </p>
        <Link
          newTab={ true }
          underline={ false }
          href="https://koharuyuzuki.github.io/poinosing/latest/"
        >
          {() => (
            <div class="w-fit h-fit bg-theme px-4 py-3 rounded-xl">
              <p>ブラウザで使ってみる</p>
            </div>
          )}
        </Link>
        <img
          class="w-full max-w-[800px] h-auto"
          src="./assets/screenshot.png"
          alt="スクリーンショット"
        ></img>
      </div>
    )
  }
})
