import { Data } from '../types'
import { isDefined, isArray, isPlainObject } from '.'

// 根据路径为对象设置值
export const set = (
    source: Data,
    path: string,
    value: any = {},
): void => {
    const pathArr = path.split('.')
    const lastKey = pathArr.pop() as string

    while (pathArr.length) {
        const key = pathArr.shift() as string

        if (!(key in source)) {
            source[key] = {}
        }

        source = source[key]
    }

    source[lastKey] = value
}

function getArrayIndex(str: string): number | null {
    const arrayIndexReg = /^\[([\d]+)\]$/
    const result = str.match(arrayIndexReg)

    return result && Number(result[1])
}

/**
 * 根据path获取对象的值，支持.的方式取对象属性, [i]的方式取数组的元素
 *
 * @param  {String} path   取值路径，对象属性以.分隔，数组以[i]取值，例如 a[1].b 表示target的属性a的第二个元素的属性b的值
 * @param  {Data}   source 取值的源数据
 * @return {any}           取得的值
 */
export const at = (path: string, source?: Data | null): any => {
    if (!source) return ''

    const splitReg = /\[?([\w\-_$]+)\]?/g
    const isArrIndex = /^\[[\w\-_$]+\]$/
    const pathArr: string[] = (path && path.match(splitReg)) || []
    let value = source
    let key: string

    while (value && pathArr && pathArr.length) {
        key = pathArr.shift() as string

        if (!key) continue

        // [1]这样的表示数组的路径的key
        if (isArrIndex.test(key)) {
            const index = getArrayIndex(key)

            if (!index && index !== 0) {
                throw new Error(
                    `can not get index of sub path ${key} in path ${path}`,
                )
            }
            if (!isArray(value)) {
                throw new Error(
                    `target ${JSON.stringify(
                        value,
                    )} is not Array, can not get array like sub path ${key} in path ${path}`,
                )
            }

            value = value[index]
        } else if (isPlainObject(value)) {
            value = (value as Data)[key]

            if (!isDefined(value)) (value as string) = ''
        } else {
            (value as unknown as string) = ''
        }
    }

    return value
}