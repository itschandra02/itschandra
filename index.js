/*

Sorry Gw Enc
Buy yg no enc? 

Chat Wa : 
Wa.me/6282279915237
Wa.me/6285789004732

Harga 15-30k

❒ THANKS TO

Lexxy Official ( Creator ) 
Ndyie Botz ( Base Ori )
ZeksApi ( Rest Api )
HardiKey ( Rest Api )
ZiyApi ( Rest Api )
LeysApi ( Rest Api )
LolHuman ( Rest Api )
Fxc7Api ( Rest Api )
JojoApi ( Rest Api )
MelCanz YT ( Ytmp4 & Ytmp3 )

Penyedia Modules ✓
Subscriber Lexxy Official ✓

*/

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const hx = require('hxz-api')
const yts = require( 'yt-search')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')
const { nyz } = require('./private')

const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━\\

tamnel = fs.readFileSync('./image/fake.jpg')
thumb = fs.readFileSync('./image/thumb.jpg')

//━━━━━━━━━━━━━━━[ LIB ]━━━━━━━━━━━━━━━\\

const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { mediafireDl } = require('./lib/mediafire.js')
const { yta, porno, ytv, igdl, upload, formatDate } = require('./lib/ytdl')

//━━━━━━━━━━━━━━━[ data ]━━━━━━━━━━━━━━━\\

const setting = JSON.parse(fs.readFileSync('./setting.json'))
const apikey = JSON.parse(fs.readFileSync('./apikey/REST-API.json'))
const pendaftar = JSON.parse(fs.readFileSync('./data/user.json'))
const ban = JSON.parse(fs.readFileSync('./data/banned.json'))
const prem = JSON.parse(fs.readFileSync('./data/premium.json'))
const antilinkgrup = JSON.parse(fs.readFileSync('./data/antilinkgc.json'))
const _limit = JSON.parse(fs.readFileSync('./data/limit.json'))

//STORAGE
const setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\

limitawal = setting.LimitAwal
const owner = setting.OwnerNumber
const ownerName = setting.OwnerName
const botName = setting.BotName
const creator = ["𝙄𝙩𝙨𝙘𝙝𝙖𝙣𝙙𝙧𝙖 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡"]
const yt = ["https://youtube.com/"]

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━\\

const ZeksApi = apikey.ZEKSAPI
const HardiKey = apikey.HARDIKEY
const ZiyApi = apikey.ZIYAPI
const LeysApi = apikey.LEYSKEY
const LolKey = apikey.LOLHUMAN
const Fxc7Api = apikey.FXC7KEY
const Alphakey = apikey.ALPHAKEY
const MelcanzApi = apikey.MELKEY

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = nana = async (nana, mek) => {
	       try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	    	const ownerNumber = [`${owner}@s.whatsapp.net`] // replace this with your number
	       	const q = args.join(' ')
		    const botNumber = nana.user.jid
		    const botNumberss = nana.user.jid + '@c.us'
		    const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
		    const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	 
			const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']          
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
		    const isBanned = ban.includes(sender)
		    const isPremium = prem.includes(sender)
		    const isAntilink = isGroup ? antilinkgrup.includes(from) : false
		    const groupMetadata = isGroup ? await nana.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
            const conts = mek.key.fromMe ? nana.user.jid : nana.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? nana.user.name : conts.notify || conts.vname || conts.name || '-'
            const totalchat = await nana.chats.all()
            uptime = process.uptime();
            timestampe = speed();
            latensie = speed() - timestampe
		    const runtimenya = `${kyun(uptime)}`
            const isUser = pendaftar.includes(sender)
            groups = nana.chats.array.filter(v => v.jid.endsWith('g.us'))
            privat = nana.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━\\
            mess = {
            premier: 'anda bukan user premium',
            api: 'error',
            Iv: 'Link nya mana?',
			banned: 'maaf kamu sudah terbanned, mohon segera hubungi owner untuk membuka banned kamu',
			wait: 'Sedang Diproses...',
			success: 'Done Nih Kak !!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
			owner: 'Khusus Owner Ngab',
			admin: 'Khusus Admin Grup',
		    group: 'Khusus grup ngab',
		    Badmin: 'Jadiin Bot Admin Dulu',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            nana.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            nana.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? nana.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }    
  if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return reply("admin bebas aowkwkww")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				nana.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }          
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      nana.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };            
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            nana.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await nana.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            nana.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return nana.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }            
        
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            nana.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            nana.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        nana.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nana.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
	nana.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	nana.sendMessage(from, hasil, type, options).catch(e => {
	nana.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}            
const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./data/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return nana.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: mek})
            nana.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek })
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./data/limit.json', JSON.stringify(_limit))
            nana.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek })
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nana.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA BELI DI *OWNER*`, text, {quoted: mek })
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./data/limit.json',JSON.stringify(_limit))
            return false
            }
            }        
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./data/limit.json', JSON.stringify(_limit))
            }
            }		           
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	
nana.chatRead(from, "read")
        	     
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━\\
switch (command) {           
case 'menu':
case 'help':

const limitCounts = limitawal
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = nana.user.phone

mnu = ` ❐ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
◍ Nama : *${botName}*
◍ Author : *ITSCHANDRA OFFICIAL*
◍ Prefix : *MULTI PREFIX*
◍ Lib : *BAILEYS*
◍ RAM : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
◍ Versi Os : *${os_version}*
◍ Versi Hp : *${device_model}*
◍ WhatsApp : *${wa_version}*

 ❐ 𝙄𝙉𝙁𝙊 𝘾𝙃𝘼𝙏
◍ Group : ⌠ *${groups.length}* ⌡
◍ Private: ⌠ *${privat.length}* ⌡
◍ Total Chat : ⌠ *${totalchat.length}* ⌡
◍ Total User : ⌠ *${pendaftar.length}* ⌡

 ❐ 𝙄𝙉𝙁𝙊 𝙊𝙒𝙉𝙀𝙍
💌 Nama : *${ownerName}*
👤 Nomor : *@${owner}*

 ❐ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍
💌 𝖭𝖺𝗆𝖺 : *${pushname}*
🏷️ Tag : *wa.me/6281262163214*
🪙 Limit : *${limitCounts} / Day*
👑 Premium : *${isPremium? "Aktif":"Tidak"}*
📑 Status : *${isOwner? "Owner":"User"}*

─────────────────
──❒ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 ❒──
─────────────────

 ❑ 𝗜𝗡𝗗𝗢 𝗠𝗘𝗡𝗨
● ${prefix}owner
● ${prefix}limit
● ${prefix}ceklimit
● ${prefix}rules
● ${prefix}donasi
● ${prefix}request
● ${prefix}scbot
● ${prefix}info
● ${prefix}owner
● ${prefix}jadwalsholat

 ❑ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨
● ${prefix}higgsdomino
● ${prefix}diamondml
● ${prefix}garenashell
● ${prefix}pointblank
● ${prefix}cpcodm
● ${prefix}ucpubg
● ${prefix}diamondhago
● ${prefix}diamondff

 ❑ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨
● ${prefix}truth
● ${prefix}dare
● ${prefix}namaninja <ɴᴀᴍᴇ>
● ${prefix}ssweb <ʟɪɴᴋ>
● ${prefix}tourl <ʟɪɴᴋ>
● ${prefix}pinterest <ᴊᴜᴅᴜʟ>
● ${prefix}tourl <ʀᴇᴘʟʏɪᴍᴀɢᴇ>
● ${prefix}sticker <ʀᴇᴘʟʏɪᴍᴀɢᴇ>
● ${prefix}infogempa
● ${prefix}kirkon 628xxxxx

 ❑ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
● ${prefix}setppbot <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>
● ${prefix}leave
● ${prefix}bc <ᴛᴇxᴛ>
● ${prefix}bc2 <ᴛᴇxᴛ>
● ${prefix}bcgc <ᴛᴇxᴛ>
● ${prefix}hacked <ɴᴀᴍᴇ>
● ${prefix}ban 628xxx
● ${prefix}unban 628xxx
● ${prefix}addprem 628xxx
● ${prefix}delprem 628xxx>

 ❑ 𝗔𝗗𝗗 𝗦𝗧𝗢𝗥𝗔𝗚𝗘
● ${prefix}addstick <ʀᴇᴘʟʏ sᴛɪᴄᴋᴇʀ>
● ${prefix}addvn <ʀᴇᴘʟʏ ᴠɴ>
● ${prefix}addimg <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>
● ${prefix}addvideo <ʀᴇᴘʟʏ ᴠɪᴅᴇᴏ>

 ❑ 𝗚𝗘𝗧 𝗦𝗧𝗢𝗥𝗔𝗚𝗘
● ${prefix}getstick <ɴᴀᴍᴇ ғɪʟᴇ>
● ${prefix}getvid <ɴᴀᴍᴇ ғɪʟᴇ>
● ${prefix}getimg <ɴᴀᴍᴇ ғɪʟᴇ>
● ${prefix}getvn <ɴᴀᴍᴇ ғɪʟᴇ>

 ❑ 𝗟𝗜𝗦𝗧 𝗦𝗧𝗢𝗥𝗔𝗚𝗘
● ${prefix}vnlist
● ${prefix}stickerlist
● ${prefix}videolist
● ${prefix}imagelist

 ❑ 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨
● ${prefix}oxo
● ${prefix}slot
● ${prefix}laut
● ${prefix}darat
● ${prefix}udara

 ❑ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
● ${prefix}antilink
● ${prefix}leave
● ${prefix}closegc
● ${prefix}opengc
● ${prefix}linkgc
● ${prefix}linkgroup
● ${prefix}listadmin
● ${prefix}setpp
● ${prefix}kick @tag
● ${prefix}add +628
● ${prefix}hedsot
● ${prefix}tagall
● ${prefix}hidetag
● ${prefix}demote
● ${prefix}promote
● ${prefix}delete

 ❑ 𝗖𝗘𝗞 𝗠𝗘𝗡𝗨
● ${prefix}gantengcek
● ${prefix}cantikcek
● ${prefix}jelekcek
● ${prefix}goblokcek
● ${prefix}begocek
● ${prefix}pintarcek
● ${prefix}jagocek
● ${prefix}nolepcek
● ${prefix}babicek
● ${prefix}bebancek
● ${prefix}baikcek
● ${prefix}jahatcek
● ${prefix}anjingcek
● ${prefix}haramcek
● ${prefix}pakboycek
● ${prefix}pakgirlcek
● ${prefix}sangecek
● ${prefix}bapercek

 ❑ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨
● ${prefix}fitnah
● ${prefix}jadian
● ${prefix}rate
● ${prefix}hobby
● ${prefix}jelek
● ${prefix}goblok
● ${prefix}bego
● ${prefix}pinter
● ${prefix}jago
● ${prefix}nolep
● ${prefix}monyet           	 
● ${prefix}babi
● ${prefix}beban
● ${prefix}baik
● ${prefix}jahat
● ${prefix}anjing
● ${prefix}haram
● ${prefix}pakboy
● ${prefix}pakgirl
● ${prefix}wibu
● ${prefix}hebat
● ${prefix}sadboy
● ${prefix}sadgirl
● ${prefix}ganteng
● ${prefix}cantik

 ❑ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨
● ${prefix}ytplay <ᴊᴜᴅᴜʟ>
● ${prefix}play <ᴊᴜᴅᴜʟ>
● ${prefix}ytmp3 <ʟɪɴᴋ>
● ${prefix}ytmp4 <ʟɪɴᴋ>
● ${prefix}tiktok <ʟɪɴᴋ>
● ${prefix}mediafire <ʟɪɴᴋ>
● ${prefix}igvideo <ʟɪɴᴋ>
● ${prefix}pinterest <ᴊᴜᴅᴜʟ>

 ❑ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨
● ${prefix}nickepep
● ${prefix}memeindo
● ${prefix}darkjokes
● ${prefix}estetic
● ${prefix}megumin
● ${prefix}randomdarkjok
● ${prefix}randomloli
● ${prefix}randomneko
● ${prefix}randomwaifu

 ❑ 𝗚𝗔𝗠𝗕𝗔𝗥 𝗠𝗘𝗡𝗨
● ${prefix}fox
● ${prefix}dog
● ${prefix}cat
● ${prefix}panda
● ${prefix}panda1
● ${prefix}bird
● ${prefix}koala
● ${prefix}meme
● ${prefix}cerpen
● ${prefix}pantun
● ${prefix}tongue

 ❑ 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨
● ${prefix}asupan
● ${prefix}bocil
● ${prefix}santuy
● ${prefix}rikagusriani
● ${prefix}ghea
● ${prefix}ukty

 ❑ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨
● ${prefix}futanari
● ${prefix}anal
● ${prefix}nekoh
● ${prefix}hentai
● ${prefix}ahegao
● ${prefix}ass
● ${prefix}blowjob
● ${prefix}bdsm
● ${prefix}cuckold
● ${prefix}cum
● ${prefix}ero
● ${prefix}femdom
● ${prefix}foot
● ${prefix}gangbang
● ${prefix}glasses
● ${prefix}jahy
● ${prefix}masturbation
● ${prefix}orgy
● ${prefix}panties
● ${prefix}pussy
● ${prefix}thighs
● ${prefix}yuri

 ❑ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨
● ${prefix}neko
● ${prefix}waifu
● ${prefix}husbu
● ${prefix}loli
● ${prefix}milf
● ${prefix}cosplay
● ${prefix}megumi
● ${prefix}bully
● ${prefix}shinobu
● ${prefix}awoo

 ❑ 𝗞𝗔𝗧𝗔 𝗠𝗘𝗡𝗨
● ${prefix}attp <ᴛᴇxᴛ>
● ${prefix}hilih <ᴛᴇxᴛ>
● ${prefix}heleh <ᴛᴇxᴛ>
● ${prefix}holoh <ᴛᴇxᴛ>
● ${prefix}halah <ᴛᴇxᴛ>
● ${prefix}huluh <ᴛᴇxᴛ>

 ❑ 𝗡𝗨𝗟𝗜𝗦 𝗠𝗘𝗡𝗨
● ${prefix}nuliskanan <ᴛᴇxᴛ>
● ${prefix}nuliskiri <ᴛᴇxᴛ>
● ${prefix}foliokiri <ᴛᴇxᴛ>
● ${prefix}foliokanan <ᴛᴇxᴛ>

 ❑ 𝗗𝗢𝗦𝗔 𝗠𝗘𝗡𝗨
● ${prefix}dosa1
● ${prefix}dosa2
● ${prefix}dosa3
● ${prefix}dosa4
● ${prefix}dosa5
● ${prefix}dosa6
● ${prefix}dosa7
● ${prefix}dosa8
● ${prefix}dosa9
● ${prefix}dosa10
● ${prefix}dosa11
● ${prefix}dosa12
● ${prefix}dosa13
● ${prefix}dosa14
● ${prefix}dosa15

 ❑ 𝗩𝗜𝗗𝗘𝗢 𝗠𝗘𝗡𝗨
● ${prefix}indo1
● ${prefix}indo2
● ${prefix}indo3
● ${prefix}indo4
● ${prefix}indo5
● ${prefix}indo6
● ${prefix}indo7
● ${prefix}indo8
● ${prefix}indo9
● ${prefix}indo10
● ${prefix}indo11
● ${prefix}indo12
● ${prefix}indo13
● ${prefix}indo14
● ${prefix}indo15
● ${prefix}indo16
● ${prefix}indo17
● ${prefix}indo18
● ${prefix}indo19
● ${prefix}indo20
● ${prefix}indo21
● ${prefix}indo22
● ${prefix}indo23
● ${prefix}indo24
● ${prefix}indo25

 ❑ 𝗡𝗘𝗞𝗢𝗣𝗢𝗜 𝗠𝗘𝗡𝗨
● ${prefix}nekopoi1
● ${prefix}nekopoi2
● ${prefix}nekopoi3
● ${prefix}nekopoi4
● ${prefix}nekopoi5
● ${prefix}nekopoi6
● ${prefix}nekopoi7
● ${prefix}nekopoi8
● ${prefix}nekopoi9

 ❑ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨
● ${prefix}girlneko <ᴛᴇxᴛ>
● ${prefix}sadboy <ᴛᴇxᴛ>
● ${prefix}kaneki <ᴛᴇxᴛ>
● ${prefix}rem <ᴛᴇxᴛ>
● ${prefix}wolflogo <ᴛᴇxᴛ>
● ${prefix}pubglogo <ᴛᴇxᴛ>
● ${prefix}snowwrite <ᴛᴇxᴛ>
● ${prefix}watercolour <ᴛᴇxᴛ>
● ${prefix}logoaveng <ᴛᴇxᴛ>
● ${prefix}phlogo <ᴛᴇxᴛ>
● ${prefix}marvellogo <ᴛᴇxᴛ>
● ${prefix}gtext <ᴛᴇxᴛ>

 ❑ 𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨
● ${prefix}simi <ᴛᴇxᴛ>
● ${prefix}quotes
● ${prefix}artinama <ᴛᴇxᴛ>
● ${prefix}artimimpi <ᴛᴇxᴛ>
● ${prefix}primbonjodoh

 ❑ 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
● ${prefix}serti1 <ᴛᴇxᴛ>
● ${prefix}serti2 <ᴛᴇxᴛ>
● ${prefix}serti3 <ᴛᴇxᴛ>
● ${prefix}naruto <ᴛᴇxᴛ>
● ${prefix}bneon <ᴛᴇxᴛ>
● ${prefix}matrix <ᴛᴇxᴛ>
● ${prefix}breakwall <ᴛᴇxᴛ>
● ${prefix}gneon <ᴛᴇxᴛ>
● ${prefix}dropwater <ᴛᴇxᴛ>
● ${prefix}flowertext <ᴛᴇxᴛ>
● ${prefix}crosslogo <ᴛᴇxᴛ>
● ${prefix}silktext <ᴛᴇxᴛ>
● ${prefix}flametext <ᴛᴇxᴛ>
● ${prefix}glowtext <ᴛᴇxᴛ>
● ${prefix}smoketext <ᴛᴇxᴛ>
● ${prefix}skytext <ᴛᴇxᴛ>
● ${prefix}cslogo <ᴛᴇxᴛ>
● ${prefix}lithgtext <ᴛᴇxᴛ>
● ${prefix}crismes <ᴛᴇxᴛ>
● ${prefix}tfire <ᴛᴇxᴛ>

 ❑ 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨
● ${prefix}sound1
● ${prefix}sound2
● ${prefix}sound3
● ${prefix}sound4
● ${prefix}sound5
● ${prefix}sound6
● ${prefix}sound7
● ${prefix}sound8
● ${prefix}sound9
● ${prefix}sound10
● ${prefix}sound11
● ${prefix}sound12
● ${prefix}sound13
● ${prefix}sound14
● ${prefix}sound15
● ${prefix}sound16
● ${prefix}sound17
● ${prefix}sound18
● ${prefix}sound19
● ${prefix}sound20
● ${prefix}sound21
● ${prefix}sound22
● ${prefix}sound23
● ${prefix}sound24
● ${prefix}sound25
● ${prefix}sound26
● ${prefix}sound27
● ${prefix}sound28
● ${prefix}sound29
● ${prefix}sound30
● ${prefix}sound31
● ${prefix}sound32
● ${prefix}sound33
● ${prefix}sound34
● ${prefix}sound35
● ${prefix}sound36
● ${prefix}sound37
● ${prefix}sound38
● ${prefix}sound39
● ${prefix}sound40
● ${prefix}sound41
● ${prefix}sound42
● ${prefix}sound43
● ${prefix}sound44
● ${prefix}sound45
● ${prefix}sound46
● ${prefix}sound47
● ${prefix}sound48
● ${prefix}sound49
● ${prefix}sound50
● ${prefix}sound51
● ${prefix}sound52
● ${prefix}sound53
● ${prefix}sound54
● ${prefix}sound55
● ${prefix}sound56
● ${prefix}sound57
● ${prefix}sound58
● ${prefix}sound59
● ${prefix}sound60
● ${prefix}sound61
● ${prefix}sound62
● ${prefix}sound63
● ${prefix}sound64
● ${prefix}sound65
● ${prefix}sound66
● ${prefix}sound67
● ${prefix}sound68
● ${prefix}sound69
● ${prefix}sound70
● ${prefix}sound71
● ${prefix}sound72
● ${prefix}sound73
● ${prefix}sound74
● ${prefix}sound75

 ❑ 𝗲𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨
● ${prefix}luxurygold
● ${prefix}watercolor
● ${prefix}multicolor3d
● ${prefix}wetglass
● ${prefix}galaxywallpaper
● ${prefix}lighttext
● ${prefix}beautifulflower
● ${prefix}puppycute
● ${prefix}royaltext
● ${prefix}heartshaped
● ${prefix}birthdaycake
● ${prefix}galaxystyle
● ${prefix}hologram3d
● ${prefix}greenneon
● ${prefix}glossychrome
● ${prefix}greenbush
● ${prefix}metallogo
● ${prefix}noeltext
● ${prefix}glittergold
● ${prefix}textcake
● ${prefix}starsnight
● ${prefix}wooden3d
● ${prefix}textbyname
● ${prefix}writegalaxy
● ${prefix}snow3d
● ${prefix}birthdayday
● ${prefix}goldplaybutton
● ${prefix}silverplaybutton
● ${prefix}freefire
● ${prefix}cartoongravity
● ${prefix}anonymhacker
● ${prefix}mlwall
● ${prefix}pubgmaskot
● ${prefix}aovwall
● ${prefix}logogaming
● ${prefix}fpslogo
● ${prefix}avatarlolnew
● ${prefix}lolbanner
● ${prefix}avatardota
● ${prefix}juventusshirt
● ${prefix}cutegravity
● ${prefix}realvintage
● ${prefix}codwarzone
● ${prefix}valorantbanner`
mnu2 =`*ᴄʀᴇᴀᴛᴇᴅ ʙʏ : ${ownerName}*\n*ᴀᴜᴛʜᴏʀ : ɪᴛsᴄʜᴀɴᴅʀᴀ ᴏғғɪᴄɪᴀʟ*`
but = [
{ buttonId: `${prefix}owner `, buttonText: { displayText: '️ᴏᴡɴᴇʀ 👤' }, type: 1 },
{ buttonId: `${prefix}infosc`, buttonText: { displayText: 'ɪɴғᴏ ʙᴏᴛ ⚙️' }, type: 1 },
{ buttonId: `${prefix}store`, buttonText: { displayText: 'sᴛᴏʀᴇ ᴍᴇɴᴜ 🛒' }, type: 1 }
]
sendButLocation(from, mnu, mnu2, thumb, but)
break

case "ttmp3":
if (isLimit(sender)) return
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_lnk = body.slice(7)
reply(mess.wait)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_audio?url=${ini_lnk}`)
ini = await getBuffer(anu.download)
await limitAdd(sender)
nana.sendMessage(from, ini, audio)
break

case 'attp':
if (args.length ==0)return reply('Textnya mana om?')
attp = body.slice(6)
reply(mess.wait)
tp = await getBuffer(`https://melcanz.com/attp?text=${attp}&apikey=${MelcanzApi}`)
nana.sendMessage(from, tp, sticker)
break

case 'pesan':
if (isLimit(sender)) return
if (!isGroup) return reply('GRUB ONLY')
if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}pesan @tagmember|halo kak`)
var FG = body.slice(8)
var F1 = FG.split("|")[0];
var F2 = FG.split("|")[1];
nana.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:mek})
reply('PESAN SUDAH TERKIRIM')
await limitAdd(sender)
break

case "tiktok":
ttg = fs.readFileSync('./storage/logo/TT.jpg')
if (args.length <1)return reply('Link nya mana kak?')
if (isLimit(sender))return
if (isBanned)return reply(mess.banned)
res_nya = body.slice(8)
reply(mess.wait)
tt1 =`𝘛𝘪𝘬𝘛𝘰𝘬 - 𝘵𝘳𝘦𝘯 𝘥𝘪𝘮𝘶𝘭𝘢𝘪 𝘥𝘪 𝘴𝘪𝘯𝘪. 𝘋𝘪 𝘱𝘦𝘳𝘢𝘯𝘨𝘬𝘢𝘵 𝘢𝘵𝘢𝘶 𝘥𝘪 𝘸𝘦𝘣, 𝘱𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘱𝘢𝘵 𝘮𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘯 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘫𝘶𝘵𝘢𝘢𝘯 𝘷𝘪𝘥𝘦𝘰 𝘴𝘪𝘯𝘨𝘬𝘢𝘵 𝘺𝘢𝘯𝘨 𝘥𝘪𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘴𝘢𝘴𝘪.`
tt2 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖬𝖾𝖽𝗂𝖺 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
but = [
{ buttonId: `${prefix}ttmp4 ${res_nya}`, buttonText: { displayText: '️𝑽𝑰𝑫𝑬𝑶 📽️' }, type: 1 },
{ buttonId: `${prefix}ttmp3 ${res_nya}`, buttonText: { displayText: '𝑴𝑼𝑺𝑰𝑲 🎵' }, type: 1 }
]
sendButLocation(from, tt1, tt2, ttg, but)
break

case 'limit':                
case 'ceklimit':     
checkLimit(sender)
break 

case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
        case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
        case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break

case 'oxo':                    
if (isLimit(sender)) return
			        await limitAdd(sender)		
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
case 'slot':  
         if (isLimit(sender)) return		    				    
slot = `===================\n` 
slot += `${slot11} | ${slot22} | ${slot33}\n`
slot += `${slot44} | ${slot55} | ${slot66} <====\n`
slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
slot += `===================\n`
nana.sendMessage(from, slot, text, {quoted: mek})
break				  
case 'info1':
reply(nyz.info1())
break
        case 'info2':
reply(nyz.info2())
break
case 'info3':
reply(nyz.info3())
break

      case 'cerpen':  

			       
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
      case 'tongue':  

			       
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
      case 'jadwalsholat':  

			       
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} makassar*`)  
                   reply(mess.wait)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
       case 'pantun':  

			       
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
                   reply(anu1)
                   break 
       case 'namaninja':  
                   
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nana*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
case 'nekopoi1':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break        


//━━━━━━━━━━━━━━━[ Dosa Menu  ]━━━━━━━━━━━━━━━━━//
       case 'fox':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'dog':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'cat':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'panda':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'panda1':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'bird':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
      case 'koala':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
       case 'meme':  
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nana.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: mek})
                   break
case 'ytmp3':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")

reply(mess.wait)
anu = await fetchJson(`https://melcanz.com/yt?url=${ini_link}&apikey=${MelcanzApi}`)

ini_txt =`Judul : ${anu.title}\n`
ini_txt +=`Author : ${anu.channel}`

thu = await getBuffer(anu.thumb)
nana.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })

res = await getBuffer(anu.audio[0].url)
nana.sendMessage(from, res, audio)
break
case 'ytmp4':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
reply(mess.wait)

anu = await fetchJson(`https://melcanz.com/yt?url=${ini_link}&apikey=${MelcanzApi}`)
ini_txt =`Judul : ${anu.title}\n`
ini_txt +=`Author : ${anu.channel}`

thu = await getBuffer(anu.thumb)
nana.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })

res = await getBuffer(anu.video[0].url)
nana.sendMessage(from, res, video)
break
 case 'indo1':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)		 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
	case 'indo2':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
	case 'indo3':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
	case 'indo4':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
	case 'indo5':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
 case 'indo6':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
 case 'indo7':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
  case 'indo8':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
  case 'indo9':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
  case 'indo10':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
  case 'indo11':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
  case 'indo12':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
   case 'indo13':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
	case 'indo14':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
   case 'indo15':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				    
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
   case 'indo16':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
	case 'indo17':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
    case 'indo18':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
	case 'indo19':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
	case 'indo20':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
	case 'indo21':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
	case 'indo22':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
	case 'indo23':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
	case 'indo24':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
	case 'indo25':  
                   if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)				 
				   qute = fs.readFileSync('./image/fake.jpg') 
				   nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
case 'gantengcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)                      	
                    N = `KE *JELEKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':              
      case 'pintarcek':        	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
      
       case 'pakboycek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':                      	  
                    
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 				   
case 'dosa1':				 
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break
case 'dosa2':
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 

nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
if (isBanned)return reply(mess.banned)	
                	if (!isPremium)return reply(mess.premier)
qute = fs.readFileSync('./image/fake.jpg') 
nana.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break
case 'store':
res = await nana.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 STORE MENU 」',
"description": `*CREATED BY ${creator}*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${time2}`,
    "rows": [ 
       {
           "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 💎",
           "rowId": `${prefix}ff`
           },
	       {
           "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘔𝘰𝘣𝘪𝘭𝘦 𝘓𝘦𝘨𝘦𝘯𝘥𝘴 💎",
           "rowId": `${prefix}ml`
           },
	       {
	        "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘏𝘢𝘨𝘰 💎",
           "rowId": `${prefix}hago`
           },
	       {
	       "title": "𝘜𝘊 𝘗𝘶𝘣𝘨 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
           "rowId": `${prefix}pubg`
           },
	       {
	       "title": "𝘗𝘰𝘪𝘯𝘵 𝘉𝘭𝘢𝘯𝘬 𝘗𝘉 𝘊𝘢𝘴𝘩 💸",
           "rowId": `${prefix}point`
           },
	       {
	       "title": "𝘊𝘢𝘭𝘭 𝘖𝘧 𝘋𝘶𝘵𝘺 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
           "rowId": `${prefix}codm`
           },
	       {
	       "title": "𝘏𝘪𝘨𝘨𝘴 𝘋𝘰𝘮𝘪𝘯𝘰 𝘐𝘴𝘭𝘢𝘯𝘥 💰",
           "rowId": `${prefix}chip`
           },
	       {
	       "title": "𝘎𝘢𝘳𝘦𝘯𝘢 𝘚𝘩𝘦𝘭𝘭 𝘐𝘯𝘥𝘰 💰",
           "rowId": `${prefix}garena`
           },
	       {
	       "title": "𝘗𝘢𝘺𝘮𝘦𝘯𝘵 𝘚𝘵𝘰𝘳𝘦 🤑",
           "rowId": `${prefix}pyment`
           },
	       {
	        "title": "𝘖𝘸𝘯𝘦𝘳 𝘉𝘰𝘵 👤",
           "rowId": `${prefix}owner`
           },
	       {
           "title": "𝘚𝘤𝘳𝘪𝘱𝘵 𝘉𝘰𝘵 ⚙️",
           "rowId": `${prefix}scbot`
           }
        ]
      }
    ]
  }
 }, {quoted: ftrol })
 nana.relayWAMessage(res)
 break
case 'ff':
case 'diamondff':
ffg = fs.readFileSync('./storage/logo/FF.png')
ff =`${(nyz.diamondFF())}`
ff2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, ff, ff2, ffg, but)
break
case 'pyment':
pyg = fs.readFileSync('./image/qris.jpg')
py =`${(nyz.paymentstore())}`
py2 =`Silahkan Pilih Payment Di Atas`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝙊𝙒𝙉𝙀𝙍' }, type: 1 }
]
sendButLocation(from, py, py2, pyg, but)
break
break
case 'hago':
case 'diamondhago':
hgg = fs.readFileSync('./storage/logo/HAGO.png')
hg =`${(nyz.hagostore())}`
hg2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, hg, hg2, hgg, but)
break
case 'pubg':
case 'ucpubg':
pbg = fs.readFileSync('./storage/logo/PUBG.png')
pb =`${(nyz.pubgstore())}`
pb2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, pb, pb2, pbg, but)
break
case 'codm':
case 'cpcodm':
cog = fs.readFileSync('./storage/logo/COD.png')
co =`${(nyz.codmstore())}`
co2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, co, co2, cog, but)
break
case 'point':
case 'pointblank':
pog = fs.readFileSync('./storage/logo/POINT.png')
po =`${(nyz.cbcashstore())}`
po2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, po, po2, pog, but)
break
case 'garena':
case 'garenashell':
gmg = fs.readFileSync('./storage/logo/GARENA.png')
gm =`${(nyz.garenashell())}`
gm2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, gm, gm2, gmg, but)
break
case 'ml':
case 'diamondml':
mlg = fs.readFileSync('./storage/logo/ML.png')
ml =`${(nyz.diamondML())}`
ml2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, ml, ml2, mlg, but)
break
case 'chip':
case 'higgsdomino':
chg = fs.readFileSync('./storage/logo/CHIP.png')
ch =`${(nyz.chipstore())}`
ch2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLocation(from, ch, ch2, chg, but)
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
nana.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'getstick':
case 'getsticker':
if (!isPremium)return reply(mess.premier)
gtstc = args.join(" ")
stc = fs.readFileSync(`./storage/sticker/${gtstc}.webp`)
nana.sendMessage(from, stc, sticker)
break
case 'getvid':
case 'getvideo':
if (!isPremium)return reply(mess.premier)
gtstc = args.join(" ")
stc = fs.readFileSync(`./storage/video/${gtstc}.mp4`)
nana.sendMessage(from, stc, video)
break
case 'getimg':
case 'getimage':
if (!isPremium)return reply(mess.premier)
gtstc = args.join(" ")
stc = fs.readFileSync(`./storage/image/${gtstc}.jpeg`)
nana.sendMessage(from, stc, image)
break
case 'getvn':
case 'getaudio':
if (!isPremium)return reply(mess.premier)
gtstc = args.join(" ")
stc = fs.readFileSync(`./storage/audio/${gtstc}.mp3`)
nana.sendMessage(from, stc, audio)
break
case 'randomdarkjok':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return 
reply(mess.wait)
nana.updatePresence(from, Presence.composing) 
data = fs.readFileSync('./lib/drak.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
darkjokes = await getBuffer(randKey.result)
await limitAdd(sender)  
nana.sendMessage(from, darkjokes, image, {quoted: mek, caption: 'GELAP📸😎', thumbnail: Buffer.alloc(0)})
break  		
case 'randomloli':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return
reply(mess.wait)
nana.updatePresence(from, Presence.composing) 
dataa = fs.readFileSync('./lib/loli.js');
jsonDataa = JSON.parse(dataa);
randIndexa = Math.floor(Math.random() * jsonDataa.length);
randKeya = jsonDataa[randIndexa];
darkjokeas = await getBuffer(randKeya.result)
await limitAdd(sender)  
nana.sendMessage(from, darkjokeas, image, {quoted: mek, caption: 'loli📸😎', thumbnail: Buffer.alloc(0)})
break  
case 'randomneko':
reply(mess.wait)
nana.updatePresence(from, Presence.composing) 
dta = fs.readFileSync('./lib/neko.js');
jsonDate = JSON.parse(dta);
rndm = Math.floor(Math.random() * jsonDate.length);
rndmm = jsonDate[rndm];
nekon = await getBuffer(rndmm.result)
nana.sendMessage(from, nekon, image, {quoted: mek, caption: 'NekoNime📸😎', thumbnail: Buffer.alloc(0)})
break  
case 'liststiker':
case 'liststicker':
case 'liststc':
case 'stikerlist':
case 'stickerlist':
case 'stclist':
case 'sticklist':
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption ${prefix}getsticker nama sticker_`
nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break
case 'videolist':
case 'vidlist':
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${videonye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption ${prefix}getvid nama video_`
nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
break
case 'listimage':
case 'imagelist':
case 'listimg':
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${imagenye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption ${prefix}getimage nama file_`
nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye }, thumbnail: Buffer.alloc(0)})
break
case 'listvn':
case 'vnlist':
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${audionye.length}*\n\n_Untuk mengambil VN silahkan reply pesan ini dengan caption ${prefix}getvn nama audio_`
nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
break				
case 'addsticker':
case 'addstick':  
if (!isPremium)return reply(mess.premier)
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = args.join(" ")
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await nana.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./storage/sticker/${svst}.webp`, delb)
fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
reply(`Sukses Menambahkan Sticker\nCek Dengan Cara ${prefix}liststicker`)
break
case 'addvn':  // Fix Bug By LexxyOFC
if (!isPremium)return reply(mess.premier)
if (!isQuotedAudio) return reply('Reply vnnya ngab!')
svst = args.join(" ")
if (!svst) return reply('Nama audionya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await nana.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./storage/audio/${svst}.mp3`, delb)
fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
reply(`Sukses Menambahkan VN\nCek Dengan Cara ${prefix}listvn`)
break
case 'addimg':
case 'addimage':  // Fix Bug By LexxyOFC
if (!isPremium)return reply(mess.premier)
if (!isQuotedImage) return reply('Reply imagenya ngab!')
svst = args.join(" ")
if (!svst) return reply('Nama imagenya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await nana.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./storage/image/${svst}.jpeg`, delb)
fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
reply(`Sukses Menambahkan Image\nCek Dengan Cara ${prefix}listimage`)
break
case 'addvideo':  // Fix Bug By LexxyOFC
if (!isPremium)return reply(mess.premier)
if (!isQuotedVideo) return reply('Reply videonya ngab!')
svst = args.join(" ")
if (!svst) return reply('Nama videonya apa kak?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await nana.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./storage/video/${svst}.mp4`, delb)
fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
reply(`Sukses Menambahkan Video\nCek Dengan Cara ${prefix}listvideo`)
break
case 'antilink':
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
					    antilinkgrup.push(from)
						fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						nana.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilinkgrup.splice(from, 1)
						fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antiyt':
	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntiyoutube) return reply('Anti link YouTube sudah aktif')
						antiyoutube.push(from)
						fs.writeFileSync('./data/antilinkyt.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						nana.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link YouTube anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiyoutube) return reply('Mode anti link group sudah disable')
						antiyoutube.splice(from, 1)
						fs.writeFileSync('./data/antilinkyt.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link YouTube di group ini ✔️')
					} else {
						sendButton(from, `MODE ANTILINK YT`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilinkyt 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilinkyt 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;        
case 'ssweb':  
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply (`Linknya Mana? *Contoh:*\n${prefix + command} https://google.com`)
bo = args.join(" ")
reply(mess.wait)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
buff = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${bo}&apikey=${HardiKey}`)
nana.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Kak SSweb Nya' })
break
case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await nana.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'infogempa':
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
nana.sendMessage(from, buffer, image, {quoted: mek, caption: aku})
break
case 'pinterest':
if(!q) return reply('gambar apa?')
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await nana.sendMessage(from,di,image,{quoted: mek})
break
case 'tes':
tes = fs.readFileSync('./vn.mp3')
reply('Dah Nyala Bang')
nana.sendMessage(from, tes, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'ban':
if (!isOwner) return reply(mess.only.owner)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
reply(`Nomor wa.me/${bnnd} telah dibanned !`)
break
case 'unban':
if (!isOwner) return reply(mess.only.owner)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
reply(`Nomor wa.me/${bnnd} telah di unban!`)
break
case 'addprem':
if (!isOwner) return reply(mess.only.owner)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./data/premium.json', JSON.stringify(prem))
reply(`Berhasil Menambahkan\nwa.me/${prmm}\nMenjadi user Premium !`)
break
case 'delprem':
if (!isOwner) return reply(mess.only.owner)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne55t`)
fs.writeFileSync('./data/premium.json', JSON.stringify(prem))
reply(`Berhasil Menghapus\nwa.me/${prmm}\nDari user Premium!`)
break
case 'hacked':
              if (!isOwner) return reply(mess.only.owner)
              if (!isBotGroupAdmins) return reply(mess.only.admin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://telegra.ph/file/ba8bfecf07407876323e4.jpg`)
                   nana.updateProfilePicture (from, tessgc)
                nana.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                nana.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
                nana.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
				break
case 'bcgc':
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nana.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nana.sendMessage(_.jid, media, image, {caption: `* BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`})
						}
						reply('*SUKSES BOSKU*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`)
						}
						reply('*SUKSES BOSKU*')
					}
					break
case 'bc2': 
					if (!isOwner) return reply(mess.only.owner) 
					if (args.length < 1) return reply('.......')
					anu = await nana.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nana.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nana.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
nana.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${botName} 」*\n\n${body.slice(4)}`,
			"footerText": '©𝚒𝚝𝚜𝚌𝚑𝚊𝚗𝚍𝚛𝚊𝙾𝙲𝙵',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc': 
					if (!isOwner) return reply(mess.only.owner) 
					if (args.length < 1) return reply('.......')
					anu = await nana.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await nana.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nana.sendMessage(_.jid, buffer, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ${botName} 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	nana.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'mediafire':
if (isBanned)return reply(mess.banned)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `━━━● *MEDIAFIRE* ●━━━

*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
  case 'ytdl':
  case 'ytplay':{
              if (!isPremium)return reply(mess.premier)
		            if (isBanned)return reply(mess.banned)
		            if (isLimit(sender)) return
                   await limitAdd(sender)  
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `*─ 「 YOUTUBE 」─*

*◯ Judul :* ${res.all[0].title}
*◯ Diupload :* ${res.all[0].ago}
*◯ Penonton :* ${res.all[0].views}
*◯ Durasi :* ${res.all[0].timestamp}
*◯ LINK :* ${res.all[0].url}
*◯ Deskripsi :* 
${res.all[0].description}`
 const gambra = (await nana.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
const buttonsssok = [
  {buttonId:`${prefix}mp4 ${res.all[0].url}`,buttonText:{displayText:'VIDEO '},type:1},
  {buttonId:`${prefix}mp3 ${res.all[0].url}`,buttonText:{displayText:'AUDIO'},type:1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini`,
  headerType: 4,
  imageMessage: gambra
  }
  nana.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted: mek})
  }
  break 
case 'instagram':
case 'igdl':
case 'igvideo':
if (isBanned)return reply(mess.banned)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Linknya Error :v')
        if (!q) return reply('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    nana.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    nana.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
case 'setppbot':
if (!isOwner)return reply(mess.only.owner)
nana.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await nana.downloadAndSaveMediaMessage(enmedia)
await nana.updateProfilePicture(botNumber, media)
reply('Makasih profil barunya😗')
break
case 'asupan':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
buffer = await getBuffer (`https://app-botpri.herokuapp.com/api/asupan?apikey=Fxc7`)
nana.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'bocil':
case 'santuy':
case 'rikagusriani':
case 'ghea':
case 'ukty':
if (isBanned)return reply(mess.banned)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
nana.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'futanari':
if (isBanned)return reply(mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dapuhy.xyz/api/nsfw/nsfwfutanari?apikey=B0ZTfKR00k`)
                const bba = await nana.prepareMessage(from, buffer, MessageType.image)

            const buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMerssages = {

            contentText: `_© By Lexxy Official_`,

            buttons: buttons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bba.message.imageMessage

            }

            await nana.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted : mek})
                break 
    case 'anal':
if (isBanned)return reply(mess.banned)    
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          aku = (`https://hardianto.xyz/api/anime/random?nsfw=anal&apikey=hardianto`)
          kon = await getBuffer(aku)
          pll = `_© By Lexxy Official_`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}anal`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break       
case 'hentai':
case 'ahegao':
case 'ass':
case 'blowjob':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result)
const sa = await nana.prepareMessage(from, buffer, MessageType.image)

            const butons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMessages = {

            contentText: `_© By Lexxy Official_`,

            buttons: butons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: sa.message.imageMessage

            }

            await nana.sendMessage(from, ButonsMessages, MessageType.buttonsMessage, {quoted : mek})
                break 
                case 'nekoh':
                if (isBanned)return reply(mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await nana.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButtonMessages = {

            contentText: `_© 𝙱𝚢 𝚒𝚝𝚜𝚌𝚑𝚊𝚗𝚍𝚛𝚊_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await nana.sendMessage(from, ButtonMessages, MessageType.buttonsMessage, {quoted : mek})
                break
case 'rules':
teks = `*Syarat & Ketentuan ${botName}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
reply(teks)
break
case 'donasi':
case 'donate':
wew = fs.readFileSync(`./image/qris.jpg`)
tres = `${(nyz.donasi())}`
nana.sendMessage(from, wew, image, { quoted: mek, caption: tres })
break
//NEW CASE BY LEXXY
case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						nana.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						nana.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						nana.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						nana.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
		case 'del':
		case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			nana.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
case 'hidetag':              
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await nana.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					nana.sendMessage(from, options, text)
					break
case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'headsot':
				case 'hedsot':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nana.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						nana.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nana.groupRemove(from, mentioned)
						}
					break
              case 'setpp': 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					media = await nana.downloadAndSaveMediaMessage(mek)
					await nana.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nana.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${mentioned[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nana.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nana.groupRemove(from, mentioned)
					}
					break
case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'fitnah':
		if (isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					nana.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'jadian':
				if (!isGroup) return reply(mess.only.group)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
case 'rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					nana.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
           case 'hobby':
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					nana.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await nana.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
if (!isBotGroupAdmins) return reply("Bot not admin");
if (!isGroup) return;
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
nana.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        nana.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
case "ttmp4":
if (args.length <1)return reply('Link nya mana?')
if (isLimit(sender))return
link = body.slice(7)
reply(mess.wait)
anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/download/tiktok?apikey=${Fxc7Api}&url=${link}`)
ini = anu.result
hsil = await getBuffer(ini.nowatermark)
await limitAdd(sender)
nana.sendMessage(from, hsil, video)
break
                   case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'ganteng':
               	   case 'cantik':
               	   if (isBanned)return reply(mess.banned)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah\n@${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return nana.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST FITUR]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					nana.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: mek})
					nana.sendMessage('6285789004732@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
					break
//PEMBATASAN
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (isBanned)return reply(mess.banned)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy`)
textt = args.join(" ")
reply(mess.wait)
hsel = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolKey}&text=${textt}`)
nana.sendMessage(from, hsel, image, {quoted: mek, caption: '𝙽𝚒𝚑 𝚔𝚊𝚔, 𝚓𝚗𝚐𝚊𝚗 𝚕𝚞𝚙𝚊 𝚏𝚘𝚕𝚕𝚘𝚠 @𝚒𝚝𝚜𝚌𝚑𝚊𝚗𝚍𝚛𝚊_28' })
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
if (isBanned)return reply(mess.banned)
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
nana.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
if (isBanned)return reply(mess.banned)
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
nana.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'quotes':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
qut = await fetchJson(`https://api.zeks.me/api/quote?apikey=${ZeksApi}`)
res = qut.result
txtt =`Author: ${res.author}\nQuotes: ${res.quotes}`
reply(txtt)
break
case 'primbonjodoh':
if (isBanned)return reply(mess.banned)
if (args.length ==0) return reply(`Nama Nya Mana?\nContoh ${prefix + command} Lexxy Dinda`)
nm1 = args(0)
nm2 = args(1)
anu = await fetchJson(`https://api.zeks.me/api/primbonjodoh?apikey=${ZeksApi}&nama1=${nm1}&nama2=${nm2}`)
get = anu.result
ini_txt =`Nama1: ${get.nama1}\n`
ini_txt +=`Nama2: ${get.nama2}\n`
ini_txt +=`Positif: ${get.positif}\n`
ini_txt +=`Negatif: ${get.negatif}`
buff = await getBuffer(get.thumb)
nana.sendMessage(from, buff, image, {quoted: mek, caption: ini_txt })
break
case 'simi':
case 'simih':
bo = args.join(" ")
sim = await fetchJson(`https://leyscoders-api.herokuapp.com/api/simi?kata=${bo}&apikey=${LeysApi}`)
reply(sim.simi)
break
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned)return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana bang?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
nana.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
if (isBanned)return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
mkr = await getBuffer(`https://api.zeks.me/api/${command}?text=${txtt}&apikey=${ZeksApi}`)
nana.sendMessage(from, mkr, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
case 'lithgtext':
case 'crismes':
case 'tfire':
if (isBanned)return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Bang?')
txtt = args.join (" ")
reply(mess.wait)
mk = await getBuffer(`https://api.zeks.me/api/${command}?text=${txtt}&apikey=${ZeksApi}`)
nana.sendMessage(from, mk, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
case 'girlneko':
case 'sadboy':
case 'kaneki':
case 'rem':
if (isBanned)return reply(mess.banned)
if (args.length ==0) return reply(`Text Nya Mana Kak?\ncontoh:\n ${prefix + command} Lexxy OFC`)
text1 = args[0]
text2 = args[1]
reply(mess.wait)
log = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${text1}&text2=${text2}&apikey=${ZiyApi}`)
nana.sendMessage(from, log, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break
case 'artinama':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
b = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/artinama?apikey=${ZeksApi}&nama=${b}`)
bu =`${anu.result}`
reply(bu)
break
case 'artimimpi':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
q = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/artimimpi?apikey=${ZeksApi}&q=${q}`)
get = anu.result
ini_txt =`String: ${get.string}\nArray: ${get.array}`
reply(ini_txt)
break
case 'nuliskanan':
case 'nuliskiri':
case 'foliokiri':
case 'foliokanan':
if (isBanned)return reply(mess.banned)
if (args.length ==0)return reply('Text nya?')
bu = args.join(" ")
buff = await getBuffer(`https://hardianto.xyz/api/${command}?text=${text}&apikey=${HardiKey}`)
nana.sendMessage(from, buff, image, {quoted: mek, caption: 'Nih Bro Hasilnya' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (isBanned)return reply(mess.banned)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
hsil = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${ZeksApi}&text1=${txt1}&text2=${txt2}`)
nana.sendMessage(from, hsil, image, {quoted: mek, caption: 'Nih Kak Logonya' })
break
case 'hilih':
case 'heleh':
case 'holoh':
case 'halah':
case 'huluh':
if (isBanned)return reply(mess.banned)
if (args.length ==0)return reply(`Teks Nya Mana Kak?\nContohnya :\n${prefix + command} aku ganteng banget`)
ini_txt = args.join(" ")
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/${command}?kata=${ini_txt}`)
ini_res = anu.teks
txttt =`Before: ${ini_res.before}\nAfter: ${ini_res.after}`
reply(txttt)
break
case 'truth':
if (isBanned)return reply(mess.banned)
td = fs.readFileSync('./image/truth.jpg')
reply(mess.wait)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`)
but = [
{ buttonId: `${prefix}truth`, buttonText: { displayText: '️</ɴᴇxᴛ' }, type: 1 }
]
td1 =`${anu.truth}`
td2 =`Created By Itschandra Official`
sendButLocation(from, td1, td2, td, but)
break
case 'dare':
if (isBanned)return reply(mess.banned)
reply(mess.wait)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`)
but = [
{ buttonId: `${prefix}dare`, buttonText: { displayText: '️</ɴᴇxᴛ' }, type: 1 }
]
dr1 =`${anu.dare}`
dr2 =`Created By Lexxy Official`
sendButLocation(from, dr1, dr2, td, but)
break
case 'neko':
case 'waifu':
case 'husbu':
case 'loli':
case 'milf':
case 'cosplay':
case 'megumi':
case 'bully':
case 'shinobu':
if (isLimit(sender)) return
await limitAdd(sender)
reply(mess.wait)
hsil = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/${command}`)
nana.sendMessage(from, hsil, image, { quoted: mek, caption: 'Lari Ada Wibu :v' })
break
case 'play':
if (isLimit(sender)) return
await limitAdd(sender)  
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksApi}&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isLimit(sender)) return
await limitAdd(sender)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${ZeksApi}&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
nana.sendMessage(from, mp4, video)
break
case 'mp3':
if (isLimit(sender)) return
await limitAdd(sender)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksApi}&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
nana.sendMessage(from, mp3, audio)
break
case 'nickepep':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return
await limitAdd(sender)
reply(mess.wait)
ff = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=${ZeksApi}`)
res =`${ff.result}`
reply(res)
break
case 'memeindo':
case 'darkjokes':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return
await limitAdd(sender)
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.me/api/${command}?apikey=${ZeksApi}`)
ini_txt =`Random ${command}`
buff = await getBuffer(anu.result)
nana.sendMessage(from, buff, image, {quoted: mek, caption: ini_txt })
break
case 'estetic':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return
await limitAdd(sender)
reply(mess.wait)
buff = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=${ZeksApi}`)
nana.sendMessage(from, buff, image, {quoted: mek, caption: 'Estetic' })
break
case 'megumin':
if (isBanned)return reply(mess.banned)
if (isLimit(sender)) return
await limitAdd(sender)
reply(mess.wait)
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/randomImage/img/megumin`)
nana.sendMessage(from, buff, image, {quoted: mek, caption: 'Lamri Ada Wibu :v' })
break
case 'scbot':
txt =`*Mau Beli Sc Bot? Chat*
Wa.me/6281262163214
Wa.me/6281262163214
*Harga? Murah Kok*`
reply(txt)
break
case 'qris':
qr = fs.readFileSync('./image/qris.jpg')
nana.sendMessage(from, qr, image, { quoted: mek, caption: '*SCAN - ISI NOMINAL - TF*' })
break
case 'infosc':
case 'infobot':
tzy = fs.readFileSync('./storage/logo/CT.jpg')
nf =`━➤ 「 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑 」
✍️ 𝙈𝙖𝙙𝙚 𝙞𝙣 𝘽𝙮 𝙄𝙩𝙨𝙘𝙝𝙖𝙣𝙙𝙧𝙖 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡
🌟 𝙎𝙘𝙧𝙞𝙥𝙩 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : 10.0
📈 𝙇𝙖𝙨𝙩 𝙐𝙥𝙙𝙖𝙩𝙚 : 1.0
📃 𝙇𝙞𝙣𝙠 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 : https://instagram.com/itschandra_28

📦 𝙂𝙧𝙤𝙪𝙥 1 :

📦 𝙂𝙧𝙤𝙪𝙥 2 :

🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
https://fb.me/dit321

𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝑭𝒐𝒓 𝑵𝒆𝒘 𝑼𝒑𝒅𝒂𝒕𝒆!`
nf2 =`*ᴄʀᴇᴀᴛᴇᴅ ʙʏ : ${ownerName}*\n*ᴀᴜᴛʜᴏʀ : ɪᴛsᴄʜᴀɴᴅʀᴀ ᴏғғɪᴄɪᴀʟ*`
but = [
{ buttonId: `${prefix}owner `, buttonText: { displayText: '️ᴏᴡɴᴇʀ' }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 }
]
sendButLocation(from, nf, nf2, tzy, but)
break
 case 'sticker':
 case 's':
if (isLimit(sender)) return
if (isBanned)return reply(mess.banned)
 reply(mess.wait)
 await limitAdd(sender)  
 
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await nana.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            nana.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await nana.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            nana.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
                   
            break

case 'owner':
case 'creator':
sendKontak(from, `${owner}`, `${ownerName}`)
sendKontak(from, `6281262163214`, `Developer Bot`)
reply('Tuh Owner Ku Kak Jangan Lupa Save Dia Lagi Butuh Kontak')
break
case 'kirkon':
if (args.length ==0)return reply(`Nomor Nya Mana? *Contoh*\n${prefix + command} 62857×××××`)
kir = args.join(" ")
sendKontak(from, `${kir}`, `KirimKontak🐦`)
break
//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:

			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return nana.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
