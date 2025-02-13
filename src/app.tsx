import { defineComponent, createApp } from 'vue'
import './vue-flag'
import Header from './components/header'
import Footer from './components/footer'
import Cover from './components/cover'
import About from './components/about'
import Characters from './components/characters'
import License from './components/license'
import ThirdPartyLicense from './components/third-party-license'

const component = defineComponent({
  methods: {
    isFirefox() {
      return CSS.supports('-moz-transform', 'none')
    }
  },
  mounted() {
    if (this.isFirefox()) {
      document.body.classList.add('is-firefox')
    }
  },
  render() {
    return (
      <>
        <Header></Header>
        <main class="
          w-[calc(100%-2rem)] h-fit max-w-[1000px] min-h-[calc(100dvh-10rem)] mx-auto mt-[5rem] mb-[4rem]
          flex flex-col justify-between gap-16 [&>*]:scroll-mt-[8rem]
        ">
          <Cover></Cover>
          <About></About>
          <Characters></Characters>
          <License></License>
          <ThirdPartyLicense></ThirdPartyLicense>
        </main>
        <Footer></Footer>
      </>
    )
  }
})

const app = createApp(component)
app.mount('#app')
