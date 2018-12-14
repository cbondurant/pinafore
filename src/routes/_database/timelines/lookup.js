import { dbPromise, getDatabase } from '../databaseLifecycle.js'
import { STATUSES_STORE, STATUS_ID, REBLOG_ID, NOTIFICATIONS_STORE } from '../constants.js'

export async function getReblogsForStatus (instanceName, id) {
  const db = await getDatabase(instanceName)
  await dbPromise(db, STATUSES_STORE, 'readonly', (statusesStore, callback) => {
    statusesStore.index(REBLOG_ID).getAll(IDBKeyRange.only(id)).onsuccess = e => {
      callback(e.target.result)
    }
  })
}

export async function getNotificationIdsForStatuses (instanceName, statusIds) {
  const db = await getDatabase(instanceName)
  return dbPromise(db, NOTIFICATIONS_STORE, 'readonly', (notificationsStore, callback) => {
    let res = []
    callback(res)
    statusIds.forEach(statusId => {
      let req = notificationsStore.index(STATUS_ID).getAllKeys(IDBKeyRange.only(statusId))
      req.onsuccess = e => {
        for (let id of e.target.result) {
          res.push(id)
        }
      }
    })
  })
}
