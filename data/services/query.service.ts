import { FormState } from "../../pages";
import { constants } from "../config";

export const sendEmailService = async (payload: FormState) => {
    const url = constants.iftttURL;
    // const headers = getHeaders();
    return await fetch(url,{body: JSON.stringify(payload), headers: {"content-type": 'application/json'}, method: "POST" })
};