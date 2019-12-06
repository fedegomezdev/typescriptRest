import {Request, Response } from 'express';
import {QueryResult} from 'pg'
import {pool} from '../database';

export const getUser = async (req: Request, res: Response ):Promise<Response>  => {
   try{
    const response: QueryResult = await pool.query('select * from users');
    return res.status(200).json(response.rows);
    }catch(e){
        console.log(e)
        return res.status(500).json('server error');
    }
}

export const getUserById = async (req:Request, res:Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    const response:QueryResult = await pool.query('select * from users where id = $1', [id]);
    return res.status(200).json(response.rows);
}

export const createUser = async (req:Request, res:Response): Promise<Response> =>{
    const {name, email} = req.body;
    const response: QueryResult = await pool.query('insert into users (name, email) values($1, $2)', [name, email]);
    return res.json({message: 'user created', body: {user: {name, email}}});
}

export const updateUser = async (req:Request, res:Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    const {name, email} = req.body;
    await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
    return res.json('updateado');
}

export const deleteUser = async (req:Request, res:Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    await pool.query('delete from users where id = $1', [id]);
    return res.json('eliminado');
}