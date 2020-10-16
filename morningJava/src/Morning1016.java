public class Morning1016{
    public static void main(String[] args){
        System.out.println("Java Sample");
        
        int[][] regAry = new int[5][5];
        int cnt = 0;
        int cnt2;

        for(int i = 0 ; i<5; i++){
            cnt++;
            cnt2 = cnt;  
            for(int j =0; j<5; j++){                
                regAry[i][j] = cnt2;
                cnt2+=5;
                System.out.printf("%3d",regAry[i][j]);
            }
            System.out.println("");
        }

        
    }
}