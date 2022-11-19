function assertTrue(isTrue, text) {
  if (!isTrue) {
    throw new assertFailed(`${text} - failed!`);
  }
}
function assertFalse(isFalse, text) {
  if (isFalse) {
    throw new assertFailed(`${text} - failed!`);
  }
}
function assertNotEmpty(data, text) {
  if (data.includes("", null, undefined)) {
    throw new assertFailed(`${text} - failed!`);
  }
}
function assertEmpty(data, text) {
  if (!data.includes("", null, undefined)) {
    throw new assertFailed(`${text} - failed!`);
  }
}
