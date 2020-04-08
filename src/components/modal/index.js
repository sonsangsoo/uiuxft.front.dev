import { create } from './create';
import DialogsWrapper from './wrapper';

export function makeDialog(...args) {
  if (process.env.NODE_ENV === 'development') {
    console.error(
      '[vue-modal-dialogs] makeDialog function is deprecated. Use ModalDialogs.create instead.'
    );
  }

  return create(...args);
}

export { create, DialogsWrapper };
