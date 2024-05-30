const fb_bio_add = document.querySelector(".fb_bio_add");
const fb_bio_edit = document.querySelector(".fb_bio_edit");
const fb_bio_show = document.querySelector(".fb_bio_show");

// get buttons

const addBio = document.getElementById("addBio");
const bioCancel = document.getElementById("bioCancel");
const bioSave = document.getElementById("bioSave");
const editBio = document.getElementById("editBio");
const bioData = document.getElementById("bioData");

// get bio
const getBioData = () => {
  const data = localStorage.getItem("bio");
  if (data) {
    fb_bio_add.style.display = "none";
    fb_bio_edit.style.display = "none";
    fb_bio_show.style.display = "block";
    bioData.innerHTML = data;
  } else {
    fb_bio_add.style.display = "block";
    fb_bio_edit.style.display = "none";
    fb_bio_show.style.display = "none";
  }
};

// get data
getBioData();

// content
const bioContent = document.getElementById("bioContent");
const remain = document.getElementById("remain");

// bio add button click
addBio.addEventListener("click", function () {
  fb_bio_add.style.display = "none";
  fb_bio_edit.style.display = "block";
});

bioCancel.addEventListener("click", function () {
  getBioData();
});

// input handle
const maxLength = 101;

bioContent.addEventListener("input", () => {
  let bioDataLength = bioContent.value.length;

  if (bioDataLength > maxLength) {
    bioContent.value = bioContent.value.substring(0, maxLength);
    bioDataLength = maxLength;
  }

  const remainLength = maxLength - bioDataLength;

  remain.innerHTML = `${remainLength} characters remaining`;
});

// save bio data in ls
bioSave.onclick = () => {
  localStorage.setItem("bio", bioContent.value);

  getBioData();
};

// bio edit
editBio.onclick = () => {
  const oldBio = localStorage.getItem("bio");
  bioContent.value = oldBio;

  fb_bio_edit.style.display = "block";
  fb_bio_show.style.display = "none";

  const remainLength = maxLength - oldBio.length;

  remain.innerHTML = `${remainLength} characters remaining`;
};
