import { events } from '../data/functions';

const teamschedule = (id) => {
    const id_b = parseInt(id);
    return {
        type: 'SELECT-TEAM',
        event: events[0][id_b]
    }
};

export default teamschedule;