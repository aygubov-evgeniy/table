const Stars = () => {
  const canvas = document.getElementById("canvas");
  const canvas2 = document.getElementById("canvas2");
  const canvasLeft = canvas.offsetLeft;
  const canvasTop = canvas.offsetTop;
  const ctx = canvas.getContext("2d");
      
  const DEFAULT_COLOR = '#FFFFFF';
        
  const STARS = [
    {
      cx: 15,
      cy: 15,
      spikes: 5,
      outerRadius: 10,
      innerRadius: 5,
      color: '#fd0303',
    },
    {
      cx: 60,
      cy: 15,
      spikes: 5,
      outerRadius: 10,
      innerRadius: 5,
      color: '#110dff',
    },
    {
      cx: 105,
      cy: 15,
      spikes: 5,
      outerRadius: 10,
      innerRadius: 5,
      color: '#03fd2f',
    },
    {
      cx: 150,
      cy: 15,
      spikes: 5,
      outerRadius: 10,
      innerRadius: 5,
      color: '#ffeb3b',
    },
    {
      cx: 195,
      cy: 15,
      spikes: 5,
      outerRadius: 10,
      innerRadius: 5,
      color: '#000000',
    }
  ]

  function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.strokeSyle = "#000";
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
    
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle=color;
      ctx.stroke();
      ctx.fillStyle=color;
      ctx.fill();

  }

  STARS.forEach(({cx,cy,spikes,outerRadius,innerRadius,color}) => {
    drawStar(cx,cy,spikes,outerRadius,innerRadius,color);
  })

  canvas.addEventListener('click', function(event) {
    let x = event.pageX - canvasLeft;
    let y = event.pageY - canvasTop;
    
    let currentStar = STARS.filter(({cx,cy,spikes,outerRadius,innerRadius,color}) => {
      if (y > cy - 15  && y < cy + (outerRadius * 2) && x > cx - 15 && x < cx + (outerRadius * 2)) {
            return true;
        }
    })
    
    if(currentStar.length) {
      canvas2.style.background = currentStar[0].color;
    } else {
      canvas2.style.background = DEFAULT_COLOR;
    }
  }, false);
}

export default Stars;