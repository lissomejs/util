import { Data, Convertor } from '../types'
import { isArray, isPlainObject, snakeCase, camelCase } from '.'

function processKeys(convertor: Convertor, data: any): typeof data {
    if (isArray(data)) {
        return data.map(item => processKeys(convertor, item))
    } else if (isPlainObject(data)) {
        return Object.entries(data).reduce((result, [key, value]) => Object.assign(result, {
            [convertor(key)]: processKeys(convertor, value),
        }), {})
    } else {
        return data
    }
}

type TargetData = Data | Data[]

export const snakeCaseKeys = (data: TargetData) => processKeys(snakeCase, data)

export const camelCaseKeys = (data: TargetData) => processKeys(camelCase, data)
