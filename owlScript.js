var owlapp = new Vue({
  el: '#owlapp',
  data: {
    current: '',
    images: [
      './photos/Uprising.png',
      './photos/Fuel.png',
      './photos/Mayhem.png',
      './photos/Outlaws.png',
      './photos/Spitfire.png',
      './photos/Gladiators.png',
      './photos/Valiant.png',
      './photos/Excelsior.png',
      './photos/Fusion.png',
      './photos/Shock.png',
      './photos/Dynasty.png',
      './photos/Dragons.png'
    ],
    links: [
      "https://uprising.overwatchleague.com/home",
      "https://fuel.overwatchleague.com/en-us",
      "https://mayhem.overwatchleague.com/en-us",
      "https://outlaws.overwatchleague.com/en-us",
      "https://spitfire.overwatchleague.com/en-us",
      "https://gladiators.overwatchleague.com/en-us",
      "https://valiant.overwatchleague.com/en-us",
      "https://excelsior.overwatchleague.com/en-us",
      "https://fusion.overwatchleague.com/en-us",
      "https://shock.overwatchleague.com/en-us",
      "https://dynasty.overwatchleague.com/en-us",
      "https://overwatchleague.com/en-us/"
    ]
  },
  created: function(){
    this.mystart();
  },
  methods: {
    mystart: function(){
      this.current = 0;
    },
    previousTeam: function(){
      if(this.current == 0){
        this.current = 11;
      }else{
        this.current = this.current - 1;
      }
    },
    nextTeam: function(){
      this.current = ((this.current + 1) % 12);

    }
  }
});
