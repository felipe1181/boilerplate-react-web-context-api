const PLOP_TEMPLATES_PATH = 'src/core/plop-templates'
const ROOT_PATH = 'src/views'

function makeActionAddFile ({ customPath, path }) {
  if (customPath) {
    return {
      type: 'add',
      path: `${ROOT_PATH}/{{name}}/${customPath}`,
      templateFile: `${PLOP_TEMPLATES_PATH}/${path}`
    }
  }
  return {
    type: 'add',
    path: `${ROOT_PATH}/{{name}}/${path}`,
    templateFile: `${PLOP_TEMPLATES_PATH}/${path}`
  }
}

function makeReducers (props = { nameReducer: '' }) {
  const { nameReducer } = props

  const makeModuleReducer = makeActionAddFile({
    customPath: nameReducer && `reducers/${props.nameReducer}/index.js`,
    path: 'reducers/example-reducer/index.js'
  })
  const makeActionsModuleReducer = makeActionAddFile({
    customPath: nameReducer && `reducers/${props.nameReducer}/actions.js`,
    path: 'reducers/example-reducer/actions.js'
  })
  const makeTypesModuleReducer = makeActionAddFile({
    customPath: nameReducer && `reducers/${props.nameReducer}/types.js`,
    path: 'reducers/example-reducer/types.js'
  })

  if (nameReducer) {
    return [makeModuleReducer, makeActionsModuleReducer, makeTypesModuleReducer]
  }

  const makeIndex = makeActionAddFile({ path: 'reducers/index.js' })

  return [
    makeIndex,
    makeModuleReducer,
    makeActionsModuleReducer,
    makeTypesModuleReducer
  ]
}

function makeRoute () {
  const makeIndex = makeActionAddFile({ path: 'routes.js' })
  return [makeIndex]
}
function makePages () {
  const makeIndex = makeActionAddFile({ path: 'pages/index.js' })
  const makePage = makeActionAddFile({ path: 'pages/PageExample.js' })
  return [makeIndex, makePage]
}

function makeHooks (props = { nameHook: '' }) {
  const { nameHook } = props
  const makeHook = makeActionAddFile({
    customPath: nameHook && `hooks/${props.nameHook}.js`,
    path: 'hooks/useExample.js'
  })
  if (nameHook) return [makeHook]
  const makeIndex = makeActionAddFile({ path: 'hooks/index.js' })
  return [makeIndex, makeHook]
}

function makeContexts (props = { nameContext: '' }) {
  const { nameContext } = props
  const makeContext = makeActionAddFile({
    customPath: nameContext && `contexts/${props.nameContext}.js`,
    path: 'contexts/exampleContext.js'
  })
  if (nameContext) return [makeContext]
  const makeIndex = makeActionAddFile({ path: 'contexts/index.js' })
  return [makeIndex, makeContext]
}
function makeComponents () {
  const makeIndex = makeActionAddFile({ path: 'components/index.js' })
  const makeComponent = makeActionAddFile({
    path: 'components/ExampleProvider.js'
  })
  return [makeIndex, makeComponent]
}
module.exports = function (plop) {
  // module generator
  plop.setGenerator('module', {
    description: 'application module logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name please'
      }
    ],
    actions: [
      ...makeReducers(),
      ...makePages(),
      ...makeHooks(),
      ...makeContexts(),
      ...makeComponents(),
      ...makeRoute()
    ]
  })
  plop.setGenerator('reducer', {
    description: 'application reducer logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name module please'
      },
      {
        type: 'input',
        name: 'name_reducer',
        message: 'reducer name please'
      },
      {
        type: 'input',
        name: 'name_context',
        message: 'context name please'
      },
      {
        type: 'input',
        name: 'name_hook',
        message: 'hook name please'
      }
    ],
    actions: [
      ...makeReducers({ nameReducer: '{{name_reducer}}' }),
      ...makeContexts({ nameContext: '{{name_context}}' }),
      ...makeHooks({ nameHook: '{{name_hook}}' })
    ]
  })
  plop.setGenerator('reducer-module', {
    description: 'application reducer logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name module please'
      },
      {
        type: 'input',
        name: 'name_reducer',
        message: 'reducer name please'
      }
    ],
    actions: [...makeReducers({ nameReducer: '{{name_reducer}}' })]
  })
}
