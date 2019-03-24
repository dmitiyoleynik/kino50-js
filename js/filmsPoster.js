let downloadFilmsInfo = new XMLHttpRequest();
downloadFilmsInfo.open('GET','https://jsonplaceholder.typicode.com/photos',true);
downloadFilmsInfo.send();

function createElem(elemType,paramsType,paramsValue) {
    let elem = document.createElement(elemType);
    for (let i = 0; i < paramsType.length; i++) {
        elem[paramsType[i]] = paramsValue[i];
    }
    return elem;
}
function appendElem(parent,childList) {
    for (let i = 0; i < childList.length; i++) {
        parent.appendChild(childList[i]);
    }
    return parent;
}

downloadFilmsInfo.onload = function () {
    let filmsList = JSON.parse(this.responseText);   
    var moviesList = document.createDocumentFragment();
    var insertHere = document.querySelector('.content__films');
    //insertHere.appendChild(moviesList);

   // insertHere.appendChild(appendElem(createElem('a',['text'],['dgsdg']),[createElem('a',['text'],['dgsdg']),createElem('a',['text'],['dgsdg'])]));

    insertHere.appendChild(appendElem(createElem('article',['className'],['film-card']),//article
    [   appendElem(
            createElem('a',['href','className'],['#','film-card__image-ref']),//article>a
            [
                createElem('img',['className','src','alt'],['film-card__image',filmsList[1].url,'film_1'])//article>a>img
            ]
        ),
        createElem('a',['className','href','text'],['film-card__name','#',filmsList[1].title]),//article>a
        appendElem(createElem('div',['className'],['film-card__bottom']),[//article>div
            appendElem(createElem('a',['href','className'],['#','film-card__bottom-ref']),[//article>div>a
                appendElem(createElem('div',['className'],['film-card__mark']),[//article>div>a>div
                    createElem('img',['className','src','alt'],['film-card__star','https://kino50.net/themes/ovg/image/star.png','here is a star']),//article>div>a>div>img
                    createElem('img',['className','src','alt'],['film-card__star','https://kino50.net/themes/ovg/image/star.png','here is a star']),//article>div>a>div>img
                    createElem('img',['className','src','alt'],['film-card__star','https://kino50.net/themes/ovg/image/star.png','here is a star']),//article>div>a>div>img
                    createElem('img',['className','src','alt'],['film-card__star','https://kino50.net/themes/ovg/image/star.png','here is a star']),//article>div>a>div>img
                    createElem('img',['className','src','alt'],['film-card__star','https://kino50.net/themes/ovg/image/star.png','here is a star'])//article>div>a>div>img
                ]),
                createElem('img',['className','src','alt'],['film-card__DVD','https://kino50.net/themes/ovg/image/dvd-fg.png','here is a DVD'])//article>div>a>img
            ])
        ])
    ]));   
}

 // alert(filmsList);
    // let downloadPicture = new XMLHttpRequest();
    // downloadPicture.open('GET',filmsList[0].url,true);

    // alert(downloadPicture)


    // var div = document.createElement('div');
    // div.className = "alert alert-success";
    // div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

    // let img = document.createElement('img');
    // img.className='film-card__image';
    
    // moviesList.appendChild(img);


/*<article class="film-card">
                    <a href="#" class="film-card__image-ref">
                        <img class="film-card__image"
                            src="https://kino50.org/sites/default/files/styles/cover_movie_page/public/image/m/16327.jpg?itok=StFLNmv7"
                            alt="film_1">
                    </a>
                    <a class="film-card__name" href="#">Tasty Rubber Chips</a>
                    <div class="film-card__bottom">
                        <a href="#" class="film-card__bottom-ref">
                            <div class="film-card__mark">
                                <img src="https://kino50.net/themes/ovg/image/star.png" alt="here is a star"
                                    class="film-card__star">
                                <img src="https://kino50.net/themes/ovg/image/star.png" alt="here is a star"
                                    class="film-card__star">
                                <img src="https://kino50.net/themes/ovg/image/star.png" alt="here is a star"
                                    class="film-card__star">
                                <img src="https://kino50.net/themes/ovg/image/star.png" alt="here is a star"
                                    class="film-card__star">
                                <img src="https://kino50.net/themes/ovg/image/star.png" alt="here is a star"
                                    class="film-card__star">
                            </div>
                            <img src="https://kino50.net/themes/ovg/image/dvd-fg.png" alt="here is a DVD"
                                class="film-card__DVD">
                        </a>
                    </div>

                </article> */



                /*
                 for(let i = 0; i < 50; i++) {
        let imgStar1 = document.createElement('img');
        imgStar.className='film-card__star';
        imgStar.src='https://kino50.net/themes/ovg/image/star.png';
        imgStar.alt = 'here is a star';
        let imgStar2 = document.createElement('img');
        imgStar.className='film-card__star';
        imgStar.src='https://kino50.net/themes/ovg/image/star.png';
        imgStar.alt = 'here is a star';
        let imgStar3 = document.createElement('img');
        imgStar.className='film-card__star';
        imgStar.src='https://kino50.net/themes/ovg/image/star.png';
        imgStar.alt = 'here is a star';
        let imgStar4 = document.createElement('img');
        imgStar.className='film-card__star';
        imgStar.src='https://kino50.net/themes/ovg/image/star.png';
        imgStar.alt = 'here is a star';
        let imgStar5 = document.createElement('img');
        imgStar.className='film-card__star';
        imgStar.src='https://kino50.net/themes/ovg/image/star.png';
        imgStar.alt = 'here is a star';

        let markDiv = document.createElement('div');
        markDiv.className='film-card__mark';

        markDiv.appendChild(imgStar1);
        markDiv.appendChild(imgStar2);
        markDiv.appendChild(imgStar3);
        markDiv.appendChild(imgStar4);
        markDiv.appendChild(imgStar5);

        let DVDimg = document.createElement('img');
        DVDimg.className='film-card__DVD';
        DVDimg.src='https://kino50.net/themes/ovg/image/dvd-fg.png';
        DVDimg.alt = 'here is a DVD';

        let bottomRef = document.createElement('a');
        bottomRef.href='#';
        bottomRef.className = 'film-card__bottom-ref';
        bottomRef.appendChild(markDiv);
        bottomRef.appendChild(DVDimg);
        

        let divBottomCard = document.createElement('div');
        divBottomCard.className = 'film-card__bottom';
        divBottomCard.appendChild(bottomRef);

        let filmNameRef = document.createElement('a');
        filmNameRef.className = 'film-card__name';
        filmNameRef.href ='#';
        filmNameRef.text = filmsList[i].title;

        let filmImage = document.createElement('img');
        filmImage.className = 'film-card__image';
        filmImage.alt = 'film_1';
        filmImage.src= filmsList[i].url;

        let filmImgHref = document.createElement('a');
        filmImgHref.appendChild(filmImage);
        filmImgHref.href='#';
        filmImgHref.className='film-card__image-ref';


        let article = document.createElement('article');
        article.appendChild(filmImage);
        article.appendChild(filmNameRef);
        article.appendChild(divBottomCard);
        article.className='film-card';

        moviesList.appendChild(article);
    }
    */