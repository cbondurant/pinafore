import CopyDialog from '../components/CopyDialog.html'
import { createDialogElement } from '../helpers/createDialogElement.js'
import { createDialogId } from '../helpers/createDialogId.js'

export default function showCopyDialog (text) {
  let dialog = new CopyDialog({
    target: createDialogElement(),
    data: {
      id: createDialogId(),
      label: 'Copy dialog',
      title: 'Copy link',
      text
    }
  })
  dialog.show()
}
