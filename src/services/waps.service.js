import { storageService } from './async-storage.service';

const STORAGE_KEY = 'wapDb';

export const wapService = {
    save,
    getById
}

async function save(wap) {
    delete wap.selected;
    if (wap._id) return storageService.put(STORAGE_KEY, wap)
    else return await storageService.post(STORAGE_KEY, wap);
}

async function getById(wapId) {
    return await storageService.get(STORAGE_KEY, wapId)
}

