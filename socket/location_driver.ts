
module.exports = (io: any) => {
    const namespace = io.of('/location_driver');
    namespace.on('connection', function (socket: any) {
        socket.on('position', function (data: any) {
            console.log(data)
            const j = JSON.parse(data)
            namespace.emit(`position/${j.id}`, { id: j.id, lat: j.lat, lng: j.lng, dir: j.dir })
        });

        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
}

