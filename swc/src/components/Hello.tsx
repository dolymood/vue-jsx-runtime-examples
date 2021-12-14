import { defineComponent, computed, ref } from 'vue'

export const Hello = defineComponent({
  props: {
    txt: String
  },
  setup (props) {
    const newTxt = computed(() => `New ${props.txt}`)
    const n = ref('1')
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
