const videosContainer = document.getElementById('videosContainer');

let youTubeVideoIds = [];

const loadVideos = () => {
  youTubeVideoIds = ["rEa99-NQ9Bk", "BZLLP7Gk3ps"];
};

const displayVideos = () => {
  const videosHTMLString = youTubeVideoIds.map( id => `<li onclick="clickVideo(event, '${id}')">
    <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image for YouTube video with id ${id}">
    <button class="delete-btn">&times;</button>
    </li>
  `).join('');
  videosContainer.innerHTML = videosHTMLString;

};

loadVideos();
displayVideos();

