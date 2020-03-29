import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import { menu } from './mock/menu'
import { livingroom, kitchen, bathroom, bedroom } from './mock/dashboard'

const mock = new MockAdapter(axios, {
    delayResponse: 1000
});

mock.onGet('/menu').reply(200, [
    ...menu
])

mock.onGet('/dahboard/0').reply(200, {
    ...kitchen
})

mock.onGet('/dahboard/1').reply(200, {
    ...livingroom
})

mock.onGet('/dahboard/2').reply(200, {
    ...bedroom
})
mock.onGet('/dahboard/3').reply(200, {
    ...bathroom
})

export const getMenuApi = () => {
    return axios.get('/menu')
}

export const getDashboardApi = (id) => {
    return axios.get(`/dahboard/${id}`)
}