import {db} from '../firebase/firebase';

export default class FirebaseService {

    constructor(){

    }

CRIAR TODOS OS METODOS NECESSARIOS PARA O FIREBASE    
    getEmpresas() {

        return db.collection("empresas").get();
    }

    getEmpresasDocs(docId) {

        console.log('getEmpresasDocs', docId);

        this.teste02();  
    }

    teste02(){

        var songs = []    
        db.collection("empresas").doc("datamob").collection("quadros")
        //db.collection("empresas").doc("datamob").collection("quadros")
      //.where('songs.aNameOfASong', '==', true)
      .get()
      .then(function(querySnapshot) {
        var songLength = querySnapshot.size
        var i=0;

        console.log('querySnapshot', querySnapshot);

        querySnapshot.forEach(function(doc) {
           songs.push(doc.data())
           i ++;
           if(songLength===i){
                console.log('songs', songs);
           }
          console.log(doc.id, " => ", doc.data());
        });

       })
       .catch(function(error) {
         console.log("Error getting documents: ", error);
        });
    }

    teste01(){
        var docRef = db.collection("empresas").doc("datamob").collection("quadros");

        // Valid options for source are 'server', 'cache', or
        // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
        // for more information.
        var getOptions = {
            source: 'cache'
        };
        
        // Get a document, forcing the SDK to fetch from the offline cache.
        docRef.get().then(function(doc) {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            console.log("Cached document data:", doc);
        }).catch(function(error) {
            console.log("Error getting cached document:", error);
        });

    }

}