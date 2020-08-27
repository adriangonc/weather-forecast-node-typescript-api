declare namespace NodeJS {
    interface Global { //Add testRequest type to Global interface of nodejs.
        testRequest: import('supertest').SuperTest<import('supertest').Test> //Needs to be imported inline in order to be recognized as a global configuration instead of local.
    }
}