const Routes = ({ app }) => {
    app.get('/calendar-event/', (req, res) => {
        res.send([
            {
                id: 1,
                title: 'Note Title 1',
                note: 'Event description 2',
                created: new Date('2020-02-25T03:24:00').toISOString(),
                updated: new Date('2020-02-25T03:50:00').toISOString(),
                startTime: new Date('2020-02-25T16:00:00').toISOString(),
                endTime: new Date('2020-02-25T18:50:00').toISOString(),
            },
            {
                id: 2,
                title: 'Note Title 2',
                note: 'Event description 2',
                created: new Date('2020-02-25T03:24:00').toISOString(),
                updated: new Date('2020-02-25T03:50:00').toISOString(),
                startTime: new Date('2020-02-26T16:00:00').toISOString(),
                endTime: new Date('2020-02-26T18:50:00').toISOString(),
            },
        ]);
    });

    app.get('/calendar-event/:id', (req, res) => {
        res.send({
            id: 1,
            title: 'Note Title 1',
            note: 'Event description 2',
            created: new Date('2020-02-25T03:24:00').toISOString(),
            updated: new Date('2020-02-25T03:50:00').toISOString(),
            startTime: new Date('2020-02-25T16:00:00').toISOString(),
            endTime: new Date('2020-02-25T18:50:00').toISOString(),
        });
    });
};

export default Routes;
