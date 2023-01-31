import axios from 'axios';

import { pipeline } from './pipeline.service';

it('account/%p', async () => {
    const options = {
        start: '2022-01-01',
        end: '2023-02-01',
    };

    return pipeline(options)
        .then((results) => {
            results.forEach((result) => {
                console.log(result);
                expect(result.location).toBeGreaterThan(0);
                expect(result.insight).toBeGreaterThan(0);
            });
        })
        .catch((err) => {
            axios.isAxiosError(err) && console.log(err.response?.data);
            return Promise.reject(err);
        });
});
