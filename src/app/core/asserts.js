function assertTrue(isTrue, text) {
  if (!isTrue) {
    throw new AssertFailed(`${text || 'Assert true'} - failed!`);
  }
}
function assertFalse(isFalse, text) {
  if (isFalse) {
    throw new AssertFailed(`${text || 'Assert False'} - failed!`);
  }
}
function assertNotEmpty(data, text) {
  if (['', null, undefined].includes(data)) {
    throw new AssertFailed(`${text || 'Assert not empty'} - failed!`);
  }
}
function assertEmpty(data, text) {
  if (!['', null, undefined].includes(data)) {
    throw new AssertFailed(`${text || 'Assert empty'} - failed!`);
  }
}
function assertToBeEqual(data, dataToEqual, text) {
  if (data != dataToEqual) {
    throw new AssertFailed(`${text || 'Assert to be equal'} - failed`);
  }
}
function assertToBeNotEqual(data, dataToNotEqual, text) {
  if (data == dataToNotEqual) {
    throw new AssertFailed(`${text || 'Assert to be not equal'} - failed`);
  }
}