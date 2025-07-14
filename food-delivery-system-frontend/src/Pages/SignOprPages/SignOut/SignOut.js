class ClientServices{
    signOut(){
        localStorage.removeItem('userData');
        window.location.href = '/LogIn';
    }
    
}
export default new ClientServices();