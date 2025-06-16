import axios from "axios";
import type { TodoDto } from "../model/TodoDto";

const BACKEND_API="http://localhost:8080/api/task";

export const getAllTasks=()=>
    axios.get(BACKEND_API);

export const createTask=(todo:TodoDto)=>
    axios.post<TodoDto>(`${BACKEND_API}/created`,todo);

export const completedTask=(id:number)=>
    axios.put<TodoDto>(`${BACKEND_API}/${id}/completed`,id);

export const uncompletedTask=(id:number)=>
    axios.put<TodoDto>(`${BACKEND_API}/${id}/uncompleted`,id);

export const completedAllTask=(completed:boolean)=>
    axios.get<TodoDto[]>(`${BACKEND_API}/completed-uncompleted/${completed}`);

export const uncompletedAllTask=(uncompleted:boolean)=>
    axios.get<TodoDto[]>(`${BACKEND_API}/completed-uncompleted/${uncompleted}`);