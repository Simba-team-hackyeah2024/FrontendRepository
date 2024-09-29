import axios from 'axios'

const API_URL = 'localhost:8080'

export const getUserSets = async (userId: number) => {
        try {
                const response = await axios.get(`${API_URL}/sets/user/${userId}`)
                return response.data
        }
        catch (err) {
                throw err;
        }
}

export const getAllSets = async () => {
        try {
                const response = await axios.get(`${API_URL}/questions/all`)
                return response.data
        }
        catch (err) {
                throw err;
        }
}

export const getAnswersBySetByUser = async (userId: number, setId: number) => {
        try {
                const response = await axios.get(`${API_URL}/answers/allBySetByUser/${userId}/${setId}`)
                return response.data
        }
        catch (err) {
                throw err;
        }
}

export const getAnswersByQuestionByUser = async (userId: number, questionId: number) => {
        try {
                const response = await axios.get(`${API_URL}/answers/allByQuestionByUser/${userId}/${questionId}`)
                return response.data
        }
        catch (err) {
                throw err
        }
}
