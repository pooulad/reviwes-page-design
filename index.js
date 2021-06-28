const reviews = [
    {
        id: 1,
        name: "mahdi",
        job: "teacher",
        image: "./images/1.jpg",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was .",
    },
    {
        id: 2,
        name: "amir",
        job: "Social worker",
        image: "./images/21.jpg",
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as",
    },
    {
        id: 3,
        name: "mohsen",
        job: "doctor",
        image: "./images/27.jpg",
        info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 32.",
    },
    {
        id: 4,
        name: "sara",
        job: "nurse",
        image: "./images/30.jpg",
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum .",
    },
    {
        id: 5,
        name: "Elsie A. McKinney",
        job: "teacher",
        image: "./images/39.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus est vel ligula tincidunt volutpat. Aliquam erat volutpat. Aliquam tempus magna vitae urna imperdiet mattis. Curabitur consectetur diam arcu, eu auctor metus consectetur in. Nulla malesuada nec mauris non pretium. Fusce ultricies faucibus mi, at fringilla orci varius sollicitudin. .",
    },
    {
        id: 6,
        name: "Thomas L. Glidden",
        job: "Fisherman/woman",
        image: "./images/51.jpg",
        info: "In eu porta sapien, non feugiat metus. Ut imperdiet iaculis dapibus. Vivamus viverra metus odio, sagittis egestas metus congue id. Sed finibus congue nisl et sollicitudin. Quisque nec eros nulla. Sed id nulla magna. Pellentesque mattis varius nisl vitae bibendum. Cras egestas imperdiet massa non consequat. Fusce porttitor dapibus libero, ac dictum.",
    },
    {
        id: 7,
        name: "Robin P. Paul",
        job: "Printer",
        image: "./images/70.jpg",
        info: "Maecenas luctus ex vitae nulla congue feugiat. In et lorem in mi dapibus tincidunt vitae mattis velit. Praesent viverra id massa rhoncus pharetra. Suspendisse ullamcorper mollis felis, vel efficitur ligula porttitor eget. Phasellus placerat ante vitae ex varius sagittis. Donec tempor a ante sit amet viverra. Praesent blandit, purus non",
    },
    {
        id: 8,
        name: "Fred A. Clark",
        job: "Illustrator",
        image: "./images/100.jpg",
        info: "Vestibulum quam odio, pretium sed orci et, maximus iaculis ante. Nulla congue tincidunt tortor, suscipit auctor felis elementum eget. Praesent feugiat non lacus ut congue. Sed consequat rhoncus magna, ut tempor tortor pellentesque non. Sed pretium augue vel elit ornare, sit amet pretium neque egestas. Pellentesque venenatis",
    },
    {
        id: 9,
        name: "Shirley B. Woodruff",
        job: "Coastguar",
        image: "./images/81.jpg",
        info: "Aliquam erat volutpat. Etiam quis sapien nec est vestibulum vestibulum nec nec magna. Etiam ipsum leo, pretium convallis tortor et, lobortis porttitor urna. Morbi sit amet commodo purus. Sed tempor ante et maximus tristique. Vivamus semper diam in purus aliquam, a ullamcorper lacus cursus. Cras ",
    },
    {
        id: 10,
        name: "Casey I. Sipp",
        job: "Salesperson",
        image: "./images/79.jpg",
        info: "Aliquam erat volutpat. Etiam quis sapien nec est vestibulum vestibulum nec nec magna. Etiam ipsum leo, pretium convallis tortor et, lobortis porttitor urna. Morbi sit amet commodo purus. Sed tempor ante et maximus tristique. Vivamus semper diam in purus aliquam, a ullamcorper lacus cursus. Cras ut",
    },
    {
        id: 11,
        name: "Darlene R. Ross",
        job: "Film producer",
        image: "./images/44.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere. Condimentum lacinia quis vel eros donec ac odio. Lobortis feugiat vivamus at augue eget arcu dictum varius.",
    },
    {
        id: 12,
        name: "Ashley Kirk",
        job: "Party planner",
        image: "./images/18.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Imperdiet proin fermentum leo vel orci porta non.",
    },
    {
        id: 13,
        name: "Janice R. Neil",
        job: "Train driver",
        image: "./images/58.jpg",
        info: "Lorem ipsum dolor sit at risus viverra adipiscing. Imperdiet proin fermentum leo vel orci porta no ini color red get pos amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet. In eu mi bibendum neque egestas. Elementum tempus egestas sed sed.",
    },
]


const image = document.getElementById("author_img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const next = document.querySelector("#next");
const pervios = document.querySelector("#pervios");
const random = document.querySelector("#random");

let currentItem = 2;

window.addEventListener("DOMContentLoaded", function () {
    setData();
});

function setData() {
    const item = reviews[currentItem];
    image.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
};

next.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    setData();
});

pervios.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    setData();
});

random.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    setData()
})