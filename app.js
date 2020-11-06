let pron = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net', '.io', '.us']

for (let indexAdj = 0; indexAdj < adj.length; indexAdj++){
    for (let indexPron = 0; indexPron < pron.length; indexPron++){
        for (indexNoun = 0; indexNoun < noun.length; indexNoun++){
            for (indexExt =0; indexExt < ext.length; indexExt++){
            let domain = pron[indexPron]+adj[indexAdj]+noun[indexNoun]+ext[indexExt];
            console.log(domain);    
            }
        }
    }
} 
