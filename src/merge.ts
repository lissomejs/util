import { Data } from '../types'
import { isArray, isPlainObject } from '.'

const DANGEROUS_KEYS = ['prototype', 'constructor', '__proto__']

function mergeObject(target: Data, source: Data) {
    const sourceKeys = Object.keys(source)

    sourceKeys.forEach(key => {
        if (DANGEROUS_KEYS.includes(key)) return

        const sourceValue = source[key]
        let targetValue = target[key]

        if (isPlainObject(sourceValue)) {
            if (!targetValue) {
                targetValue = {}
                target[key] = targetValue
            }
            mergeObject(targetValue, sourceValue)
        } else if (isArray(sourceValue)) {
            if (!targetValue) {
                targetValue = []
                target[key] = targetValue
            }

            // eslint-disable-next-line
            mergeArray(targetValue, sourceValue);
        } else if (sourceValue !== undefined) {
            target[key] = sourceValue
        }
    })

    return target
}

type UnknownArray = unknown[]

function mergeArray(target: UnknownArray, source: UnknownArray) {
    // 合并数据源与目标相比是删除元素时
    const sourceLength = source.length
    const targetLength = target.length
    if (sourceLength < targetLength) {
        target.splice(sourceLength, targetLength - sourceLength)
    }
    source.forEach((sourceItem, index: number) => {
        let targetItem = target[index] as any

        if (isPlainObject(sourceItem)) {
            if (!targetItem) {
                targetItem = {}
                target[index] = targetItem
            }
            mergeObject(targetItem, sourceItem)
        } else if (isArray(sourceItem)) {
            if (!targetItem) {
                targetItem = []
                target[index] = targetItem
            }
            mergeArray(targetItem, sourceItem)
        } else if (sourceItem !== undefined) {
            target[index] = sourceItem
        }
    })

    return target
}

function mergeOnce(target: unknown, source: unknown) {
    if (!source) return target

    if (isArray(target) && isArray(source)) {
        mergeArray(target, source)
    } else if (isPlainObject(target) && isPlainObject(source)) {
        mergeObject(target, source)
    } else {
        throw new Error('typeof target and source is different')
    }
    return target
}

/**
 * 深度合并对象或者数据
 *
 * @export
 * @param {*} target 目标
 * @param {*} source 源
 * @returns
 */
export function merge(target: any, ...source: any[]) {
    while (source.length) {
        const sourceItem = source.shift()
        target = mergeOnce(target, sourceItem)
    }

    return target
}