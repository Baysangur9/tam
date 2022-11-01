const tamogotchi = {
    name: 'Jamic',
    meal: 1,
    energy: 2,
    mood: 4,
    
    getStatus : function(){

        let meal2 = this.meal
        let energy2 = this.energy
        let mood2 = this.mood
        
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            return console.log(`${this.name} Умер =( `);
        }
         
         this.meal < 3 ? this.meal = `Я голоден (${meal2})` : this.meal = 'Я не голоден'
         this.energy < 3 ? this.energy = `Я хочу спать(${energy2})` : this.energy = 'Я не хочу спать"'
         this.mood < 3 ? this.mood =  `Мне скучно(${mood2})` : this.mood = 'Мне весело'

         

        
        console.log(`Имя:${this.name} Еда:${this.meal} Энергия:${this.energy} Настроение:${this.mood}`)
          


    },

    setName: function(par){
       return this.name = par
    },

    eat: function () {
        if (this.meal < 5) {
          this.meal++;
        }
        this.mood--;
      },
    
      sleep: function () {
        if (this.energy < 5) {
          this.energy++;
        }
        this.meal--;
      },
    
      play: function () {
        if (this.mood < 5) {
          this.mood++;
        }
        this.energy--;
      },

}

tamogotchi.getStatus()
 



  
  
  
  
  