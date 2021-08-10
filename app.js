const app = Vue.createApp({
  data() {
    return {
      question: '',
      timer: '',
      q:[],
      t:[]
    };
  },
  methods: {
    addgoal()
    {
      this.q.push(this.question);
      this.t.push(this.timer);
      console.log(" q length" + this.q.length);
      console.log(" t length" + this.t.length);
      //this.start();
    },
    start() {
     
      for( let i=0; i< this.q.length; i++)
      {
       // console.log("timer"+this.q[i]);
        for(let j=0;j<this.q[i];j++)
        {
          setTimeout(() => {
                this.play(),
                console.log("start");
              //console.log(j);
              //console.log("timer"+this.t[i]);
              //console.log("question"+this.q[i]);
              //}, j * this.t[i] *60* 1000);
            }, j*this.t[i]*60*1000);
              
        }

      }
    },
    play() {
      this.$refs.audioElm.play();
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
    },
  },
});

app.mount('#user-goals');
