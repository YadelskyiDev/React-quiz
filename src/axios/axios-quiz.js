import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-4da6d.firebaseio.com/'
})