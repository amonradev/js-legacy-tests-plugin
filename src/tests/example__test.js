// Example tests
describe('group of simple tests', () => {
    assertTrue(1 == 1, 'to be true');
    assertFalse(2 != 2);
    assertNotEmpty('123');
    assertEmpty('');
    assertToBeEqual('123', '123')
    assertToBeNotEqual('123', '321')
});