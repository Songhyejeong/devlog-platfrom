import { collection , addDoc} from "firebase/firestore"
import { appFireStore, timestamp } from "../firebase/config";

const initState = {
    document : null,
    isPending : false,
    error : null,
    success : false
}



export const useFirestore = (transaction) => {
    //const [response] = initState;
    const colRef = collection(appFireStore, transaction);
    const addDocument = async (doc) =>{
        try {
            const createdTime = timestamp.fromDate(new Date())
                const docRef = await addDoc(colRef, {...doc, createdTime});
                console.log(docRef);
        }
        catch (error){
            console.log(error);
        }
    }
    const deleteDocument = (id) =>{

    }
    return {addDocument, deleteDocument }
}