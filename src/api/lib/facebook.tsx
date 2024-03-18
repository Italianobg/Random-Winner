import { axiosClient } from "../axiosClient";

export function getFacebookUserDetails(token: string) {
    return axiosClient.get('/me?access_token=' + token + '&fields=id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender');
}