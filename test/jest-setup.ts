import { SetupServer } from '@src/server'; //Alias used to access files
import supertest from 'supertest'

beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});

