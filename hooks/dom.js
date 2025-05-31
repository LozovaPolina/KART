export function getTouchEventData(e) {
  if ("touches" in e) {
    return e.touches[0];
  }
  return e;
}
