// TODO: refactors names of the variables and add what I need to.

class BlogUser{
    constructor(service){
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
    
        let user = {
            service: service,
            joinDate: cDay + "/" + cMonth + "/" + cYear,
            comments: [],
            posts: []
        };

        this.user = user
    }

    AddCommentToProfile(text, author){
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        let parsedDate = cDay + "/" + cMonth + "/" + cYear

        let comment = {
            service: author,
            text: text,
            date: parsedDate
        };

        this.user.comments.push(comment);
    }
    AddCommentToPost(text, author, postValue){ //Adds comments to the users own posts
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        let parsedDate = cDay + "/" + cMonth + "/" + cYear

        let comment = {
            service: author,
            text: text,
            date: parsedDate
        };

        this.user.posts[postValue].comments.push(comment);
    }
    AddPost(title, author, description){
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        let parsedDate = cDay + "/" + cMonth + "/" + cYear

        let post = {
            title: title,
            description: description,
            author: author,
            date: parsedDate,
            comments: []
        };

        this.user.posts.push(post);
    }
}


//Creating Users
userList = [
    userA = new BlogUser("Joseph"),
    userB = new BlogUser("Abby"),
    userC = new BlogUser("Mike")
];
randomCount = 0;


//Generating UserData
function genBlogStuff (myuser) {
    myuser.AddPost("New Post " + randomCount, myuser.user.service, "this is a post description by: " + myuser.user.service);
    myuser.AddCommentToProfile("Hey, my name is " + myuser.user.service, myuser.user.service);
    myuser.AddCommentToPost("Hi, whats up? my name is" + myuser.user.service, myuser.user.service, 0);
    randomCount++;
}
userList.forEach(user => {
    genBlogStuff(user)
    console.log(user.user)
});


// Check browser support -- This saves data accrossed the pages
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("programming", "Python");
}

//This Determines the page you are on
if(document.title == "Home")
    Home();
else{
    User();
}

//TODO: you need to implement all the data to the screen, pass it on to the next page, then fix small miskates if theres time.
function FindUser(service)
{
    let n;
    userList.forEach(user => {
        if(service == user.user.service)
            n = user
    });
    return n
}
function Home(){
    
    userList.forEach(user => {
        AddTopPost(user);
    });
    let postCotainer = document.getElementsByClassName("posts")[0];
    let temp = document.getElementsByClassName("post")[0];
    postCotainer.removeChild(temp);
}
function AddTopPost(user){
    let postCotainer = document.getElementsByClassName("posts")[0];
    let temp = document.getElementsByClassName("post")[0];
    let postClone = temp.cloneNode(true);

    let postTitle = postClone.getElementsByTagName("h4")[0];
    let postAuthor = postClone.getElementsByTagName("a")[0];
    let postDescription = postClone.getElementsByTagName("p")[0];

    postTitle.innerHTML = user.user.posts[0].title;
    postAuthor.innerHTML = user.user.posts[0].author;
    postAuthor.onclick = function() {Sendservice(user.user.service)};
    postDescription.innerHTML = user.user.posts[0].description;

    postCotainer.appendChild(postClone);
}

// Passes Data from this page to the author page
function Sendservice(service){
    localStorage.setItem("service", service);
}

function User(){
    user = FindUser(localStorage["service"]);
    comments = user.user.comments;
    let service = document.getElementById("profile-title");
    let lastpost = document.getElementById("profile-lastpost");
    let firstjoined = document.getElementById("profile-firstjoined");
    let description = document.getElementById("profile-description");

    service.innerHTML = user.user.service;
    postLength = user.user.posts.length;
    lastpost.innerHTML += user.user.posts[postLength - 1].title + " - " + user.user.posts[postLength - 1].date;
    firstjoined.innerHTML += user.user.joinDate;

    comments.forEach(comment => {
        AddComment(comment);
    });
    let postCotainer = document.getElementsByClassName("comment-section")[0];
    let temp = document.getElementsByClassName("post")[0];
    postCotainer.removeChild(temp)
}
function AddComment(comment){


    let postCotainer = document.getElementsByClassName("comment-section")[0];
    let temp = document.getElementsByClassName("post")[0];
    let postClone = temp.cloneNode(true);

    let service = postClone.getElementsByTagName("h4")[0];
    let commentText = postClone.getElementsByTagName("p")[0];

    service.innerHTML = comment.service;
    commentText.innerHTML = comment.text;

    postCotainer.appendChild(postClone);

}



