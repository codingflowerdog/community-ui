import axios from 'axios'
import { AxiosResponse } from 'axios';

/**
 * 게시판 목록 조회
 */
const getBoards = (): Promise<AxiosResponse<any>> => {
    console.log("Get board API")
    return axios.get('http://localhost:3000/boards');
};

export { getBoards }