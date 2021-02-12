const Antl = use('Antl');

class Session {
    get validateAll() {
        return true;
    }

    get rules() {
        return {
            email: 'email|required',
            password: 'required',
        };
    }

    get messages() {
        return Antl.list('validation');
    }

    async fails(errors) {
        return this.ctx.response.status(400).send(errors);
    }
}

module.exports = Session;