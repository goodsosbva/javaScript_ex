//현재 웹페이지의 모든 텍스트에서 
var entireText = document.getElementsByTagName('body')[0].innerText;
 
// 단어들을 쪼갠 후에 
var splitedText = entireText.split(' ');
 
//등장 횟수를 계산하고
var countedWord = {};
for(var i=0; i<splitedText.length; i++){
    var word = splitedText[i].toLowerCase();
    if(countedWord[word] == undefined){
         countedWord[word] = 1;
    } else {
         countedWord[word] = countedWord[word] + 1;
    }
}
 
// 정렬 한 후에
var countedWordArr = new Array();
for(var name in countedWord){
    countedWordArr.push([name, countedWord[name]])
}
 
countedWordArr.sort(function(a, b){
    return b[1] - a[1];
});
 
// 콘솔창에 출력한다
var str = '';
for(var i = 0; i < countedWordArr.length; i++){
    str = str + (countedWordArr[i][0] + " : " + countedWordArr[i][1] + "\n" )
}
alert(str);
