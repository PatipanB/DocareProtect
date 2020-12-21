function initMap() {} // initMap is now function and global


initMap = function() {
    const uluru = {
        lat: -25.363,
        lng: 131.044
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map,
        title: "Uluru (Ayers Rock)",
    });
}