import axios from "axios";
import { axiosClient } from "../axiosClient";


export function getUserPages(token: string) {
    return axiosClient.get('/me/accounts?access_token=' + token + '&fields=id,name,access_token,instagram_business_account{name,username,id,media_count,biography,followers_count,profile_picture_url}&limit=100');
}

export function getInstagramBusinessAccounts(pages: Object[], token: string) {
    return axios.all(pages.map((page: any) =>
        axiosClient.get('/' + page.id + '?fields=instagram_business_account&access_token=' + token)));
}

export function getInstagramUsers(IDs: string[], token: string) {
    return axios.all(IDs.map((instagramID: string) =>
        axiosClient.get('/' + instagramID + '?fields=id,username,media_count&access_token=' + token)
    ));
}

export function getInstagramMedia(instagramID: string, token: string) {
    return axiosClient.get('/' + instagramID + '/media?access_token=' + token + '&fields=caption,timestamp,username,permalink&limit=100');
}

export function getMediaComments(mediaID: string, token: string, fields: string) {
    return axiosClient.get('/' + mediaID + '/comments?access_token=' + token + '&fields=text,username,replies{text,username,id}' + fields);
}



