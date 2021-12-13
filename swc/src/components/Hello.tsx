import * as Vue from 'vue'

export const Hello = Vue.defineComponent({
  props: {
    txt: String
  },
  setup (props) {
    const newTxt = Vue.computed(() => `New ${props.txt}`)
    const n = Vue.ref('1')
    return () => {
      return (
        <>
          <section>
            <h3>Txt: {props.txt}</h3>
            <h3>newTxt: {newTxt.value}</h3>
          </section>
          <section key="adf">
            <input v-model={n} />
            <p>n: {n.value}</p>
          </section>
        </>
      )
    }
  }
})
