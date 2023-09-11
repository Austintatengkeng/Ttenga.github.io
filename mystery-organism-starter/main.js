// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    _specimenNum : num,
    _dna : arr,
    mutate(){
      let index = Math.floor(Math.random() * 15); 
      const dnaBases = ['A', 'T', 'C', 'G'].filter(dna => dna !== this._dna[index]); 
      this._dna[index] = dnaBases[Math.floor(Math.random() * 3)];
      return this._dna;
    },
    compareDNA(obj){
      let commonDna = 1/15;
      let count = 0;
      for(i = 0 ; i < 15; i++){
        if(this._dna[i] === obj._dna[i]){
          count++;
        }
      }
      commonDna *= count * 100;

      console.log(`specimen #${this._specimenNum} and specimen #${obj._specimenNum} have ${commonDna}% DNA in common.`);
    },
    willLikelySurvive(){
      let count = 0;
      this._dna.forEach(element => { 
        if(element === 'C' || element === 'G'){
          count++
        }
      });
      if(count >= 9){
        return true;
      } else{
        return false;
      }
    }
  }
}
let pAequor = [];
let index = 0;
while(index < 30){
  pAequor.push(pAequorFactory(index+1, mockUpStrand()));
  if(pAequor[index].willLikelySurvive === false){
    pAequor.pop()
    continue;
  }
  index++;
}

console.log(pAequor.length)






