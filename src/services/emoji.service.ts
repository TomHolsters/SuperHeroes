export const random = () => {
    let max = 63044, min = 62976;
    let code = Math.floor(Math.random() * (max - min + 1)) + min;
    return convert('0x1' + code.toString(16))
}

export const convert = c => {
    c = c.toString(16);
    if (!c.match(/0x1/)) c = prefix(c)
    return String.fromCodePoint(c);
}

const prefix = x => '0x1' + x;