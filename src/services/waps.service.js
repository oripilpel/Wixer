import { storageService } from './async-storage.service';
import { httpService } from '../services/http.service';

const STORAGE_KEY = 'wapDb';

export const wapService = {
    save,
    getById
}

async function save(wap) {
    delete wap.selected;
    if (wap._id) return await httpService.put(`wap/${wap._id}`, wap)//return storageService.put(STORAGE_KEY, wap)
    else return await httpService.post('wap', wap)//storageService.post(STORAGE_KEY, wap);
}

async function getById(wapId) {
    return await httpService.get(`wap?wapId=${wapId}`)//storageService.get(STORAGE_KEY, wapId)
}

