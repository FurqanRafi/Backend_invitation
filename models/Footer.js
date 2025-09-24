    const mongoose = require ("mongoose")

    const FooterSchema = new mongoose.Schema({
        logo:String,
        description:String,

        socialLinks:[{
            plateform:String,
            icon:String,
            url:String,
        }],
        
        menu:[{
            name:String,
            link:String
        }],

        services:[
            {
                name:String,
                link:String
            }
        ],

        location:{
            address:String,
            mapEmburl:String,
        },

        copyRight:String


    })

    module.exports = mongoose.model("footer", FooterSchema) 
