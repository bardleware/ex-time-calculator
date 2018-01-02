module.exports = ( label, arrayOfObj ) => {
  const time = arrayOfObj.reduce((total_t, current_t)=>{
    return {
      hours: total_t.hours + current_t.hours,
      minutes: total_t.minutes + current_t.minutes,
      seconds: total_t.seconds + current_t.seconds
    }
  },{hours: 0, minutes: 0, seconds: 0})

  const hours = hours + (div60(time.minutes + div60()))
  const minutes = mod60(time.minutes) + div60(time.seconds)
  const seconds = mod60(time.seconds)


  return `${label},${time.hours}:${(minutes)}:${seconds}\n`
}

const mod60 = num => Math.floor(num % 60)
const div60 = num => Math.floor(num / 60)
