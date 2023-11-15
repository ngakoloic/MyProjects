export const listevents = [
    {
        '1': {
            id: 1,
            title: 'event 1',
            start: '2023-11-12T08:00:00',
            end: '2023-11-12T10:00:00',
            display: 'block',
        },
        '2': {
            id: 3,
            title: 'event 3',
            start: '2023-11-14T12:00:00',
            end: '2023-11-14T15:00:00',
            display: 'block',
        },
        '3': {
            id: 2,
            title: 'event 2',
            start: '2023-11-15T08:00:00',
            end: '2023-11-15T10:00:00',
            display: 'block',
        }
    }
]

export const initialEvents = () => {
    let keys = Object.keys(listevents[0]);
    let state = [];
    for (let i = 1; i <= keys.length; i++) {
        state.push(listevents[0][i]);
    }
    return state;
}