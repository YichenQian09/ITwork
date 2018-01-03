function createCaculater(containerID){

	var container = document.getElementById(containerID);
	container.style.width="280px";
	container.style.border="5px solid #31c27c";
	container.style.margin="150px 20px";
	container.style.float="left";
	//container.style.height="362px";

	var inputtemp=document.createElement("input");
	inputtemp.style.width="280px";
	inputtemp.style.height="50px";
	inputtemp.style.outLine="none";
	inputtemp.style.lineHeight="50px";
	inputtemp.style.fontSize="38px";
	inputtemp.style.border="none";
	inputtemp.style.borderBottom="2px solid #31c27c";
	inputtemp.value="0";
	container.appendChild(inputtemp);

	var calcu=document.createElement("div");
	container.appendChild(calcu);
	calcu.style.width="280px";
	calcu.style.height="312px";

	var moll=document.createElement("button");
	calcu.appendChild(moll);
	moll.innerHTML="％";

	var sqrr=document.createElement("button");
	calcu.appendChild(sqrr);
	sqrr.onclick=sqr;
	//sqrr.innerHTML="√";
	sqrr.innerHTML="sqr"

	var squaree=document.createElement("button");
	calcu.appendChild(squaree);
	squaree.innerHTML="x²";

	var updownn=document.createElement("button");
	calcu.appendChild(updownn);
	updownn.onclick=upsidedown;
	updownn.innerHTML="1/x";

	var numb=["0","1","2","3","4","5","6","7","8","9"];
	var i;
	for(i=0;i<10;i++){
		var numm=document.createElement("button");
		numm.innerHTML=numb[i];
		numm.onclick=function(){num(this)};
		calcu.appendChild(numm);
	}

	var dott=document.createElement("button");
	calcu.appendChild(dott);
	dott.onclick=point;
	dott.innerHTML=".";

	var negativee=document.createElement("button");
	calcu.appendChild(negativee);
	negativee.onclick=negative;
	negativee.innerHTML="±";

	var pluss=document.createElement("button");
	calcu.appendChild(pluss);
	pluss.onclick=plus;
	pluss.innerHTML="＋";

	var minuss=document.createElement("button");
	calcu.appendChild(minuss);
	minuss.onclick=minus;
	minuss.innerHTML="－";

	var timess=document.createElement("button");
	calcu.appendChild(timess);
	timess.onclick=times;
	timess.innerHTML="×";

	var dividee=document.createElement("button");
	calcu.appendChild(dividee);
	dividee.onclick=divide;
	dividee.innerHTML="÷";

	var cee=document.createElement("button");
	calcu.appendChild(cee);
	cee.onclick=ce;
	cee.innerHTML="CE";

	var cc=document.createElement("button");
	calcu.appendChild(cc);
	cc.onclick=c;
	cc.innerHTML="C";

	var backk=document.createElement("button");
	calcu.appendChild(backk);
	backk.onclick=de;
	backk.innerHTML="back";

	var equall=document.createElement("button");
	calcu.appendChild(equall);
	equall.onclick=equal;
	equall.innerHTML="=";



var nega=0;
var biteafter=0;
//第一操作数小数点后还有几位，与浮点无关
var havepoint=false;
var firstbite=0;//第一个数小数点后位数
var secondbite=0;//第二个数小数点后位数
var lastnumber;
//var inputtemp;//抓取input元素
var operator=false;//没有操作符
var pointer=1;//指向第一个数
var first="0";//存储第一个数的值
var second;//存储第二个数的值
var command;//不同操作符不同的值，然后进行不同操作
var afterCaculation=false;//未进行过计算
//inputtemp=document.getElementById("textbox");
function c(){
	lastsecond=undefined;
	command=undefined;
	lastnumber=undefined;
	biteafter=0;
	havepoint=false;
	firstbite=0;
	secondbite=0;
	inputtemp.value=0;
	first="0";
	second=undefined;
	operator=false;
	afterCaculation=false;
	pointer=1;
	nega=0;
}
function num(obj){
	if(operator&&second==undefined){
		havepoint=false;
	}
	if(afterCaculation&&inputtemp.value!="0."){
		inputtemp.value = 0;
	}
	afterCaculation=false;
	if(pointer==1 && operator){
		inputtemp.value = 0;
	}
	if( afterCaculation == false && operator && first && (second==undefined) ){
				pointer = 2;
				nega=0;
			}
	lastnumber=obj.innerHTML;
	if(inputtemp.value!="0"&&inputtemp.value!="Error"){
		inputtemp.value =inputtemp.value+obj.innerHTML;
	}
	else {
		inputtemp.value = obj.innerHTML;
	}
	if(pointer==1){
		first=inputtemp.value;
	}
	else if(pointer==2){
		second=inputtemp.value;
	}
	if(pointer==1&&havepoint){
		firstbite++;
		biteafter++;
	}
	else if(pointer==2&&havepoint){
		secondbite++;
	}
}
function de(){
	var str =inputtemp.value;
	if(afterCaculation||operator&&second==undefined){return false;}
	if(pointer==1&&firstbite==0||pointer==2&&secondbite==0){
		havepoint=false;
	}
	if(str.length!=1&&str>0||str<-9&&(pointer==1&&!operator||pointer==2)){
		var result  = str.substring(0,str.length-1);
	inputtemp.value=result;
	}
	else if(pointer==1&&!operator||pointer==2){
		inputtemp.value=0;
		nega=0;
	}
	if(pointer==1){
		first=inputtemp.value;
	}
	else if(pointer==2){
		second=inputtemp.value;
	}
	if(pointer==1&&firstbite!=0){
		firstbite--;
		biteafter--;
	}
	else if(pointer==2&&secondbite!=0){
		secondbite--;
	}
}
function upsidedown(){
	if(operator&&second==undefined&&pointer==1){
		first=inputtemp.value;
		pointer=2;
		second=inputtemp.value;
	}
	if(first==0){
		inputtemp.value="Error";
	}
	else if(pointer==1){
		first=1/first;
		inputtemp.value=first;
		operator=false;
		afterCaculation=true;
		second=undefined;
	}
	else if(pointer==2){
		second=1/second;
		inputtemp.value=second;
	}
	if(inputtemp.value=="Infinity"||inputtemp.value=="NaN"||inputtemp.value=="null"||inputtemp.value=="undefined"){
		inputtemp.value="Error";
	}
	afterCaculation=true;
}
function sqr(){
	if(inputtemp.value-0<0){
		inputtemp.value="Error";
		return false;
	}
	if(operator&&second==undefined&&pointer==1){
		first=inputtemp.value;
		pointer=2;
		second=inputtemp.value;
	}
	if(pointer==1){
		first=Math.sqrt(first-0);
		inputtemp.value=first;
		pointer=1;
		operator=false;
		afterCaculation=true;
		second=undefined;
	}
	if(pointer==2){
		second=Math.sqrt(second-0);
		inputtemp.value=second;
	}
	if(first==0){
		first="0";
	}
	if(inputtemp.value=="Infinity"||inputtemp.value=="NaN"||inputtemp.value=="null"||inputtemp.value=="undefined"){
		inputtemp.value="Error";
	}
	if(!first){
		first="0";
		inputtemp.value=0;
	}
	afterCaculation=true;
	
}
function divide(){
	if(!first){
		first="0";
	}
	if(havepoint&&biteafter==0&&!afterCaculation){
		rereal();
	}
	if(operator&&second){
		equal();
	}
	operator=true;
	command=4;
}
function times(){
	if(!first){
		first="0";
	}
	if(havepoint&&biteafter==0&&!afterCaculation){
		rereal();
	}
	if(operator&&second){
		equal();
	}
	operator=true;
	command=3;
}
function minus(){
	if(!first){
		first="0";
	}
	if(havepoint&&biteafter==0&&!afterCaculation){
		rereal();
	}
	if(operator&&second){
		equal();
	}
	operator=true;
	command=2;
}
function plus(){
	if(!first){
		first="0";
	}
	if(havepoint&&biteafter==0&&!afterCaculation){
		rereal();
	}
	if(operator&&second){
		equal();
	}
	operator=true;
	command=1;
}
function rereal(){
	var str;
	str=inputtemp.value;
	inputtemp.value=str.substring(0,str.length-1);
}
function ce(){
	inputtemp.value=0;
	nega=0;
	if(pointer==1){
		firstbite=0;
		havepoint=false;
	}
	else if(pointer==2){
		secondbite=0;
		havepoint=false;
	}
	if(pointer==1&&second==undefined&&operator){
		second="0";
	}
}
var lastsecond;
function equal(){
	var bite;
	var bigger;
	var str;
	str=inputtemp.value;
	if(second==undefined&&havepoint){
		 inputtemp.value=str.substring(0,str.length-1);
		 havepoint=false;
	}
	if (firstbite>secondbite){
		bite=firstbite;
	}
	else{
		bite=secondbite;
	}
	bigger=Math.pow(10, bite);
	if(command==3){
		firstbite=firstbite+secondbite;
	}
	else{
		firstbite=bite;
	}
	biteafter=0;
	secondbite=0;
	 if(!operator&&pointer==1&&second==undefined){
	second=lastsecond;
	 }
	if(pointer==1&&operator&&second==undefined){
		second=first;
	}
	switch(command){
		case 1:first=((first-0)*bigger+(second-0)*bigger)/bigger;break;
		case 2:first=((first-0)*bigger-(second-0)*bigger)/bigger;break;
		case 3:first=((first-0)*bigger)*((second-0)*bigger)/(bigger*bigger);break;
		case 4:first=((first-0)*bigger)/((second-0)*bigger);break;
	}
	if(first==0){
		first="0";
	}
	inputtemp.value=first-0;
	if(inputtemp.value=="Infinity"||inputtemp.value=="NaN"||inputtemp.value=="null"||inputtemp.value=="undefined"){
		inputtemp.value="Error";
	}
	if(second==0&&command==4){
		inputtemp.value="Error";
	}
	pointer=1;
	operator=false;
	afterCaculation=true;
	lastsecond=second;
	second=undefined;
	if(first>=0){
		nega=0;
	}
	else{
		nega=1;
	}
}
function negative(){
	if(operator&&second==undefined&&pointer==1){
		first=inputtemp.value;
		pointer=2;
		second=inputtemp.value;
		afterCaculation=false;
	}
	if(inputtemp.value=="0"){
		return false;
	}
	if(nega%2==1){
		inputtemp.value=inputtemp.value.substring(1,inputtemp.value.length);
	}
	else{
		inputtemp.value="-"+inputtemp.value;
	}
	if(pointer==1){
		first=-first;
	}
	else if(pointer==2){
		second=-second;
	}
	nega++;
}
function point(){
	if(second==undefined&&pointer==1&&operator){
		pointer=2;
		inputtemp.value=0+".";
		second=inputtemp.value;
		havepoint=true;
	}
	if(afterCaculation&&!operator&&second==undefined){
		inputtemp.value=0+".";
		first=inputtemp.value;
		havepoint=true;
	}
	if(!havepoint&&!afterCaculation){
		inputtemp.value=inputtemp.value+"."
	}
	havepoint=true;
}
}
createCaculater("whole");
createCaculater("anowhole");
