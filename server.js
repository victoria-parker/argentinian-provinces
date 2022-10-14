const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

const provinces=[{"name" : "Buenos Aires","capital" : "La Plata","yearOfFoundation":1820,"landArea":307571}, 
{"name" : "Catamarca","capital" : "San Fernando del Valle de Catamarca","yearOfFoundation":1821,"landArea":102602}, 
{"name" : "Chaco","capital" : "Resistencia","yearOfFoundation":1951,"landArea":99633}, 
{"name" : "Chubut","capital" : "Rawson","yearOfFoundation":1955,"landArea":224686}, 
{"name" : "Córdoba","capital" : "Córdoba","yearOfFoundation":1820,"landArea":165321}, 
{"name" : "Corrientes","capital" : "Corrientes","yearOfFoundation":1814,"landArea":88199}, 
{"name" : "Entre Ríos","capital" : "Paraná","yearOfFoundation":1814,"landArea":78781},
{"name" : "Formosa","capital" : "Formosa","yearOfFoundation":1955,"landArea":72066},
{"name" : "Jujuy","capital" : "San Salvador de Jujuy","yearOfFoundation":1836,"landArea":53219},
{"name" : "La Pampa","capital" : "Santa Rosa","yearOfFoundation":1951,"landArea":143440},
{"name" : "La Rioja","capital" : "La Rioja","yearOfFoundation":1820,"landArea":89680},
{"name" : "Mendoza","capital" : "Mendoza","yearOfFoundation":1820,"landArea":148827},
{"name" : "Misiones","capital" : "Posadas","yearOfFoundation":1953,"landArea":29801},
{"name" : "Neuquén","capital" : "Neuquén","yearOfFoundation":1955,"landArea":94078},
{"name" : "Río Negro","capital" : "Viedma","yearOfFoundation":1955,"landArea":203013},
{"name" : "Salta","capital" : "Salta","yearOfFoundation":1836,"landArea":155488},
{"name" : "San Juan","capital" : "San Juan","yearOfFoundation":	1820,"landArea":89651},
{"name" : "San Luis","capital" : "San Luis","yearOfFoundation":1820,"landArea":76748},
{"name" : "Santa Cruz","capital" : "Río Gallegos","yearOfFoundation":1956,"landArea":243943},
{"name" : "Santa Fe","capital" : "Santa Fe","yearOfFoundation":	1816,"landArea":133007},
{"name" : "Santiago del Estero","capital" : "Santiago del Estero","yearOfFoundation":1820,"landArea":136351},
{"name" : "Tierra del Fuego, Antártida e Islas del Atlántico Sur","capital" : "Ushuaia","yearOfFoundation":	1990,"landArea":215716},
{"name" : "Tucumán","capital" : "San Miguel de Tucumán","yearOfFoundation":	1825,"landArea":22524}]

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api',(req,res)=>{
    res.json(provinces)
})

app.get('/api/:name',(req,res)=>{

    const province=provinces.find(e=>e.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "") == req.params.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))

    res.json(province ?? 'not found')
})

const PORT=8000
app.listen(process.env.PORT || PORT,()=>{console.log('I\'m listening...')})