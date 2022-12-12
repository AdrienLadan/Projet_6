// créer le constructor pour les medias

class Media{
    constructor(data){
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }
    get id(){
        return this._id;
    }
    get photographerId(){
        return this._photographerId;
    }
    get title() {
        return this._title;
    }
    get likes(){
        return this._likes;
    }
    get date(){
        return this._date;
    }
    get price(){
        return this._price;
    }    
}
class Picture extends Media{
    constructor(data){
        super(data);
        this._type = 'img';
        this._image = data.image;
        this._imagepath = `./assets/photographers/thumbnails/${this._image}`;
    }
    get type(){
        return this._type;
    }
    get image(){
        return this._image;
    }
    get path(){
        return this._imagepath;
    }
}
class Video extends Media{
    constructor(data){
        super(data);
        this._type = 'video';
        this._video = data.video;
        this._videopath = `./assets/photographers/thumbnails/${this._video}`;
    }
    get type(){
        return this._type;
    }
    get video(){
        return this._video;
    }
    get path(){
        return this._videopath;
    }
} 

const container = document.querySelector('#lightbox');
const carousel = document.querySelector('.carousel');

class Lightbox extends Media{
    constructor(data){
        super(data);
        this._image = data.image;
        this._video = data.video;
        this._imgpath = `./assets/photographers/thumbnails/${this._image}`;
        this._vidpath = `./assets/photographers/thumbnails/${this._video}`;
    }
    get image(){
        return this._image;
    }
    get imgpath(){
        return this._imgpath;
    }
    get video(){
        return this._video;
    }
    get vidpath(){
        return this._vidpath;
    }
    createImgLightbox(){

        const imageTemplate = 
        `
        <img id="current_img" data-id="${this._id}" src=${this._imgpath} alt="${this._title}">
        <p class="caption">${this._title}</p>
            
        `;
        container.style.display = 'flex';
        carousel.innerHTML = imageTemplate;
        return carousel;
    }
    createVidLightbox(){
       
        const videoTemplate = 
        `
        <video id="current_img" data-id="${this._id}" controls autoplay>
            <source src="${this._vidpath}" type="video/mp4">
        </video>
        <p class="caption">${this._title}</p>

        `;
        container.style.display = 'flex';
        carousel.innerHTML = videoTemplate;
        return carousel;
    }
}


