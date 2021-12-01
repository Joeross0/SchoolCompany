// TODO: refactors names of the variables and add what I need to.

class Service{
    constructor(service, serviceDescription){
        let title = service;
        let description = serviceDescription;
        let imgURL = "";
        let reviews = {
        } 
    }

    AddReviewToService(author, date, review){
        let review = {
            author: author,
            date: date,
            review: review
        };

        this.service.reviews.push(review);
    }
}
//Creating Users
serviceList = [
    tierOne = new Service("Tier One", "Our Basic Shared Hosting Plan"),
    tierTwo = new Service("Tier Two", "Our Advanced Shared Hosting Plan"),
    gold    = new Service("Gold", "Our Semi-Dedicated Hosting Plan"),
    premium = new Service("Premium", "Our Basic Dedicated Hosting Plan"),
    platinum= new Service("Platinum", "Our Advanced Dedicated Hosting Plan"),

];
randomCount = 0;

//Creating Reviews
function createRandomReviews(service){
    serviceList.forEach(tier => {
        tier.AddReviewToService("John Doe", "12/1/2006", `${service.title} was amazing. ${service.title} is the perfect service for my small business`)
        tier.AddReviewToService("Jane Doe", "5/4/2006", `${service.title} was awesome`)
        tier.AddReviewToService("Janny Doe", "6/3/2006", `${service.title} is exactly what we need`)
        tier.AddReviewToService("Joe Doey", "7/12/2006", `This host is my go to for getting any service up and running. What I use is ${service.title}`)
        tier.AddReviewToService("Johnny Doe", "7/31/2006", `I bought ${service.title} after recommendations from my friends, and the quality did not disappoint`)
        tier.AddReviewToService("James Don", "9/5/2006", `${service.title} is my favorite hosting service to date. Fast service and stable connection`)
        tier.AddReviewToService("Janet Dos", "9/22/2006", `I was in a pinch with trying to find a good hosting service, but with the help of ${service.title}, all my fears went away`)
        tier.AddReviewToService("Jonathan Dose", "10/2/2006", `${service.title} is great, and the price point leaves me a satisfied customer`)
        tier.AddReviewToService("Jenny Deo", "11/5/2006", `I loved ${service.title}. Would buy again`)
    });
}


// Check browser support -- This saves data accrossed the pages
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("programming", "Python");
}

//This Determines the page you are on
if(document.title == "Home")
    Home();
else if(document.title == "Services")
    Services();
else if(document.title == "Service")
    ServiceFill();
else{
    console.log("CANNOT FIND CORRECTION FUNCTION FOR PAGE TITLE!!")
}


//TODO: you need to implement all the data to the screen, pass it on to the next page, then fix small miskates if theres time.
function FindService(service)
{
    let n;
    serviceList.forEach(s => {
        if(service == s.title)
            n = s
    });
    return n
}


function Home(){
    /* OLD EXAMPLE CODE 
    userList.forEach(user => {
        AddTopPost(user);
    });
    let postCotainer = document.getElementsByClassName("posts")[0];
    let temp = document.getElementsByClassName("post")[0];
    postCotainer.removeChild(temp);
    */


}

function Services(){

}

function ServiceFill(){
    let serviceContainer = document.querySelector("")
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



