import darkSkyApi from './dark_sky_api.js'
import test from 'ava'

test('dark_sky_api:forecast', t => {
    return darkSkyApi.forecast(37.8267,-122.4233)
    .then(forecasts => {
        t.truthy(forecasts !== 'undefined')
    })
})