const container = document.getElementById("animation-1");

const app = new PIXI.Application({ width: 400, height: 400 });

container.appendChild(app.view);

const waveLength = 300;
const thetaMax = 2 * Math.PI;
const dtheta = 0.1;

const nPoints = thetaMax / dtheta;
const lengthPerTheta = waveLength / thetaMax;

const dx = lengthPerTheta * dtheta;

const centerX = 75;
const centerY = 325;
const r = 50;

const horizontalWave = [];
const verticalWave = [];

let theta = 0;

// Circle
const circle = new PIXI.Graphics();
circle.beginFill(0xffffff, 1);
circle.drawCircle(centerX, centerY, r);
circle.endFill();
app.stage.addChild(circle);

const pointOnCircle = new PIXI.Graphics();
pointOnCircle.beginFill(0x0000ff);
pointOnCircle.drawCircle(centerX + r, centerY, 5);
pointOnCircle.endFill();
app.stage.addChild(pointOnCircle);

app.ticker.add(() => {
    theta += dtheta % (2 * Math.PI);

    const x = centerX + r * Math.sin(theta);
    const y = centerY + r * Math.cos(theta);

    // // Draw point that theta corresponds to
    // p.circle(x, y, 5);

    // // Draw waves
    // horizontalWave.unshift(y);
    // verticalWave.unshift(x);

    // if (horizontalWave.length > nPoints) horizontalWave.splice(-1, 1);
    // if (verticalWave.length > nPoints) verticalWave.splice(-1, 1);

    // // Draw horizontal wave
    // const nHorizontal = horizontalWave.length;
    // const currHorizontalX = 100 + centerX;
    // const currHorizontalY = horizontalWave[0];

    // let currX = currHorizontalX;
    // let currY = currHorizontalY;
    // for (let i = 1; i < nHorizontal; i++) {
    //     const prevX = currX;
    //     const prevY = currY;
    //     currX = prevX + dx;
    //     currY = horizontalWave[i];
    //     p.line(prevX, prevY, currX, currY);
    // }

    // // Draw vertical wave
    // const nVertical = verticalWave.length;
    // const currVerticalX = verticalWave[0];
    // const currVerticalY = -100 + centerY;

    // currX = currVerticalX;
    // currY = currVerticalY;
    // for (let i = 1; i < nVertical; i++) {
    //     const prevX = currX;
    //     const prevY = currY;
    //     currX = verticalWave[i];
    //     currY = prevY - dx;
    //     p.line(prevX, prevY, currX, currY);
    // }

    // // Draw the most recent points added to the arrays
    // p.circle(currHorizontalX, currHorizontalY, 5);
    // p.circle(currVerticalX, currVerticalY, 5);

    // // Draw line between circle point and the most recent points
    // p.line(x, y, currHorizontalX, currHorizontalY);
    // p.line(x, y, currVerticalX, currVerticalY);
});
