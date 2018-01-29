import geoApi from './geo_api.js'
import test from 'ava'

test('geo_api:locate', t => {
    return geoApi.locate('1020 15th st. Denver Colorado')
    .then(data => {
        t.truthy(data.results.length > 0)
    })
})