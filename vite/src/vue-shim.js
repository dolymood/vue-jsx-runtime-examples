import { Fragment } from 'vue'
import { jsx as _jsx } from 'vue-jsx-runtime'

const jsx = function (type, config = {}, ...children) {
  return _jsx(type, {
    ...config,
    children: children
  })
}

export { Fragment, jsx }
