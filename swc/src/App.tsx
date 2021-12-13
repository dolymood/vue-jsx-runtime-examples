import { ref } from 'vue'
import { Hello } from './components/Hello'

const txt = ref('Hello')

export default () => {
  return (
    <>
      <h1>Hello Vue</h1>
      <Hello txt={txt.value} />
      <button type="button" onClick={() => txt.value = 'Hello World'}>change txt</button>
    </>
  )
}
