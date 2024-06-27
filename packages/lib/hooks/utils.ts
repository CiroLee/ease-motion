export function checkRef(ref: React.RefObject<HTMLElement>) {
  if (!ref.current) {
    throw new Error('ref is not valid');
  }
}
