
let starCount = 10;

function changeStarCount() {
    starCount = document.getElementById('input').value;
    document.getElementById('input').value ='';
    function createStar(){
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        document.getElementById("stars").appendChild(star);
    }
    
    function generateStars(){
        for(let i = 0 ; i < starCount;i++){
            createStar();
        }
    }
    
    generateStars();
    console.log(starCount);
}

