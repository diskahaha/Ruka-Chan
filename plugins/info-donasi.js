import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)}
Gua Ga Butuh Pulsa Bwang Serius , Gua Cuma Butuh Dia :)`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/π­ππ β’ Andii ΰΌ’ΰΏΰΎ', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
