class MediaFactory {
    constructor(data, type) {
        if (type === 'img') {
            return new Picture(data);
        } else if (type === 'video') {
            return new Video(data);
        } else {
            throw 'Unknown type format';
        }
    }
}