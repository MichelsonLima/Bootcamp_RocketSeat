const options = {
    dragging: true,
    touchZoom: true,
    doubleClickZoom:true,
    zoomControl: true,
    scrollWheelZoom: false
}
//create map
const map = L.map('mapid', options).setView([-27.2164708,-49.6490237], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],

})

let marker;
//create and add maker

map.on('click', (event) =>{


    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})


//add photo field

function addPhotoField(){
    //pegar container de photos #images
    const container=document.querySelector('#images')
    
    //pegar o container para duplicar  .new-upload 
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realizar o clone da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    
    if (input.value == ""){
        return
    }

    //limpar o campo antes de add ao container de imagens
    input.value=""

    // add o clone ao container de #images
    container.appendChild(newFieldContainer)

    //
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

// select yes or no
function toggleSelect(event){
    //pegar o botao clicado
    

    //retirar a classe .active (dos botoes)
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a classe .active
    const button = event.currentTarget

    button.classList.add('active')

    // atualizar o meu input com o valor selecionar
    const input = document.querySelector( '[name="open_on_weekends"]')

    // verificar se é sim or nao
    input.value = button.dataset.value
}

/* function validate(event){

    //validar se elat e lng estão preenchidos
    const needsLatLng = false;
    if(needsLatLng == true){
        event.preventDefault()
        alert("Seleciona um ponto no mapa.")
    }
} */





