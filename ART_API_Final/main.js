//let art
//let showArt


//Connecting API > preferred end result- click on image and display image name, artist name
const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/`)
    console.log(response.data)
    return response.data

}
console.log(getData)


// create Constants to hold DOM Elements
const DOM_Elements = {
    art_id: '.art_id',
}

// Function to get Art Info when image is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets data from art institute using the image index.
 */

async function clickedEvent(img_index, item_index) {
    let imageDisplay = document.getElementsByTagName('img')[img_index].attributes[2].value;


    // Headers

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]); 

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${item_index}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    //let art = response.data[imageDisplay].items[item_index].preview_url
}
    /**
     * @param id
     * @param event
     * 
     * id = image if for gallery image
     * event = Mouse event given by the action from our user
     * 
     * Function shows image data from the clickedEvent based 
     * on index of image.
     */

    function artData(id, event) {
        switch (id) {
            case 'fig1': { //autumn maples with poem slips 244894
                event.stopPropagation();
                clickedEvent(0,244894)
                break;
            }
            case 'fig2': {
                event.stopPropagation();//frida kahlo rivera 120048
                clickedEvent(0,120048)
                break;
            }
            case 'fig3': {//flowers 194313
                event.stopPropagation();
                clickedEvent(0,194313)
                break;
            }
            case 'fig4': {//cypresses 87327
                event.stopPropagation();
                clickedEvent(0,87327)
                break;
            }
            case 'fig5': {//nighthawks 118165
                event.stopPropagation();
                clickedEvent(0, 118165)
                break;
            }
            case 'fig6': {//greyed rainbows 83642
                event.stopPropagation();
                clickedEvent(0, 83642)
                break;
            }
        }
}
    


