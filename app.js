// on va prendre tous les boutons et querySelectorAll nous retourne tous les éléments 
const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');  //modaleEquipement est notre boite modale
//const fermetureModale = document.querySelector('.fermeture-modale');  //pour la fermeture
const imgIndex = document.querySelector('.bloc-modale img');//c'est l'image que l'on est en train de visualiser

if(window.matchMedia("(min-width: 850px").matches) { //Faire du responsive avec javascript: conna^tre la syntaxe. matchMedia est une méthode qui permet de retourner true ou false en fct d'une certaine taille d'écran
    btns.forEach(btn => { // pour chaque boutons on a un évènement 
        btn.addEventListener('click', (e) => { //écoute d'un évènement et e qui est l'objet de lévènement qui va nous fournir des infos sur le bouton que l'on va cliquer.

            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`; // e.target c'est à dire l'élément que l'on vient de cliquer
            //on prend son attribut avec getAttribute: data-index et on sort equip.jpg (img1-equip.jpeg) ça va nous sélectionner les photos.
            modaleEquipement.classList.add('active-modale');

        })
    })

    //fermetureModale.addEventListener('click', () => {  //cela ne nous sert plus à rien pour la fermeture puisque je vient de dire que si 
        //modaleEquipement.classList.remove('active-modale');//je clique sur modaleEquipement n'importe où, ça ferme mon image et mon bouton 
    //})//fermeture-modale se trouve dans index.html donc je n'en ai plus besoin.

    modaleEquipement.addEventListener('click', () => {
        modaleEquipement.classList.remove('active-modale');
    })
}//Dès qu'on est en-dessous, ça retourne false donc on ne pourra pas ouvrir le portfolio et le javascript ne sera pas ouvert ==> ça ne match pas.

// Anim navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {//window c'est tout notre site

    if(window.scrollY > 30) {//scrollY: c'est ce que l'on a scroller depuis le top
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})