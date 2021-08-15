import { validateArray, yup } from 'core/utils'

const validationStageFields = yup.object().shape({
  path: yup.string().required('Preencha o path'),
  name: yup.string().required('Preencha o nome'),
  exact: yup.boolean().optional(),
  routeComponent: yup
    .mixed()
    .test(
      'component',
      'Preencha o componente',
      (val) => typeof val === 'function'
    ),
  component: yup
    .mixed()
    .test(
      'component',
      'Preencha o componente',
      (val) => typeof val === 'function'
    )
})

function isValidSchemaRoute (route) {
  return validationStageFields.isValidSync(route)
}
export default function autoImportRoutes () {
  const requireViewsModules = require.context('views', true, /\.js$/)
  return requireViewsModules.keys().reduce(function (acc, fileName) {
    if (!fileName.includes('routes')) return acc

    const importedFileRoute = validateArray(
      requireViewsModules(fileName)?.default
    )

    const validateImportedRoutes = importedFileRoute.filter((route) => {
      return isValidSchemaRoute(route)
    })

    return [...acc, ...validateImportedRoutes]
  }, [])
}
