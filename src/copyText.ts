/**
 * 生成用于执行copy操作的辅助dom
 *
 * @param   {String}  text  待copy的文案
 *
 * @return  {DOM}           生成的辅助DOM
 */
function createFakeDom(text: string) {
    const fakeDom = document.createElement('textarea')

    Object.assign(fakeDom.style, {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        background: 'transparent',
        border: 0,
    })
    fakeDom.value = text

    document.body.appendChild(fakeDom)

    return fakeDom
}

/**
 * 执行dom上的copy命令
 *
 * @param   {DOM}     target   辅助DOM
 * @param   {String}  text     待copy的文案
 *
 * @return  {Promise}          包含copy是否执行成功的Promise
 */
function doCopy(target: HTMLTextAreaElement, text: string) {
    return new Promise<string>((resolve, reject) => {
        target.select()

        try {
            document.execCommand('copy')
            document.body.removeChild(target)
            resolve(text)
        } catch (error) {
            document.body.removeChild(target)
            reject(error)
        }
    })
}

/**
 * 复制一段文案到剪切板
 *
 * @param   {String}  text  待copy的文案
 *
 * @return  {Promise}       包含copy是否执行成功的Promise
 */
export function copyText(text: string) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text)
    } else {
        const target = createFakeDom(text)

        return doCopy(target, text)
    }

}


