const EventEmitter=require('events') //common practice to EventEmiiter
const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log(`Data received `)
})
customEmitter.emit('response')