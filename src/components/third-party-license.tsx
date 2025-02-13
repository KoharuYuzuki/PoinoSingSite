import { defineComponent } from 'vue'
// @ts-ignore
import thirdPartyLicense from '../../ThirdPartyNotices.txt'

export default defineComponent({
  data(): {
    licenseText: string
    isOpen: boolean
  } {
    return {
      licenseText: thirdPartyLicense as string,
      isOpen: false
    }
  },
  render() {
    return (
      <div
        id="third-party-license"
        class="flex flex-col items-center gap-6 [&_*]:text-accent"
      >
        <h2 class="text-3xl">サードパーティーライセンス</h2>
        <div class="flex flex-col items-center gap-4">
          <p>当サイトでは、以下のマテリアルを利用しています。</p>
          <button
            class="w-fit h-fit px-4 py-2 bg-theme rounded-lg"
            onClick={() => this.isOpen = !this.isOpen}
          >
            <p class="!text-main">
              サードパーティーライセンス一覧を{ this.isOpen ? '閉じる' : '開く'}
            </p>
          </button>
          {
            this.isOpen ?
            (
              <div class="w-fit h-fit flex flex-col gap-2 txt-sm">
                {
                  this.licenseText.split('\n').map((line) => (
                    <p>{ line }</p>
                  ))
                }
              </div>
            ) :
            (
              <></>
            )
          }
        </div>
      </div>
    )
  }
})
