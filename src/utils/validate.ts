export function validateUrl(url: string): boolean {
    const urlR = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@]))?/;
    console.log(urlR.test(url));
    return urlR.test(url);
}
