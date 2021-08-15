const PLOP_TEMPLATES_PATH = 'src/core/plop-templates'
const ROOT_PATH = 'src/views'

function makeActionAddFile ({ path }) {
  return {
    type: 'add',
    path: `${ROOT_PATH}/{{name}}/${path}`,
    templateFile: `${PLOP_TEMPLATES_PATH}/${path}`
  }
}

function makeReducers () {
  const makeIndex = makeActionAddFile({ path: 'reducers/index.js' })
  const makeModuleReducer = makeActionAddFile({
    path: 'reducers/example-reducer/index.js'
  })
  const makeActionsModuleReducer = makeActionAddFile({
    path: 'reducers/example-reducer/actions.js'
  })
  const makeTypesModuleReducer = makeActionAddFile({
    path: 'reducers/example-reducer/types.js'
  })
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

function makeHooks () {
  const makeIndex = makeActionAddFile({ path: 'hooks/index.js' })
  const makeHook = makeActionAddFile({ path: 'hooks/useExample.js' })
  return [makeIndex, makeHook]
}

function makeContexts () {
  const makeIndex = makeActionAddFile({ path: 'contexts/index.js' })
  const makeContext = makeActionAddFile({ path: 'contexts/exampleContext.js' })
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
}
