import VueYandexMetrika from 'vue-yandex-metrika'

export default function (Vue, options, { isServer: disabled, router }) {
  Vue.use(VueYandexMetrika, {
    id: XXXXXXXX,
    router: router,
    env: process.env.NODE_ENV
  })
}
