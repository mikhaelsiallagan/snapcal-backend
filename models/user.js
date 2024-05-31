class user {
    constructor(email, password, name, gender=null, beratBadan=null, tinggiBadan=null, usiaUser=null){
        this.name = name
        this.email = email
        this.password = password
        this.gender = gender
        this.beratBadan = beratBadan
        this.tinggiBadan = tinggiBadan
        this.usiaUser = usiaUser
        this.gambar_profil = null
        this.createdAt = new Date()
        this.updatedAt = null
        this.token = {
            auth: null,
            forgetPass: null
        };
    }
}

module.exports = user