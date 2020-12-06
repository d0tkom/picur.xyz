(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let hmm = "Dec 5, 2020 14:00:00",
        countUp = new Date(hmm).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = now - countUp;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          
        //seconds
      }, 0)
  }());
