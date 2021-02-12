class Rubber{
constructor(x,y){
var options={
     restitution:0.3,
     friction:5,
     density:1

}
this.body = Bodies.circle(x, y, width, height, options);
}




}