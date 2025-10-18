export class Failure extends Error {
    constructor( message: string, public key: string | null = null) {
      super(message);
      this.name = 'Failure';
    }
}

export class UnknowFailure extends Failure {
    constructor(message: string) {
      super(message);
      this.name = 'UnknowFailure';
    }
  }