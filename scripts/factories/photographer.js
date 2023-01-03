function photographerFactory(data) {
    const photographer = new Photographer(data);
    //Creation de la card utilisateur sur la page d'index 
    function getUserCardDOM() {
        const article = document.createElement('article');

        const link = document.createElement('a');
        link.setAttribute('href', './photographer.html?id=' + photographer.id);
        link.classList.add('link');

        const img = document.createElement('img');
        img.setAttribute('src', photographer.portrait);
        img.setAttribute('alt', photographer.name);

        const h2 = document.createElement('h2');
        h2.classList.add('name');
        h2.textContent = photographer.name;

        const ville = document.createElement('div');
        ville.classList.add('city');
        ville.textContent = photographer.city + ', ' + photographer.country;

        const region = document.createElement('div');

        const slogan = document.createElement('div');
        slogan.classList.add('tagline');
        slogan.textContent = photographer.tagline;

        const photographerPrice = document.createElement('div');
        photographerPrice.classList.add('price');
        photographerPrice.textContent = photographer.price + '€/Jour';

        link.appendChild(img);
        link.appendChild(h2);
        article.append(link);
        article.appendChild(ville);
        article.appendChild(region);
        article.appendChild(slogan);
        article.appendChild(photographerPrice);

        return (article);
    }

    //Creation du profile utilisateur sur la page perso 
    function user() {
        const header = document.querySelector('.photograph-header');

        const btn = document.querySelector('.contact_button');

        //Creation de la modal
        const modal = document.querySelector('.modal-header');
        const modalH3 = document.querySelector('h3');
        modalH3.textContent = photographer.name;
        modal.appendChild(modalH3);


        // Block de likes et prix en bas de la page 

        const priceCard = document.createElement('div');
        priceCard.classList.add('price-block');

        const prix = document.createElement('div');
        prix.classList.add('photograph-price');

        prix.textContent = photographer.price + '€/Jour';

        const totLikes = document.createElement('div');
        totLikes.classList.add('photograph-likes');

        priceCard.append(totLikes, prix);


        //Creation du header de la page perso du photographe 
        const headerContent = document.createElement('div');
        headerContent.classList.add('header-content');

        const bio = document.createElement('div');
        bio.classList.add('photographer-label');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.setAttribute('aria-label', photographer.name);
        h1.textContent = photographer.name;

        const slogan = document.createElement('div');
        slogan.classList.add('tagline');
        slogan.textContent = photographer.tagline;

        const country = document.createElement('div');
        country.classList.add('country');
        country.textContent = photographer.city + ', ' + photographer.country;


        const img = document.createElement('img');
        img.setAttribute('alt', photographer.name);
        img.setAttribute('src', photographer.portrait);


        //On attache tout
        bio.append(h1);
        bio.append(country);
        bio.append(slogan);
        headerContent.append(priceCard);
        headerContent.appendChild(bio);
        headerContent.append(img);
        headerContent.append(btn);
        header.appendChild(headerContent);

        return (headerContent);
    }
    return { getUserCardDOM, user };
}


//Gestion et display des medias
function mediasFactory(data) {
    const media = new Media(data);

    const lightbox = new Lightbox(data);

    const body = document.querySelector('.photograph-body');

    const card = document.createElement('div');
    card.classList.add('card');

    const a = document.createElement('a');
    a.classList.add('media-link');

    //Creation de la caption sous le media
    const caption = document.createElement('div');
    caption.classList.add('caption');

    const p = document.createElement('p');

    const heart = document.createElement('span');
    heart.classList.add('heart');

    const likes = document.createElement('p');
    likes.classList.add('counter');
    likes.textContent = media._likes;
    likes.setAttribute('aria-label', 'likes');

    const i = document.createElement('i');
    i.classList.add('fa-regular', 'fa-heart');

    heart.append(likes);
    heart.append(i);

    //Nombre total de likes dans le block du bas 
    const totLikes = document.querySelector('.photograph-likes');

    const icon = document.createElement('i');
    icon.classList.add('tot-likes-icon', 'fa-solid', 'fa-heart');


    //Gestions des fonction d'ajout ou de retrait d'un like 

    function increment() {
        likes.textContent++;
        totLikes.textContent++;
        totLikes.append(icon);
        i.classList.remove('fa-regular', 'fa-heart');
        i.classList.add('fa-solid', 'fa-heart');
    }


    function decrement() {
        likes.textContent--;
        totLikes.textContent--;
        totLikes.append(icon);
        i.classList.remove('fa-solid', 'fa-heart');
        i.classList.add('fa-regular', 'fa-heart');
    }

    //Ici on vérifie si on ajoute ou retire un like 
    i.addEventListener('click', function (e) {
        e.preventDefault();
        if (i.className == 'fa-regular fa-heart') {
            return increment();

        }
        else {
            return decrement();
        }
    });



    //Fonctions qui gèrent le display des photos et des videos 

    function imgTemplate() {
        const picture = new MediaFactory(data, 'img');
        const img = document.createElement('img');
        p.textContent = picture._title;
        caption.append(p);

        caption.append(heart);
        img.classList.add('thumbnail');
        img.setAttribute('src', picture._imagepath);
        img.setAttribute('alt', picture._title);

        //Creation de la lightbox
        a.addEventListener('click', function (e) {
            e.preventDefault();
            lightbox.createImgLightbox();
        });


        //Assemblage des éléments pour creer la card
        a.appendChild(img);

        card.append(a);
        card.append(caption);

        body.append(card);

        return card;
    }


    function videoTemplate() {
        const vid = new MediaFactory(data, 'video');
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute('src', vid._videopath);
        source.setAttribute('type', 'video/mp4');
        video.classList.add('thumbnail');
        video.appendChild(source);
        p.textContent = vid._title;
        caption.append(p);
        caption.append(heart);
        a.setAttribute('href', vid._videopath);
        a.setAttribute('aria-label', 'link');
        a.addEventListener('click', function (e) {
            e.preventDefault();
            lightbox.createVidLightbox();
        });

        a.appendChild(video);
        card.append(a);
        card.append(caption);
        body.append(card);
        return card;
    }
    return { imgTemplate, videoTemplate };
}




