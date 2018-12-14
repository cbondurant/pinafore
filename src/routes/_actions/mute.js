import { store } from '../_store/store.js'
import { muteAccount, unmuteAccount } from '../_api/mute.js'
import { toast } from '../_utils/toast.js'
import { updateLocalRelationship } from './accounts.js'
import { emit } from '../_utils/eventBus.js'

export async function setAccountMuted (accountId, mute, toastOnSuccess) {
  let { currentInstance, accessToken } = store.get()
  try {
    let relationship
    if (mute) {
      relationship = await muteAccount(currentInstance, accessToken, accountId)
    } else {
      relationship = await unmuteAccount(currentInstance, accessToken, accountId)
    }
    await updateLocalRelationship(currentInstance, accountId, relationship)
    if (toastOnSuccess) {
      if (mute) {
        toast.say('Muted account')
      } else {
        toast.say('Unmuted account')
      }
    }
    emit('refreshAccountsList')
  } catch (e) {
    console.error(e)
    toast.say(`Unable to ${mute ? 'mute' : 'unmute'} account: ` + (e.message || ''))
  }
}
