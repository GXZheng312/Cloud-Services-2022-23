const amqp = require('amqplib');
const uri  = 'amqp://localhost:5672';

const consume = async ()=>{
    try { 
        const connection = await amqp.connect(uri);;
        channel = await connection.createChannel();
        
        //code voor assert queue
        //code voor bindQueue
        //code voor de consume, dus dit:
        //await channel.consume("bla", eenBericht =>{
            
            //Hier een check wat de opdracht in de message inhoud en wat er mee moet gebeuren.
            //Bedenk of je bij het uitlezen van de payload dat hier moet doen of dat het beter 
            //is om daar een aparte module/class voor aan te maken
            //dto.storeMessage(msg);
            
            channel.ack(message); // Met de 'ack' (acknowledge) geeft je aan dat de consumer het bericht succesvol heeft ontvangen
                                  // Nu weet Rabbit dat ie het bericht op de queue niet meer hoeft te sturen.
        //}); 

    } catch (error) {
        console.log (`error is: ${error}`);
    }
}

module.exports.consume = consume;