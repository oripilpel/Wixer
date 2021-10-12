import { httpService } from '../services/http.service';


export const wapService = {
    save,
    getById,
    getByName,
    sendLead,
    getWaps
}

async function save(wap, takeScreenshot) {
    delete wap.selected;
    delete wap.loader;
    if (wap._id) return await httpService.put(`wap/${wap._id}`, { wap, takeScreenshot });
    else return await httpService.post('wap', wap)
}

async function getById(wapId) {
    return await httpService.get(`wap?wapId=${wapId}`)
}

async function getByName(wapName) {
    return await httpService.get(`wap?wapName=${wapName}`)
}

async function getWaps() {
    return await httpService.get(`wap/waps`)
}

async function sendLead(wapName, lead) {
    return await httpService.post(`wap/${wapName}`, lead)
}

