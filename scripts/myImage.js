const mySection = document.querySelector('section:nth-of-type(1)');



getData(myURL).then( data219 => {

    const myData = data219.data;
    let myAvatar = myData.avatar;
    let myName = myData.name;

    if (!myAvatar){
        myAvatar = "images/placeholder1.svg";
    }
    
    const myImg = document.createElement("img");


    myImg.src = myAvatar;
    myImg.alt = myName + "'s Avatar"

    mySection.append(myImg);
    console.log(myImg);
})










/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }