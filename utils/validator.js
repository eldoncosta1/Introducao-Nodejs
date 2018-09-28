module.exports = {

    user:(app, req, res,) => {
        req.assert('nome', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'E-mail inválido').notEmpty().isEmail();

        let errors = req.validationErrors();
        if(errors) {
            app.utils.error.send(errors, req, res);
            return false;
        }

        return true;
    }
};