package common;
class Person{
    private String name;
    private int age;
    String[] hobbies = new String[5];
    String[] pets = new String[5];

    public void setName(String name){
        this.name = name;
    }
    public void setAge(int age){
        this.age = age;
    }
    public String getName(){
        return name;
    }
    public int getAge(){
        return age;
    }
    public void addHobby(String hobby){
        for(int i = 0; i<hobbies.length; i++){
            if(hobbies[i]==null){
                hobbies[i]=hobby;
                break;
            }else if(hobbies[hobbies.length-1]!=null){
                System.out.println("hobby is full");
            }
        }
    }
    //reading sleeping cycling eating
    public String getHobbies(){
        String hobby = "";
        for(String hob : hobbies){
            if(hob!=null){
                hobby += hob+" ";
            }else{
                break;
            }
        }
        return hobby;
    }
    public void addPet(String hobby){
        for(int i = 0; i<pets.length; i++){
            if(pets[i]==null){
                pets[i]=hobby;
                break;
            }else if(pets[hobbies.length-1]!=null){
                System.out.println("pet is full");
            }
        }
    }
    public String getPets(){
        String pet = "";
        for(String p : pets){
            if(p!=null){
                pet += (p+" ");
            }else{
                break;
            }
        }
        return pet;
    }
}
public class Morning1023{
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.setName("Kwak");
        p1.setAge(31);
        p1.addHobby("game");
        p1.addHobby("sleep");
        p1.addPet("Dog");
        p1.addPet("Cat");

        System.out.println("Name : " + p1.getName() + "\nAge : "+ p1.getAge() + "\nHobby : " + p1.getHobbies()+ "\nPet : "+p1.getPets());
    }

}