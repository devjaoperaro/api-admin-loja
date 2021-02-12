'use strict'


const User =  use('App/Models/User');
const Tools = use('App/Common');

class UserController {
    //mostra um item especifico
    async show({params, request, response})
    {
        const usuario = await User.findOrFail(params.id);

        return usuario;
    }
    //lista os dados
    async index({request, response})
    {
        return Tools.format_get(request, User);
    }
    //create
    async store({request, response})
    {
        const data = request.only(["username", "email", "password", "cadastro"])

        try
        {
            const usuario = await User.create(data)

            return usuario;
        }
        catch(e){
            return{
                "status": "error",
                "data": e
            }
        }      
    }
    async update({params, request, response})
    {
        const usuario = await User.findOrFail(params.id);
        const data = request.only(["username", "email", "password", "cadastro"])

        usuario.merge(data);
        await usuario.save();
        
        return usuario;
    }
    async destroy({params, request, response})
    {
        const usuario = await User.findOrFail(params.id);

        await usuario.delete();

        return response.status(200).send({ messsage: 'Deletado' });
    }

}

module.exports = UserController
