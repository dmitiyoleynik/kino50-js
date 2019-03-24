let downloadFilmsInfo = new XMLHttpRequest();
downloadFilmsInfo.open('GET','https://jsonplaceholder.typicode.com/photos',true);
downloadFilmsInfo.send();
//createElement 
/*gets element type,and 2 arrays:
with type of element's parametrs 
and with values of this parametrs 
  */
function createElem(elemType,paramsType,paramsValue) {
    let elem = document.createElement(elemType);
    for (let i = 0; i < paramsType.length; i++) {
        elem[paramsType[i]] = paramsValue[i];
    }
    return elem;
}
//appendElem
/*gets parent element and 
array of element's that will be add 
to parent element as a child
*/
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
    for (let i = 0; i < 50; i++) {
        moviesList.appendChild(appendElem(createElem('article',['className'],['film-card']),//article
        [   appendElem(
                createElem('a',['href','className'],['#','film-card__image-ref']),//article>a
                [
                    createElem('img',['className','src','alt'],['film-card__image',filmsList[i].url,'film_1'])//article>a>img
                ]
            ),
            createElem('a',['className','href','text'],['film-card__name','#',filmsList[i].title]),//article>a
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
    insertHere.appendChild(moviesList);
}
