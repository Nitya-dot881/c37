class GAME
{
    constructor(){}
    
    getState()
    {
       var gameStateRef=database.ref('gameState')

       gameStateRef.on("value",function(data){
           gameState=data.val() }  )
    }

    update(state)
    {
      database.ref('/').update({gameState:state}) 
    }

   async start()
    {
        if(gameState===0)
        {
            player=new PLAYER()
            var playerCountref=await database.ref('playerCount').once("value")
            if(playerCountref.exists())
            {
                 playerCount=playerCountref.val()
                 player.getCount()
            }
            form=new FORM ()
            form.display()
            
        }
    }
    play()
    {
       form.hide()
       textSize(20)
       text("gameStarted",120,100)
    }

}
