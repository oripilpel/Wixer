import { httpService } from '../services/http.service';


export const wapService = {
    save,
    getById,
    sendLead,
    getWaps
}

async function save(wap, createScreenShot) {
    delete wap.selected;
    if (wap._id) return await httpService.put(`wap/${wap._id}`, { wap, createScreenShot });
    else return await httpService.post('wap', wap)
}

async function getById(wapId) {
    return await httpService.get(`wap?wapId=${wapId}`)
}

async function getWaps() {
    return await httpService.get(`wap/waps`)
}

async function sendLead(wapId, lead) {
    return await httpService.post(`wap/${wapId}`, lead)
}

