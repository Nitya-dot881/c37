class PLAYER
{
    constructor()
    {}
    getCount()
    { 
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",(data)=>{playerCount=data.val()})

     }
     updateCount(Count)
     { 
         database.ref('/').update({playerCount:Count})
         
         
         
     }
}