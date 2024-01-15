import { listevents } from '../data/functions';

const teamschedule = (id) => {
    let events = []
    for (let i = 0; i < listevents[0].length; i++) {
        if (listevents[0][i].user == id) {
            events.push(listevents[0][i])
        }
    }
    return {
        type: 'SELECT-BARBER',
        event: events
    }
};

export default teamschedule;
