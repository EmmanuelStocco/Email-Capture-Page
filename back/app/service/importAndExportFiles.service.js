const db = require('../../models');
const Leads = db.leads;
const { Op } = require("sequelize");
const { Builder } = require('xml2js');

async function exportXML() {
    const leads = await Leads.findAll()
    console.log(leads)

    const leadsObj= {
        registros: {
            item: [
                ...leads.map((c, i) => {
                    Object.entries(c).forEach(([key, value]) => {
                        c[key] = value && typeof value === "string" ? value.replace(/(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFEFF\uFFFE\uFFFF]/g,"") : value
                      })

                      return({
                        username: c.username,
                        email: c.email
                      })
                }) 
            ]
        }
    }

    try {
        const xml = new Builder().buildObject(leadsObj)
        const xmlBuffer = Buffer.from(xml, 'utf-8')
        return xmlBuffer
    } catch (error){
        console.log(error)
    }
}

module.exports = {
    exportXML
}