package common;
import java.util.*;
class Member{
    //fields
    private String id;
    private String pw;
    private String name;
    //constructors
    public Member(String id, String pw, String name){
        this.id = id;
        this.pw = pw;
        this.name = name;
    }
    //getters, setters
    public String getId(){
        return id;
    }
    public String getPw(){
        return pw;
    }
    public String getName(){
        return name;
    }
    public void setId(String id){
        this.id = id;
    }
    public void setPw(String pw){
        this.pw = pw;
    }
    public void setName(String name){
        this.name = name;
    }
    public void toString(){
        
    }
}

public class Morning1021{
    public static void main(String[] args) {
        for(String str:args){
            System.out.println(str);
        }
        List<Member> members = new ArrayList<>();
        members.add(new Member("user1","1234","Kwak"));
        members.add(new Member("user2","1234","Seung"));
        members.add(new Member("user3","1234","Ho"));

        // System.out.println(Morning1021.class);

        for(int i = 0; i < members.size(); i++){
            if(members.get(i).getId().equals(args[0])&&members.get(i).getPw().equals(args[1])){
                System.out.println("Welcome " + members.get(i).getName());
            }
        }
    }
}