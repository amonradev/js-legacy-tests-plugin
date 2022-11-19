class assertFailed extends Error {
    constructor(message) {
        super(message)
        this.name = 'Assert Failed'
    }
}