//Will fetch users discord status and then display it
const discordUserId = "522955923107348480"
function updateStatus() {
    fetch("https://api.lanyard.rest/v1/users/"+discordUserId)
    .then(responce => responce.json())
    .then(data=> {
        //Grabbing data from API
        const status = data.data.discord_status;
        const activities = data.data.activities
        const listening = data.data.listening_to_spotify;
        const avatar = data.data.discord_user.avatar;

        //Elements
        const statusElement = document.getElementById('status');
        const activityElement = document.getElementById('status-activity');
        const listeningElement = document.getElementById('status-spotify');
        const songElement = document.getElementById('status-song');
        const artistElement = document.getElementById('status-artist');
        const albumElement = document.getElementById('status-album');
        const pfpElement = document.getElementById('pfp');
        
        //Profile Picture
        pfpElement.src = "https://cdn.discordapp.com/avatars/522955923107348480/"+avatar;

        //Online Text
        if (status != "offline") {
            statusElement.innerText = "ONLINE!";
            statusElement.style.color = "lime";
            activityElement.style.display = "";

            //Activities
            for (let i = 0; i < activities.length; i++) {
                if (activities[i].type == 0) {
                    activityElement.innerText = activities[i].name;
                }
            }
        } else {
            statusElement.innerText = "OFFLINE!";
            statusElement.style.color = "orangered";
            activityElement.style.display = "none";
        }

        //Spotify
        if (listening == true) {
            const songName = data.data.spotify.song;
            const artistName = data.data.spotify.artist;
            const albumImage = data.data.spotify.album_art_url;

            listeningElement.style.display = "";
            songElement.innerText = songName;
            artistElement.innerText = artistName;
            albumElement.src = albumImage;
        } else {
            listeningElement.style.display = "none";
        }


    })
}
updateStatus();

setInterval(updateStatus,5000);