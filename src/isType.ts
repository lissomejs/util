import {
    Data,
} from '../types'

// 类型判断相关

const toString = Object.prototype.toString

export const toRawType = (input: any): string =>
    toString.call(input).slice(8, -1)

export const isObject = (val: unknown): val is Data =>
    val !== null && typeof val === 'object'

export const isPlainObject = (val: unknown): val is Data =>
    toString.call(val) === '[object Object]'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isArray = <T = any>(val: unknown): val is Array<T> => Array.isArray(val)

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
    typeof val === 'function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const isUndefined = (val: unknown): val is undefined =>
    val === undefined

type Defined = boolean | string | number | any[] | Data;

export const isDefined = (val: unknown): val is Defined =>
    val !== undefined && val !== null

export const isFalse = (val: unknown): val is false => val === false

export const isTrue = (val: unknown): val is true => val === true

export const isString = (val: unknown): val is string =>
    typeof val === 'string'

export const isEmptyObject = (val: any): boolean =>
    !(isPlainObject(val) && Object.keys(val).length)

export const isEmptyArray = (val: unknown): val is Array<any> =>
    isArray(val) && !val.length
