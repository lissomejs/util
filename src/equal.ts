import { Data } from '../types'
import { isArray, isPlainObject } from '.'

function isArrayEqual(source: Array<any>, target: any): boolean {
    if (!target || !isArray(target) || source.length != target.length)
        return false

    return source.every((item, index) => equal(item, target[index]))
}

function isObjectEqual(source: Data, target: any): boolean {
    if (!target || !isPlainObject(target)) return false

    const sourceKeys = Object.keys(source),
        targetKeys = Object.keys(target)

    if (sourceKeys.length != targetKeys.length) return false

    return sourceKeys.every(key => equal(source[key], (target as Data)[key]))
}

/**
 * 判断两个值是否相等
 * @param  {Any}  source  源值
 * @param  {Any}  target  目标
 * @return {Boolean}      两个值是否相等
 */
export function equal(source: any, target: any) {
    let isEqual

    if (isArray(source)) {
        isEqual = isArrayEqual(source, target)
    } else if (isPlainObject(source)) {
        isEqual = isObjectEqual(source, target)
    } else {
        isEqual = source === target
    }

    return isEqual
}