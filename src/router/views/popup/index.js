
import Alert from '../../../components/alert/Alert.vue'
import { create } from '../../../components/modal'
import NameInfoCheck from './NameInfoCheck.vue'

const alert = create(Alert, 'title', 'content')
const confirm = create(Alert, 'title', 'content', 'confirm')


// NameInfoCheck pop
const popNameInfoCheck = create(NameInfoCheck, 'title', 'content')


export { alert, confirm, popNameInfoCheck }
