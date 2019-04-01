noStroke();
var sunSize = 0;

var text_size = 0;

var sun_speed = 0.05;
var off_screen_right = 600;
var off_screen_left = random(-500, -700);
var cloud_pos = 30;
var num_clouds = 7;
var cloud_speed = random(0.5, 1.75);
var cloud_ypos = random(-50, 200);

var cloud_size = [];
var xPositions = [];
var yPositions = [];
var speed = [];
var cloud_config = [];


// generate clouds
for (var c = 0; c < num_clouds; c++){
    xPositions[c] = random(off_screen_left);
    yPositions[c] = random(cloud_ypos);
    speed[c] = random(cloud_speed);
    cloud_size[c] = random(10, 100);
    cloud_config[c] = random(30, 100);
}

draw = function() {

    background(82, 222, 240);
    // The sun, a little circle on the horizon
    //stroke (238, 230, 74);
    strokeWeight(30);
    fill(221, 227, 38);
    ellipse(200, 298, sunSize, sunSize);

    // The land, blocking half of the sun
    //stroke (69, 189, 17);
    strokeWeight(2);
    fill(76, 168, 67);
    rect(0, 300, 400, 100);

    sunSize = sunSize + sun_speed;

    //cloud generator
    for(var i = 0; i < xPositions.length; i++) {
    //stroke (245, 245, 245);
    fill(250, 245, 250);
    ellipse(xPositions[i], yPositions[i], cloud_size[i]*1.7, cloud_size[i]*1.2);
    fill(250, 250, 250);
    ellipse(xPositions[i]+cloud_config[i]/1.3, yPositions[i], cloud_size[i]*1.9, cloud_size[i]);
    xPositions[i] += speed[i];
    fill(250, 250, 250);
    ellipse(xPositions[i]-cloud_config[i]/1.5, yPositions[i]+cloud_config[i]/5, cloud_size[i]*1.2, cloud_size[i]/2);
    xPositions[i] += speed[i];

    if (xPositions[i] > off_screen_right){
            xPositions[i] = random(-500, -700);
            yPositions[i] = random(-50, 200);
            speed.push(cloud_speed);
            cloud_size.push(random(10, 100));
            cloud_config.push(random(30, 100));
        }

    }

    sunSize = sunSize + sun_speed;

    //check sunSize and stop sun from growing
    if(sunSize >= 250)
    {
        sun_speed = 0;
        //sunSize = 0;
    }

};
