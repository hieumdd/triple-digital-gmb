import { AxiosInstance } from 'axios';

import { getAuthClient } from '../auth/auth.service';
import { getLocations } from './location.service';

describe('Location', () => {
    let client: AxiosInstance;
    const accountId = `115324377183730361037`;

    beforeAll(async () => {
        client = await getAuthClient();
    });

    it('Get Locations', async () => {
        return getLocations(client, { accountId })
            .then((locations) => {
                console.log(locations);
                locations.forEach((location) => {
                    expect(location.name).toBeTruthy();
                    expect(location.title).toBeTruthy();
                });
            })
            .catch((err) => {
                console.log(err);
            });
    });
});
