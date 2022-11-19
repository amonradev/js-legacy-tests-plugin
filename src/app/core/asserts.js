function assertTrue(isTrue, text) {
  if (!isTrue) {
    throw new AssertFailed(`${text} - failed!`);
  }
}
function assertFalse(isFalse, text) {
  if (isFalse) {
    throw new AssertFailed(`${text} - failed!`);
  }
}
function assertNotEmpty(data, text) {
  if (['', null, undefined].includes(data)) {
    throw new AssertFailed(`${text} - failed!`);
  }
}
function assertEmpty(data, text) {
  if (!['', null, undefined].includes(data)) {
    throw new AssertFailed(`${text} - failed!`);
  }
}
function assertToBeEqual(data, dataToEqual, text) {
  if (data != dataToEqual) {
    throw new AssertFailed(`${text} - failed`);
  }
}
