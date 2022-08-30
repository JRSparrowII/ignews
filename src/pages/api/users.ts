// USANDO ESTE MODELO DO NEXT PARA USO DE APLICAÇÕES COM BACKEND
import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response:NextApiResponse ) => {
    const users = [
        {id: 1, name: 'Nemesio', email: 'Nemesio@gmail.com'},
        {id: 2, name: 'Henrique', email: 'Henrique@gmail.com'},
        {id: 3, name: 'Prisco', email: 'Prisco@gmail.com'},
    ]
    return response.json(users);
};