// TODO: refactors names of the variables and add what I need to.

class Service{
    constructor(service, serviceDescription, imgPATH="https://gundambuilder.com/wp-content/uploads/2014/03/temp-img-gundam-dynames-300x225.jpg"){
        this.title = service;
        this.description = serviceDescription;
        this.imgURL = imgPATH;
        this.reviews = [];
    }

    AddReviewToService(img, author, date, post){
        let review = {
            image: img,
            author: author,
            date: date,
            review: post
        };
        this.reviews.push(review);
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


//Creating Reviews
function createRandomReviews(){
    defaultimg="https://gundambuilder.com/wp-content/uploads/2014/03/temp-img-gundam-dynames-300x225.jpg"
    serviceList.forEach(tier => {
        tier.AddReviewToService(defaultimg, "John Doe", "12/1/2031", `${tier.title} was amazing. ${tier.title} is the perfect service for my small business`);
        tier.AddReviewToService(defaultimg, "Jane Doe", "5/4/2026", `${tier.title} was awesome`);
        tier.AddReviewToService(defaultimg, "Janny Doe", "6/3/2045", `${tier.title} is exactly what we need`);
        tier.AddReviewToService(defaultimg, "Joe Doey", "7/12/2034", `This host is my go to for getting any service up and running. What I use is ${tier.title}`);
        tier.AddReviewToService(defaultimg, "Johnny Doe", "7/31/2036", `I bought ${tier.title} after recommendations from my friends, and the quality did not disappoint`);
        tier.AddReviewToService(defaultimg, "James Don", "9/5/2306", `${tier.title} is my favorite hosting service to date. Fast service and stable connection`);
        tier.AddReviewToService(defaultimg, "Janet Dos", "9/22/2603", `I was in a pinch with trying to find a good hosting service, but with the help of ${tier.title}, all my fears went away`);
        tier.AddReviewToService(defaultimg, "Jonathan Dose", "10/2/2036", `${tier.title} is great, and the price point leaves me a satisfied customer`);
        tier.AddReviewToService(defaultimg, "Jenny Deo", "11/5/1605", `I loved ${tier.title}. Would buy again`);
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

//Populating Services with Reviews
function FillReviews(service){
    createRandomReviews();
    service.reviews.forEach(review => {
        let reviewTemplate = document.getElementsByClassName("review-template")[0];
        let tempContainer = reviewTemplate.parentElement;
        let postClone = reviewTemplate.cloneNode(true);

        let username = postClone.getElementsByTagName("h2")[0]
        let date = postClone.getElementsByClassName("date")[0];
        let description = postClone.getElementsByClassName("description")[0];
        let image = postClone.getElementsByTagName("img")[0];

        username.innerHTML = review.author;
        date.innerHTML = review.date;
        description.innerHTML = review.review;
        image.src = review.image;

        tempContainer.appendChild(postClone);
    });
}

// Returns the service, finds the service by the title of it(string)
function FindService(service)
{
    let n;
    serviceList.forEach(s => {
        if(service == s.title)
            n = s
    });
    return n
}
// Passes Data from this page to the author page
function SendService(service){
    localStorage.setItem("service", service);
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
    createRandomReviews();
   reviews = [
       tierTwo.reviews[3],
       gold.reviews[2],
       platinum.reviews[4]
   ]

    reviews.forEach(review => {
        let reviewTemplate = document.getElementsByClassName("review-template")[0];
        let tempContainer = reviewTemplate.parentElement;
        let postClone = reviewTemplate.cloneNode(true);

        let username = postClone.getElementsByTagName("h2")[0]
        let date = postClone.getElementsByClassName("date")[0];
        let description = postClone.getElementsByClassName("description")[0];
        let image = postClone.getElementsByTagName("img")[0];

        username.innerHTML = review.author;
        date.innerHTML = review.date;
        description.innerHTML = review.review;
        image.src = review.image;

        tempContainer.appendChild(postClone);
    });
    document.getElementsByClassName("review-template")[0].remove();
}

function Services(){
    let serviceContainer = document.getElementsByClassName("service");
    for (let index = 0; index < serviceList.length; index++) {
        let service = serviceList[index];
        serviceContainer[index].getElementsByClassName("description")[0].innerHTML = service.description;
        serviceContainer[index].getElementsByTagName("img")[0].src = service.imgURL;
        //console.log(service.title + " " + service.description);
        //console.log(serviceList[index])
    }
}

function ServiceFill(){
    //Fill Service Info(title, img, descriptions)
    let serviceContainer = document.getElementsByClassName("service")[0];
    service = FindService(localStorage["service"])

    let serviceTitle = serviceContainer.getElementsByTagName("h2")[0];
    let serviceDescription = serviceContainer.getElementsByTagName("p")[0];
    let serviceImg = serviceContainer.getElementsByTagName("img")[0];
    serviceTitle.innerHTML = service.title;
    serviceDescription.innerHTML = service.description;
    serviceImg.src = service.imgURL;

    //Fill Reviews
    FillReviews(service);
    document.getElementsByClassName("review-template")[0].remove();
}






