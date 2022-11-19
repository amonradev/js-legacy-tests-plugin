// Example tests
it('group of simple tests', () => {
    assertTrue(1 == 1, 'to be true', );
    assertFalse(2 != 2, 'to be false');
    assertNotEmpty('123', 'to be not empty');
    assertEmpty('', 'to be empty');
    assertToBeEqual('123', '123', 'to be equals')
});