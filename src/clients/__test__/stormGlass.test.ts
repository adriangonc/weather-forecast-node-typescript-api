import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios'
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json'
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
    it('should return the normalized forecast from the StromGlass service', async () => {
        const lat = -15.32;
        const lng = 153.2;

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);

        expect(response).toEqual(stormglassNormalizedResponseFixture);
    });
});