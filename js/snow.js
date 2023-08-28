// 获取画布元素
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

// 设置画布尺寸
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;

// 雪花数组
let snowflakes = [];

// 雪花类
class Snowflake {
  constructor(x, y, radius, speed, curve) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.curve = curve; // 曲线函数
    this.angle = Math.random() * Math.PI * 2; // 角度，用于曲线运动
  }

  // 绘制雪花
  draw() {
    // 绘制模糊球形
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fill();
  }

  // 更新雪花位置
  update() {
    this.y += this.speed;
    this.angle += 0.01; // 每次更新增加角度

    // 根据曲线函数更新 x 坐标
    this.x += this.curve * Math.sin(this.angle);

    // 雪花超出屏幕底部时重新回到顶部
    if (this.y > canvas.height + this.radius) {
      this.x = Math.random() * canvas.width;
      this.y = -this.radius;
      this.angle = Math.random() * Math.PI * 2; // 重置角度
    }
  }
}

// 创建雪花函数，传入曲线参数
function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 4 + 1;
    const speed = Math.random() + 1;
    const curve = Math.random() > 0.5 ? 0.5 : -0.5; // 随机选择正向或负向曲线
    const snowflake = new Snowflake(x, y, radius, speed, curve);
    snowflakes.push(snowflake);
  }
}

// 绘制雪花函数
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let snowflake of snowflakes) {
    snowflake.draw();
  }
}

// 更新雪花位置函数
function updateSnowflakes() {
  for (let snowflake of snowflakes) {
    snowflake.update();
  }
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  drawSnowflakes();
  updateSnowflakes();
}

// 启动雪花效果
createSnowflakes(50); // 雪花数量
animate();