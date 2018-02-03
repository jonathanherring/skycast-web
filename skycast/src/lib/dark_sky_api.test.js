import darkSkyApi from './dark_sky_api.js'
import test from 'ava'

test('dark_sky_api:forecast', t => {
    return darkSkyApi.forecast(37.8267,-122.4233)
    .then(forecasts => {
        console.log('dark sky test',forecasts)
        t.truthy(forecasts.hourly.data.length > 0)
    })
})

test('dark_sky_api:history', t => {
    return darkSkyApi.history(30.8267,-122.4233,1516953600)
    .then(history => {
        console.log('dark sky HISTORY test',history)
        t.truthy(history.hourly.data.length > 0)
    })
})