import { Comment } from "../../../../provider/Data";

export function removeDuplicates(arr: Comment[]): Comment[] {
    let unique: string[] = [];
    let uniqueArr: Comment[] = [];
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

export function getCurrentDate(separator = '/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}