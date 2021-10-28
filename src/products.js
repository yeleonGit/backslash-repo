function randomizeImages2(){
    var a = [1,2,3,4,5,6,7,8,9];
    shuffle(a);
    var filename="cmichImage";
        var images = document.getElementsByTagName("img");
        for(n=0; n <9; ++n){
            filename = "cmichImage" + (a[n])+".png";
            images[n].setAttribute("src", filename);
        }
}

function shuffle(a){
    for(n=1; n< 10; ++n){
        for(i=0; i<9;++i){
            r = Math.floor((Math.random() * 9));
            //classic swap routine t=a, a=b, b=t
            var temp = a[i];
            a[i]=a[r];
            a[r]= temp;
        }
    }
}