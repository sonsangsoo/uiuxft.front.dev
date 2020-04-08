
import Alert from '../../../components/alert/Alert.vue'
import { create } from '../../../components/modal'

const alert = create(Alert, 'title', 'content')
const confirm = create(Alert, 'title', 'content', 'confirm')

import NameInfoCheck from './NameInfoCheck.vue'

// NameInfoCheck pop
const popNameInfoCheck = create(NameInfoCheck, 'title', 'content')


export { alert, confirm, popNameInfoCheck }
