export default function validateArray (array) {
  return !!array && Array.isArray(array) ? array : []
}
