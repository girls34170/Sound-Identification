function classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wDB1jDulE/model.json",modelloaded);
}
function modelloaded(){
    console.log("modelhasloaded");
    Classifier.classify(gotresults);
}
function gotresults(error,results){ 
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I CAN HEAR - "+results[0].label;
        document.getElementById("accuracy").innerHTML="ACCURACY - "+results[0].confidence*100+"%";
        img=document.getElementById("Alien1");
        img1=document.getElementById("Alien2");
        img2=document.getElementById("Alien3");
        img3=document.getElementById("Alien4");
    
    if(results[0].label=="Clap"){
        img.src="aliens-01.gif";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    else if(results[0].label=="Bell"){
        img.src="aliens-01.png";
        img1.src="aliens-02.gif";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    else if(results[0].label=="Snap"){
        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.gif";
        img3.src="aliens-04.png";
    }
    else{
        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.gif";
    }
    }

}