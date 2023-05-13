let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  
  let intervalId;
  let text = document.getElementById('stopwatch').innerHTML = `hello`
  
  const stopwatch = (command) => {
    if (command === 'start') {
      if (!intervalId) {
        function timeGo() {
          time.seconds += 1
          if (time.minutes !== 60 && time.seconds === 60) {
            time.seconds = 0
            time.minutes += 1
          }
          if (time.minutes === 60) {
            time.minutes = 0
            time.hours += 1
          }
          text = document.getElementById('stopwatch').innerHTML = `${("0" + time.hours).slice(-2)}:${("0" + time.minutes).slice(-2)}:${("0" + time.seconds).slice(-2)}`
          document.title = `${("0" + time.hours).slice(-2)}:${("0" + time.minutes).slice(-2)}:${("0" + time.seconds).slice(-2)} - ⚡`
          localStorage.setItem('stopwatchData', JSON.stringify(time));
        }
        intervalId = setInterval(timeGo, 1000)
      }
    }
  
    if (command === 'pause') {
      clearInterval(intervalId)
      intervalId = undefined

    }
  
    if (command === 'stop') {
      time.seconds = 0
      time.minutes = 0
      time.hours = 0
      clearInterval(intervalId)
      text = document.getElementById('stopwatch').innerHTML = `${("0" + time.hours).slice(-2)}:${("0" + time.minutes).slice(-2)}:${("0" + time.seconds).slice(-2)}`
      document.title = "UP ⚡"
      intervalId = undefined
      localStorage.removeItem('stopwatchData')
    }
  }

  if (localStorage.getItem('stopwatchData')) {
    time = JSON.parse(localStorage.getItem('stopwatchData'));
    text = document.getElementById('stopwatch').innerHTML = `${("0" + time.hours).slice(-2)}:${("0" + time.minutes).slice(-2)}:${("0" + time.seconds).slice(-2)}`
  }

  const storedData = JSON.parse(localStorage.getItem('stopwatchData'))
  if (storedData) {
    time = storedData
    setTimeout(() => {
      stopwatch('start')
    }, 0)
  }
  
  let start = document.getElementById('start').addEventListener("click", stopwatch.bind(null, 'start'))
  let pause = document.getElementById('pause').addEventListener("click", stopwatch.bind(null, 'pause'))
  let stop = document.getElementById('stop').addEventListener("click", stopwatch.bind(null, 'stop'))
  
  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      if (intervalId) {
        stopwatch('pause')
      } else {
        stopwatch('start')
      }
    }
  })  