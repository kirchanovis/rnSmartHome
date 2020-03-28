import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import { menu } from './mock/menu'

const mock = new MockAdapter(axios, {
    delayResponse: 1000
});

mock.onGet('/menu').reply(200, [
    ...menu
])

export const getMenuApi = () => {
    return axios.get(`/menu`)
}