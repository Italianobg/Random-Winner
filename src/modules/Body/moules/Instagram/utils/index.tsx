export function removeDuplicates(arr: Object[]): Object[] {
    let unique: string[] = [];
    let uniqueArr: Object[] = [];
    uniqueArr = arr.filter((element: any) => {
        const isDuplicate = unique.includes(element.username);

        if (!isDuplicate) {
            unique.push(element.username)
            return true;
        }
        return false;
    })
    return uniqueArr;
}

export function generateRandom(maxLimit: any) {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand);

    return rand;
}