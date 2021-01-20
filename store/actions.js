import { firebaseAuth } from '../src/firebase'

export const signIn = async ({commit}, user) => {
            
    try{
        const userData = await firebaseAuth.signInWithEmailAndPassword(
            user.email, 
            user.password
        )
        commit('userStatus', userData.user)
    }
    catch(error){
        const errorCode = error.code
        const errorMessage = error.errorMessage

        if(errorCode === 'auth/wrong-password'){
            alert('wrong password')
        }else{
            alert(errorMessage)
        }
    }

} 
export const signOut = async ({commit}) => {
    try{
        await firebaseAuth.signOut(); 

        commit('userStatus', null)
    }
    catch(error){
        alert(`Error signing out, ${error}`);
    }
}