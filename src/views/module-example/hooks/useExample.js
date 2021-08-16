import { useContext } from 'react'
import { exampleContext } from '../contexts'

export default function useExample () {
  return useContext(exampleContext)
}
