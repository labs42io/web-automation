import { checkContainsAnyText } from './checkContainsAnyText';

export function checkIsEmpty(elementType: string, element: string, falseCase: string): void {
  let newFalseCase = true;

  if (typeof falseCase === 'function') {
    newFalseCase = false;
  } else if (falseCase === ' not') {
    newFalseCase = false;
  }

  checkContainsAnyText(elementType, element, newFalseCase);
}
