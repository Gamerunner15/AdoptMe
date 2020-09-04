import axios from 'axios'

export default {
// this is a fake call, but axios is still imported as it would be if i were really calling an API
  getTestimonial () {
    axios.get('/fakeURL')
    const fakeMonth = Math.floor(Math.random() * 13)
    if (fakeMonth < 6) {
      return 'https://www.youtube.com/embed/_wWwbxWyDWA'
    } else {
      return 'https://www.youtube.com/embed/c7D-TuJTK2M'
    }
  }
}
