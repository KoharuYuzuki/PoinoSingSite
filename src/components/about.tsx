import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <div
        id="about"
        class="flex flex-col items-center gap-6 [&_*]:text-accent"
      >
        <h2 class="text-3xl">PoinoSingとは</h2>
        <div class="flex flex-col items-center gap-4">
          <p>PoinoSingはなかの人がいない歌唱音声合成ソフトです。</p>
          <p>一般的な音声合成ソフトは、声優さんの声を元に音声を合成していますが、</p>
          <p>PoinoSingはあらかじめ設定された周波数領域のエンベロープから、</p>
          <p>フーリエ変換などを用いてソース・フィルタモデルに似た方法で音声を合成しています。</p>
        </div>
        <h3 class="text-2xl">poinoとの違い</h3>
        <div class="flex flex-col items-center gap-4">
          <p>PoinoSingは新しい音声合成エンジンを搭載しています。</p>
          <p>そのため、poinoと比較してより幅広い表現が可能になりました。</p>
          <p>また、歌唱音声合成に特化し、ブラウザで動作するようになったため、</p>
          <p>インストール不要ですぐに使い始めることができます。</p>
          <p>他にもマルチトラック機能をはじめ、poinoにはなかった機能を多数搭載しています。</p>
        </div>
      </div>
    )
  }
})
