let time = new Date();

setInterval(function() {
    time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    
    // Calculate degrees for rotation
    let secondDegree = second * 6; // 360 / 60 = 6 degrees per second
    let minuteDegree = minute * 6 + second * 0.1; // Adding gradual second movement
    let hourDegree = (hour % 12) * 30 + minute * 0.5; // 360 / 12 = 30 degrees per hour

    // Apply rotation using correct syntax
    document.getElementById('sechand').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minhand').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hhand').style.transform = `rotate(${hourDegree}deg)`;

}, 1000);
