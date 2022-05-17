import {
    Data,
} from '../types'

export const createEmptyObject = (): Data => ({})

export const createEmptyArray = () => []

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const NOOP = (..._args: any[]): any => { }
