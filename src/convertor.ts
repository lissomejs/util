// 字符串格式化

export type Convertor = (str: string) => string

/**
 * 将字符串转为驼峰形式
 */
export const camelCase: Convertor = str => {
    if (isNumerical(str)) return str

    const result = str.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : ''
    })
    // Ensure 1st char is always lowercase
    return result.substring(0, 1).toLowerCase() + result.substring(1)
}

/**
* 将驼峰形式字符串转为大驼峰(帕斯卡)形式
*/
export const pascalCase: Convertor = str =>
    camelCase(str)?.replace(/^\w/, letter => letter.toUpperCase())


function isNumerical(str: any): boolean {
    str -= 0
    return str === str
}

/**
 * 将驼峰式字符串转为蛇形命名法字符串
 *
 * @param   {String}  camelStr  输入的值，例如'camelStr'
 *
 * @return  {String}            转换后的值，'camel_str'
 */
export const snakeCase: Convertor = str => {
    return str.replace(/[A-Z]/g, str => `_${str.toLowerCase()}`)
}

/**
 * 将驼峰式/大驼峰(帕斯卡)形式字符串转为中划线字符串
 *
 * @param   {String}  camelStr  输入的值，例如'camelStr'
 *
 * @return  {String}            转换后的值，'camel-str'
 */
export const kebabCase: Convertor = str => {
    return str.replace(/^[A-Z]/, letter => letter.toLowerCase()).replace(/[A-Z]/g, str => `-${str.toLowerCase()}`)
}