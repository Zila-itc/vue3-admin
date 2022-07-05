import { genMessage } from '../helper'

const modulesFiles = import.meta.globEager('./zh-CN/**/*.ts')

export default {
  message: {
    ...genMessage(modulesFiles, 'zh-CN'),
    antdLocale: {},
  },
}
