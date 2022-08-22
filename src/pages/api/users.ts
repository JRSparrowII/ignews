// USANDO ESTE MODELO DO NEXT PARA USO DE APLICAÇÕES COM BACKEND
import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response:NextApiResponse ) => {
    const users = [
        {id: 1, name: 'Nemesio', email: 'tomwilliams@gmail.com'},
        {id: 2, name: 'Henrique', email: 'lindenwoams@gmail.com'},
        {id: 3, name: 'Prisco', email: 'lindenwoams@gmail.com'},
    ]
    return response.json(users);
};