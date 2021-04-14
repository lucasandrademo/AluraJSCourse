export class system{
    static login(authenticable, password){
        if(system.ehEuthenticable(authenticable)){
            return authenticable.legalize(password);
        }
        return false;
    }

    static ehEuthenticable(authenticable){
        return "legalize" in authenticable &&
            authenticable.legalize instanceof Function;
    }
}