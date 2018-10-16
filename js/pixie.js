var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.getElementsByClassName("pixie")[0].appendChild(app.view);


var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

var blurFilter1 = new PIXI.filters.BlurFilter();



var richText = new PIXI.Text('Marie Dvorzak', style);
richText.x = 30;
richText.y = 180;
richText.filters = [blurFilter1];
app.stage.addChild(richText);

var count =0;

var blurAmount = Math.cos(count);
blurFilter1.blur = 3 * (blurAmount);

setTimeout(function() {
    blurFilter1.blur = 0;
},1200);

app.ticker.add(function() {

    count += 0.005;



});
