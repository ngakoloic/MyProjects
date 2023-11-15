import { listevents } from '../data/functions';

const teamschedule = (id) => {
    return {
        type: 'SELECT-BARBER',
        event: listevents[0][id]
    }
};

export default teamschedule;